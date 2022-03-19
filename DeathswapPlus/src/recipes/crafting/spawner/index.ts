import { Recipe } from 'sandstone'

Recipe('crafting/spawner', {
  type: 'crafting_shaped',
  pattern: [
    'IiI',
    'iDi',
    'IiI'
  ],
  key: {
    D: {
      item: 'minecraft:diamond'
    },
    i: {
      item: 'minecraft:iron_bars'
    },
    I: {
      item: 'minecraft:iron_ingot'
    }
  },
  result: {
    item: 'minecraft:spawner',
    count: 1
  }
})