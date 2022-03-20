import { MCFunction, execute } from 'sandstone'

MCFunction('deathswaplus/trigger', () => {
  execute.if.entity('@e[scores={Select=1}]').run.functionCmd('deathswapplus:deathswaplus/trigger/setup_game')
  execute.if.entity('@e[scores={Select=2}]').run.functionCmd('deathswapplus:deathswaplus/trigger/settings')
  execute.if.entity('@e[scores={Select=3..}]').run.functionCmd('deathswapplus:deathswaplus/trigger/settings_conf')
})

/*

Select
0 : nothing
1 : Setup & Start game
2 : Settings
3 : Settings configurations

5 : Hide achievements
6 : Show achievements

7 : Deny NetherPortal
8 : Allow NetherPortal

9 : Don't announce swap 
10 : Announce swap 

*/