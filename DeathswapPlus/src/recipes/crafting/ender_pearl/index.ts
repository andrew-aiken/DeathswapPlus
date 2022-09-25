import { Recipe } from 'sandstone'

Recipe('crafting/ender_pearl', {
  type: 'crafting_shaped',
  pattern: [
    'SSS',
    'S S',
    'SSS'
  ],
  key: {
    S: {
      item: 'minecraft:glow_ink_sac'
    }
  },
  result: {
    item: 'minecraft:ender_pearl',
    count: 1
  }
})