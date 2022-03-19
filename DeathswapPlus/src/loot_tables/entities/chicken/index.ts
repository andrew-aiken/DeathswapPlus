import { LootTable } from "sandstone";

LootTable('minecraft:entities/chicken', {
  type: 'entity',
  pools: [
    {
      rolls: 1,
      bonus_rolls: 0,
      entries: [
        {
          type: 'item',
          name: "minecraft:feather",
          weight: 3,
          functions: [
            {
              function: 'set_count',
              count: {
                type: "uniform",
                min: 1,
                max: 2
              }
            },
            {
              function: 'looting_enchant',
              count: {
                min: 0,
                max: 1
              }
            }
          ]
        }
      ]
    },
    {
      rolls: 1,
      bonus_rolls: 0,
      entries: [
        {
          type: 'item',
          name: "minecraft:chicken",
          weight: 3,
          functions: [
            {
              function: 'furnace_smelt',
              conditions: [
                {
                  condition: 'minecraft:entity_properties',
                  entity: 'this',
                  predicate: {
                    flags: {
                      is_on_fire: true
                    }
                  }
                }
              ]
            },
            {
              function: 'looting_enchant',
              count: {
                min: 0,
                max: 1
              }
            }
          ]
        }
      ]
    },
    {
      rolls: 1,
      bonus_rolls: 0,
      entries: [
        {
          type: 'item',
          name: "minecraft:bone",
          weight: 3,
          functions: [
            {
              function: 'set_count',
              count: {
                type: "uniform",
                min: 0,
                max: 1
              }
            }
          ]
        }
      ]
    }
  ]
})