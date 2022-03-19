import { Advancement } from 'sandstone'

Advancement('side/sticky', {
  display: {
    icon: {
      item: 'minecraft:slime_block'
    },
    title: {
      text: 'Sticky Situation',
      color: 'orange'
    },
    description: {
      text: ''
    },
    frame: 'task',
    show_toast: true,
    announce_to_chat: false,
    hidden: true
  },
  criteria: {
    'honey': {
      trigger: 'minecraft:enter_block',
      conditions: {
        block: 'minecraft:honey_block'
      }
    },
    'cobweb': {
      trigger: 'minecraft:enter_block',
      conditions: {
        block: 'minecraft:cobweb'
      }
    }
  },
  rewards: {
    experience: 0
  },
  parent: 'deathswap-plus:side/root',
  requirements: [
    [
      'honey',
      'cobweb'
	  ]
  ]
})