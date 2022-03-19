import { Recipe } from 'sandstone'

Recipe('smelting/cooked_beef', {
  type: 'smelting',
  ingredient: [
    {
      item: 'minecraft:beef'
    }
  ],
  cookingtime: 20,
  experience: 0.35,
  result: 'minecraft:cooked_beef'
})