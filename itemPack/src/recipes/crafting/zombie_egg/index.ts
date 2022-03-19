import { Recipe } from 'sandstone'

Recipe('crafting/zombie_egg', {
  type: 'crafting_shaped',
  pattern: [
    'RRR',
    'RRR',
    'RRR'
  ],
  key: {
    R: {
      item: 'minecraft:rotten_flesh'
    }
  },
  result: {
    item: 'minecraft:zombie_spawn_egg',
    count: 3
  }
})