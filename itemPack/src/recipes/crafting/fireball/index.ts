import { Recipe } from 'sandstone'

Recipe('crafting/fireball', {
  type: 'crafting_shapeless',
  ingredients: [
    {
      item: 'minecraft:redstone'
    },
    {
      item: 'minecraft:coal'
    },
    {
      item: 'minecraft:gunpowder'
    }
  ],
  result: {
    item: 'minecraft:jigsaw',
    count: 1
  }
})
