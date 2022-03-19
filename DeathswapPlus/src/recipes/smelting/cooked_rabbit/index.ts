import { Recipe } from 'sandstone'

Recipe('smelting/cooked_rabbit', {
  type: 'smelting',
  ingredient: [
    {
      item: 'minecraft:rabbit'
    }
  ],
  cookingtime: 20,
  experience: 0.35,
  result: 'minecraft:cooked_rabbit'
})