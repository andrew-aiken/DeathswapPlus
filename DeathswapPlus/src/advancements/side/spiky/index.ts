import { Advancement } from 'sandstone'

Advancement('side/spiky', {
  display: {
    icon: {
      item: 'minecraft:cactus'
    },
    title: {
      text: 'Spiky!',
      color: 'dark_green'
    },
    description: {
      text: 'Run into a cactus'
    },
    frame: 'goal',
    show_toast: false,
    announce_to_chat: true,
    hidden: true
  },
  criteria: {
    'cactus': {
      trigger: 'minecraft:enter_block',
      conditions: {
        block: 'minecraft:cactus'
      }
    }
  },
  rewards: {
    experience: 1000
  },
  parent: 'deathswap-plus:side/root',
  requirements: [
    [
	    'cactus'
	  ]
  ]
})