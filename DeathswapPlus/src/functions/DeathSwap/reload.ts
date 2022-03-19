import { MCFunction, say, scoreboard, Objective  } from 'sandstone'

MCFunction('reload', () => {
  say("Reloaded == ")

  scoreboard
}, {runOnLoad: true})

/*

execute if entity @e[scores={Select=1}] run execute if entity @e[name=Values,scores={Players=2..}] run scoreboard players set @e[name=Values] GameStart 1

*/
