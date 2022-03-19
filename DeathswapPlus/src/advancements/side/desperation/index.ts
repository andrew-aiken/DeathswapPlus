import { Advancement } from 'sandstone'

Advancement('side/desperation', {
  display: {
    icon: {
      item: 'minecraft:rotten_flesh'
    },
    title: {
      text: 'Desperation'
    },
    description: {
      text: 'Sucks 2 be U'
    },
    frame: 'goal',
    show_toast: false,
    announce_to_chat: true,
    hidden: true
  },
  criteria: {
    'rotten_flesh': {
      trigger: 'minecraft:consume_item',
      conditions: {
        item: {
          items: [
            'minecraft:rotten_flesh'
          ]
        }    
      }
    },
    'puffer_fish': {
      trigger: 'minecraft:consume_item',
      conditions: {
        item: {
          items: [
            'minecraft:dead_bush'
          ]
        }    
      }
    },
    'spider_eye': {
      trigger: 'minecraft:consume_item',
      conditions: {
        item: {
          items: [
            'minecraft:dead_bush'
          ]
        }    
      }
    },
    'poisonous_potato': {
      trigger: 'minecraft:consume_item',
      conditions: {
        item: {
          items: [
            'minecraft:dead_bush'
          ]
        }
      }
    },
    'god_apple': {
      trigger: 'minecraft:consume_item',
      conditions: {
        item: {
          items: [
            'minecraft:enchanted_golden_apple'
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
	    'rotten_flesh',
      'puffer_fish',
      'spider_eye',
      'poisonous_potato',
      'god_apple'
	  ]
  ]
})