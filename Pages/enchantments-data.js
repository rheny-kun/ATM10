/* ATM10 8.2 / Minecraft 1.21.1 / NeoForge
 * Registry/config: AllTheMods/ATM-10 commit e5e3d1d83ec6885bb9a5e9fb309fb8e9730db025
 * 117 entries; miners_fervor is retained as inactive because ATM10 KubeJS disables it.
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
