import { Advancement } from 'sandstone'

Advancement('side/bee', {
  display: {
    icon: {
      item: 'minecraft:bee_spawn_egg'
    },
    title: {
      text: 'Bee Attack'
    },
    description: {
      text: 'Get Attacked by Bees'
    },
    frame: 'task',
    show_toast: true,
    announce_to_chat: false,
    hidden: true
  },
  criteria: {
    'bee': {
      trigger: 'minecraft:entity_hurt_player',
      conditions: {
        damage: {
          source_entity: {
            type: 'minecraft:bee'
          }
        }
      }
    }
  },
  rewards: {
    experience: 0
  },
  parent: 'deathswapplus:side/bee_nest',
  requirements: [
    [
	    'bee'
	  ]
  ]
})