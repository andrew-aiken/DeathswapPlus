import { Recipe } from 'sandstone'

Recipe('smelting/cooked_mutton', {
  type: 'smelting',
  ingredient: [
    {
      item: 'minecraft:mutton'
    }
  ],
  cookingtime: 20,
  experience: 0.35,
  result: 'minecraft:cooked_mutton'
})