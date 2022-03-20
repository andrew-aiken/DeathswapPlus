import { Advancement } from 'sandstone'

Advancement('side/lie', {
  display: {
    icon: {
      item: 'minecraft:cake'
    },
    title: {
      text: 'The Lie',
      color: 'red'
    },
    description: {
      text: ''
    },
    frame: 'goal',
    show_toast: true,
    announce_to_chat: false,
    hidden: true
  },
  criteria: {
    'cake': {
      trigger: 'minecraft:item_used_on_block',
      conditions: {
        item: {
          items: [
            'minecraft:cake'
          ]
        }    
      }
    }
  },
  rewards: {
    experience: 100
  },
  parent: 'deathswapplus:side/root',
  requirements: [
    [
      'cake'
	  ]
  ]
})