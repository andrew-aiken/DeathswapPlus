import { Advancement } from 'sandstone'

Advancement('main/murder', {
  display: {
    icon: {
      item: 'minecraft:player_head'
    },
    title: {
      text: 'First degree Murder',
      color: 'dark_red'
    },
    description: {
      text: 'Kill Another Player'
    },
    frame: 'goal',
    show_toast: true,
    announce_to_chat: true,
    hidden: false
  },
  criteria: {
    'kill': {
      trigger: 'minecraft:player_killed_entity',
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
  parent: 'deathswap-plus:main/root',
  requirements: [
    [
	    'kill'
	  ]
  ]
})