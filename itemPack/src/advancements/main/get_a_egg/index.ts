import { Advancement } from 'sandstone'

Advancement('main/get_a_egg', {
  display: {
    icon: {
      item: 'minecraft:egg'
    },
    title: {
      text: 'Get an Egg'
    },
    description: {
      text: 'Craft a Mob Egg'
    },
    frame: 'goal',
    show_toast: true,
    announce_to_chat: true,
    hidden: false
  },
  criteria: {
    'creeper': {
      trigger: 'minecraft:inventory_changed',
      conditions: {
        items: [
          {
            items: [
              'minecraft:creeper_spawn_egg'
            ]
          }
        ]
      }
    },
    'zombie': {
      trigger: 'minecraft:inventory_changed',
      conditions: {
        items: [
          {
            items: [
              'minecraft:zombie_spawn_egg'
            ]
          }
        ]
      }
    },
    'skeleton': {
      trigger: 'minecraft:inventory_changed',
      conditions: {
        items: [
          {
            items: [
              'minecraft:skeleton_spawn_egg'
            ]
          }
        ]
      }
    },
    'spider': {
      trigger: 'minecraft:inventory_changed',
      conditions: {
        items: [
          {
            items: [
              'minecraft:spider_spawn_egg'
            ]
          }
        ]
      }
    },
  },
  rewards: {
    experience: 100
  },
  parent: 'deathswap-plus:main/root',
  requirements: [[
	  'creeper',
	  'zombie',
	  'skeleton',
	  'spider'
	]]
})