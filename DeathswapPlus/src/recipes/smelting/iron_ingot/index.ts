import { Recipe } from 'sandstone'

Recipe('smelting/iron_ingot', {
  type: 'smelting',
  ingredient: [
    {
      item: 'minecraft:iron_ore'
    },
    {
      item: 'minecraft:deepslate_iron_ore'
    },
    {
      item: 'minecraft:raw_iron'
    }
  ],
  cookingtime: 20,
  experience: 1.0,
  result: 'minecraft:iron_ingot'
})