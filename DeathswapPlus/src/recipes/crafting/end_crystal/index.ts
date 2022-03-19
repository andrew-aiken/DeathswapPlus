import { Recipe } from 'sandstone'

Recipe('crafting/end_crystal', {
  type: 'crafting_shaped',
  pattern: [
    'NIN',
    'IDI',
    'NIN'
  ],
  key: {
    D: {
      item: 'minecraft:diamond'
    },
    I: {
      item: 'minecraft:gold_ingot'
    },
    N: {
      item: 'minecraft:gold_nugget'
    }
  },
  result: {
    item: 'minecraft:end_crystal',
    count: 1
  }
})