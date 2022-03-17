import { Advancement } from 'sandstone'

Advancement('side/pickle', {
  display: {
    icon: {
      item: 'minecraft:warped_fungus'
    },
    title: {
      text: 'Pickle',
      color: 'dark_green'
    },
    description: {
      text: ''
    },
    frame: 'goal',
    show_toast: true,
    announce_to_chat: false,
    hidden: true
  },
  criteria: {
    'pickle': {
      trigger: 'minecraft:inventory_changed',
      conditions: {
        items: [
          {
            items: [
              'minecraft:sea_pickle'
            ]
          }
        ]
      }
    }
  },
  rewards: {
    experience: 1000
  },
  parent: 'deathswap-plus:side/root',
  requirements: [
    [
	    'pickle'
	  ]
  ]
})