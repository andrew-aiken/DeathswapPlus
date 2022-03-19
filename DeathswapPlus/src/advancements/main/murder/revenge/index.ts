import { Advancement } from 'sandstone'

Advancement('main/revenge', {
  display: {
    icon: {
      item: 'minecraft:red_dye'
    },
    title: {
      text: 'Reap what you Sow',
      color: 'red'
    },
    description: {
      text: '*',
      obfuscated: true
    },
    frame: 'challenge',
    show_toast: true,
    announce_to_chat: false,
    hidden: true
  },
  criteria: {
    'death': {
      trigger: 'minecraft:entity_killed_player',
      conditions: {
        entity: {
          type: 'minecraft:player'
        }
      }
    }
  },
  rewards: {
    experience: 150
  },
  parent: 'deathswapplus:main/murder',
  requirements: [
    [
	    'death'
	  ]
  ]
})