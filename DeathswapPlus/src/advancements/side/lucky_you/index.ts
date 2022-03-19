import { Advancement } from 'sandstone'

Advancement('side/lucky_you', {
  display: {
    icon: {
      item: 'minecraft:rabbit_foot'
    },
    title: {
      text: 'Lucky You',
      color: 'gold',
      bold: true
    },
    description: {
      text: ''
    },
    frame: 'challenge',
    show_toast: true,
    announce_to_chat: true,
    hidden: true
  },
  criteria: {
    'rabbit_foot': {
      trigger: 'minecraft:inventory_changed',
      conditions: {
        items: [
          {
            items: [
              'minecraft:rabbit_foot'
            ]
          }
        ]
      }
    }
  },
  rewards: {
    experience: 1000000
  },
  parent: 'deathswapplus:side/root',
  requirements: [
    [
	    'rabbit_foot'
	  ]
  ]
})