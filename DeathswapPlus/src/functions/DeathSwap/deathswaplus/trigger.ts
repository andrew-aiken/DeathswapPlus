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
3 : Reload
4 : Uninstall
5 : Hide achievements
6 : Show achievements
7 : Deny NetherPortal
8 : Allow NetherPortal
9 : Don't announce swap
10 : Announce swap
11 : Hide timer
12 : Show timer
13 : Disable hunger
14 : Hunger
20 : 0.5 minutes
21 : 1 minutes
22 : 2 minutes
23 : 3 minutes
24 : 4 minutes
25 : 5 minutes
26 : 6 minutes
27 : 7 minutes
28 : 8 minutes
29 : 9 minutes

*/