import { MCFunction, scoreboard, tellraw } from 'sandstone'

MCFunction('reload', () => {
  tellraw('@a', {"text":"Reloading DeathSwap+","color":"gold"})

  scoreboard.objectives.remove('GameStatus')

  scoreboard.objectives.add('GameStatus', 'dummy')

}, {runOnLoad: true})

/*

execute if entity @e[scores={Select=1}] run execute if entity @e[name=Values,scores={Players=2..}] run scoreboard players set @e[name=Values] GameStart 1

GameStart -> GameStatus

summon armor_stand ~ ~ ~ {CustomName:"{\"text\":\"Values\"}"}

*/
