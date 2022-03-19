import { Recipe } from 'sandstone'

Recipe('crafting/string', {
  type: 'crafting_shapeless',
  ingredients: [
    {
      tag: 'minecraft:wool'
    }
  ],
  result: {
    item: 'minecraft:string',
    count: 1
  }
})
