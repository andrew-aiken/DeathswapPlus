import { LootTable } from "sandstone";

LootTable('minecraft:entities/villager', {
  type: 'entity',
  pools: [
    {
      rolls: 1,
      bonus_rolls: 0,
      entries: [
        {
          type: 'item',
          name: "minecraft:emerald",
          weight: 5,
          functions: [
            {
              function: 'set_count',
              count: 1
            }
          ]
        },
        {
          type: 'item',
          name: "minecraft:emerald",
          weight: 2,
          functions: [
            {
              function: 'set_count',
              count: 2
            }
          ]
        }
      ]
    }
  ]
})