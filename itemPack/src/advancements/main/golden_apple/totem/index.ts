import { Advancement } from 'sandstone'

Advancement('main/totem', {
  display: {
    icon: {
      item: 'minecraft:totem_of_undying'
    },
    title: {
      text: 'Totem'
    },
    description: {
      text: 'Get a Totem'
    },
    frame: 'goal',
    show_toast: true,
    announce_to_chat: true,
    hidden: false
  },
  criteria: {
    'totem': {
      trigger: 'minecraft:inventory_changed',
      conditions: {
        items: [
          {
            items: [
              'minecraft:totem_of_undying'
            ]
          }
        ]
      }
    }
  },
  rewards: {
    experience: 100
  },
  parent: 'deathswap-plus:main/golden_apple',
  requirements: [
    [
	    'totem'
	  ]
  ]
})