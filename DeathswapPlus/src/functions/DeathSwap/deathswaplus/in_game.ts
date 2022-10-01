import { MCFunction, execute } from 'sandstone'

MCFunction('deathswaplus/in_game', () => {
  //say("in_game")

  // Settings //
  execute.if.entity('@e[type=armor_stand,name=Values,scores={GameStatus=1,S_Nether=1}]').run.functionCmd('deathswapplus:deathswaplus/settings/netherportal')
  execute.if.entity('@e[type=armor_stand,name=Values,scores={GameStatus=1,S_Hunger=1}]').run.functionCmd('deathswapplus:deathswaplus/settings/hunger')
  execute.if.entity('@e[type=armor_stand,name=Values,scores={GameStatus=1,S_DeathSwapPlus=0}]').run.functionCmd('deathswapplus:deathswaplus/settings/deathswapplus')

  // Game Functions //
  // timer
  execute.if.entity('@e[type=armor_stand,name=Values,scores={GameStatus=1}]').run.functionCmd('deathswapplus:deathswaplus/timer/timescore')
  // deaths
  execute.if.entity('@e[type=armor_stand,name=Values,scores={GameStatus=1}]').run.functionCmd('deathswapplus:deathswaplus/death')
  // win
  execute.if.entity('@e[type=armor_stand,name=Values,scores={Players=1,PlayersDeath=1..}]').run.functionCmd('deathswapplus:deathswaplus/win')
})
