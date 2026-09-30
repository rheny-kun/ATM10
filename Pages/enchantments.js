(() => {
  "use strict";

  const records = typeof ENCHANTMENTS !== "undefined" ? ENCHANTMENTS : [];
  const $ = (id) => document.getElementById(id);

  const esc = (value) =>
    String(value ?? "").replace(/[&<>"']/g, (character) =>
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

  fill("modFilter", unique("modName"));
  fill("categoryFilter", unique("categories"));

  const equipmentTags = (categories) =>
    `<div class="equipment-tags">${categories
      .map((category) => `<span class="tag equipment-tag">${esc(category)}</span>`)
      .join("")}</div>`;

  const modTag = (modName) =>
    `<span class="tag mod-tag" style="--mod-hue: ${modHue(modName)}">${esc(modName)}</span>`;

  const effectText = (record) =>
    record.effect.replace(/^対応MODのデータに基づく効果（(.+)）。$/, "効果情報を確認中（MOD固有: $1）");

  const row = (record) => `
    <tr>
      <td>
        <div class="name-ja">${esc(record.nameJa)}</div>
        <div class="name-en">${esc(record.nameEn)}</div>
        <span class="registry">${esc(record.id)}</span>
        ${modTag(record.modName)}
      </td>
      <td>${equipmentTags(record.categories)}</td>
      <td>${esc(effectText(record))}</td>
      <td>${record.conflicts.length
        ? record.conflicts.map(esc).join("<br>")
        : '<span class="muted">—</span>'}</td>
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
        ...record.categories,
        ...record.conflicts,
      ].join(" ").toLocaleLowerCase();

      return (!query || haystack.includes(query))
        && (!mod || record.modName === mod)
        && (!category || record.categories.includes(category))
        && (!curse || (curse === "curse" ? record.curse : !record.curse));
    });

    $("rows").innerHTML = filtered.map(row).join("");
    $("summary").textContent = `${filtered.length} / ${records.length} 件を表示中`;
  };

  $("search").addEventListener("input", render);
  ["modFilter", "categoryFilter", "curseFilter"].forEach((id) => {
    $(id).addEventListener("change", render);
  });

  render();
})();
