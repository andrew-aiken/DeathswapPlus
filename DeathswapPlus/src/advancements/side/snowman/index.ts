import { Advancement } from 'sandstone'

Advancement('side/golden_apple', {
  display: {
    icon: {
      item: 'minecraft:snow_block'
    },
    title: {
      text: 'Olaf',
      color: 'white'
    },
    description: {
      text: 'Do you want to build a snow golem?'
    },
    frame: 'goal',
    show_toast: true,
    announce_to_chat: false,
    hidden: true
  },
  criteria: {
    'snowman': {
      trigger: 'minecraft:summoned_entity',
      conditions: {
        entity: {
          type: 'minecraft:snow_golem'
        }
      }
    }
  },
  rewards: {
    experience: 50
  },
  parent: 'deathswap-plus:side/root',
  requirements: [
    [
	    'snowman'
	  ]
  ]
})