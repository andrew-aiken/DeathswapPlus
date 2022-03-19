import { Advancement } from 'sandstone'

Advancement('main/mob_rule', {
  display: {
    icon: {
      item: 'minecraft:zombie_head'
    },
    title: {
      text: 'Mob Rule'
    },
    description: {
      text: 'Should have tried peace'
    },
    frame: 'task',
    show_toast: false,
    announce_to_chat: true,
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
    },
    'drowned': {
      trigger: 'minecraft:entity_killed_player',
      conditions: {
        entity: {
          type: 'minecraft:drowned'
        }
      }
    },
    'enderman': {
      trigger: 'minecraft:entity_killed_player',
      conditions: {
        entity: {
          type: 'minecraft:enderman'
        }
      }
    },
    'skeleton': {
      trigger: 'minecraft:entity_killed_player',
      conditions: {
        entity: {
          type: 'minecraft:skeleton'
        }
      }
    },
    'spider': {
      trigger: 'minecraft:entity_killed_player',
      conditions: {
        entity: {
          type: 'minecraft:spider'
        }
      }
    },
    'witch': {
      trigger: 'minecraft:entity_killed_player',
      conditions: {
        entity: {
          type: 'minecraft:witch'
        }
      }
    },
    'zombie': {
      trigger: 'minecraft:entity_killed_player',
      conditions: {
        entity: {
          type: 'minecraft:zombie'
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
      'creeper',
      'drowned',
      'enderman',
      'skeleton',
      'spider',
      'witch',
      'zombie'
	  ]
  ]
})