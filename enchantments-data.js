/* ATM10 8.2 / Minecraft 1.21.1 / NeoForge
 * Registry/config: AllTheMods/ATM-10 commit e5e3d1d83ec6885bb9a5e9fb309fb8e9730db025
 * 117 entries; miners_fervor is retained as technical because ATM10 KubeJS removes it from minecraft:non_treasure.
 */
const ENCHANTMENTS=[
  {
    "id": "minecraft:aqua_affinity",
    "nameJa": "水中採掘",
    "nameEn": "Aqua Affinity",
    "modId": "minecraft",
    "modName": "Minecraft",
    "maxLevel": 1,
    "maxLootLevel": 1,
    "categories": [
      "Helmet"
    ],
    "effect": "水中での採掘速度低下を無効化",
    "curse": false,
    "treasure": "unknown",
    "availability": "normal",
    "obtain": [
      "Enchanting Table",
      "Villager",
      "Loot"
    ],
    "conflicts": [],
    "supportedItems": "Helmet",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "farmersdelight:backstabbing",
    "nameJa": "バックスタブ",
    "nameEn": "Backstabbing",
    "modId": "farmersdelight",
    "modName": "Farmer's Delight",
    "maxLevel": 8,
    "maxLootLevel": 3,
    "categories": [
      "Sword / Melee"
    ],
    "effect": "対応MODのデータに基づく効果（Backstabbing）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Sword / Melee",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "minecraft:bane_of_arthropods",
    "nameJa": "虫殺し",
    "nameEn": "Bane Of Arthropods",
    "modId": "minecraft",
    "modName": "Minecraft",
    "maxLevel": 10,
    "maxLootLevel": 5,
    "categories": [
      "Sword / Melee"
    ],
    "effect": "虫系の敵へのダメージを増加し、移動を遅延",
    "curse": false,
    "treasure": "unknown",
    "availability": "normal",
    "obtain": [
      "Enchanting Table",
      "Villager",
      "Loot"
    ],
    "conflicts": [
      "ダメージ増加",
      "アンデッド特効",
      "防具貫通",
      "密度"
    ],
    "supportedItems": "Sword / Melee",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "apothic_enchanting:berserkers_fury",
    "nameJa": "バーサーカーの猛威",
    "nameEn": "Berserkers Fury",
    "modId": "apothic_enchanting",
    "modName": "Apothic Enchanting",
    "maxLevel": 3,
    "maxLootLevel": 3,
    "categories": [
      "Armor"
    ],
    "effect": "対応MODのデータに基づく効果（Berserkers Fury）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Armor",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "minecraft:binding_curse",
    "nameJa": "束縛の呪い",
    "nameEn": "Binding Curse",
    "modId": "minecraft",
    "modName": "Minecraft",
    "maxLevel": 1,
    "maxLootLevel": 1,
    "categories": [
      "Armor"
    ],
    "effect": "装備したアイテムを通常の方法で外せなくする",
    "curse": true,
    "treasure": "yes/特殊",
    "availability": "special",
    "obtain": [
      "Loot / 特殊入手"
    ],
    "conflicts": [],
    "supportedItems": "Armor",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "minecraft:blast_protection",
    "nameJa": "爆発耐性",
    "nameEn": "Blast Protection",
    "modId": "minecraft",
    "modName": "Minecraft",
    "maxLevel": 9,
    "maxLootLevel": 4,
    "categories": [
      "Armor"
    ],
    "effect": "爆発ダメージを軽減",
    "curse": false,
    "treasure": "unknown",
    "availability": "normal",
    "obtain": [
      "Enchanting Table",
      "Villager",
      "Loot"
    ],
    "conflicts": [
      "ダメージ軽減",
      "火炎耐性",
      "飛び道具耐性"
    ],
    "supportedItems": "Armor",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "tombstone:blessing",
    "nameJa": "祝福",
    "nameEn": "Blessing",
    "modId": "tombstone",
    "modName": "Corail Tombstone",
    "maxLevel": 13,
    "maxLootLevel": 10,
    "categories": [
      "Misc / Universal"
    ],
    "effect": "対応MODのデータに基づく効果（Blessing）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Misc / Universal",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "apothic_enchanting:boon_of_the_earth",
    "nameJa": "大地の恩恵",
    "nameEn": "Boon Of The Earth",
    "modId": "apothic_enchanting",
    "modName": "Apothic Enchanting",
    "maxLevel": 5,
    "maxLootLevel": 5,
    "categories": [
      "Tool"
    ],
    "effect": "対応MODのデータに基づく効果（Boon Of The Earth）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Tool",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "minecraft:breach",
    "nameJa": "防具貫通",
    "nameEn": "Breach",
    "modId": "minecraft",
    "modName": "Minecraft",
    "maxLevel": 8,
    "maxLootLevel": 4,
    "categories": [
      "Mace"
    ],
    "effect": "対象の防具によるダメージ軽減を一部無視",
    "curse": false,
    "treasure": "unknown",
    "availability": "normal",
    "obtain": [
      "Enchanting Table",
      "Villager",
      "Loot"
    ],
    "conflicts": [
      "ダメージ増加",
      "アンデッド特効",
      "虫殺し",
      "密度"
    ],
    "supportedItems": "Mace",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "evilcraft:breaking",
    "nameJa": "破壊",
    "nameEn": "Breaking",
    "modId": "evilcraft",
    "modName": "EvilCraft",
    "maxLevel": 8,
    "maxLootLevel": 3,
    "categories": [
      "Tool"
    ],
    "effect": "対応MODのデータに基づく効果（Breaking）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Tool",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "apothic_spawners:capturing",
    "nameJa": "捕獲",
    "nameEn": "Capturing",
    "modId": "apothic_spawners",
    "modName": "Apothic Spawners",
    "maxLevel": 7,
    "maxLootLevel": 3,
    "categories": [
      "Misc / Universal"
    ],
    "effect": "対応MODのデータに基づく効果（Capturing）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Misc / Universal",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "deeperdarker:catalysis",
    "nameJa": "触媒",
    "nameEn": "Catalysis",
    "modId": "deeperdarker",
    "modName": "Deeper and Darker",
    "maxLevel": 5,
    "maxLootLevel": 3,
    "categories": [
      "Misc / Universal"
    ],
    "effect": "対応MODのデータに基づく効果（Catalysis）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Misc / Universal",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "apothic_enchanting:chainsaw",
    "nameJa": "チェーンソー",
    "nameEn": "Chainsaw",
    "modId": "apothic_enchanting",
    "modName": "Apothic Enchanting",
    "maxLevel": 1,
    "maxLootLevel": 1,
    "categories": [
      "Tool"
    ],
    "effect": "対応MODのデータに基づく効果（Chainsaw）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Tool",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "minecraft:channeling",
    "nameJa": "召雷",
    "nameEn": "Channeling",
    "modId": "minecraft",
    "modName": "Minecraft",
    "maxLevel": 1,
    "maxLootLevel": 1,
    "categories": [
      "Trident"
    ],
    "effect": "雷雨中に命中対象へ落雷",
    "curse": false,
    "treasure": "unknown",
    "availability": "normal",
    "obtain": [
      "Enchanting Table",
      "Villager",
      "Loot"
    ],
    "conflicts": [],
    "supportedItems": "Trident",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "twilightforest:chill_aura",
    "nameJa": "冷気のオーラ",
    "nameEn": "Chill Aura",
    "modId": "twilightforest",
    "modName": "Twilight Forest",
    "maxLevel": 8,
    "maxLootLevel": 3,
    "categories": [
      "Armor"
    ],
    "effect": "対応MODのデータに基づく効果（Chill Aura）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Armor",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "apothic_enchanting:chromatic",
    "nameJa": "（日本語訳）Chromatic",
    "nameEn": "Chromatic",
    "modId": "apothic_enchanting",
    "modName": "Apothic Enchanting",
    "maxLevel": 1,
    "maxLootLevel": 1,
    "categories": [
      "Misc / Universal"
    ],
    "effect": "対応MODのデータに基づく効果（Chromatic）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Misc / Universal",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "the_bumblezone:comb_cutter",
    "nameJa": "ハニカムカッター",
    "nameEn": "Comb Cutter",
    "modId": "the_bumblezone",
    "modName": "The Bumblezone",
    "maxLevel": 3,
    "maxLootLevel": 2,
    "categories": [
      "Tool"
    ],
    "effect": "対応MODのデータに基づく効果（Comb Cutter）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Tool",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "apothic_enchanting:crescendo_of_bolts",
    "nameJa": "ボルトのクレッシェンド",
    "nameEn": "Crescendo Of Bolts",
    "modId": "apothic_enchanting",
    "modName": "Apothic Enchanting",
    "maxLevel": 5,
    "maxLootLevel": 5,
    "categories": [
      "Bow / Crossbow"
    ],
    "effect": "対応MODのデータに基づく効果（Crescendo Of Bolts）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Bow / Crossbow",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "tombstone:curse_of_bones",
    "nameJa": "骨の呪い",
    "nameEn": "Curse Of Bones",
    "modId": "tombstone",
    "modName": "Corail Tombstone",
    "maxLevel": 13,
    "maxLootLevel": 10,
    "categories": [
      "Misc / Universal"
    ],
    "effect": "対応MODのデータに基づく効果（Curse Of Bones）。",
    "curse": true,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Misc / Universal",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "tombstone:decrepitude",
    "nameJa": "老衰",
    "nameEn": "Decrepitude",
    "modId": "tombstone",
    "modName": "Corail Tombstone",
    "maxLevel": 13,
    "maxLootLevel": 10,
    "categories": [
      "Misc / Universal"
    ],
    "effect": "対応MODのデータに基づく効果（Decrepitude）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Misc / Universal",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "minecraft:density",
    "nameJa": "密度",
    "nameEn": "Density",
    "modId": "minecraft",
    "modName": "Minecraft",
    "maxLevel": 10,
    "maxLootLevel": 5,
    "categories": [
      "Mace"
    ],
    "effect": "メイスの落下攻撃ダメージを増加",
    "curse": false,
    "treasure": "unknown",
    "availability": "normal",
    "obtain": [
      "Enchanting Table",
      "Villager",
      "Loot"
    ],
    "conflicts": [
      "ダメージ増加",
      "アンデッド特効",
      "虫殺し",
      "防具貫通"
    ],
    "supportedItems": "Mace",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "minecraft:depth_strider",
    "nameJa": "水中歩行",
    "nameEn": "Depth Strider",
    "modId": "minecraft",
    "modName": "Minecraft",
    "maxLevel": 7,
    "maxLootLevel": 3,
    "categories": [
      "Boots"
    ],
    "effect": "水中の移動速度を増加",
    "curse": false,
    "treasure": "unknown",
    "availability": "normal",
    "obtain": [
      "Enchanting Table",
      "Villager",
      "Loot"
    ],
    "conflicts": [
      "氷渡り"
    ],
    "supportedItems": "Boots",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "railcraft:destruction",
    "nameJa": "破壊",
    "nameEn": "Destruction",
    "modId": "railcraft",
    "modName": "Railcraft Reborn",
    "maxLevel": 7,
    "maxLootLevel": 3,
    "categories": [
      "Tool"
    ],
    "effect": "対応MODのデータに基づく効果（Destruction）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Tool",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "twilightforest:destruction",
    "nameJa": "破壊",
    "nameEn": "Destruction",
    "modId": "twilightforest",
    "modName": "Twilight Forest",
    "maxLevel": 8,
    "maxLootLevel": 3,
    "categories": [
      "Tool"
    ],
    "effect": "対応MODのデータに基づく効果（Destruction）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Tool",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "minecraft:efficiency",
    "nameJa": "効率強化",
    "nameEn": "Efficiency",
    "modId": "minecraft",
    "modName": "Minecraft",
    "maxLevel": 9,
    "maxLootLevel": 5,
    "categories": [
      "Tool"
    ],
    "effect": "ブロックの採掘速度を増加",
    "curse": false,
    "treasure": "unknown",
    "availability": "normal",
    "obtain": [
      "Enchanting Table",
      "Villager",
      "Loot"
    ],
    "conflicts": [],
    "supportedItems": "Tool",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "apothic_enchanting:endless_quiver",
    "nameJa": "無限の矢筒",
    "nameEn": "Endless Quiver",
    "modId": "apothic_enchanting",
    "modName": "Apothic Enchanting",
    "maxLevel": 1,
    "maxLootLevel": 1,
    "categories": [
      "Bow / Crossbow"
    ],
    "effect": "対応MODのデータに基づく効果（Endless Quiver）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Bow / Crossbow",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "eternal_starlight:fearless",
    "nameJa": "不屈",
    "nameEn": "Fearless",
    "modId": "eternal_starlight",
    "modName": "Eternal Starlight",
    "maxLevel": 6,
    "maxLootLevel": 2,
    "categories": [
      "Misc / Universal"
    ],
    "effect": "対応MODのデータに基づく効果（Fearless）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Misc / Universal",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "minecraft:feather_falling",
    "nameJa": "落下耐性",
    "nameEn": "Feather Falling",
    "modId": "minecraft",
    "modName": "Minecraft",
    "maxLevel": 11,
    "maxLootLevel": 4,
    "categories": [
      "Boots"
    ],
    "effect": "落下ダメージを軽減",
    "curse": false,
    "treasure": "unknown",
    "availability": "normal",
    "obtain": [
      "Enchanting Table",
      "Villager",
      "Loot"
    ],
    "conflicts": [],
    "supportedItems": "Boots",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "minecraft:fire_aspect",
    "nameJa": "火属性",
    "nameEn": "Fire Aspect",
    "modId": "minecraft",
    "modName": "Minecraft",
    "maxLevel": 5,
    "maxLootLevel": 2,
    "categories": [
      "Sword / Melee"
    ],
    "effect": "攻撃対象に火をつける",
    "curse": false,
    "treasure": "unknown",
    "availability": "normal",
    "obtain": [
      "Enchanting Table",
      "Villager",
      "Loot"
    ],
    "conflicts": [],
    "supportedItems": "Sword / Melee",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "minecraft:fire_protection",
    "nameJa": "火炎耐性",
    "nameEn": "Fire Protection",
    "modId": "minecraft",
    "modName": "Minecraft",
    "maxLevel": 9,
    "maxLootLevel": 4,
    "categories": [
      "Armor"
    ],
    "effect": "火炎・溶岩ダメージを軽減",
    "curse": false,
    "treasure": "unknown",
    "availability": "normal",
    "obtain": [
      "Enchanting Table",
      "Villager",
      "Loot"
    ],
    "conflicts": [
      "ダメージ軽減",
      "爆発耐性",
      "飛び道具耐性"
    ],
    "supportedItems": "Armor",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "twilightforest:fire_react",
    "nameJa": "炎の反撃",
    "nameEn": "Fire React",
    "modId": "twilightforest",
    "modName": "Twilight Forest",
    "maxLevel": 8,
    "maxLootLevel": 3,
    "categories": [
      "Misc / Universal"
    ],
    "effect": "対応MODのデータに基づく効果（Fire React）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Misc / Universal",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "minecraft:flame",
    "nameJa": "フレイム",
    "nameEn": "Flame",
    "modId": "minecraft",
    "modName": "Minecraft",
    "maxLevel": 1,
    "maxLootLevel": 1,
    "categories": [
      "Bow"
    ],
    "effect": "放った矢に火をつける",
    "curse": false,
    "treasure": "unknown",
    "availability": "normal",
    "obtain": [
      "Enchanting Table",
      "Villager",
      "Loot"
    ],
    "conflicts": [],
    "supportedItems": "Bow",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "minecraft:fortune",
    "nameJa": "幸運",
    "nameEn": "Fortune",
    "modId": "minecraft",
    "modName": "Minecraft",
    "maxLevel": 8,
    "maxLootLevel": 3,
    "categories": [
      "Tool"
    ],
    "effect": "ブロックからのドロップ数・確率を増加",
    "curse": false,
    "treasure": "unknown",
    "availability": "normal",
    "obtain": [
      "Enchanting Table",
      "Villager",
      "Loot"
    ],
    "conflicts": [
      "シルクタッチ"
    ],
    "supportedItems": "Tool",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "minecraft:frost_walker",
    "nameJa": "氷渡り",
    "nameEn": "Frost Walker",
    "modId": "minecraft",
    "modName": "Minecraft",
    "maxLevel": 7,
    "maxLootLevel": 2,
    "categories": [
      "Boots"
    ],
    "effect": "水面を一時的に氷へ変える",
    "curse": false,
    "treasure": "yes/特殊",
    "availability": "special",
    "obtain": [
      "Loot / 特殊入手"
    ],
    "conflicts": [
      "水中歩行"
    ],
    "supportedItems": "Boots",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "tombstone:frostbite",
    "nameJa": "凍傷",
    "nameEn": "Frostbite",
    "modId": "tombstone",
    "modName": "Corail Tombstone",
    "maxLevel": 13,
    "maxLootLevel": 10,
    "categories": [
      "Armor"
    ],
    "effect": "対応MODのデータに基づく効果（Frostbite）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Armor",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "apothic_enchanting:growth_serum",
    "nameJa": "（日本語訳）Growth Serum",
    "nameEn": "Growth Serum",
    "modId": "apothic_enchanting",
    "modName": "Apothic Enchanting",
    "maxLevel": 1,
    "maxLootLevel": 1,
    "categories": [
      "Misc / Universal"
    ],
    "effect": "対応MODのデータに基づく効果（Growth Serum）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Misc / Universal",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "apothic_enchanting:icy_thorns",
    "nameJa": "（日本語訳）Icy Thorns",
    "nameEn": "Icy Thorns",
    "modId": "apothic_enchanting",
    "modName": "Apothic Enchanting",
    "maxLevel": 5,
    "maxLootLevel": 3,
    "categories": [
      "Armor"
    ],
    "effect": "対応MODのデータに基づく効果（Icy Thorns）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Armor",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "minecraft:impaling",
    "nameJa": "水生特効",
    "nameEn": "Impaling",
    "modId": "minecraft",
    "modName": "Minecraft",
    "maxLevel": 10,
    "maxLootLevel": 5,
    "categories": [
      "Trident"
    ],
    "effect": "水中の対象へのトライデントダメージを増加",
    "curse": false,
    "treasure": "unknown",
    "availability": "normal",
    "obtain": [
      "Enchanting Table",
      "Villager",
      "Loot"
    ],
    "conflicts": [],
    "supportedItems": "Trident",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "railcraft:implosion",
    "nameJa": "内破",
    "nameEn": "Implosion",
    "modId": "railcraft",
    "modName": "Railcraft Reborn",
    "maxLevel": 10,
    "maxLootLevel": 5,
    "categories": [
      "Sword / Melee"
    ],
    "effect": "対応MODのデータに基づく効果（Implosion）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Sword / Melee",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "tombstone:incurable_wounds",
    "nameJa": "治癒不能の傷",
    "nameEn": "Incurable Wounds",
    "modId": "tombstone",
    "modName": "Corail Tombstone",
    "maxLevel": 13,
    "maxLootLevel": 10,
    "categories": [
      "Armor"
    ],
    "effect": "対応MODのデータに基づく効果（Incurable Wounds）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Armor",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "minecraft:infinity",
    "nameJa": "無限",
    "nameEn": "Infinity",
    "modId": "minecraft",
    "modName": "Minecraft",
    "maxLevel": 1,
    "maxLootLevel": 1,
    "categories": [
      "Bow"
    ],
    "effect": "通常の矢を消費せず弓を使う",
    "curse": false,
    "treasure": "unknown",
    "availability": "normal",
    "obtain": [
      "Enchanting Table",
      "Villager",
      "Loot"
    ],
    "conflicts": [
      "修繕"
    ],
    "supportedItems": "Bow",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "apothic_enchanting:infusion",
    "nameJa": "注入",
    "nameEn": "Infusion",
    "modId": "apothic_enchanting",
    "modName": "Apothic Enchanting",
    "maxLevel": 1,
    "maxLootLevel": 1,
    "categories": [
      "Misc / Universal"
    ],
    "effect": "対応MODのデータに基づく効果（Infusion）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Misc / Universal",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "minecraft:knockback",
    "nameJa": "ノックバック",
    "nameEn": "Knockback",
    "modId": "minecraft",
    "modName": "Minecraft",
    "maxLevel": 5,
    "maxLootLevel": 2,
    "categories": [
      "Sword / Melee"
    ],
    "effect": "攻撃対象をより遠くへ吹き飛ばす",
    "curse": false,
    "treasure": "unknown",
    "availability": "normal",
    "obtain": [
      "Enchanting Table",
      "Villager",
      "Loot"
    ],
    "conflicts": [],
    "supportedItems": "Sword / Melee",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "apothic_enchanting:knowledge_of_the_ages",
    "nameJa": "古代の知識",
    "nameEn": "Knowledge Of The Ages",
    "modId": "apothic_enchanting",
    "modName": "Apothic Enchanting",
    "maxLevel": 3,
    "maxLootLevel": 3,
    "categories": [
      "Misc / Universal"
    ],
    "effect": "対応MODのデータに基づく効果（Knowledge Of The Ages）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Misc / Universal",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "apothic_enchanting:life_mending",
    "nameJa": "生命修繕",
    "nameEn": "Life Mending",
    "modId": "apothic_enchanting",
    "modName": "Apothic Enchanting",
    "maxLevel": 3,
    "maxLootLevel": 3,
    "categories": [
      "Misc / Universal"
    ],
    "effect": "対応MODのデータに基づく効果（Life Mending）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Misc / Universal",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "evilcraft:life_stealing",
    "nameJa": "生命奪取",
    "nameEn": "Life Stealing",
    "modId": "evilcraft",
    "modName": "EvilCraft",
    "maxLevel": 6,
    "maxLootLevel": 3,
    "categories": [
      "Misc / Universal"
    ],
    "effect": "対応MODのデータに基づく効果（Life Stealing）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Misc / Universal",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "undergarden:longevity",
    "nameJa": "長寿",
    "nameEn": "Longevity",
    "modId": "undergarden",
    "modName": "The Undergarden",
    "maxLevel": 7,
    "maxLootLevel": 3,
    "categories": [
      "Misc / Universal"
    ],
    "effect": "対応MODのデータに基づく効果（Longevity）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Misc / Universal",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "minecraft:looting",
    "nameJa": "ドロップ増加",
    "nameEn": "Looting",
    "modId": "minecraft",
    "modName": "Minecraft",
    "maxLevel": 8,
    "maxLootLevel": 3,
    "categories": [
      "Sword / Melee"
    ],
    "effect": "Mobのドロップ数・確率を増加",
    "curse": false,
    "treasure": "unknown",
    "availability": "normal",
    "obtain": [
      "Enchanting Table",
      "Villager",
      "Loot"
    ],
    "conflicts": [],
    "supportedItems": "Sword / Melee",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "minecraft:loyalty",
    "nameJa": "忠誠",
    "nameEn": "Loyalty",
    "modId": "minecraft",
    "modName": "Minecraft",
    "maxLevel": 9,
    "maxLootLevel": 3,
    "categories": [
      "Trident"
    ],
    "effect": "投げたトライデントが手元へ戻る",
    "curse": false,
    "treasure": "unknown",
    "availability": "normal",
    "obtain": [
      "Enchanting Table",
      "Villager",
      "Loot"
    ],
    "conflicts": [
      "激流"
    ],
    "supportedItems": "Trident",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "minecraft:luck_of_the_sea",
    "nameJa": "宝釣り",
    "nameEn": "Luck Of The Sea",
    "modId": "minecraft",
    "modName": "Minecraft",
    "maxLevel": 8,
    "maxLootLevel": 3,
    "categories": [
      "Fishing Rod"
    ],
    "effect": "釣りで宝が釣れる確率を増加",
    "curse": false,
    "treasure": "unknown",
    "availability": "normal",
    "obtain": [
      "Enchanting Table",
      "Villager",
      "Loot"
    ],
    "conflicts": [],
    "supportedItems": "Fishing Rod",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "minecraft:lure",
    "nameJa": "入れ食い",
    "nameEn": "Lure",
    "modId": "minecraft",
    "modName": "Minecraft",
    "maxLevel": 8,
    "maxLootLevel": 3,
    "categories": [
      "Fishing Rod"
    ],
    "effect": "魚が食いつくまでの時間を短縮",
    "curse": false,
    "treasure": "unknown",
    "availability": "normal",
    "obtain": [
      "Enchanting Table",
      "Villager",
      "Loot"
    ],
    "conflicts": [],
    "supportedItems": "Fishing Rod",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "tombstone:magic_siphon",
    "nameJa": "魔力吸収",
    "nameEn": "Magic Siphon",
    "modId": "tombstone",
    "modName": "Corail Tombstone",
    "maxLevel": 13,
    "maxLootLevel": 10,
    "categories": [
      "Misc / Universal"
    ],
    "effect": "対応MODのデータに基づく効果（Magic Siphon）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Misc / Universal",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "ars_nouveau:mana_boost",
    "nameJa": "（日本語訳）Mana Boost",
    "nameEn": "Mana Boost",
    "modId": "ars_nouveau",
    "modName": "Ars Nouveau",
    "maxLevel": 7,
    "maxLootLevel": 3,
    "categories": [
      "Misc / Universal"
    ],
    "effect": "対応MODのデータに基づく効果（Mana Boost）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Misc / Universal",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "ars_nouveau:mana_regen",
    "nameJa": "（日本語訳）Mana Regen",
    "nameEn": "Mana Regen",
    "modId": "ars_nouveau",
    "modName": "Ars Nouveau",
    "maxLevel": 7,
    "maxLootLevel": 3,
    "categories": [
      "Misc / Universal"
    ],
    "effect": "対応MODのデータに基づく効果（Mana Regen）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Misc / Universal",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "minecraft:mending",
    "nameJa": "修繕",
    "nameEn": "Mending",
    "modId": "minecraft",
    "modName": "Minecraft",
    "maxLevel": 1,
    "maxLootLevel": 1,
    "categories": [
      "Universal"
    ],
    "effect": "経験値を使って耐久値を修繕",
    "curse": false,
    "treasure": "unknown",
    "availability": "normal",
    "obtain": [
      "Enchanting Table",
      "Villager",
      "Loot"
    ],
    "conflicts": [
      "無限"
    ],
    "supportedItems": "Universal",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "apothic_enchanting:miners_fervor",
    "nameJa": "鉱夫の熱情",
    "nameEn": "Miners Fervor",
    "modId": "apothic_enchanting",
    "modName": "Apothic Enchanting",
    "maxLevel": 1,
    "maxLootLevel": 1,
    "categories": [
      "Misc / Universal"
    ],
    "effect": "対応MODのデータに基づく効果（Miners Fervor）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "inactive",
    "obtain": [
      "入手不可（ATM10のKubeJS条件で無効）"
    ],
    "conflicts": [],
    "supportedItems": "Misc / Universal",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "ars_elemental:mirror_shield",
    "nameJa": "（日本語訳）Mirror Shield",
    "nameEn": "Mirror Shield",
    "modId": "ars_elemental",
    "modName": "Ars Elemental",
    "maxLevel": 7,
    "maxLootLevel": 3,
    "categories": [
      "Armor"
    ],
    "effect": "対応MODのデータに基づく効果（Mirror Shield）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Armor",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "minecraft:multishot",
    "nameJa": "拡散",
    "nameEn": "Multishot",
    "modId": "minecraft",
    "modName": "Minecraft",
    "maxLevel": 1,
    "maxLootLevel": 1,
    "categories": [
      "Crossbow"
    ],
    "effect": "クロスボウから3方向へ同時発射",
    "curse": false,
    "treasure": "unknown",
    "availability": "normal",
    "obtain": [
      "Enchanting Table",
      "Villager",
      "Loot"
    ],
    "conflicts": [
      "貫通"
    ],
    "supportedItems": "Crossbow",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "mysticalagriculture:mystical_enlightenment",
    "nameJa": "神秘の啓示",
    "nameEn": "Mystical Enlightenment",
    "modId": "mysticalagriculture",
    "modName": "Mystical Agriculture",
    "maxLevel": 9,
    "maxLootLevel": 5,
    "categories": [
      "Misc / Universal"
    ],
    "effect": "対応MODのデータに基づく効果（Mystical Enlightenment）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Misc / Universal",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "apothic_enchanting:natures_blessing",
    "nameJa": "（日本語訳）Natures Blessing",
    "nameEn": "Natures Blessing",
    "modId": "apothic_enchanting",
    "modName": "Apothic Enchanting",
    "maxLevel": 7,
    "maxLootLevel": 3,
    "categories": [
      "Misc / Universal"
    ],
    "effect": "対応MODのデータに基づく効果（Natures Blessing）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Misc / Universal",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "the_bumblezone:neurotoxins",
    "nameJa": "神経毒",
    "nameEn": "Neurotoxins",
    "modId": "the_bumblezone",
    "modName": "The Bumblezone",
    "maxLevel": 13,
    "maxLootLevel": 2,
    "categories": [
      "Sword / Melee"
    ],
    "effect": "対応MODのデータに基づく効果（Neurotoxins）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Sword / Melee",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "minecraft:piercing",
    "nameJa": "貫通",
    "nameEn": "Piercing",
    "modId": "minecraft",
    "modName": "Minecraft",
    "maxLevel": 8,
    "maxLootLevel": 4,
    "categories": [
      "Crossbow"
    ],
    "effect": "クロスボウの矢が複数対象を貫通",
    "curse": false,
    "treasure": "unknown",
    "availability": "normal",
    "obtain": [
      "Enchanting Table",
      "Villager",
      "Loot"
    ],
    "conflicts": [
      "拡散"
    ],
    "supportedItems": "Crossbow",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "tombstone:plague_bringer",
    "nameJa": "疫病の運び手",
    "nameEn": "Plague Bringer",
    "modId": "tombstone",
    "modName": "Corail Tombstone",
    "maxLevel": 13,
    "maxLootLevel": 10,
    "categories": [
      "Armor"
    ],
    "effect": "対応MODのデータに基づく効果（Plague Bringer）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Armor",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "evilcraft:poison_tip",
    "nameJa": "毒の穂先",
    "nameEn": "Poison Tip",
    "modId": "evilcraft",
    "modName": "EvilCraft",
    "maxLevel": 7,
    "maxLootLevel": 3,
    "categories": [
      "Sword / Melee"
    ],
    "effect": "対応MODのデータに基づく効果（Poison Tip）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Sword / Melee",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "eternal_starlight:poisoning",
    "nameJa": "毒化",
    "nameEn": "Poisoning",
    "modId": "eternal_starlight",
    "modName": "Eternal Starlight",
    "maxLevel": 8,
    "maxLootLevel": 4,
    "categories": [
      "Sword / Melee"
    ],
    "effect": "対応MODのデータに基づく効果（Poisoning）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Sword / Melee",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "the_bumblezone:potent_poison",
    "nameJa": "強力な毒",
    "nameEn": "Potent Poison",
    "modId": "the_bumblezone",
    "modName": "The Bumblezone",
    "maxLevel": 11,
    "maxLootLevel": 3,
    "categories": [
      "Sword / Melee"
    ],
    "effect": "対応MODのデータに基づく効果（Potent Poison）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Sword / Melee",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "minecraft:power",
    "nameJa": "射撃ダメージ増加",
    "nameEn": "Power",
    "modId": "minecraft",
    "modName": "Minecraft",
    "maxLevel": 9,
    "maxLootLevel": 5,
    "categories": [
      "Bow"
    ],
    "effect": "弓の矢のダメージを増加",
    "curse": false,
    "treasure": "unknown",
    "availability": "normal",
    "obtain": [
      "Enchanting Table",
      "Villager",
      "Loot"
    ],
    "conflicts": [],
    "supportedItems": "Bow",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "minecraft:projectile_protection",
    "nameJa": "飛び道具耐性",
    "nameEn": "Projectile Protection",
    "modId": "minecraft",
    "modName": "Minecraft",
    "maxLevel": 11,
    "maxLootLevel": 4,
    "categories": [
      "Armor"
    ],
    "effect": "飛び道具ダメージを軽減",
    "curse": false,
    "treasure": "unknown",
    "availability": "normal",
    "obtain": [
      "Enchanting Table",
      "Villager",
      "Loot"
    ],
    "conflicts": [
      "ダメージ軽減",
      "火炎耐性",
      "爆発耐性"
    ],
    "supportedItems": "Armor",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "minecraft:protection",
    "nameJa": "ダメージ軽減",
    "nameEn": "Protection",
    "modId": "minecraft",
    "modName": "Minecraft",
    "maxLevel": 8,
    "maxLootLevel": 4,
    "categories": [
      "Armor"
    ],
    "effect": "多くのダメージを軽減",
    "curse": false,
    "treasure": "unknown",
    "availability": "normal",
    "obtain": [
      "Enchanting Table",
      "Villager",
      "Loot"
    ],
    "conflicts": [
      "火炎耐性",
      "爆発耐性",
      "飛び道具耐性"
    ],
    "supportedItems": "Armor",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "minecraft:punch",
    "nameJa": "パンチ",
    "nameEn": "Punch",
    "modId": "minecraft",
    "modName": "Minecraft",
    "maxLevel": 5,
    "maxLootLevel": 2,
    "categories": [
      "Bow"
    ],
    "effect": "弓の矢のノックバックを増加",
    "curse": false,
    "treasure": "unknown",
    "availability": "normal",
    "obtain": [
      "Enchanting Table",
      "Villager",
      "Loot"
    ],
    "conflicts": [],
    "supportedItems": "Bow",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "quarryplus:quarry_pickaxe",
    "nameJa": "採掘機のつるはし",
    "nameEn": "Quarry Pickaxe",
    "modId": "quarryplus",
    "modName": "QuarryPlus",
    "maxLevel": 1,
    "maxLootLevel": 1,
    "categories": [
      "Tool"
    ],
    "effect": "対応MODのデータに基づく効果（Quarry Pickaxe）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Tool",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "minecraft:quick_charge",
    "nameJa": "高速装填",
    "nameEn": "Quick Charge",
    "modId": "minecraft",
    "modName": "Minecraft",
    "maxLevel": 5,
    "maxLootLevel": 3,
    "categories": [
      "Crossbow"
    ],
    "effect": "クロスボウの装填時間を短縮",
    "curse": false,
    "treasure": "unknown",
    "availability": "normal",
    "obtain": [
      "Enchanting Table",
      "Villager",
      "Loot"
    ],
    "conflicts": [],
    "supportedItems": "Crossbow",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "minecolonies:raider_damage_enchant",
    "nameJa": "襲撃者ダメージ強化",
    "nameEn": "Raider Damage Enchant",
    "modId": "minecolonies",
    "modName": "MineColonies",
    "maxLevel": 6,
    "maxLootLevel": 2,
    "categories": [
      "Sword / Melee"
    ],
    "effect": "対応MODのデータに基づく効果（Raider Damage Enchant）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Sword / Melee",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "ars_nouveau:reactive",
    "nameJa": "（日本語訳）Reactive",
    "nameEn": "Reactive",
    "modId": "ars_nouveau",
    "modName": "Ars Nouveau",
    "maxLevel": 8,
    "maxLootLevel": 4,
    "categories": [
      "Misc / Universal"
    ],
    "effect": "対応MODのデータに基づく効果（Reactive）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Misc / Universal",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "apothic_enchanting:rebounding",
    "nameJa": "反発",
    "nameEn": "Rebounding",
    "modId": "apothic_enchanting",
    "modName": "Apothic Enchanting",
    "maxLevel": 5,
    "maxLootLevel": 3,
    "categories": [
      "Sword / Melee"
    ],
    "effect": "対応MODのデータに基づく効果（Rebounding）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Sword / Melee",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "apothic_enchanting:reflective_defenses",
    "nameJa": "反射防御",
    "nameEn": "Reflective Defenses",
    "modId": "apothic_enchanting",
    "modName": "Apothic Enchanting",
    "maxLevel": 7,
    "maxLootLevel": 5,
    "categories": [
      "Armor"
    ],
    "effect": "対応MODのデータに基づく効果（Reflective Defenses）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Armor",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "twilightforest:renewal",
    "nameJa": "再生",
    "nameEn": "Renewal",
    "modId": "twilightforest",
    "modName": "Twilight Forest",
    "maxLevel": 1,
    "maxLootLevel": 1,
    "categories": [
      "Armor"
    ],
    "effect": "対応MODのデータに基づく効果（Renewal）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Armor",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "minecraft:respiration",
    "nameJa": "水中呼吸",
    "nameEn": "Respiration",
    "modId": "minecraft",
    "modName": "Minecraft",
    "maxLevel": 7,
    "maxLootLevel": 3,
    "categories": [
      "Helmet"
    ],
    "effect": "水中で息を長く保つ",
    "curse": false,
    "treasure": "unknown",
    "availability": "normal",
    "obtain": [
      "Enchanting Table",
      "Villager",
      "Loot"
    ],
    "conflicts": [],
    "supportedItems": "Helmet",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "undergarden:ricochet",
    "nameJa": "跳弾",
    "nameEn": "Ricochet",
    "modId": "undergarden",
    "modName": "The Undergarden",
    "maxLevel": 7,
    "maxLootLevel": 3,
    "categories": [
      "Bow / Crossbow"
    ],
    "effect": "対応MODのデータに基づく効果（Ricochet）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Bow / Crossbow",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "minecraft:riptide",
    "nameJa": "激流",
    "nameEn": "Riptide",
    "modId": "minecraft",
    "modName": "Minecraft",
    "maxLevel": 9,
    "maxLootLevel": 3,
    "categories": [
      "Trident"
    ],
    "effect": "水中・雨天時にトライデントと移動",
    "curse": false,
    "treasure": "unknown",
    "availability": "normal",
    "obtain": [
      "Enchanting Table",
      "Villager",
      "Loot"
    ],
    "conflicts": [
      "忠誠"
    ],
    "supportedItems": "Trident",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "apothic_enchanting:scavenger",
    "nameJa": "スカベンジャー",
    "nameEn": "Scavenger",
    "modId": "apothic_enchanting",
    "modName": "Apothic Enchanting",
    "maxLevel": 3,
    "maxLootLevel": 3,
    "categories": [
      "Misc / Universal"
    ],
    "effect": "対応MODのデータに基づく効果（Scavenger）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Misc / Universal",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "deeperdarker:sculk_smite",
    "nameJa": "スカルク特効",
    "nameEn": "Sculk Smite",
    "modId": "deeperdarker",
    "modName": "Deeper and Darker",
    "maxLevel": 10,
    "maxLootLevel": 5,
    "categories": [
      "Sword / Melee"
    ],
    "effect": "対応MODのデータに基づく効果（Sculk Smite）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Sword / Melee",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "undergarden:self_sling",
    "nameJa": "自己投擲",
    "nameEn": "Self Sling",
    "modId": "undergarden",
    "modName": "The Undergarden",
    "maxLevel": 1,
    "maxLootLevel": 1,
    "categories": [
      "Bow / Crossbow"
    ],
    "effect": "対応MODのデータに基づく効果（Self Sling）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Bow / Crossbow",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "reliquary:severing",
    "nameJa": "切断",
    "nameEn": "Severing",
    "modId": "reliquary",
    "modName": "Reliquary Reincarnations",
    "maxLevel": 9,
    "maxLootLevel": 5,
    "categories": [
      "Sword / Melee"
    ],
    "effect": "対応MODのデータに基づく効果（Severing）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Sword / Melee",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "minecraft:sharpness",
    "nameJa": "ダメージ増加",
    "nameEn": "Sharpness",
    "modId": "minecraft",
    "modName": "Minecraft",
    "maxLevel": 9,
    "maxLootLevel": 5,
    "categories": [
      "Sword / Melee"
    ],
    "effect": "近接攻撃ダメージを増加",
    "curse": false,
    "treasure": "unknown",
    "availability": "normal",
    "obtain": [
      "Enchanting Table",
      "Villager",
      "Loot"
    ],
    "conflicts": [
      "アンデッド特効",
      "虫殺し",
      "防具貫通",
      "密度"
    ],
    "supportedItems": "Sword / Melee",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "apothic_enchanting:shield_bash",
    "nameJa": "（日本語訳）Shield Bash",
    "nameEn": "Shield Bash",
    "modId": "apothic_enchanting",
    "modName": "Apothic Enchanting",
    "maxLevel": 7,
    "maxLootLevel": 4,
    "categories": [
      "Armor"
    ],
    "effect": "対応MODのデータに基づく効果（Shield Bash）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Armor",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "minecraft:silk_touch",
    "nameJa": "シルクタッチ",
    "nameEn": "Silk Touch",
    "modId": "minecraft",
    "modName": "Minecraft",
    "maxLevel": 1,
    "maxLootLevel": 1,
    "categories": [
      "Tool"
    ],
    "effect": "ブロックをそのまま回収",
    "curse": false,
    "treasure": "unknown",
    "availability": "normal",
    "obtain": [
      "Enchanting Table",
      "Villager",
      "Loot"
    ],
    "conflicts": [
      "幸運"
    ],
    "supportedItems": "Tool",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "railcraft:smack",
    "nameJa": "強打",
    "nameEn": "Smack",
    "modId": "railcraft",
    "modName": "Railcraft Reborn",
    "maxLevel": 9,
    "maxLootLevel": 4,
    "categories": [
      "Sword / Melee"
    ],
    "effect": "対応MODのデータに基づく効果（Smack）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Sword / Melee",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "minecraft:smite",
    "nameJa": "アンデッド特効",
    "nameEn": "Smite",
    "modId": "minecraft",
    "modName": "Minecraft",
    "maxLevel": 10,
    "maxLootLevel": 5,
    "categories": [
      "Sword / Melee"
    ],
    "effect": "アンデッドへのダメージを増加",
    "curse": false,
    "treasure": "unknown",
    "availability": "normal",
    "obtain": [
      "Enchanting Table",
      "Villager",
      "Loot"
    ],
    "conflicts": [
      "ダメージ増加",
      "虫殺し",
      "防具貫通",
      "密度"
    ],
    "supportedItems": "Sword / Melee",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "forbidden_arcanus:soul_looting",
    "nameJa": "魂の略奪",
    "nameEn": "Soul Looting",
    "modId": "forbidden_arcanus",
    "modName": "Forbidden Arcanus",
    "maxLevel": 8,
    "maxLootLevel": 3,
    "categories": [
      "Misc / Universal"
    ],
    "effect": "対応MODのデータに基づく効果（Soul Looting）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Misc / Universal",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "mysticalagriculture:soul_siphoner",
    "nameJa": "魂の吸収",
    "nameEn": "Soul Siphoner",
    "modId": "mysticalagriculture",
    "modName": "Mystical Agriculture",
    "maxLevel": 9,
    "maxLootLevel": 5,
    "categories": [
      "Misc / Universal"
    ],
    "effect": "対応MODのデータに基づく効果（Soul Siphoner）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Misc / Universal",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "eternal_starlight:soul_snatcher",
    "nameJa": "魂の奪取",
    "nameEn": "Soul Snatcher",
    "modId": "eternal_starlight",
    "modName": "Eternal Starlight",
    "maxLevel": 5,
    "maxLootLevel": 3,
    "categories": [
      "Misc / Universal"
    ],
    "effect": "対応MODのデータに基づく効果（Soul Snatcher）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Misc / Universal",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "minecraft:soul_speed",
    "nameJa": "ソウルスピード",
    "nameEn": "Soul Speed",
    "modId": "minecraft",
    "modName": "Minecraft",
    "maxLevel": 7,
    "maxLootLevel": 3,
    "categories": [
      "Boots"
    ],
    "effect": "ソウルサンド・ソウルソイル上の移動速度を増加",
    "curse": false,
    "treasure": "yes/特殊",
    "availability": "special",
    "obtain": [
      "Loot / 特殊入手"
    ],
    "conflicts": [],
    "supportedItems": "Boots",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "ars_elemental:soulbound",
    "nameJa": "（日本語訳）Soulbound",
    "nameEn": "Soulbound",
    "modId": "ars_elemental",
    "modName": "Ars Elemental",
    "maxLevel": 1,
    "maxLootLevel": 1,
    "categories": [
      "Misc / Universal"
    ],
    "effect": "対応MODのデータに基づく効果（Soulbound）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Misc / Universal",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "tombstone:soulbound",
    "nameJa": "魂の結びつき",
    "nameEn": "Soulbound",
    "modId": "tombstone",
    "modName": "Corail Tombstone",
    "maxLevel": 1,
    "maxLootLevel": 1,
    "categories": [
      "Misc / Universal"
    ],
    "effect": "対応MODのデータに基づく効果（Soulbound）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Misc / Universal",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "tombstone:spectral_bite",
    "nameJa": "霊体の噛みつき",
    "nameEn": "Spectral Bite",
    "modId": "tombstone",
    "modName": "Corail Tombstone",
    "maxLevel": 13,
    "maxLootLevel": 10,
    "categories": [
      "Armor"
    ],
    "effect": "対応MODのデータに基づく効果（Spectral Bite）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Armor",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "tombstone:spectral_conjurer",
    "nameJa": "霊体の召喚者",
    "nameEn": "Spectral Conjurer",
    "modId": "tombstone",
    "modName": "Corail Tombstone",
    "maxLevel": 13,
    "maxLootLevel": 10,
    "categories": [
      "Armor"
    ],
    "effect": "対応MODのデータに基づく効果（Spectral Conjurer）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Armor",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "apothic_enchanting:stable_footing",
    "nameJa": "（日本語訳）Stable Footing",
    "nameEn": "Stable Footing",
    "modId": "apothic_enchanting",
    "modName": "Apothic Enchanting",
    "maxLevel": 1,
    "maxLootLevel": 1,
    "categories": [
      "Armor"
    ],
    "effect": "対応MODのデータに基づく効果（Stable Footing）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Armor",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "supplementaries:stasis",
    "nameJa": "停滞",
    "nameEn": "Stasis",
    "modId": "supplementaries",
    "modName": "Supplementaries",
    "maxLevel": 1,
    "maxLootLevel": 1,
    "categories": [
      "Misc / Universal"
    ],
    "effect": "対応MODのデータに基づく効果（Stasis）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Misc / Universal",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "minecraft:sweeping_edge",
    "nameJa": "範囲ダメージ増加",
    "nameEn": "Sweeping Edge",
    "modId": "minecraft",
    "modName": "Minecraft",
    "maxLevel": 8,
    "maxLootLevel": 3,
    "categories": [
      "Misc / Universal"
    ],
    "effect": "剣の範囲攻撃ダメージを増加",
    "curse": false,
    "treasure": "unknown",
    "availability": "normal",
    "obtain": [
      "Enchanting Table",
      "Villager",
      "Loot"
    ],
    "conflicts": [],
    "supportedItems": "Misc / Universal",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "minecraft:swift_sneak",
    "nameJa": "スニーク速度上昇",
    "nameEn": "Swift Sneak",
    "modId": "minecraft",
    "modName": "Minecraft",
    "maxLevel": 5,
    "maxLootLevel": 3,
    "categories": [
      "Leggings"
    ],
    "effect": "スニーク中の移動速度を増加",
    "curse": false,
    "treasure": "yes/特殊",
    "availability": "special",
    "obtain": [
      "Loot / 特殊入手"
    ],
    "conflicts": [],
    "supportedItems": "Leggings",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "apothic_enchanting:tempting",
    "nameJa": "（日本語訳）Tempting",
    "nameEn": "Tempting",
    "modId": "apothic_enchanting",
    "modName": "Apothic Enchanting",
    "maxLevel": 1,
    "maxLootLevel": 1,
    "categories": [
      "Misc / Universal"
    ],
    "effect": "対応MODのデータに基づく効果（Tempting）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Misc / Universal",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "minecraft:thorns",
    "nameJa": "棘の鎧",
    "nameEn": "Thorns",
    "modId": "minecraft",
    "modName": "Minecraft",
    "maxLevel": 5,
    "maxLootLevel": 3,
    "categories": [
      "Armor"
    ],
    "effect": "攻撃者へ反射ダメージ",
    "curse": false,
    "treasure": "unknown",
    "availability": "normal",
    "obtain": [
      "Enchanting Table",
      "Villager",
      "Loot"
    ],
    "conflicts": [],
    "supportedItems": "Armor",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "minecraft:unbreaking",
    "nameJa": "耐久力",
    "nameEn": "Unbreaking",
    "modId": "minecraft",
    "modName": "Minecraft",
    "maxLevel": 8,
    "maxLootLevel": 3,
    "categories": [
      "Universal"
    ],
    "effect": "耐久値が減りにくくなる",
    "curse": false,
    "treasure": "unknown",
    "availability": "normal",
    "obtain": [
      "Enchanting Table",
      "Villager",
      "Loot"
    ],
    "conflicts": [],
    "supportedItems": "Universal",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "evilcraft:unusing",
    "nameJa": "不使用",
    "nameEn": "Unusing",
    "modId": "evilcraft",
    "modName": "EvilCraft",
    "maxLevel": 1,
    "maxLootLevel": 1,
    "categories": [
      "Misc / Universal"
    ],
    "effect": "対応MODのデータに基づく効果（Unusing）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Misc / Universal",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "minecraft:vanishing_curse",
    "nameJa": "消滅の呪い",
    "nameEn": "Vanishing Curse",
    "modId": "minecraft",
    "modName": "Minecraft",
    "maxLevel": 1,
    "maxLootLevel": 1,
    "categories": [
      "Misc / Universal"
    ],
    "effect": "死亡時にアイテムが消滅",
    "curse": true,
    "treasure": "yes/特殊",
    "availability": "special",
    "obtain": [
      "Loot / 特殊入手"
    ],
    "conflicts": [],
    "supportedItems": "Misc / Universal",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "evilcraft:vengeance",
    "nameJa": "復讐",
    "nameEn": "Vengeance",
    "modId": "evilcraft",
    "modName": "EvilCraft",
    "maxLevel": 8,
    "maxLootLevel": 3,
    "categories": [
      "Sword / Melee"
    ],
    "effect": "対応MODのデータに基づく効果（Vengeance）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Sword / Melee",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "minecraft:wind_burst",
    "nameJa": "ウィンドバースト",
    "nameEn": "Wind Burst",
    "modId": "minecraft",
    "modName": "Minecraft",
    "maxLevel": 8,
    "maxLootLevel": 3,
    "categories": [
      "Mace"
    ],
    "effect": "メイス攻撃後に上方へ跳ね上げる",
    "curse": false,
    "treasure": "unknown",
    "availability": "normal",
    "obtain": [
      "Enchanting Table",
      "Villager",
      "Loot"
    ],
    "conflicts": [],
    "supportedItems": "Mace",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "apothic_enchanting:worker_exploitation",
    "nameJa": "（日本語訳）Worker Exploitation",
    "nameEn": "Worker Exploitation",
    "modId": "apothic_enchanting",
    "modName": "Apothic Enchanting",
    "maxLevel": 1,
    "maxLootLevel": 1,
    "categories": [
      "Misc / Universal"
    ],
    "effect": "対応MODのデータに基づく効果（Worker Exploitation）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Misc / Universal",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "railcraft:wrecking",
    "nameJa": "粉砕",
    "nameEn": "Wrecking",
    "modId": "railcraft",
    "modName": "Railcraft Reborn",
    "maxLevel": 9,
    "maxLootLevel": 5,
    "categories": [
      "Sword / Melee"
    ],
    "effect": "対応MODのデータに基づく効果（Wrecking）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Sword / Melee",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "dungeons_arise:discharge",
    "nameJa": "放電",
    "nameEn": "Discharge",
    "modId": "dungeons_arise",
    "modName": "When Dungeons Arise",
    "maxLevel": 5,
    "maxLootLevel": 3,
    "categories": [
      "Sword / Melee"
    ],
    "effect": "対応MODのデータに基づく効果（Discharge）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Sword / Melee",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "dungeons_arise:ensnaring",
    "nameJa": "絡め取り",
    "nameEn": "Ensnaring",
    "modId": "dungeons_arise",
    "modName": "When Dungeons Arise",
    "maxLevel": 6,
    "maxLootLevel": 4,
    "categories": [
      "Sword / Melee"
    ],
    "effect": "対応MODのデータに基づく効果（Ensnaring）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Sword / Melee",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "dungeons_arise:lolths_curse",
    "nameJa": "ロルスの呪い",
    "nameEn": "Lolths Curse",
    "modId": "dungeons_arise",
    "modName": "When Dungeons Arise",
    "maxLevel": 1,
    "maxLootLevel": 1,
    "categories": [
      "Misc / Universal"
    ],
    "effect": "対応MODのデータに基づく効果（Lolths Curse）。",
    "curse": true,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Misc / Universal",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "dungeons_arise:purification",
    "nameJa": "浄化",
    "nameEn": "Purification",
    "modId": "dungeons_arise",
    "modName": "When Dungeons Arise",
    "maxLevel": 4,
    "maxLootLevel": 3,
    "categories": [
      "Misc / Universal"
    ],
    "effect": "対応MODのデータに基づく効果（Purification）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Misc / Universal",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "tombstone:ruthless_strike",
    "nameJa": "無慈悲な一撃",
    "nameEn": "Ruthless Strike",
    "modId": "tombstone",
    "modName": "Corail Tombstone",
    "maxLevel": 13,
    "maxLootLevel": 10,
    "categories": [
      "Sword / Melee"
    ],
    "effect": "対応MODのデータに基づく効果（Ruthless Strike）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Sword / Melee",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "tombstone:sanctified",
    "nameJa": "聖別",
    "nameEn": "Sanctified",
    "modId": "tombstone",
    "modName": "Corail Tombstone",
    "maxLevel": 13,
    "maxLootLevel": 10,
    "categories": [
      "Armor"
    ],
    "effect": "対応MODのデータに基づく効果（Sanctified）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Armor",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  },
  {
    "id": "dungeons_arise:voltaic_shot",
    "nameJa": "（日本語訳）Voltaic Shot",
    "nameEn": "Voltaic Shot",
    "modId": "dungeons_arise",
    "modName": "When Dungeons Arise",
    "maxLevel": 1,
    "maxLootLevel": 1,
    "categories": [
      "Bow / Crossbow"
    ],
    "effect": "対応MODのデータに基づく効果（Voltaic Shot）。",
    "curse": false,
    "treasure": "unknown",
    "availability": "unknown",
    "obtain": [
      "MOD固有 / Loot・Trade等"
    ],
    "conflicts": [],
    "supportedItems": "Bow / Crossbow",
    "metadataSource": "ATM10 8.2 config/apotheosis/enchantments.cfg"
  }
];

