import { Recipe } from 'sandstone'

Recipe('crafting/chorus_fruit', {
  type: 'crafting_shapeless',
  ingredients: [
    {
      item: 'minecraft:ender_pearl'
    }
  ],
  result: {
    item: 'minecraft:chorus_fruit',
    count: 16
  }
})
