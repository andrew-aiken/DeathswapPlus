import { Advancement } from 'sandstone'

Advancement('main/eat_totem', {
  display: {
    icon: {
      item: 'minecraft:pufferfish'
    },
    title: {
      text: 'Eat It',
      color: 'yellow'
    },
    description: {
      text: 'Consume your Totem'
    },
    frame: 'goal',
    show_toast: false,
    announce_to_chat: false,
    hidden: false
  },
  criteria: {
    'totem': {
      trigger: 'minecraft:used_totem',
      conditions: {
        item: {
          items: [
            'minecraft:totem_of_undying'
          ]
        }
      }
    }
  },
  rewards: {
    experience: 100
  },
  parent: 'deathswapplus:main/totem',
  requirements: [
    [
	    'totem'
	  ]
  ]
})