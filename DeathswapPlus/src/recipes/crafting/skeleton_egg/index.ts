import { Recipe } from 'sandstone'

Recipe('crafting/skeleton_egg', {
  type: 'crafting_shaped',
  pattern: [
    'BBB',
    'BBB',
    'BBB'
  ],
  key: {
    B: {
      item: 'minecraft:bone'
    }
  },
  result: {
    item: 'minecraft:skeleton_spawn_egg',
    count: 3
  }
})