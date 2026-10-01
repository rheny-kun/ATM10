(() => {
  "use strict";

  const records = typeof ENCHANTMENTS !== "undefined" ? ENCHANTMENTS : [];
  const $ = (id) => document.getElementById(id);

  const esc = (value) =>
    String(value ?? "").replace(/[&<>\"']/g, (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
      })[character],
    );

  const unique = (key) =>
    [...new Set(records.flatMap((record) =>
      Array.isArray(record[key]) ? record[key] : [record[key]],
    ).filter(Boolean))].sort((a, b) => String(a).localeCompare(String(b), "ja"));

  const fill = (id, values) => {
    const element = $(id);
    if (!element) return;

    values.forEach((value) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = value;
      element.appendChild(option);
    });
  };

  const modHue = (modName) => {
    let hash = 0;
    for (const character of String(modName)) {
      hash = (hash * 31 + character.codePointAt(0)) % 360;
    }
    return hash;
  };

  const equipmentTags = (categories) =>
    `<div class="equipment-tags">${categories
      .map((category) => `<span class="tag equipment-tag">${esc(category)}</span>`)
      .join("")}</div>`;

  const modTag = (modName) =>
    `<span class="tag mod-tag" style="--mod-hue: ${modHue(modName)}">${esc(modName)}</span>`;

  const statusTag = (record) => {
    if (record.availability === "inactive") {
      return '<span class="tag status-tag status-inactive">Technical / 無効</span>';
    }
    if (record.availability === "special") {
      return '<span class="tag status-tag status-special">特殊候補</span>';
    }
    return "";
  };

  const maxLevelTag = (record) => {
    const maxLevel = Number.isInteger(record.maxLevel) ? record.maxLevel : null;
    return maxLevel ? `<span class="level-tag">最大Lv ${esc(maxLevel)}</span>` : "";
  };

  const row = (record) => `
    <tr>
      <td class="enchant-name-cell">
        <div class="enchant-title-line">
          <div class="name-ja">${esc(record.nameJa)}</div>
          ${modTag(record.modName)}
          ${statusTag(record)}
        </div>
        <div class="name-en">${esc(record.nameEn)}</div>
        <span class="registry">${esc(record.id)}</span>
        <div class="enchant-meta-line">${maxLevelTag(record)}</div>
      </td>
      <td>${equipmentTags(record.equipmentTags ?? record.categories)}</td>
      <td class="effect-cell">${esc(record.effect)}</td>
      <td class="conflict-cell"><div class="conflict-tags">${record.conflicts.length
        ? record.conflicts.map((conflict) => `<span class="conflict-tag">${esc(conflict)}</span>`).join("")
        : '<span class="muted">—</span>'}</div></td>
    </tr>`;

  const render = () => {
    const query = $("search").value.trim().toLocaleLowerCase();
    const mod = $("modFilter").value;
    const category = $("categoryFilter").value;
    const curse = $("curseFilter").value;

    const filtered = records.filter((record) => {
      const haystack = [
        record.id,
        record.nameJa,
        record.nameEn,
        record.effect,
        record.modName,
        ...(record.equipmentTags ?? record.categories),
        ...record.conflicts,
      ].join(" ").toLocaleLowerCase();

      return (!query || haystack.includes(query))
        && (!mod || record.modName === mod)
        && (!category || (record.equipmentTags ?? record.categories).includes(category))
        && (!curse || (curse === "curse" ? record.curse : !record.curse));
    });

    $("rows").innerHTML = filtered.map(row).join("");
    $("summary").textContent = `${filtered.length}件`;
  };

  fill("modFilter", unique("modName"));
  fill("categoryFilter", unique("equipmentTags"));
  $("search").addEventListener("input", render);
  ["modFilter", "categoryFilter", "curseFilter"].forEach((id) => {
    $(id).addEventListener("change", render);
  });

  render();
})();
