import { Recipe } from 'sandstone'

Recipe('creeper_egg', {
  type: 'crafting_shaped',
  pattern: [
    'GGG',
    'GGG',
    'GGG'
  ],
  key: {
    G: {
      item: 'minecraft:gunpowder'
    }
  },
  result: {
    item: 'minecraft:creeper_spawn_egg',
    count: 1
  }
})