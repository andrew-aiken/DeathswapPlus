import { Advancement } from 'sandstone'

Advancement('side/monster', {
  display: {
    icon: {
      item: 'minecraft:wither_rose'
    },
    title: {
      text: 'You Monster'
    },
    description: {
      text: 'Evil'
    },
    frame: 'task',
    show_toast: false,
    announce_to_chat: true,
    hidden: true
  },
  criteria: {
    'killer_cat': {
      trigger: 'minecraft:player_killed_entity',
      conditions: {
        entity: {
          type: 'minecraft:cat'
        }
      }
    },
    'killer_dog': {
      trigger: 'minecraft:player_killed_entity',
      conditions: {
        entity: {
          type: 'minecraft:wolf'
        }
      }
    }
  },
  rewards: {
    experience: -500
  },
  parent: 'deathswapplus:side/root',
  requirements: [
    [
	    'killer_cat',
      'killer_dog'

	  ]
  ]
})