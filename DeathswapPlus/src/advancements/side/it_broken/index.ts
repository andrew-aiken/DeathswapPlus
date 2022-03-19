import { Advancement } from 'sandstone'

Advancement('side/it_broken', {
  display: {
    icon: {
      item: 'minecraft:stick'
    },
    title: {
      text: 'Aww it broke man'
    },
    description: {
      text: 'Break a tool'
    },
    frame: 'goal',
    show_toast: true,
    announce_to_chat: false,
    hidden: true
  },
  criteria: {
    'broken': {
      trigger: 'minecraft:item_durability_changed',
      conditions: {
        durability: 0
      }
    }
  },
  rewards: {
    experience: 0
  },
  parent: 'deathswapplus:side/root',
  requirements: [
    [
	    'broken'
	  ]
  ]
})