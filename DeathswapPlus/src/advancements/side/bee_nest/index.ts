import { Advancement } from 'sandstone'

Advancement('side/bee_nest', {
  display: {
    icon: {
      item: 'minecraft:bee_nest'
    },
    title: {
      text: 'Bee Breaker'
    },
    description: {
      text: 'Break a Bee Nest'
    },
    frame: 'task',
    show_toast: true,
    announce_to_chat: false,
    hidden: true
  },
  criteria: {
    'nest': {
      trigger: 'minecraft:bee_nest_destroyed',
      conditions: {
        block: 'minecraft:bee_nest'
      }
    }
  },
  rewards: {
    experience: 0
  },
  parent: 'deathswapplus:side/root',
  requirements: [
    [
	    'nest'
	  ]
  ]
})