/*
 * Player-facing effect descriptions.
 *
 * The registry/config data above is kept as the inventory of the ATM10 8.2
 * registry.  These descriptions are maintained separately so that an
 * enchantment can be explained without replacing the registry facts with a
 * guessed tooltip.  Vanilla wording follows Minecraft 1.21.1; modded
 * wording was checked against the corresponding 1.21.1 mod resources,
 * source, or official documentation where available.
 */
const EFFECT_OVERRIDES = {
  "minecraft:aqua_affinity": "水中での採掘速度低下を無効化し、陸上に近い速度でブロックを掘れる。水中呼吸や水中移動速度は変わらない。",
  "minecraft:bane_of_arthropods": "クモ・洞窟グモ・シルバーフィッシュ・エンダーマイト・ミツバチなどの虫系Mobへの近接ダメージを増加し、命中時に短時間の移動速度低下を与える。Lvが上がるほどダメージと遅延効果が強くなる。",
  "minecraft:binding_curse": "装備したアイテムを通常のインベントリ操作で外せなくする。死亡するか、クリエイティブなどの特殊な操作を行うまで装備が固定される。",
  "minecraft:blast_protection": "防具に付与すると、爆発によるダメージと爆発ノックバックを軽減する。火炎・落下・飛び道具など別種類のダメージには専用の保護エンチャントが必要。",
  "minecraft:breach": "メイスで攻撃したとき、対象の防具によるダメージ軽減を一部無視する。Lvが上がるほど防具の影響を小さくできる。",
  "minecraft:channeling": "雷雨中、投げたトライデントが命中した対象へ落雷させる。対象の上空が遮られていないことなど、落雷できる天候・場所の条件を満たす必要がある。",
  "minecraft:density": "メイスの落下攻撃で、落下距離に応じた追加ダメージを増加する。高所からのスマッシュほど効果が大きく、Lvが上がると落下距離あたりの追加量が増える。",
  "minecraft:depth_strider": "水中での移動速度低下を軽減する。Lvが上がるほど水中を地上に近い速度で移動でき、最大Lvでは水流の影響も受けにくくなる。",
  "minecraft:efficiency": "適正なツールでブロックを破壊するときの採掘速度を上げる。Lvが高いほど速くなるが、ツールの適正やブロック硬度による制限は残る。",
  "minecraft:feather_falling": "装備中の落下ダメージを軽減し、エンダーパール使用時の自傷ダメージも軽減する。Lvが高いほど軽減量が増える。",
  "minecraft:fire_aspect": "剣でMobを攻撃したとき対象を炎上させ、炎上中に追加の火炎ダメージを与える。Lvが上がるほど炎上時間が延びる。",
  "minecraft:fire_protection": "装備中の火炎・溶岩・マグマブロックなどによるダメージを軽減する。Lvが高いほど軽減量が増えるが、爆発や飛び道具への軽減には別の保護が必要。",
  "minecraft:flame": "弓から放った通常の矢を炎の矢にし、命中した対象や可燃物を炎上させる。炎上しない対象には追加の燃焼効果が発生しない。",
  "minecraft:fortune": "鉱石や作物など、対象ブロックのドロップ数または追加ドロップの抽選を有利にする。ブロックごとに増え方が異なり、シルクタッチとは基本的に併用できない。",
  "minecraft:frost_walker": "水上を歩いたとき、足元周辺の水を一時的な氷へ変える。Lvが高いほど氷へ変えられる範囲が広がり、氷は時間経過で元に戻る。",
  "minecraft:impaling": "トライデントの攻撃が水生Mobへ与えるダメージを増加する。Lvが上がるほど追加ダメージが大きくなる。",
  "minecraft:infinity": "インベントリに通常の矢を1本以上持っていれば、弓の通常矢を消費せずに射撃できる。スペクトラル矢や効果付きの矢は消費され、耐久値は通常どおり減る。",
  "minecraft:knockback": "剣の攻撃で対象を後方へ吹き飛ばす距離を増やす。Lvが上がるほどノックバック距離が伸びる。",
  "minecraft:looting": "剣でMobを倒したときのアイテムドロップ数や追加ドロップの抽選を有利にする。Mobやドロップテーブルによって増加しないアイテムもある。",
  "minecraft:loyalty": "投げたトライデントを一定時間後に使用者の手元へ戻す。Lvが上がるほど帰還が速くなるが、忠誠が付いたトライデントは通常リップタイドと併用できない。",
  "minecraft:luck_of_the_sea": "釣りで宝カテゴリのアイテムが釣れる確率を上げ、ゴミカテゴリの確率を下げる。魚そのものの釣果を直接増やす効果ではない。",
  "minecraft:lure": "釣り糸に魚が食いつくまでの待ち時間を短縮する。Lvが高いほど釣れるまでの時間が短くなり、宝とゴミの抽選比率は変わらない。",
  "minecraft:mending": "拾った経験値オーブを経験値として消費する代わりに、装備中または手に持つ耐久値の減ったアイテムを修繕する。修繕対象が複数ある場合は対象が抽選され、アイテムが完全修理なら通常どおり経験値を受け取る。",
  "minecraft:multishot": "クロスボウを一度発射すると、中央と左右に分かれた3本の投射物を同時に放つ。通常は矢を1本しか消費しないが、貫通とは併用できない。",
  "minecraft:piercing": "クロスボウの矢がMobや盾を貫通し、一直線上の複数対象へ命中できる。Lvが上がるほど貫通できる対象数が増え、マルチショットとは併用できない。",
  "minecraft:power": "弓から放った矢のダメージを増加する。Lvが上がるほど、十分に引き絞った矢の攻撃力が高くなる。",
  "minecraft:projectile_protection": "装備中の矢・トライデント・火球などの飛び道具によるダメージを軽減する。近接・爆発・火炎など別種類のダメージには専用の保護が必要。",
  "minecraft:protection": "装備中の多くの通常ダメージを軽減する。火炎・爆発・飛び道具・落下には専用保護の方が効果的で、同系統の保護エンチャントとは併用できない。",
  "minecraft:punch": "弓の矢が命中した対象を後方へ吹き飛ばす距離を増やす。Lvが上がるほどノックバックが強くなる。",
  "minecraft:quick_charge": "クロスボウの装填に必要な時間を短縮する。Lvが高いほど連射間隔が短くなり、装填完了後の矢の性能は変わらない。",
  "minecraft:respiration": "水中で酸素ゲージが減りにくくなり、息が尽きた後に溺れてダメージを受けるまでの時間も延びる。Lvが高いほど水中活動時間が長くなる。",
  "minecraft:riptide": "水中または雨に濡れているとき、トライデントを投げる代わりに使用者自身を前方へ移動させる。Lvが高いほど移動距離が伸び、忠誠・チャネリングとは併用できない。",
  "minecraft:sharpness": "剣・斧などの近接攻撃で与える通常ダメージを増加する。Lvが上がるほど追加ダメージが増えるが、特定種族への特効ではない。",
  "minecraft:silk_touch": "ブロックを壊したとき、通常のドロップではなくブロック本体を回収できる。対象によっては回収できず、幸運とは基本的に併用できない。",
  "minecraft:smite": "アンデッド系Mobへの近接ダメージを増加する。Lvが上がるほど追加ダメージが大きくなるが、アンデッド以外には通常の攻撃力しか適用されない。",
  "minecraft:soul_speed": "ソウルサンドとソウルソイル上の移動速度を上げる。Lvが高いほど速くなる一方、移動時にブーツの耐久値が減る可能性がある。",
  "minecraft:sweeping_edge": "剣の範囲攻撃で、主対象以外へ与えるスイープダメージを増加する。Lvが上がるほど周囲の対象へ与える割合が高くなる。",
  "minecraft:swift_sneak": "スニーク中の移動速度を上げる。Lvが高いほどしゃがんだまま速く移動できるが、通常歩行速度は変わらない。",
  "minecraft:thorns": "攻撃を受けたとき、攻撃者へ反射ダメージを与える確率がある。Lvが高いほど発動しやすくなるが、発動時は防具の耐久値を余分に消耗する。",
  "minecraft:unbreaking": "アイテムを使用したときに耐久値が減らない確率を上げる。Lvが高いほど長持ちするが、耐久無限にはならない。",
  "minecraft:vanishing_curse": "死亡時にこのエンチャント付きアイテムがドロップせず消滅する。墓や保管系の死亡対策を使っていても、死亡処理時に失われる点に注意。",
  "minecraft:wind_burst": "メイスの落下攻撃を命中させた後、使用者を上方へ跳ね上げる。Lvが上がるほど跳ね上がる力が強くなり、連続スマッシュへつなげやすくなる。",

  "farmersdelight:backstabbing": "Mobの背後から近接攻撃したとき、与えるダメージを増加する。Lvが上がるほど背後攻撃の補正が大きくなり、正面や側面からの攻撃には適用されない。",
  "apothic_enchanting:berserkers_fury": "ダメージを受けると激怒状態になり、戦闘能力を強化する。発動効果は45秒持続し、Lvが上がるほど効果が強くなる。",
  "tombstone:blessing": "攻撃を受けたとき、一定確率で有益なポーション効果を得る。どの効果が選ばれるかはCorail Tombstoneの有益効果設定に依存し、Lvが上がるほど発動しやすくなる。",
  "apothic_enchanting:boon_of_the_earth": "石系ブロックを採掘したとき、通常の採掘ドロップに加えて鉱石が見つかることがある。発動対象や抽選はMODの採掘処理に従い、通常の鉱石採掘を置き換える効果ではない。",
  "evilcraft:breaking": "ツールや武器の耐久値が通常より減りやすくなる。Unbreakingとは逆方向に働くEvilCraftの呪いで、Lvが高いほど消耗が大きい。",
  "apothic_spawners:capturing": "このエンチャント付き武器でMobを倒すと、そのMobのスポーンエッグを落とすことがある。Lvが上がるほど抽選が有利になり、スポーンエッグを持たない特殊Mobでは利用できない場合がある。",
  "deeperdarker:catalysis": "Mobを倒したとき、周囲の適用可能な地面へスカルクを広げることがある。Lvが高いほど広がる量が増えるが、1.21.1系では子どものMobには発動しない。",
  "apothic_enchanting:chainsaw": "斧で木を伐採したとき、幹につながる木全体をまとめて破壊する。通常の斧の採掘対象を超えて木を一括処理するため、耐久値と周囲の葉の状態に注意。",
  "twilightforest:chill_aura": "装備者を攻撃したMobへ、確率で凍結系の効果を与え、攻撃者の装備を消耗させる。発動率はLvに応じて上がり、火の反撃とは競合する。",
  "apothic_enchanting:chromatic": "ハサミで羊の毛を刈ったとき、得られる羊毛をランダムな色へ変える。羊を傷つけずに発動し、Lvに応じたダメージ強化や採掘強化はない。",
  "the_bumblezone:comb_cutter": "ハニカム・巣・養蜂箱・ワックス系ブロックの採掘速度を上げる。BumblezoneのBee Nest / Bee Hiveを壊したときの出力を2倍にする。",
  "apothic_enchanting:crescendo_of_bolts": "クロスボウを一度装填すると、再装填せず追加で発射できる回数を増やす。Lvが上がるほど同じ装填から撃てる回数が増える。",
  "tombstone:curse_of_bones": "攻撃を受けたとき、一定確率で攻撃者へダメージを反射する。防具に付く呪いであり、Lvが上がるほど発動抽選が有利になるが、受ける攻撃そのものを常時無効化する効果ではない。",
  "tombstone:decrepitude": "攻撃した敵の体力を時間経過で割合減少させる。ボスなど一部の対象には効き方が制限される場合があり、Lvが高いほど減少効果が強くなる。",
  "railcraft:destruction": "Railcraftのクラウバーでブロックを叩いたとき、対象周辺をまとめて解体する。クラウバー専用の広域ブロック破壊で、保護対象のブロックは除外される。",
  "twilightforest:destruction": "Twilight Forestの対象ツールでブロックを壊すと、連結したブロックを広い範囲でまとめて破壊する。保護タグに入ったブロックは壊さず、Lvが高いほど採掘時の補正が強くなる。",
  "apothic_enchanting:endless_quiver": "弓やクロスボウで使う矢を消費せず、矢の種類を問わず無限に発射できる。発射後の武器耐久値や、矢そのものに付いた特殊効果の判定は通常どおり。",
  "eternal_starlight:fearless": "恐怖系の状態異常や、それに由来する行動制限を受けにくくする。対象となる効果はEternal Starlight側の恐怖システムに限られ、一般的なノックバックや鈍化を無効化するものではない。",
  "twilightforest:fire_react": "防具の装備者が攻撃を受けたとき、確率で攻撃者を炎上させ、装備の耐久値も消耗させる。発動率と炎上時間はLvに応じて増え、冷気のオーラとは競合する。",
  "tombstone:frostbite": "武器で攻撃した敵を凍結させ、凍結中に追加ダメージを与える。Lvが上がるほど凍結・ダメージ効果が強くなり、対象の耐性やMOD設定の影響を受ける。",
  "apothic_enchanting:growth_serum": "羊の毛を刈ったとき、50%の確率で毛がその場ですぐ再生する。羊の成長速度全般を変える効果ではなく、毛刈り後の再生判定にだけ作用する。",
  "apothic_enchanting:icy_thorns": "装備者を攻撃した相手を短時間遅くする。防具への近接攻撃を受けたときに発動し、Lvが上がるほど遅延効果が強くなる。",
  "railcraft:implosion": "Railcraftのクラウバーで攻撃したとき、クリーパー系Mobへ追加ダメージを与える。通常のMobへの攻撃を一律に強化するエンチャントではない。",
  "tombstone:incurable_wounds": "攻撃した敵が受ける回復量を減らす。再生・回復アイテム・回復系能力などの回復処理を弱め、Lvが高いほど回復阻害が強くなる。",
  "apothic_enchanting:infusion": "通常の戦闘効果を持たない、Apothic Enchantingの注入エンチャント作成用プレースホルダー。付与対象として表示されても、プレイヤー向けの追加能力は発生しない。",
  "apothic_enchanting:knowledge_of_the_ages": "敵を倒したときのドロップを直接経験値へ変換する。アイテムドロップを集める代わりに経験値を得る効果なので、素材収集用の武器とは使い分けが必要。",
  "apothic_enchanting:life_mending": "受けた回復効果の一部を、装備中アイテムの耐久値修理へ回す。回復をそのまま受け取れなくなる場合があり、Lvが高いほど修理側へ回る量が増える。",
  "evilcraft:life_stealing": "武器で与えたダメージの一部を使用者の体力として回復する。回復量は与えたダメージとLvに応じて増え、EvilCraftの設定で最終的な回復倍率を調整できる。",
  "undergarden:longevity": "The Undergardenのスリングショットの最大耐久値を増やす。Lvが高いほどスリングショットを長く使えるが、弾の威力や射程は直接変わらない。",
  "tombstone:magic_siphon": "攻撃した敵から有益なポーション効果を吸収し、使用者へ移すことがある。Lvが高いほど発動しやすく、吸収可能な効果や持続時間はCorail Tombstoneの設定に依存する。",
  "ars_nouveau:mana_boost": "装備者の最大マナ容量を増加する。Lvが上がるほど最大値への加算が増え、Ars Nouveauの呪文をより多く連続使用できる。",
  "ars_nouveau:mana_regen": "装備者のマナ回復速度を上げる。Lvが上がるほど時間あたりの回復量が増えるが、最大マナ容量そのものは増えない。",
  "apothic_enchanting:miners_fervor": "採掘速度を大幅に上げるが、ブロックを即時破壊できないようにする。ATM10ではKubeJS設定で無効化されているため、登録上は存在しても通常プレイの有効な候補ではない。",
  "ars_elemental:mirror_shield": "攻撃を受けたとき、一定確率で飛び道具や魔法系の攻撃を攻撃者へ反射する。反射できるダメージ種別と発動率はArs Elementalの対象タグ・Lv設定に従う。",
  "mysticalagriculture:mystical_enlightenment": "Mystical Agricultureのエッセンス武器でウィザーまたはエンダードラゴンを倒したとき、Awakened Supremiumの素材になるCognizant Dustを追加でドロップさせる。Lvが高いほどボスから得られるダスト量が増える。",
  "apothic_enchanting:natures_blessing": "クワで作物を使うと、骨粉のように成長を進められる。通常の耕地作成や収穫速度を常時変える効果ではなく、作物への使用時に発動する。",
  "the_bumblezone:neurotoxins": "攻撃した非アンデッドMobへ、確率でParalyzed（麻痺）を付与する。アイアンゴーレムとスノーゴーレムは対象外で、体力の高いMobほど麻痺しにくい。",
  "tombstone:plague_bringer": "攻撃した敵へ、Corail Tombstoneの設定で選ばれた不利益なポーション効果を付与する。効果の種類と持続時間は設定・プレイヤーの属性に影響され、Magic Siphonとは通常競合する。",
  "evilcraft:poison_tip": "武器で攻撃した対象へ、一定確率で毒を付与する。Lvが上がるほど毒の持続時間が長くなり、剣だけでなく弓などの武器にも適用できる。",
  "eternal_starlight:poisoning": "武器や矢が命中した対象を毒状態にする。毒の対象・持続時間・発動率はEternal Starlightの装備側実装に従い、毒無効の対象には効果がない。",
  "the_bumblezone:potent_poison": "命中した非アンデッドMobへ毒を付与する。Lvが上がるほど毒の持続時間と毒レベルが上がる。",
  "quarryplus:quarry_pickaxe": "QuarryPlusの採掘機に付与して使う専用エンチャントで、通常の手持ちツールの攻撃力を強化するものではない。採掘機のブロック破壊処理へピッケル相当の採掘判定を与える。",
  "minecolonies:raider_damage_enchant": "MineColoniesの襲撃者・レイダー系Mobへの攻撃ダメージを増加する。通常の敵へのダメージは同じ倍率で増えず、Lvが高いほど対レイダー補正が強くなる。",
  "ars_nouveau:reactive": "アイテムを使ったとき、または防具の装備者が攻撃を受けたとき、刻印した呪文を確率で自動発動する。発動には必要なマナが要り、Lvが上がるほど発動機会が増える。",
  "apothic_enchanting:rebounding": "装備者を近接攻撃した相手を、確率で大きく後方へ吹き飛ばす。防具への近接攻撃に反応し、Lvが上がるほど発動しやすくなる。",
  "apothic_enchanting:reflective_defenses": "盾で攻撃をブロックしたとき、攻撃者へ反射ダメージを与えることがある。Lvが上がるほど反射の発動率・効果が高くなる。",
  "twilightforest:renewal": "手に持ったTwilight Forestのセプターを時間経過で再充填する。セプターのチャージ回復を補助する専用効果で、通常の武器ダメージは増加しない。",
  "undergarden:ricochet": "Undergardenのスリングショットから放った弾をブロック面で跳ね返らせる。壁を利用して曲射でき、Lvが高いほど跳弾の扱える回数や補正が強くなる。",
  "apothic_enchanting:scavenger": "Mobを倒したとき、そのMobのルートテーブルを追加でもう一度抽選することがある。Lvが高いほど追加抽選が発生しやすくなる。",
  "deeperdarker:sculk_smite": "WardenやSculk Centipedeなど、Deeper and Darkerがスカルク系として扱うMobへの攻撃ダメージを増加する。Lvが上がるほど追加ダメージが増えるが、対象外のMobには通常の攻撃力しか適用されない。",
  "undergarden:self_sling": "弾を消費せず、スリングショットで使用者自身を発射する。地面に立っているときだけ発動でき、空中では通常のスリングショット挙動にならない。",
  "reliquary:severing": "攻撃したMobから、Reliquaryで使う部位・素材系のドロップを追加で得る抽選を行う。Lvが高いほど切断系ドロップの抽選が有利になるが、すべてのMobが対象ではない。",
  "apothic_enchanting:shield_bash": "盾で攻撃したときのダメージを強化する。通常の剣や斧の攻撃力には影響せず、Lvが上がるほど盾による打撃が強くなる。",
  "railcraft:smack": "Railcraftのクラウバーで機関車・列車を操作するとき、列車へのブースト効果を強化する。通常のMobへの近接ダメージを一律に上げるエンチャントではない。",
  "forbidden_arcanus:soul_looting": "Mobを倒したとき、そのMobから得られる魂系ドロップの抽選を増やす。対象となる魂や追加量はForbidden Arcanusの魂システムに依存し、通常のアイテムドロップ全般を増やすものではない。",
  "mysticalagriculture:soul_siphoner": "Soulium DaggerでMobを倒したときに集められる魂の量を増やす。Lvごとに魂の取得量が増加し、通常の剣や別の魂収集手段には適用されない。",
  "eternal_starlight:soul_snatcher": "Eternal Starlightの魂を持つ対象を倒したとき、魂系ドロップを追加で得る抽選を行う。発動対象と追加量は同MODの魂ドロップ処理に従い、通常の経験値を直接増やす効果ではない。",
  "ars_elemental:soulbound": "付与したアイテムを死亡時に失わず、プレイヤーへ結び付ける。Corail Tombstoneの同名エンチャントとは別のregistry IDで、適用条件と死亡処理はArs Elemental側に従う。",
  "tombstone:soulbound": "付与したアイテムを死亡時に墓へ送らず、プレイヤーの所持品として保持する。Corail Tombstoneの設定で付与方法や有効化状態が変わる。",
  "tombstone:spectral_bite": "防具の装備者が攻撃を受けたとき、確率で周囲へ範囲攻撃を発生させる。Lvが高いほど発動しやすくなり、単体への反射ダメージだけを行う効果ではない。",
  "tombstone:spectral_conjurer": "防具の装備者が攻撃を受けたとき、確率でSpectral Wolfを召喚する。召喚確率や召喚体の持続はCorail Tombstone側の設定に従う。",
  "apothic_enchanting:stable_footing": "飛行中に発生する採掘速度ペナルティを無効化する。空中での移動速度や飛行能力を追加する効果ではなく、飛行状態でも通常に近い採掘速度を保つ。",
  "supplementaries:stasis": "矢などの投射物を命中地点に留め、通常の飛翔・落下を止める。Supplementariesの対応する投射物と付与対象に限って働き、Mobを拘束するIndustrial ForegoingのStasis Chamberとは別の効果。",
  "apothic_enchanting:tempting": "エンチャント付きアイテムを手に持つと、近くの家畜がそのアイテムを持つプレイヤーへ付いてくる。対象は農場動物に限られ、Lvは誘引範囲や持続の設定に影響する。",
  "evilcraft:unusing": "耐久値が尽きそうなツールや武器を使えなくして、破壊を防ぐ。修理して耐久値を戻すまで再使用できないため、壊れる直前に止まる安全装置として働く。",
  "evilcraft:vengeance": "ツールを使ったとき、Vengeance Spiritを出現させる。呪いなので採掘や使用のたびに敵対的な霊体を呼ぶ危険があり、通常の攻撃力強化ではない。",
  "apothic_enchanting:worker_exploitation": "羊から毛を刈ったときに得られる羊毛を2倍にする代わり、羊へダメージを与える。効率は上がるが、羊を安全に繁殖・維持したい場合にはデメリットになる。",
  "railcraft:wrecking": "Railcraftのクラウバーで攻撃したとき、対象へ追加ダメージを与える。Crowbar専用の攻撃エンチャントで、Lvが高いほど破壊用の打撃が強くなる。",
  "dungeons_arise:discharge": "攻撃が命中した対象へ放電系の追加効果を発生させる。感電可能な対象・距離・発動率はWhen Dungeons Arise側の実装に依存し、雷雨を必要とするチャネリングとは異なる。",
  "dungeons_arise:ensnaring": "矢や攻撃が命中した対象の移動を一時的に遅くする。Lvが上がるほど拘束・減速の効果が強くなり、鈍化無効の対象には効かない。",
  "dungeons_arise:lolths_curse": "攻撃した対象へ、Lolth由来の不利益な効果を付与する呪い。対象や効果の詳細はWhen Dungeons Ariseの敵・武器実装に依存し、通常のダメージ強化ではない。",
  "dungeons_arise:purification": "攻撃命中時に対象の不利益なポーション効果を取り除く。解除できる効果と発動条件はWhen Dungeons Arise側の浄化処理に従う。",
  "tombstone:ruthless_strike": "クリティカルヒットが発生したときの追加ダメージを増加する。Lvが上がるほどクリティカル時の倍率が高くなり、通常攻撃が常時クリティカルになるわけではない。",
  "tombstone:sanctified": "武器の攻撃に聖属性の追加効果を与え、命中時に使用者を少し回復する。アンデッドなど対象の属性によって有効性が変わる場合があり、回復量はLvに応じて増える。",
  "dungeons_arise:voltaic_shot": "弓やクロスボウの射撃が命中したとき、対象へ電撃系の追加ダメージや効果を与える。発動条件と対象はWhen Dungeons Ariseの電撃処理に従い、通常の矢ダメージだけを増やす効果ではない。"
};

