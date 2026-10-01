/*
 * Extract the compile-time Relics/Reliquified Artifacts template facts that
 * can be read from decompiled 1.21.1 classes. This is an investigation helper;
 * its output belongs in the ignored reports directory, not in the public site
 * unless it has been reviewed for player-facing wording.
 */
const fs = require("node:fs");
const path = require("node:path");

const [root, output] = process.argv.slice(2);
if (!root) {
  throw new Error("usage: node extract-relic-templates.js <investigation-root> [output.json]");
}

const snakeCase = (value) => value
  .replace(/Item$/, "")
  .replace(/([a-z0-9])([A-Z])/g, "$1_$2")
  .replace(/([A-Z])([A-Z][a-z])/g, "$1_$2")
  .toLowerCase();

const filesUnder = (directory) => {
  const result = [];
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) result.push(...filesUnder(fullPath));
    else if (entry.isFile() && entry.name.endsWith(".java")) result.push(fullPath);
  }
  return result;
};

const captureNumber = (text, expression) => {
  const match = text.match(expression);
  return match ? Number(match[1]) : null;
};

// These are the defaults in Relics' AbilityTemplateBuilder for 0.12.8.
// Omitting them from the report would make an otherwise explicit template
// look incomplete and would under-count the actual level budget.
const ABILITY_DEFAULTS = {
  requiredPoints: 1,
  initialMaxLevel: 10,
  maxLevelRankModifier: 0.25,
};

const withDefault = (value, key) => value ?? ABILITY_DEFAULTS[key];

const extractAbilities = (templateText) => {
  const starts = [...templateText.matchAll(/\.ability\(AbilityTemplate\.builder\((?:\(String\))?\s*["']([^"']+)["']\)/g)];
  return starts.map((match, index) => {
    const start = match.index;
    const end = index + 1 < starts.length ? starts[index + 1].index : templateText.length;
    const segment = templateText.slice(start, end);
    const researchBody = segment.match(/\.research\(ResearchTemplate\.builder\(([\s\S]*?)\.build\(\)\)/)?.[1] ?? "";
    return {
      id: match[1],
      requiredPoints: withDefault(captureNumber(segment, /\.requiredPoints\((\d+)\)/), "requiredPoints"),
      initialMaxLevel: withDefault(captureNumber(segment, /\.initialMaxLevel\((\d+)\)/), "initialMaxLevel"),
      maxLevelRankModifier: withDefault(captureNumber(segment, /\.maxLevelRankModifier\(([-+\d.eE]+)\)/), "maxLevelRankModifier"),
      rankModifiers: [...segment.matchAll(/\.rankModifier\((\d+),\s*["']([^"']+)["']\)/g)]
        .map((entry) => ({ rank: Number(entry[1]), id: entry[2] })),
      modes: [...segment.matchAll(/\.modes\(([^)]*)\)/g)].flatMap((entry) =>
        [...entry[1].matchAll(/["']([^"']+)["']/g)].map((mode) => mode[1]),
      ),
      stats: [...segment.matchAll(/\.stat\(AbilityStatTemplate\.builder\((?:\(String\))?\s*["']([^"']+)["']([\s\S]*?)\.build\(\)\)/g)]
        .map((entry) => ({
          id: entry[1],
          initialValue: [...entry[2].matchAll(/\.initialValue\(([-+\d.eE]+),\s*([-+\d.eE]+)\)/g)]
            .map((value) => [Number(value[1]), Number(value[2])])[0] ?? null,
          targetValue: captureNumber(entry[2], /\.targetValue\([^,]+,\s*([-+\d.eE]+)\)/),
        })),
      experienceSources: [...segment.matchAll(/\.source\(ExperienceSourceTemplate\.builder\((?:\(String\))?\s*["']([^"']+)["']/g)]
        .map((entry) => entry[1]),
      researchStars: researchBody.match(/\.star\(/g)?.length ?? 0,
      researchLinks: researchBody.match(/\.link\(/g)?.length ?? 0,
    };
  });
};

const extractGroup = (name, namespace) => {
  const directory = path.join(root, name);
  const records = {};
  for (const file of filesUnder(directory)) {
    const source = fs.readFileSync(file, "utf8");
    const method = source.match(/constructDefaultRelicTemplate\(\)[\s\S]*?\n\s*}\n/);
    if (!method) continue;
    const className = source.match(/class\s+(\w+)/)?.[1];
    if (!className) continue;
    const id = snakeCase(className);
    const template = method[0];
    records[`${namespace}:${id}`] = {
      className,
      file: path.relative(directory, file).replaceAll(path.sep, "/"),
      leveling: {
        initialCost: captureNumber(template, /\.leveling\(LevelingTemplate\.builder\(\)\.initialCost\(([-+\d.eE]+)\)/),
        step: captureNumber(template, /\.leveling\(LevelingTemplate\.builder\(\)[\s\S]*?\.step\(([-+\d.eE]+)\)/),
        maxRank: captureNumber(template, /\.maxRank\((\d+)\)/) ?? 5,
      },
      abilities: extractAbilities(template),
    };
    records[`${namespace}:${id}`].maxLevel = records[`${namespace}:${id}`].abilities
      .reduce((sum, ability) => sum + ability.initialMaxLevel * ability.requiredPoints, 0);
  }
  return records;
};

const result = {
  generatedFrom: "ATM10 8.2 / Minecraft 1.21.1 / NeoForge",
  groups: {
    relics: extractGroup("cfr-relics", "relics"),
    reliquifiedArtifacts: extractGroup("cfr-reliquified", "reliquified_artifacts"),
  },
};

const json = `${JSON.stringify(result, null, 2)}\n`;
if (output) fs.writeFileSync(output, json, "utf8");
else process.stdout.write(json);

