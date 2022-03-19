import { Recipe } from 'sandstone'

Recipe('smelting/cooked_salmon', {
  type: 'smelting',
  ingredient: [
    {
      item: 'minecraft:salmon'
    }
  ],
  cookingtime: 20,
  experience: 0.35,
  result: 'minecraft:cooked_salmon'
})