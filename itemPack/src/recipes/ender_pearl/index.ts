import { Recipe } from 'sandstone'

Recipe('ender_pearl', {
  type: 'crafting_shapeless',
  ingredients: [
    {
      item: 'minecraft:glow_ink_sac'
    }
  ],
  result: {
    item: 'minecraft:ender_pearl',
    count: 1
  }
})