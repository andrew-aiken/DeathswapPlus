import { MCFunction, execute } from 'sandstone'

MCFunction('deathswaplus/trigger/settings', () => {
  execute.if.entity('@e[scores={Select=2}]').run.tellraw('@a', '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
  execute.if.entity('@e[scores={Select=2}]').run.playsound('minecraft:ui.button.click', 'master', '@p', ['~ ~ ~'], 100, 2)

  // center the --settings-- prompt
  execute.if.entity('@e[scores={Select=2}]').run.tellraw('@a', [{"text":"--[","color":"dark_gray","bold":"true"},{"text":"SETTINGS","color":"white","bold":"true"},{"text":"]--","color":"dark_gray","bold":"false"}])

  // TIME STUFF //
  // HERE

  // Settings //
  execute.if.entity('@e[scores={Select=2}]').run.execute.if.entity('@e[name=Values,scores={S_Achievements=0}]').run.tellraw('@a', [{"text":"Show achievements","color":"gray"},{"text":" [YES]","bold":"true","color":"green","clickEvent":{"action":"run_command","value":"/trigger Select set 5"}}])
  execute.if.entity('@e[scores={Select=2}]').run.execute.if.entity('@e[name=Values,scores={S_Achievements=1}]').run.tellraw('@a', [{"text":"Show achievements","color":"gray"},{"text":" [NO]","bold":"true","color":"red","clickEvent":{"action":"run_command","value":"/trigger Select set 6"}}])

  execute.if.entity('@e[scores={Select=2}]').run.execute.if.entity('@e[name=Values,scores={S_NetherPortal=0}]').run.tellraw('@a', [{"text":"Disable Nether Portal","color":"gray"},{"text":" [YES]","bold":"true","color":"green","clickEvent":{"action":"run_command","value":"/trigger Select set 7"}}])
  execute.if.entity('@e[scores={Select=2}]').run.execute.if.entity('@e[name=Values,scores={S_NetherPortal=1}]').run.tellraw('@a', [{"text":"Disable Nether Portal","color":"gray"},{"text":" [NO]","bold":"true","color":"red","clickEvent":{"action":"run_command","value":"/trigger Select set 8"}}])

  execute.if.entity('@e[scores={Select=2}]').run.execute.if.entity('@e[name=Values,scores={S_AnSwap=0}]').run.tellraw('@a', [{"text":"Announce before Swap?","color":"gray"},{"text":" [YES]","bold":"true","color":"green","clickEvent":{"action":"run_command","value":"/trigger Select set 9"}}])
  execute.if.entity('@e[scores={Select=2}]').run.execute.if.entity('@e[name=Values,scores={S_AnSwap=1}]').run.tellraw('@a', [{"text":"Announce before Swap?","color":"gray"},{"text":" [NO]","bold":"true","color":"red","clickEvent":{"action":"run_command","value":"/trigger Select set 10"}}])


  execute.if.entity('@e[scores={Select=2}]').run.scoreboard.players.set('@e[scores={Select=2}]', 'Select', 0)
})

/*

execute.if.entity('@e[scores={Select=2}]').run.

Open the settings

S_Achievements
0 : yes
1 : no

*/