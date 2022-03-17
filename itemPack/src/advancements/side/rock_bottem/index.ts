import { Advancement } from 'sandstone'

Advancement('side/rock_bottom', {
  display: {
    icon: {
      item: 'minecraft:bedrock'
    },
    title: {
      text: 'Rock Bottom',
      color: 'bark_gray'
    },
    description: {
      text: 'Dig down to the bottom of the world'
    },
    frame: 'challenge',
    show_toast: true,
    announce_to_chat: false,
    hidden: true
  },
  criteria: {
    'bedrock_level': {
      trigger: 'minecraft:location',
      conditions: {
        location: {
          position: {
            y: {
              max: -60
            }
          }
        }
      }
    }
  },
  rewards: {
    experience: 150
  },
  parent: 'deathswap-plus:side/root',
  requirements: [
    [
      'bedrock_level'
	  ]
  ]
})