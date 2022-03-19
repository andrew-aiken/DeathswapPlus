import { LootTable } from "sandstone";

LootTable('minecraft:entities/bee', {
  type: 'entity',
  pools: [
    {
      rolls: 1,
      bonus_rolls: 0,
      entries: [
        {
          type: 'item',
          name: "minecraft:honey_bottle",
          weight: 3,
          functions: [
            {
              function: 'set_count',
              count: {
                type: "uniform",
                min: 1,
                max: 4
              }
            }
          ]
        }
      ]
    }
  ]
})