import { Recipe } from 'sandstone'

Recipe('tnt', {
  type: 'crafting_shaped',
  pattern: [
    'ggg',
    'gGg',
    'ggg'
  ],
  key: {
    G: {
      item: 'minecraft:golden_apple'
    },
    g: {
      item: 'minecraft:gold_ingot'
    }
  },
  result: {
    item: 'minecraft:totem_of_undying',
    count: 1
  }
})