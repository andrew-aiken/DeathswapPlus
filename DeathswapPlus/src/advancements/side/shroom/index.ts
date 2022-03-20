import { Advancement } from 'sandstone'

Advancement('side/shroom', {
  display: {
    icon: {
      item: 'minecraft:warped_fungus'
    },
    title: {
      text: 'Shroom Lord!',
      color: 'dark_green'
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
    'shroom': {
      trigger: 'minecraft:inventory_changed',
      conditions: {
        items: [
          {
            items: [
              'minecraft:red_mushroom'
            ]
          },
          {
            items: [
              'minecraft:brown_mushroom'
            ]
          },
          {
            items: [
              'minecraft:warped_fungus'
            ]
          },
          {
            items: [
              'minecraft:crimson_fungus'
            ]
          }
        ]
      }
    }
  },
  rewards: {
    experience: 1000,
    function: 'deathswapplus:advancements/shroom'
  },
  parent: 'deathswapplus:side/root',
  requirements: [
    [
	    'shroom'
	  ]
  ]
})