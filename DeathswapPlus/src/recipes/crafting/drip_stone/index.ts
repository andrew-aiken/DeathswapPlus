import { Recipe } from 'sandstone'

Recipe('crafting/pointed_dripstone', {
  type: 'crafting_shaped',
  pattern: [
    'SSS',
    ' S ',
    ' S '
  ],
  key: {
    S: [
      {
        item: 'minecraft:cobblestone'
      },
      {
        item: 'minecraft:stone'
      }
    ]
  },
  result: {
    item: 'minecraft:pointed_dripstone',
    count: 1
  }
})