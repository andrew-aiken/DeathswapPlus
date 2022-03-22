import { MCFunction, execute } from 'sandstone'

MCFunction('deathswaplus/trigger', () => {
  execute.if.entity('@e[scores={Select=1}]').run.functionCmd('deathswapplus:deathswaplus/trigger/start_game')
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
15 : No fall damage
16 : Fall damage
17 : Fire damage
18 : No fire damage
19 : Natural regeneration
20 : No natural regeneration
21 : Enable DeathSwap+
22 : Disable DeathSwap+

40 : 0.5 minutes
41 : 1 minutes
42 : 2 minutes
43 : 3 minutes
44 : 4 minutes
45 : 5 minutes
46 : 6 minutes
47 : 7 minutes
48 : 8 minutes
49 : 9 minutes

*/