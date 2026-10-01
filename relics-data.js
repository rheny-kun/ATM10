/*
 * Public, reviewed metadata for the Relics ecosystem in ATM10 8.2.
 *
 * The base item list remains in index.html because it is also the site's
 * player-facing wording. This file adds facts read from the exact 1.21.1
 * jars: registry namespace, Curios slot, template abilities, level budget,
 * and rank cap. Decompiled classes and jars stay outside the repository.
 */
(function exposeRelicMetadata() {
  "use strict";

  const templateRows = [
    ["relics:ghostly_mantle", 30, 5, "fog|gaze|spectral_escape"],
    ["relics:glitchy_mantle", 30, 5, "distortion|illusion|glitch"],
    ["relics:leafy_mantle", 20, 5, "camouflage|revival"],
    ["relics:midnight_mantle", 40, 7, "phase|invisibility|constellation|starfall"],
    ["relics:hunting_belt", 20, 5, "slots|pack"],
    ["relics:kinetic_belt", 20, 5, "slots|gliding"],
    ["relics:experience_disperser", 10, 5, "dispersion"],
    ["relics:chorus_staff", 10, 5, "blink"],
    ["relics:clot_of_time", 10, 5, "rewind"],
    ["relics:cut_glass_boot", 10, 0, "glass"],
    ["relics:roller_skate", 10, 5, "skating"],
    ["relics:springy_boot", 10, 5, "bounce"],
    ["relics:chef_hat", 10, 5, "satiety"],
    ["relics:piglin_mask", 20, 5, "neutrality|barter|looting"],
    ["relics:jellyfish_necklace", 20, 5, "regeneration|shock"],
    ["relics:reflective_necklace", 10, 5, "reflection"],
    ["relics:rider_flute", 5, 5, "stable"],
    ["relics:ring_of_the_seven_deadly_sins", 70, 0, "pride|envy|wrath|sloth|greed|gluttony|lust"],
    ["relics:shield_of_retaliation", 10, 5, "retaliation"],
    ["relics:sphere_of_self_sacrifice", 10, 5, "sacrifice"],
    ["reliquified_artifacts:onion_ring", 10, 5, "hunger_mining"],
    ["reliquified_artifacts:withered_bracelet", 10, 5, "withering"],
    ["reliquified_artifacts:antidote_vessel", 10, 5, "antidote"],
    ["reliquified_artifacts:chorus_totem", 10, 5, "chorus"],
    ["reliquified_artifacts:cloud_in_a_bottle", 10, 5, "jump"],
    ["reliquified_artifacts:crystal_heart", 10, 5, "heart"],
    ["reliquified_artifacts:helium_flamingo", 10, 5, "flying"],
    ["reliquified_artifacts:obsidian_skull", 10, 5, "lava"],
    ["reliquified_artifacts:universal_attractor", 10, 5, "magnetism"],
    ["reliquified_artifacts:warp_drive", 10, 5, "warp"],
    ["reliquified_artifacts:eternal_steak", 10, 5, "meal"],
    ["reliquified_artifacts:everlasting_beef", 10, 5, "meal"],
    ["reliquified_artifacts:aqua_dashers", 10, 5, "water_dash"],
    ["reliquified_artifacts:bunny_hoppers", 10, 5, "jump"],
    ["reliquified_artifacts:flippers", 10, 5, "swim"],
    ["reliquified_artifacts:kitty_slippers", 20, 5, "feline_aura|nine_lives"],
    ["reliquified_artifacts:rooted_boots", 10, 5, "devouring"],
    ["reliquified_artifacts:running_shoes", 10, 5, "runner"],
    ["reliquified_artifacts:snowshoes", 10, 5, "snow"],
    ["reliquified_artifacts:steadfast_spikes", 20, 5, "resistance|wall_slide"],
    ["reliquified_artifacts:strider_shoes", 10, 5, "lava_stride"],
    ["reliquified_artifacts:digging_claws", 10, 5, "digging"],
    ["reliquified_artifacts:feral_claws", 10, 5, "feral"],
    ["reliquified_artifacts:fire_gauntlet", 10, 5, "flame"],
    ["reliquified_artifacts:golden_hook", 10, 5, "hook"],
    ["reliquified_artifacts:pickaxe_heater", 10, 5, "heating"],
    ["reliquified_artifacts:pocket_piston", 10, 5, "piston"],
    ["reliquified_artifacts:power_glove", 10, 5, "power"],
    ["reliquified_artifacts:vampiric_glove", 10, 5, "vampire"],
    ["reliquified_artifacts:anglers_hat", 10, 5, "catch"],
    ["reliquified_artifacts:cowboy_hat", 10, 5, "riding"],
    ["reliquified_artifacts:drinking_hat", 10, 5, "drinking"],
    ["reliquified_artifacts:night_vision_goggles", 10, 5, "vision"],
    ["reliquified_artifacts:snorkel", 10, 5, "snorkeling"],
    ["reliquified_artifacts:superstitious_hat", 10, 5, "looting"],
    ["reliquified_artifacts:villager_hat", 20, 5, "trade_surge|golem_guard"],
    ["reliquified_artifacts:whoopee_cushion", 10, 5, "push"],
    ["reliquified_artifacts:charm_of_shrinking", 10, 5, "size"],
    ["reliquified_artifacts:charm_of_sinking", 10, 5, "sinking"],
    ["reliquified_artifacts:cross_necklace", 10, 5, "protection"],
    ["reliquified_artifacts:flame_pendant", 10, 5, "fire"],
    ["reliquified_artifacts:lucky_scarf", 10, 5, "fortune"],
    ["reliquified_artifacts:panic_necklace", 10, 5, "panic"],
    ["reliquified_artifacts:scarf_of_invisibility", 10, 5, "invisibility"],
    ["reliquified_artifacts:shock_pendant", 10, 5, "shock"],
    ["reliquified_artifacts:thorn_pendant", 10, 5, "poison"],
    ["reliquified_artifacts:umbrella", 20, 5, "glider|shield"],
  ];

  const templates = Object.fromEntries(
    templateRows.map(([registry, maxLevel, maxRank, abilityText]) => [
      registry,
      {
        maxLevel,
        maxRank,
        quality: 10,
        abilities: abilityText.split("|"),
        leveling: "Relics leveling template; initial cost 100 XP and step 100 XP unless the item template overrides it.",
      },
    ]),
  );

  const source = {
    pack: "ATM10 8.2 / Minecraft 1.21.1 / NeoForge",
    relics: "relics-1.21.1-0.12.8.jar",
    reliquifiedArtifacts: "reliquified_artifacts-1.21.1-1.0.8.jar",
    artifacts: "artifacts-neoforge-13.2.3.jar",
    method: "RelicTemplate / AbilityTemplate definitions in the exact pack ecosystem jars; Curios item tags for slots.",
  };

  const registryFor = (mod, id) => {
    if (mod === "Relics") return `relics:${id}`;
    // Reliquified Artifacts replaces the item implementations through a
    // mixin, but the registry entries are still registered by Artifacts.
    return `artifacts:${id}`;
  };

  /* Exact slot tags from the ATM10 8.2 jars.  The old page used a
   * presentation bucket for several hand-held items, which made them look
   * like Curios charms even when the item has no Curios slot at all. */
  const artifactSlots = {
    anglers_hat: ["頭", "head"],
    cowboy_hat: ["頭", "head"],
    novelty_drinking_hat: ["頭", "head"],
    plastic_drinking_hat: ["頭", "head"],
    superstitious_hat: ["頭", "head"],
    villager_hat: ["頭", "head"],
    night_vision_goggles: ["頭", "face"],
    snorkel: ["頭", "face"],
    charm_of_shrinking: ["ネックレス", "necklace"],
    charm_of_sinking: ["ネックレス", "necklace"],
    cross_necklace: ["ネックレス", "necklace"],
    flame_pendant: ["ネックレス", "necklace"],
    lucky_scarf: ["ネックレス", "necklace"],
    panic_necklace: ["ネックレス", "necklace"],
    scarf_of_invisibility: ["ネックレス", "necklace"],
    shock_pendant: ["ネックレス", "necklace"],
    thorn_pendant: ["ネックレス", "necklace"],
    antidote_vessel: ["ベルト", "belt"],
    chorus_totem: ["ベルト", "belt"],
    cloud_in_a_bottle: ["ベルト", "belt"],
    crystal_heart: ["ベルト", "belt"],
    helium_flamingo: ["ベルト", "belt"],
    obsidian_skull: ["ベルト", "belt"],
    universal_attractor: ["ベルト", "belt"],
    warp_drive: ["ベルト", "belt"],
    aqua_dashers: ["ブーツ", "feet"],
    bunny_hoppers: ["ブーツ", "feet"],
    flippers: ["ブーツ", "feet"],
    kitty_slippers: ["ブーツ", "feet"],
    rooted_boots: ["ブーツ", "feet"],
    running_shoes: ["ブーツ", "feet"],
    snowshoes: ["ブーツ", "feet"],
    steadfast_spikes: ["ブーツ", "feet"],
    strider_shoes: ["ブーツ", "feet"],
    digging_claws: ["手", "hands"],
    feral_claws: ["手", "hands"],
    fire_gauntlet: ["手", "hands"],
    golden_hook: ["手", "hands"],
    onion_ring: ["手", "hands"],
    pickaxe_heater: ["手", "hands"],
    pocket_piston: ["手", "hands"],
    power_glove: ["手", "hands"],
    vampiric_glove: ["手", "hands"],
    withered_bracelet: ["手", "hands"],
    whoopee_cushion: ["ツール", "all"],
    everlasting_beef: ["ツール", "—"],
    eternal_steak: ["ツール", "—"],
    umbrella: ["ツール", "—"],
  };

  const relicSlots = {
    ghostly_mantle: ["チャーム", "back"],
    glitchy_mantle: ["チャーム", "back"],
    leafy_mantle: ["チャーム", "back"],
    midnight_mantle: ["チャーム", "back"],
    hunting_belt: ["ベルト", "belt"],
    kinetic_belt: ["ベルト", "belt"],
    experience_disperser: ["チャーム", "charm"],
    cut_glass_boot: ["ブーツ", "feet"],
    roller_skate: ["ブーツ", "feet"],
    springy_boot: ["ブーツ", "feet"],
    chef_hat: ["頭", "head"],
    piglin_mask: ["頭", "head"],
    jellyfish_necklace: ["ネックレス", "necklace"],
    reflective_necklace: ["ネックレス", "necklace"],
    ring_of_the_seven_deadly_sins: ["リング", "ring"],
    chorus_staff: ["ツール", "—"],
    clot_of_time: ["ツール", "—"],
    rider_flute: ["ツール", "—"],
    shield_of_retaliation: ["ツール", "—"],
    sphere_of_self_sacrifice: ["ツール", "—"],
  };

  const slotFor = (mod, id, rawSlot) => {
    if (mod === "Relics") {
      if (relicSlots[id]) return relicSlots[id];
      return {
        "背中 / Mantle": ["チャーム", "back"],
        "足": ["ブーツ", "feet"],
        "腰": ["ベルト", "belt"],
        "首": ["ネックレス", "necklace"],
        "頭": ["頭", "head"],
        "指輪": ["リング", "ring"],
        "Charm / Utility": ["チャーム", "charm"],
        "手持ち / Shield": ["ツール", "curio / shield"],
      }[rawSlot] ?? [rawSlot, "—"];
    }

    if (artifactSlots[id]) return artifactSlots[id];

    return {
      "その他 / 手持ち": ["ツール", "—"],
      "頭": ["頭", "head"],
      "Charm / Utility": ["チャーム", "charm"],
      "首": ["ネックレス", "necklace"],
      "腰": ["ベルト", "belt"],
      "手": ["手", "hands"],
      "足": ["ブーツ", "feet"],
    }[rawSlot] ?? [rawSlot, "—"];
  };

  window.RELICS_PUBLIC = {
    source,
    templates,
    registryFor,
    slotFor,
    get(mod, id, rawSlot) {
      const registry = registryFor(mod, id);
      const templateId = {
        novelty_drinking_hat: "drinking_hat",
        plastic_drinking_hat: "drinking_hat",
      }[id] ?? id;
      const templateKey = mod === "Artifacts"
        ? `reliquified_artifacts:${templateId}`
        : registry;
      const template = templates[registry] ?? templates[templateKey] ?? {
        maxLevel: null,
        maxRank: null,
        quality: null,
        abilities: [],
        leveling: "テンプレート情報を公開jarから確認できず。",
      };
      const [slotLabel, curiosSlot] = slotFor(mod, id, rawSlot);
      return {
        registry,
        originMod: mod === "Artifacts" ? "Artifacts" : "Relics",
        behaviorMod: mod === "Artifacts" ? "Reliquified Artifacts" : "Relics",
        slotLabel,
        curiosSlot,
        imageId: mod === "Artifacts" && id === "umbrella" ? "umbrella_held" : id,
        ...template,
      };
    },
  };
})();
