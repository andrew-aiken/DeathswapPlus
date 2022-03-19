import { Advancement } from 'sandstone'

Advancement('side/milky', {
  display: {
    icon: {
      item: 'minecraft:milk_bucket'
    },
    title: {
      text: 'Milky Mommy',
      color: 'white'
    },
    description: {
      text: 'Milk does your body good'
    },
    frame: 'goal',
    show_toast: true,
    announce_to_chat: false,
    hidden: true
  },
  criteria: {
    'milk_bucket': {
      trigger: 'minecraft:consume_item',
      conditions: {
        item: {
          items: [
            'minecraft:milk_bucket'
          ]
        }    
      }
    }
  },
  rewards: {
    experience: -50
  },
  parent: 'deathswap-plus:side/root',
  requirements: [
    [
      'milk_bucket'
	  ]
  ]
})