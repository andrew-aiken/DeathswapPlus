import { LootTable } from "sandstone";

LootTable('chests/gunpowder', {
  pools: [
    {
      rolls: 1,
      bonus_rolls: 0,
      entries: [
        {
          type: 'item',
          name: "minecraft:gunpowder",
          weight: 7,
          functions: [
            {
              function: 'set_count',
              count: {
                type: "uniform",
                min: 5,
                max: 8
              }
            }
          ]
        }
      ]
    }
  ]
})