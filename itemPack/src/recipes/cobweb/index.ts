import { Recipe } from 'sandstone'

Recipe('cobweb', {
  type: 'crafting_shaped',
  pattern: [
    'S S',
    ' S ',
    'S S'
  ],
  key: {
    S: {
      item: 'minecraft:string'
    }
  },
  result: {item: 'minecraft:cobweb'}
})