(() => {
  "use strict";

  const records = Array.isArray(window.EFFECTS) ? window.EFFECTS : [];
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
    [...new Set(records.map((record) => record[key]).filter(Boolean))].sort((a, b) =>
      String(a).localeCompare(String(b), "ja"),
    );

  const fill = (id, values) => {
    const select = $(id);
    if (!select) return;
    values.forEach((value) => {
      const option = document.createElement("option");
      option.value = value;
      option.textContent = value;
      select.appendChild(option);
    });
  };

  const modHue = (modName) => {
    let hash = 0;
    for (const character of String(modName)) hash = (hash * 31 + character.codePointAt(0)) % 360;
    return hash;
  };

  const filterTag = (label, kind, value, className = "") =>
    `<button type="button" class="tag filter-tag ${className}" data-effect-filter-kind="${esc(kind)}" data-effect-filter-value="${esc(value)}" aria-label="${esc(label)}で絞り込む" aria-pressed="false">${esc(label)}</button>`;

  const modTag = (record) =>
    filterTag(record.modName, "mod", record.modName, "effect-mod-tag").replace(
      'class="tag filter-tag effect-mod-tag"',
      `class="tag filter-tag effect-mod-tag" style="--mod-hue: ${modHue(record.modName)}"`,
    );

  const categoryTag = (record) =>
    filterTag(record.category, "category", record.category, `effect-category-tag effect-${record.category === "有益" ? "beneficial" : record.category === "有害" ? "harmful" : "neutral"}`);

  const valueTag = (label, kind, value, className = "") =>
    `<span class="tag effect-value-tag ${className}">${esc(label || value)}</span>`;

  const row = (record) => `
    <tr>
      <td class="effect-name-cell">
        <div class="effect-title-line">
          <div class="name-ja">${esc(record.nameJa)}</div>
          ${modTag(record)}
        </div>
        <div class="name-en">${esc(record.nameEn)}</div>
        <span class="registry">${esc(record.id)}</span>
        ${record.technical ? '<span class="status-tag">通常入手不可 / technical</span>' : ""}
      </td>
      <td>
        <div class="effect-tags">
          ${categoryTag(record)}
          ${record.instant ? valueTag("Instant", "instant", "instant", "effect-instant-tag") : ""}
        </div>
      </td>
      <td class="effect-description-cell">
        <p>${esc(record.description)}</p>
        <span class="effect-scaling">${esc(record.scaling)}</span>
      </td>
      <td class="effect-level-cell">
        ${valueTag(`最大Lv ${record.maxLevel}`, "maxLevel", record.maxLevel)}
        <span class="effect-fact">${esc(record.duration)}</span>
      </td>
      <td class="effect-access-cell">
        ${valueTag(`Charm: ${record.charm}`, "charm", record.charm, "effect-charm-tag")}
        <span class="effect-fact">Potion: ${esc(record.potion)}</span>
        <span class="effect-fact">${esc(record.brewing)}</span>
      </td>
    </tr>`;

  const filterValues = {
    mod: $("effectModFilter"),
    category: $("effectCategoryFilter"),
    charm: $("effectCharmFilter"),
    potion: $("effectPotionFilter"),
  };

  const matches = (record, key, value) => {
    if (!value) return true;
    if (key === "mod") return record.modName === value;
    if (key === "charm") return record.charm === value;
    if (key === "potion") return record.potion === value;
    return record[key] === value;
  };

  const render = () => {
    const query = $("effectSearch").value.trim().toLocaleLowerCase();
    const filtered = records.filter((record) => {
      const haystack = [
        record.id,
        record.nameJa,
        record.nameEn,
        record.modName,
        record.category,
        record.description,
        record.scaling,
        record.duration,
        record.charm,
        record.potion,
        record.brewing,
      ].join(" ").toLocaleLowerCase();

      return (!query || haystack.includes(query))
        && Object.entries(filterValues).every(([key, select]) => matches(record, key, select.value));
    });

    $("effectRows").innerHTML = filtered.map(row).join("");
    updateTagStates();
  };

  const updateTagStates = () => {
    document.querySelectorAll("#effectRows [data-effect-filter-kind]").forEach((tag) => {
      const select = filterValues[tag.dataset.effectFilterKind];
      tag.setAttribute("aria-pressed", String(Boolean(select && select.value === tag.dataset.effectFilterValue)));
    });
  };

  fill("effectModFilter", unique("modName"));
  fill("effectCategoryFilter", unique("category"));
  fill("effectCharmFilter", unique("charm"));
  fill("effectPotionFilter", unique("potion"));

  $("effectSearch").addEventListener("input", render);
  Object.values(filterValues).forEach((select) => select.addEventListener("change", render));
  $("effectRows").addEventListener("click", (event) => {
    const tag = event.target.closest("[data-effect-filter-kind]");
    if (!tag) return;
    const select = filterValues[tag.dataset.effectFilterKind];
    if (!select) return;
    select.value = select.value === tag.dataset.effectFilterValue ? "" : tag.dataset.effectFilterValue;
    render();
  });

  render();
})();
