import { Recipe } from 'sandstone'

Recipe('smelting/temp_cooked_cod', {
  type: 'smelting',
  ingredient: [
    {
      item: 'minecraft:cod'
    }
  ],
  cookingtime: 20,
  experience: 0.35,
  result: 'minecraft:cooked_cod'
})