ENCHANTMENTS.forEach((record) => {
  if (Object.prototype.hasOwnProperty.call(EFFECT_OVERRIDES, record.id)) {
    record.effect = EFFECT_OVERRIDES[record.id];
  }
});

/*
 * Non-Vanilla effect review for the exact ATM10 8.2 files listed in the
 * CurseForge manifest. These descriptions are intentionally kept separate
 * from the first-pass text above so the evidence-backed review can be audited
 * without losing the previous site work.
 */
const EFFECT_OVERRIDES_REVIEWED = {
  "farmersdelight:backstabbing": "対象の背後から攻撃したとき、与えるダメージをLv1で1.4倍、Lv2で1.6倍にする。正面や横からの通常攻撃にはこの倍率は適用されない。",
  "apothic_enchanting:berserkers_fury": "ダメージを受けると、45秒のクールダウン中でなければ発動する。自分に2.5^Lv相当の自己ダメージを与える代わりに、Resistance・Strength・Speedを25秒付与し、Lv1/2/3で各効果はI/II/III相当になる。",
  "tombstone:blessing": "攻撃を受けたとき、Lv×1%の確率でランダムな有益効果を自分へ付与する。持続時間はLv×2秒で、効果の強さもエンチャントLvに応じた範囲から決まる。",
  "apothic_enchanting:boon_of_the_earth": "ツルハシで石・深層岩・ネザーラック系の鉱石置換対象を採掘すると、鉱石や素材へ置き換える追加ドロップ抽選を行う。石・ネザーラックはLv1〜5で1/2/3/4/5%、深層岩は1.5/3/4.5/6/7.5%の抽選値。",
  "evilcraft:breaking": "攻撃またはブロック破壊時、使用アイテムの耐久を追加で2消耗する抽選がある。発動率は40%抽選にLv/(Lv+1)を掛けた値で、Lv1/2/3では約20/26.7/30%。",
  "apothic_spawners:capturing": "Mobを倒すと、Lv×0.5%（標準設定）の確率で対応するSpawn Eggを追加ドロップする。Spawn Eggが存在しないMobやブラックリスト対象は抽選から除外される。",
  "deeperdarker:catalysis": "プレイヤーが経験値を落とすMobを倒すと、その経験値を消費して倒した地点にスカルク拡散を発生させる。Lvごとに3×Lv個の拡散カーソルを作り、最大8×Lv回更新する。",
  "apothic_enchanting:chainsaw": "斧で木を切ると、隣接してつながったログをキューに入れ、約2tick間隔で同じ木のログを追加破壊する。クリエイティブ中はこの連鎖処理を行わず、通常のツール耐久処理は別途受ける。",
  "twilightforest:chill_aura": "装備者が攻撃を受けると、Lv1/2/3で15/30/45%の確率で攻撃者にFrostedを付与する。持続時間は10秒、強度はLvに応じて上がり、発動時に防具の耐久を2消耗する。",
  "apothic_enchanting:chromatic": "ハサミで羊の毛を刈ると、通常の羊毛を16色のいずれかへランダムに置き換える。羊の種類や染色状態に依存せず、色の選択だけがランダムになる。",
  "the_bumblezone:comb_cutter": "BumblezoneのComb・Luminescent Wax・Ancient Waxと、巣・養蜂箱などを対象に採掘速度を追加する。速度加算は主要対象+13、巣系+3を基準にLvの累乗で計算され、最大50に制限される。Bee NestまたはBee Hive破壊時はLv×3個のHoneycombを追加ドロップする。",
  "apothic_enchanting:crescendo_of_bolts": "クロスボウをリロードすると、Lvごとに追加の矢を1本ずつ同時発射する。Lv1〜5で追加本数は1〜5本となり、生成された追加矢はクリエイティブ専用の回収不可扱いになる。",
  "tombstone:curse_of_bones": "攻撃を受けたとき、Lv×2%の確率でBone Shieldを得る。持続時間はLv1から5秒で、以後Lvごとに2秒増加し、効果中は受けた非爆発・非棘ダメージの一部を軽減し、1以上の攻撃なら軽減相当量を攻撃者へ反射する。",
  "tombstone:decrepitude": "攻撃命中時、対象にDecrepitudeを付与する。持続時間はLv×2秒で、Lvが高いほど効果強度が上がり、時間経過で対象の体力を割合減少させる。",
  "railcraft:destruction": "RailcraftのCrowbarでブロックを壊すと、しゃがんでいない場合に隣接ブロックの破壊を連鎖させる。連鎖の深さは2×Lv+1を基準にし、適正ツール判定・保護判定・イベントキャンセルを通過したブロックだけが対象になる。",
  "twilightforest:destruction": "Twilight ForestのBlock and Chainでブロックを叩くと、命中位置を中心に半径1の3×3範囲から最大12ブロックをまとめて破壊する。対象外タグのブロックは残り、武器としての攻撃力はLvごとに1.5低下する。",
  "apothic_enchanting:endless_quiver": "弓の矢の消費処理を0にし、通常の矢を撃ってもインベントリから矢を減らさない。Infinityとは排他的で、Infinityと同時には付与できない。",
  "eternal_starlight:fearless": "近接攻撃時のノックバックをLv1で+0.5、Lv2で+1.0相当加算し、対象を自分へ引き寄せる突進を行う。引き寄せ速度はLv1で0.1、Lv2で0.3まで（最小0.1）。",
  "twilightforest:fire_react": "装備者が攻撃を受けると、Lv1/2/3で15/30/45%の確率で攻撃者を炎上させる。炎上時間は2/5/8秒で、発動時に防具の耐久を2消耗する。",
  "tombstone:frostbite": "攻撃命中時、対象にFrostbiteを付与する。持続時間はLv1で5秒からLvごとに1秒増え、効果強度もLvに応じて上がるため、対象の移動や凍結耐性に影響し、Fire Aspectとは競合する。",
  "apothic_enchanting:growth_serum": "羊の毛を刈った直後、50%の確率でその羊を再び毛が生えた状態に戻す。1回の毛刈りで再成長判定を行うため、毛刈り回数あたりの収穫効率を上げる。",
  "apothic_enchanting:icy_thorns": "攻撃を受けたとき、攻撃者へSlownessを付与する。発動データ値はLv1/2/3で50/100/150%（100%超は実質常時）で、持続時間は10〜20tick、強度はLvに応じて上がり、Thornsとは競合する。",
  "railcraft:implosion": "Creeperへ与えるダメージにLv×2.5を追加する。対象判定はCreeperに限られ、他のMobへの攻撃力はこのエンチャントだけでは増えない。",
  "tombstone:incurable_wounds": "攻撃命中時、対象にIncurableを付与する。持続時間はLv1で5秒からLvごとに2秒増え、強度もLvに応じて上がり、回復効果を受けにくくする。",
  "apothic_enchanting:infusion": "通常のアイテムへ付与して戦闘や採掘を変えるものではなく、Apothic Enchantingの注入レシピが内部で扱う技術用エンチャント。単独で付けても追加のプレイヤー向け効果はない。",
  "apothic_enchanting:knowledge_of_the_ages": "敵のドロップをアイテムとして落とさず、経験値へ変換する。データ上の変換値はLv1/2/3で25/50/75で、通常のLootingのようにドロップ個数を増やす効果ではない。",
  "apothic_enchanting:life_mending": "受けた回復を耐久値の修理へ回すMending系の効果で、回復量の一部がアイテム耐久の回復に変換される。内部の修理コストはLv1/2/3で2^0/2^1/2^2相当で、Mendingとは競合する。",
  "evilcraft:life_stealing": "攻撃で与えた最終ダメージの10%を攻撃者の体力として回復する。ATM10 8.2で使われるjarの効果データにはLvによる倍率差がなく、攻撃が実際に与えたダメージだけが回復量の基準になる。",
  "undergarden:longevity": "UndergardenのSlingshotの最大耐久を192×(Lv+1)にする。Lv1/2/3では最大耐久384/576/768となり、発射性能や弾の威力は直接変わらない。",
  "tombstone:magic_siphon": "攻撃命中時、対象が持つ有益なステータス効果を1つランダムに選び、攻撃者へ移す。移した効果の持続時間は最大でLv×30秒となり、元の対象からはその効果が取り除かれる。",
  "ars_nouveau:mana_boost": "Ars Nouveauの最大マナをLvごとに25増加させる。Lv1/2/3では最大マナに+25/+50/+75を加え、呪文の威力や回復速度そのものは変更しない。",
  "ars_nouveau:mana_regen": "Ars Nouveauのマナ回復速度へLvごとに2を加算する。Lv1/2/3ではマナ再生ボーナスが+2/+4/+6相当になり、最大マナ容量は変わらない。",
  "apothic_enchanting:miners_fervor": "採掘速度を上げるが即時破壊にはならない。内部の速度値はLv1=12、以後Lvごとに+4.5相当で、ATM10のKubeJSがminecraft:non_treasureから除外しているため、登録は残るが通常の非トレジャー候補ではない。",
  "ars_elemental:mirror_shield": "Ars NouveauのEnchanter's Shieldで呪文投射物を防ぐと、Lv×25%の確率で投射物を反転し、上向き速度0.2を加える。反射時は解決コスト/(Lv×2)のマナを払い、Lv×20tickのクールダウンが発生する。また、ブロック中に背後から受けたSonic Boomは同じ抽選で無効化し、攻撃者へ10ダメージ相当を返してマナ150を消費する。",
  "mysticalagriculture:mystical_enlightenment": "付与したMystical Agricultureのエッセンス武器でWitherまたはEnder Dragonを倒すと、Cognizant Dustを追加ドロップする。ATM10 8.2の設定は有効で、WitherはLv1/2/3で4/5/6個、Ender Dragonは6/8/10個になる。",
  "apothic_enchanting:natures_blessing": "クワで作物へ使う骨粉系の成長処理を補助し、作物の成長判定間隔を短くする。データ上の間隔はLv1/2/3で5/4/3tickで、通常の剣攻撃や土ブロック採掘には効果がない。",
  "the_bumblezone:neurotoxins": "公式説明で非アンデッド（鉄・雪ゴーレムを除く）へ命中時にParalyzedを付与する抽選を行う。基礎確率はmax(100−対象体力,10)%×Lvを基準に高体力ほど下がり、連続失敗で次回倍率が増える。成功時の持続時間はLv×100tickを基準に設定上限までで、武器耐久を4消耗する。",
  "tombstone:plague_bringer": "攻撃命中時、対象へランダムな不利益ステータス効果を1つ付与する。持続時間はLv×2秒で、効果強度はLvに応じて上がり、Magic Siphonとは競合する。",
  "evilcraft:poison_tip": "弓の矢が命中した対象へPoison IIを付与する。最大持続時間はLv1/2/3で2/3/4秒で、近接武器や矢以外の攻撃には適用されない。",
  "eternal_starlight:poisoning": "防具の装備者が攻撃を受けると、攻撃者へPoisonを付与する。持続時間はLv1で2.5秒からLvごとに0.5秒増え、毒の最大強度もLvに応じて上がる。",
  "the_bumblezone:potent_poison": "命中時、非アンデッドの対象へPoisonを付与する。通常処理ではLv1/2/3の持続時間が10/10/15秒、強度がPoison I/II/IIとなり、Stinger Spearでは専用の毒計算に切り替わる。",
  "quarryplus:quarry_pickaxe": "QuarryPlusが機械内部で作る疑似ネザライトピッケルへLv1を付与する技術用マーカー。対応するQuarry・Moverのブロック破壊処理で使用されるが、通常プレイヤーの採掘速度やドロップを直接増やすエンチャントではない。",
  "minecolonies:raider_damage_enchant": "MineColoniesのraiderタグに属する襲撃者へだけダメージ倍率を適用する。実装値はLv1で×1.0、Lv2で×1.2で、通常のMobへのダメージは変わらない。",
  "ars_nouveau:reactive": "刻印した有効なArs Nouveauの呪文を、防具への被弾後、またはアイテムで左クリック・攻撃したときに自動発動する。発動率はLv×25%で、Lv1/2/3/4は25/50/75/100%となり、呪文の刻印データと必要マナが別途必要。",
  "apothic_enchanting:rebounding": "装備者が近接攻撃を受けると、攻撃者が自分から半径2ブロック以内にいる場合に後方へ押し返す。水平押し出しはLv1/2/3で2/4/6、垂直方向は3/6/9相当で、単なる発動率抽選ではない。",
  "apothic_enchanting:reflective_defenses": "盾で攻撃をブロックしたとき、Lv1〜5で15/25/35/45/55%の確率で攻撃を反射する。反射量は元の攻撃を基準に15/30/45/60/75%で、盾で防げない攻撃には適用されない。",
  "twilightforest:renewal": "Twilight ForestのScepterが完全に消耗していると、tickごとに対応するScepter Repair Recipeを確認して再充填を試みる。修理にはExanimate Essenceまたはレシピ指定素材をプレイヤーのインベントリから消費し、通常武器の耐久は修理しない。",
  "undergarden:ricochet": "UndergardenのSlingshotの弾をブロック面で跳ね返す。Lv1/2/3では最大2/3/4回のブロック反射を行い、反射後の速度は半分になって次の面へ進む。",
  "apothic_enchanting:scavenger": "Mobを倒したとき、通常のルート抽選に追加の抽選を行う。追加ルート抽選値はLv1/2/3で2.5/5/7.5%で、必ず同じアイテムが増えるわけではない。",
  "deeperdarker:sculk_smite": "Sculk Smiteの対象タグに属するMobへ、Lvごとに2.5ダメージを追加する。最大Lv5で、対象タグ外のMobには追加ダメージが発生しない。",
  "undergarden:self_sling": "UndergardenのSlingshotを弾なしで使い、地面に立っている使用者自身を引き寄せた照準方向へ発射する。発動時にSlingshotの耐久を1消耗し、空中ではこの自己発射処理を行わない。",
  "reliquary:severing": "プレイヤーがMobを倒したとき、Reliquaryの部位・素材ドロップ用にSevering追加抽選を行う。対象ごとの基礎確率とLvごとの上昇値はドロップテーブルで定義され、一般的な全Lootを一律に増やす効果ではない。Mob Charm Fragmentでは通常のLootingに加え、Severing Lv×3×設定倍率を追加確率へ加算する。",
  "apothic_enchanting:shield_bash": "盾で攻撃したときの追加ダメージをLvごとに3.5加える。Lv1〜4で+3.5/+7/+10.5/+14となり、攻撃1回ごとの盾耐久消耗値は20からLvごとに2ずつ減って14まで下がる。",
  "railcraft:smack": "RailcraftのCrowbarで列車を叩いたとき、列車全体へ速度ブーストを与える。内部の速度加算はLvが上がるほど1.7倍系列で増え、編成車両数による減衰も受けるため、Mobへの近接ダメージ強化ではない。",
  "forbidden_arcanus:soul_looting": "対象タグに属するMobが死亡したとき、Lost Soulの出現率へLv×5%を加算する。通常のアイテムLoot全般ではなく、Forbidden ArcanusのLost Soul対象Mobだけが判定され、出現したLost Soulの4%はEnchanted Lost Soulになる。",
  "mysticalagriculture:soul_siphoner": "Soulium Daggerなど魂収集対応アイテムでMobを倒したとき、Soul Jarへ入る魂量をLvごとに10%増加させる。Lv1/2/3では基礎量の1.1/1.2/1.3倍となり、通常の剣のドロップ量には影響しない。",
  "eternal_starlight:soul_snatcher": "Chain of Soulsによる直接攻撃ダメージへ、Lv1で+0.5、以後Lvごとにさらに+0.5を加える。Chain of Souls以外の武器・攻撃や魂ドロップには適用されない。",
  "ars_elemental:soulbound": "付与したアイテムをプレイヤーの死亡ドロップから回収し、リスポーン時にインベントリへ戻す。Curioにも保持処理があり、Keep InventoryやFake Playerの処理では重複適用しない。",
  "tombstone:soulbound": "死亡時に付与アイテムを通常の死亡ドロップへ残さず、Corail Tombstoneの回収処理でプレイヤーへ戻す。Vanishingとは競合し、Curioのドロップ規則にも保持扱いを追加する。",
  "tombstone:spectral_bite": "防具の装備者が攻撃を受けると、Lv×5%の確率で周囲へSpectral Biteの範囲攻撃を発生させる。攻撃量の基準はLvで、単一の攻撃者へ常時反射するだけの効果ではない。",
  "tombstone:spectral_conjurer": "防具の装備者が攻撃を受けると、Lv×5%の確率でSpectral Wolfを召喚または既存個体を攻撃者へ向ける。召喚体の有効時間はLv×5秒で、周囲に重複したSpectral Wolfがいる場合は追加召喚を抑える。",
  "apothic_enchanting:stable_footing": "飛行中に発生する採掘速度ペナルティを無効化する。空中での移動速度や飛行能力は追加せず、飛行状態でも地上に近い採掘速度を維持する。",
  "supplementaries:stasis": "SupplementariesのSlingshot投射物を無重力にし、弾道の落下を止める。また、対応するBubble Blowerでは狙った置換可能ブロックへBubble Blockを配置する処理を有効にする。",
  "apothic_enchanting:tempting": "手に持つアイテムにこのエンチャントがあると、近くのバニラTemptGoal系の家畜がそのアイテムを持つプレイヤーを追従対象にする。範囲や速度は各動物のTemptGoal側の設定に従い、エンチャントLvは追従範囲を直接変更しない。",
  "evilcraft:unusing": "アイテムの耐久が残り5以内になったとき、攻撃・ブロック破壊・使用を止めて、その境界で耐久を固定する。破壊を防ぐ安全装置だが、修理して耐久を戻すまで再使用できない。",
  "evilcraft:vengeance": "攻撃またはブロック使用時にVengeance Spiritの領域を発生させる。Lv1は1/3の確率、Lv2/3はjarの整数計算上100%で発動し、領域半径は5×Lvになるため、Lvが高いほど敵対的な霊体を呼ぶ危険が大きい。",
  "apothic_enchanting:worker_exploitation": "羊の毛を刈ると羊毛ドロップを2倍にする代わり、羊へ固定2ダメージを与える。収穫量は増えるが、羊を繁殖用に安全に維持したい場合は不利になる。",
  "railcraft:wrecking": "ATM10 8.2で使用されるRailcraft Rebornのjarでは、registry定義は存在するものの実装効果コンポーネントもWRECKING参照フックも確認できない。翻訳文は攻撃力増加を示すが、現行jarで追加ダメージが実際に適用される処理は見つからない。",
  "dungeons_arise:discharge": "攻撃時、装備者のSpeedが最上位（効果Lv5相当）まで上がっていると、対象位置に半径2ブロック・ブロックを壊さない爆発と雷を発生させる。Speedが低い段階ではLv1/2/3で15/30/45%の抽選により6〜8tickのSpeedを重ね、再び放電条件を整える。",
  "dungeons_arise:ensnaring": "攻撃命中時、Lv1〜4で10/20/30/40%の確率で対象を2tickだけSlowness XIにし、対象から4ブロック以内の最大5体へEvoker Fangを出す。ignores_ensnaring predicate対象は除外される。",
  "dungeons_arise:lolths_curse": "攻撃時、プレイヤーを殴ると対象に暗闇を10tick付与し、節足動物を殴ると自分へ4〜8ダメージを返す。節足動物以外には20%で洞窟グモを召喚し、別途30%で自分へRegeneration IIを2〜4tick付与するLv1の呪い。",
  "dungeons_arise:purification": "装備中、PoisonまたはWitherにかかっていると毎tick、Lv1/2/3で0.5/1.0/1.5%の抽選を行う。当選時に両効果を消去し、装備者中心の半径2ブロックにブロック破壊なしの魔法爆発を起こす。",
  "tombstone:ruthless_strike": "クリティカルヒット時のダメージ倍率へLv×15%を加算する。Lv1ならクリティカルダメージが1.15倍、Lv2なら1.30倍相当となり、通常攻撃を自動でクリティカルにはしない。",
  "tombstone:sanctified": "攻撃時、装備者へLv秒のRegenerationを付与し、対象へInstant Healthを適用する。対象がアンデッドなど回復とダメージが反転する対象なら、同じ効果が傷害側として働く。",
  "dungeons_arise:voltaic_shot": "クロスボウから発射した投射物を無重力にして電撃の軌跡を付ける。ブロック命中時は射手起点の半径2、Mob命中時は対象側の半径1のブロックを壊さない爆発を起こし、どちらも小さなノックバックを伴う。"
};

