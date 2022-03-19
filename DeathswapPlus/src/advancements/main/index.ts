import { Advancement } from 'sandstone'

Advancement('main/root', {
  display: {
    icon: {
      item: 'minecraft:oak_log'
    },
    title: {
      text: 'DeathSwap+'
    },
    description: '',
    frame: 'challenge',
    show_toast: false,
    announce_to_chat: false,
    hidden: false,
    background: "minecraft:textures/gui/advancements/backgrounds/stone.png"
  },
  criteria: {
    'criteria_name': {
      trigger: "minecraft:tick",
    }
  }
})