import { Recipe } from 'sandstone'

Recipe('smelting/a_cooked_porkchop', {
  type: 'smelting',
  ingredient: [
    {
      item: 'minecraft:porkchop'
    }
  ],
  cookingtime: 20,
  experience: 0.35,
  result: 'minecraft:cooked_porkchop'
})