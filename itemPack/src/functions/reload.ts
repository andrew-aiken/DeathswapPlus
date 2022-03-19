import { MCFunction, say } from 'sandstone'

/*
const villager = MCFunction('villager', () => {
  say("villager killin")
  const villagers = Selector('@e', { type: 'minecraft:villager' })
  kill(villagers)
})
*/

MCFunction('reload', () => {
  say("Reloaded")
}, {runOnLoad: true, runEachTick: false})
