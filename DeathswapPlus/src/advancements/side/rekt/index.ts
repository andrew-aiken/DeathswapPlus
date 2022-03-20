import { Advancement } from 'sandstone'

Advancement('side/rekt', {
  display: {
    icon: {
      item: 'minecraft:player_head',
      "nbt": "{SkullOwner:\"i8MadChicken\"}"
    },
    title: {
      text: 'Rekt',
      color: 'gray'
    },
    description: {
      text: 'Get killed by an iron golem'
    },
    frame: 'task',
    show_toast: false,
    announce_to_chat: true,
    hidden: true
  },
  criteria: {
    'iron_golem': {
      trigger: 'minecraft:entity_killed_player',
      conditions: {
        entity: {
          type: 'minecraft:iron_golem'
        }
      }
    }
  },
  rewards: {
    experience: 0,
    function: 'deathswapplus:advancements/rekt'
  },
  parent: 'deathswapplus:side/root',
  requirements: [
    [
      'iron_golem'
	  ]
  ]
})