import { MCFunction, say, Objective  } from 'sandstone'

MCFunction('reload', () => {
  say("Reloading DeathSwap+")

  Objective.create('GameStatus', 'dummy')
  //scoreboard
}, {runOnLoad: true})

/*

execute if entity @e[scores={Select=1}] run execute if entity @e[name=Values,scores={Players=2..}] run scoreboard players set @e[name=Values] GameStart 1

GameStart -> GameStatus

summon armor_stand ~ ~ ~ {CustomName:"{\"text\":\"Values\"}"}

*/
