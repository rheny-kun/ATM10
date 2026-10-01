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

  const effectText = (record) => record.effect;

  const availabilityLabel = (record) => {
    if (record.availability === "special") return "特殊入手";
    if (record.availability === "unknown") return "入手経路はMOD依存";
    return "通常候補";
  };

  const detail = (record) => {
    const maxLevel = Number.isInteger(record.maxLevel) ? record.maxLevel : 1;
    const obtain = Array.isArray(record.obtain) && record.obtain.length
      ? record.obtain.map(esc).join(" / ")
      : "確認できず";
    const supported = record.supportedItems || record.categories.join(" / ");

    return `
      <details class="enchant-details">
        <summary>詳細 / Lvを確認</summary>
        <div class="enchant-detail-body">
          <div class="enchant-detail-grid">
            <div><span class="detail-label">最大Lv</span><strong>${esc(maxLevel)}</strong></div>
            <div><span class="detail-label">状態</span><span>${esc(availabilityLabel(record))}</span></div>
            <div><span class="detail-label">対象タグ</span><span>${esc(supported)}</span></div>
            <div><span class="detail-label">入手</span><span>${obtain}</span></div>
          </div>
          <div class="enchant-level-control">
            <label for="enchant-level-${esc(record.id.replaceAll(":", "-"))}">
              <span class="detail-label">効果レベルの目安</span>
              <output data-enchant-level-output>Lv 1 / ${esc(maxLevel)}</output>
            </label>
            <input id="enchant-level-${esc(record.id.replaceAll(":", "-"))}" class="enchant-level-slider" type="range" min="1" max="${esc(maxLevel)}" value="1" step="1" aria-label="${esc(record.nameJa)}の効果レベル" />
          </div>
          <p class="detail-note">${esc(record.metadataSource || "ATM10 8.2 registry/config")}</p>
        </div>
      </details>`;
  };

  const row = (record) => `
    <tr>
      <td>
        <div class="name-ja">${esc(record.nameJa)}</div>
        <div class="name-en">${esc(record.nameEn)}</div>
        <span class="registry">${esc(record.id)}</span>
        ${modTag(record.modName)}
        ${detail(record)}
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

  $("rows").addEventListener("input", (event) => {
    const slider = event.target.closest(".enchant-level-slider");
    if (!slider) return;
    const output = slider.closest(".enchant-level-control")?.querySelector("[data-enchant-level-output]");
    if (output) output.textContent = `Lv ${slider.value} / ${slider.max}`;
  });

  render();
})();
