import { Recipe } from 'sandstone'

Recipe('smelting/foo_gold_ingot', {
  type: 'smelting',
  ingredient: [
    {
      item: 'minecraft:gold_ore'
    },
    {
      item: 'minecraft:deepslate_gold_ore'
    },
    {
      item: 'minecraft:raw_gold'
    }
  ],
  cookingtime: 20,
  experience: 1.0,
  result: 'minecraft:gold_ingot'
})