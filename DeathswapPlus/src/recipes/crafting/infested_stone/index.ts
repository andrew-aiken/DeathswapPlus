import { Recipe } from 'sandstone'

Recipe('crafting/infested_stone', {
  type: 'crafting_shaped',
  pattern: [
    'SSS',
    'SIS',
    'SSS'
  ],
  key: {
    S: [
      {
        item: 'minecraft:cobblestone'
      },
      {
        item: 'minecraft:stone'
      }
    ],
    I: {
      item: 'minecraft:raw_iron'
    }
  },
  result: {item: 'minecraft:infested_stone'}
})