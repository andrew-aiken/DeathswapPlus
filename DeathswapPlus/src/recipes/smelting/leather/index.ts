import { Recipe } from 'sandstone'

Recipe('smelting/leather', {
  type: 'smelting',
  ingredient: [
    {
      item: 'minecraft:rotten_flesh'
    }
  ],
  cookingtime: 5,
  experience: 0.5,
  result: 'minecraft:leather'
})