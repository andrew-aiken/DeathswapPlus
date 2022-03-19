
import { Advancement } from 'sandstone'

Advancement('main/egg_master', {
  display: {
    icon: {
      item: 'minecraft:dragon_egg'
    },
    title: {
      text: 'Egg Master'
    },
    description: {
      text: 'Get all default eggs'
    },
    frame: 'challenge',
    show_toast: true,
    announce_to_chat: true,
    hidden: false
  },
  criteria: {
    'creeper': {
      trigger: 'minecraft:inventory_changed',
      conditions: {
        items: [
          {
            items: [
              'minecraft:creeper_spawn_egg'
            ]
          }
        ]
      }
    },
    'zombie': {
      trigger: 'minecraft:inventory_changed',
      conditions: {
        items: [
          {
            items: [
              'minecraft:zombie_spawn_egg'
            ]
          }
        ]
      }
    },
    'skeleton': {
      trigger: 'minecraft:inventory_changed',
      conditions: {
        items: [
          {
            items: [
              'minecraft:skeleton_spawn_egg'
            ]
          }
        ]
      }
    },
    'spider': {
      trigger: 'minecraft:inventory_changed',
      conditions: {
        items: [
          {
            items: [
              'minecraft:spider_spawn_egg'
            ]
          }
        ]
      }
    },
  },
  rewards: {
    experience: 100,
    loot: [
      'deathswapplus:chests/all_egg_loot'
    ]
  },
  parent: 'deathswapplus:main/get_a_egg',
  requirements: [
    [
      'creeper',
    ],
    [
      'zombie',
    ],
    [
      'skeleton',
    ],
    [
      'spider'
    ]
  ]
})