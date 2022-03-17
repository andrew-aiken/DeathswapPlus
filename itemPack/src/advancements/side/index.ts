import { Advancement } from 'sandstone'

Advancement('side/root', {
  display: {
    icon: {
      item: 'minecraft:jigsaw'
    },
    title: {
      text: 'Wak',
      color: 'gold',
      bold: true
    },
    description: 'Random stuff',
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