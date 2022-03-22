import { say, MCFunction, execute } from 'sandstone'

MCFunction('deathswaplus/in_game', () => {
  say("in_game")

  // Settings //
  execute.if.entity('@e[type=armor_stand,name=Values,scores={GameStatus=1,S_NetherPortal=1}]').run.functionCmd('deathswapplus:deathswaplus/settings/netherportal')
  execute.if.entity('@e[type=armor_stand,name=Values,scores={GameStatus=1,S_Hunger=1}]').run.functionCmd('deathswapplus:deathswaplus/settings/hunger')
  execute.if.entity('@e[type=armor_stand,name=Values,scores={GameStatus=1,S_DeathSwapPlus=0}]').run.functionCmd('deathswapplus:deathswaplus/settings/deathswapplus')

  // Game Functions //
  // timer
  // deaths
  // win

})