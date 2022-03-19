import { Advancement } from 'sandstone'

Advancement('side/bush_camper', {
  display: {
    icon: {
      item: 'minecraft:dead_bush'
    },
    title: {
      text: 'Yay! Deadbush!',
      color: 'green',
      bold: true
    },
    description: {
      text: 'Get a deadbush cause you\'re a noob'
    },
    frame: 'task',
    show_toast: true,
    announce_to_chat: true,
    hidden: true
  },
  criteria: {
    'dead_bush': {
      trigger: 'minecraft:inventory_changed',
      conditions: {
        items: [
          {
            items: [
              'minecraft:dead_bush'
            ]
          }
        ]
      }
    }
  },
  rewards: {
    experience: 100
  },
  parent: 'deathswapplus:side/root',
  requirements: [
    [
	    'dead_bush'
	  ]
  ]
})