ENCHANTMENTS.forEach((record) => {
  const equipmentTags = [...new Set(
    (Array.isArray(record.categories) ? record.categories : [])
      .flatMap((category) => String(category).split(/\s*\/\s*/))
      .map((category) => category.trim())
      .filter(Boolean),
  )];

  record.equipmentTags = equipmentTags;
  record.categories = equipmentTags;

  if (Object.prototype.hasOwnProperty.call(EFFECT_OVERRIDES_REVIEWED, record.id)) {
    record.effect = EFFECT_OVERRIDES_REVIEWED[record.id];
  }
});

/* Audit trail for the exact ATM10 8.2 CurseForge manifest files used in the review. */
const ENCHANTMENT_INVESTIGATION = {
  pack: { name: "All the Mods 10", version: "8.2", fileId: 8945086, minecraft: "1.21.1", loader: "NeoForge" },
  evidence: "CurseForge manifest project/file IDs, extracted jar data and decompiled 1.21.1 classes; pack overrides were checked separately.",
  mods: {
    farmersdelight: [398521, 8765184],
    apothic_enchanting: [1063926, 8797650],
    tombstone: [243707, 8842741],
    evilcraft: [74610, 8929503],
    apothic_spawners: [986583, 8469405],
    deeperdarker: [659011, 8201775],
    twilightforest: [227639, 7797302],
    the_bumblezone: [362479, 8903075],
    railcraft: [901491, 7393678],
    eternal_starlight: [1080592, 8931080],
    undergarden: [379849, 7862546],
    ars_nouveau: [401955, 8721482],
    ars_elemental: [561470, 8399862],
    mysticalagriculture: [246640, 8796913],
    quarryplus: [282837, 8869793],
    minecolonies: [245506, 8939829],
    reliquary: [241319, 8661878],
    forbidden_arcanus: [309858, 6875895],
    supplementaries: [412082, 8852720],
    dungeons_arise: [442508, 7150870]
  }
};
