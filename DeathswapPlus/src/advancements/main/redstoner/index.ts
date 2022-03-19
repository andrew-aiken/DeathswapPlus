import { Advancement } from 'sandstone'

Advancement('main/redstoner', {
  display: {
    icon: {
      item: 'minecraft:redstone_block'
    },
    title: {
      text: 'Redstoner'
    },
    description: {
      text: ''
    },
    frame: 'task',
    show_toast: true,
    announce_to_chat: false,
    hidden: false
  },
  criteria: {
    'redstone': {
      trigger: 'minecraft:inventory_changed',
      conditions: {
        items: [
          {
            items: [
              'minecraft:redstone_block'
            ]
          }
        ]
      }
    },
  },
  rewards: {
    experience: 100,
    loot: [
      'deathswap-plus:chests/redstoner'
    ]
  },
  parent: 'deathswap-plus:main/root',
  requirements: [
    [
	    'redstone'
	  ]
  ]
})