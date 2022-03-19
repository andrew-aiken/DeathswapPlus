import { Advancement } from 'sandstone'

Advancement('main/golden_apple', {
  display: {
    icon: {
      item: 'minecraft:golden_apple'
    },
    title: {
      text: 'Golden Apple'
    },
    description: {
      text: 'Get a Golden Apple'
    },
    frame: 'task',
    show_toast: true,
    announce_to_chat: true,
    hidden: false
  },
  criteria: {
    'golden': {
      trigger: 'minecraft:inventory_changed',
      conditions: {
        items: [
          {
            items: [
              'minecraft:golden_apple'
            ]
          }
        ]
      }
    },
    'enchanted_golden': {
      trigger: 'minecraft:inventory_changed',
      conditions: {
        items: [
          {
            items: [
              'minecraft:enchanted_golden_apple'
            ]
          }
        ]
      }
    }
  },
  rewards: {
    experience: 100,
    loot: [
      'deathswapplus:chests/gunpowder'
    ]
  },
  parent: 'deathswapplus:main/root',
  requirements: [
    [
	    'golden',
	    'enchanted_golden'
	  ]
  ]
})