import { Recipe } from 'sandstone'

Recipe('crafting/tnt', {
  type: 'crafting_shaped',
  pattern: [
    'SSS',
    'SDS',
    'SSS'
  ],
  key: {
    D: {
      item: 'minecraft:diamond'
    },
    S: {
      item: 'minecraft:sand'
    }
  },
  result: {
    item: 'minecraft:tnt',
    count: 1
  }
})