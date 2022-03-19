import { Recipe } from 'sandstone'

Recipe('elytra', {
  type: 'crafting_shaped',
  pattern: [
    'FDF',
    'FEF',
    'FRF'
  ],
  key: {
    D: {
      item: 'minecraft:diamond'
    },
    E: {
      item: 'minecraft:emerald'
    },
    F: {
      item: 'minecraft:feather'
    },
    R: {
      item: 'minecraft:firework_rocket'
    }
  },
  result: {
    item: 'minecraft:elytra',
    count: 1
  }
})