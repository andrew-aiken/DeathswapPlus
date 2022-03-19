import { MCFunction, execute } from 'sandstone'

MCFunction('tick', () => {
  execute.if.entity('@e[type=armor_stand,name=Values,scores={GameStatus=0}]').run.functionCmd('deathswapplus:deathswaplus/lobby')

  execute.if.entity('@e[type=armor_stand,name=Values,scores={GameStatus=1}]').run.functionCmd('deathswapplus:deathswaplus/in_game')
}, {runEachTick: true})


/*

Entity 'Values'
stores scoreboard information

GameStatus
0 : Waiting / Lobby
1 : Started

*/
