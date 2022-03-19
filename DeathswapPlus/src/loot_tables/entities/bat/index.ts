import { LootTable } from "sandstone";

LootTable('minecraft:entities/bat', {
  type: 'entity',
  pools: [
    {
      rolls: 1,
      bonus_rolls: 0,
      entries: [
        {
          type: 'item',
          name: "minecraft:wither_rose",
          weight: 3,
          functions: [
            {
              function: 'set_count',
              count: 1
            }
          ]
        },
        {
          type: 'item',
          name: "minecraft:wither_rose",
          weight: 2,
          functions: [
            {
              function: 'set_count',
              count: 0
            }
          ]
        }
      ]
    }
  ]
})