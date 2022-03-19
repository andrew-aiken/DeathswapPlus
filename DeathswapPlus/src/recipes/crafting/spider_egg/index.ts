import { Recipe } from 'sandstone'

Recipe('crafting/spider_egg', {
  type: 'crafting_shaped',
  pattern: [
    'SSS',
    'SSS',
    'SSS'
  ],
  key: {
    S: {
      item: 'minecraft:string'
    }
  },
  result: {
    item: 'minecraft:spider_spawn_egg',
    count: 3
  }
})