import { Advancement } from 'sandstone'

Advancement('main/ender_pearl', {
  display: {
    icon: {
      item: 'minecraft:ender_pearl'
    },
    title: {
      text: 'Ender Pearl'
    },
    description: {
      text: 'Collect an Ender Pearl'
    },
    frame: 'task',
    show_toast: true,
    announce_to_chat: false,
    hidden: false
  },
  criteria: {
    'ender_pearl': {
      trigger: 'minecraft:inventory_changed',
      conditions: {
        items: [
          {
            items: [
              'minecraft:ender_pearl'
            ]
          }
        ]
      }
    }
  },
  rewards: {
    experience: 100
  },
  parent: 'deathswap-plus:main/root',
  requirements: [
    [
	    'ender_pearl'
	  ]
  ]
})