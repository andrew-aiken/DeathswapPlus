import { Advancement } from 'sandstone'

Advancement('side/buttered_up', {
  display: {
    icon: {
      item: 'minecraft:gold_ingot'
    },
    title: {
      text: 'Buttered Up',
      color: 'gold',
      bold: true
    },
    description: {
      text: 'Butter yourself up'
    },
    frame: 'goal',
    show_toast: true,
    announce_to_chat: false,
    hidden: true
  },
  criteria: {
    'golden_helmet': {
      trigger: 'minecraft:inventory_changed',
      conditions: {
        items: [
          {
            items: [
              'minecraft:golden_helmet'
            ]
          }
        ]
      }
    },
    'golden_chestplate': {
      trigger: 'minecraft:inventory_changed',
      conditions: {
        items: [
          {
            items: [
              'minecraft:golden_chestplate'
            ]
          }
        ]
      },
    },
    'golden_leggings': {
      trigger: 'minecraft:inventory_changed',
      conditions: {
        items: [
          {
            items: [
              'minecraft:golden_leggings'
            ]
          }
        ]
      },
    },
    'golden_boots': {
      trigger: 'minecraft:inventory_changed',
      conditions: {
        items: [
          {
            items: [
              'minecraft:golden_boots'
            ]
          }
        ]
      },
    }
  },
  rewards: {
    experience: 100,
    function: 'deathswapplus:buttered_up'
  },
  parent: 'deathswapplus:side/root',
  requirements: [
    [
      'golden_helmet'
    ],
    [
      'golden_chestplate'
    ],
    [
      'golden_leggings'
    ],
    [
	    'golden_boots'
	  ]
  ]
})