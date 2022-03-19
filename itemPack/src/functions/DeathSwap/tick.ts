import { MCFunction, execute, say } from 'sandstone'

MCFunction('reload', () => {
  execute.if.entity('@e[type=armor_stand,name=Values,scores={GameStart=0}]').run.functionCmd('deathswap-plus:deathswaplus/lobby')

  execute.if.entity('@e[type=armor_stand,name=Values,scores={GameStart=1}]').run.functionCmd('deathswap-plus:deathswaplus/in_game')
}, {runEachTick: true})


/*

Entity 'Values'
stores scoreboard information

GameStart
0 : Waiting / Lobby
1 : Started

*/