import { LootTable } from "sandstone";

LootTable('chests/gold_ingot', {
  pools: [
    {
      rolls: 1,
      bonus_rolls: 0,
      entries: [
        {
          type: 'item',
          name: "minecraft:gold_ingot",
          weight: 7,
          functions: [
            {
              function: 'set_count',
              count: {
                type: "uniform",
                min: 9,
                max: 16
              }
            }
          ]
        }
      ]
    }
  ]
})