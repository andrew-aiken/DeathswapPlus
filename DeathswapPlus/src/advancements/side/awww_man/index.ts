import { Advancement } from 'sandstone'

Advancement('side/awww_man', {
  display: {
    icon: {
      item: 'minecraft:player_head',
      nbt: "{SkullOwner:\"CaptainSparklez\"}"
    },
    title: {
      text: 'Awww man',
      color: 'green',
      bold: true
    },
    description: {
      text: 'That was a nice life you had. Shame it had to end at this time time time'
    },
    frame: 'task',
    show_toast: true,
    announce_to_chat: false,
    hidden: true
  },
  criteria: {
    'creeper': {
      trigger: 'minecraft:entity_killed_player',
      conditions: {
        entity: {
          type: 'minecraft:creeper'
        }
      }
    }
  },
  rewards: {
    experience: 0
  },
  parent: 'deathswapplus:side/root',
  requirements: [
    [
	    'creeper'
	  ]
  ]
})