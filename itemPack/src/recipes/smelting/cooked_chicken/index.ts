import { Recipe } from 'sandstone'

Recipe('smelting/temp_cooked_chicken', {
  type: 'smelting',
  ingredient: [
    {
      item: 'minecraft:chicken'
    }
  ],
  cookingtime: 20,
  experience: 0.35,
  result: 'minecraft:cooked_chicken'
})