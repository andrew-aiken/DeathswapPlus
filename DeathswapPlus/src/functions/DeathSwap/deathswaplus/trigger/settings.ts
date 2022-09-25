import { MCFunction, execute } from 'sandstone'

MCFunction('deathswaplus/trigger/settings', () => {
  execute.if.entity('@e[scores={Select=2}]').run.tellraw('@a', '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
  execute.if.entity('@e[scores={Select=2}]').run.playsound('minecraft:ui.button.click', 'master', '@p', ['~ ~ ~'], 100, 2)

  // center the --settings-- prompt
  execute.if.entity('@e[scores={Select=2}]').run.tellraw('@a', [{"text":"--[","color":"dark_gray","bold":"true"},{"text":"SETTINGS","color":"white","bold":"true"},{"text":"]--","color":"dark_gray","bold":"false"}])

  // Settings //
  execute.if.entity('@e[scores={Select=2}]').run.execute.if.entity('@e[name=Values,scores={S_Achievements=0}]').run.tellraw('@a', [{"text":"Show achievements","color":"gray"},{"text":" [YES]","bold":"true","color":"green","clickEvent":{"action":"run_command","value":"/trigger Select set 5"}}])
  execute.if.entity('@e[scores={Select=2}]').run.execute.if.entity('@e[name=Values,scores={S_Achievements=1}]').run.tellraw('@a', [{"text":"Show achievements","color":"gray"},{"text":" [NO]","bold":"true","color":"red","clickEvent":{"action":"run_command","value":"/trigger Select set 6"}}])

  execute.if.entity('@e[scores={Select=2}]').run.execute.if.entity('@e[name=Values,scores={S_Nether=0}]').run.tellraw('@a', [{"text":"Allow Nether","color":"gray"},{"text":" [YES]","bold":"true","color":"green","clickEvent":{"action":"run_command","value":"/trigger Select set 7"}}])
  execute.if.entity('@e[scores={Select=2}]').run.execute.if.entity('@e[name=Values,scores={S_Nether=1}]').run.tellraw('@a', [{"text":"Allow Nether","color":"gray"},{"text":" [NO]","bold":"true","color":"red","clickEvent":{"action":"run_command","value":"/trigger Select set 8"}}])

  execute.if.entity('@e[scores={Select=2}]').run.execute.if.entity('@e[name=Values,scores={S_AnSwap=0}]').run.tellraw('@a', [{"text":"Announce before Swap?","color":"gray"},{"text":" [YES]","bold":"true","color":"green","clickEvent":{"action":"run_command","value":"/trigger Select set 9"}}])
  execute.if.entity('@e[scores={Select=2}]').run.execute.if.entity('@e[name=Values,scores={S_AnSwap=1}]').run.tellraw('@a', [{"text":"Announce before Swap?","color":"gray"},{"text":" [NO]","bold":"true","color":"red","clickEvent":{"action":"run_command","value":"/trigger Select set 10"}}])

  execute.if.entity('@e[scores={Select=2}]').run.execute.if.entity('@e[name=Values,scores={S_ShowTimer=0}]').run.tellraw('@a', [{"text":"Show the Timer?","color":"gray"},{"text":" [YES]","bold":"true","color":"green","clickEvent":{"action":"run_command","value":"/trigger Select set 11"}}])
  execute.if.entity('@e[scores={Select=2}]').run.execute.if.entity('@e[name=Values,scores={S_ShowTimer=1}]').run.tellraw('@a', [{"text":"Show the Timer?","color":"gray"},{"text":" [NO]","bold":"true","color":"red","clickEvent":{"action":"run_command","value":"/trigger Select set 12"}}])

  execute.if.entity('@e[scores={Select=2}]').run.execute.if.entity('@e[name=Values,scores={S_Hunger=0}]').run.tellraw('@a', [{"text":"Enable Hunger?","color":"gray"},{"text":" [YES]","bold":"true","color":"green","clickEvent":{"action":"run_command","value":"/trigger Select set 13"}}])
  execute.if.entity('@e[scores={Select=2}]').run.execute.if.entity('@e[name=Values,scores={S_Hunger=1}]').run.tellraw('@a', [{"text":"Enable Hunger?","color":"gray"},{"text":" [NO]","bold":"true","color":"red","clickEvent":{"action":"run_command","value":"/trigger Select set 14"}}])

  execute.if.entity('@e[scores={Select=2}]').run.execute.if.entity('@e[name=Values,scores={S_FallDamage=0}]').run.tellraw('@a', [{"text":"Fall Damage?","color":"gray"},{"text":" [YES]","bold":"true","color":"green","clickEvent":{"action":"run_command","value":"/trigger Select set 15"}}])
  execute.if.entity('@e[scores={Select=2}]').run.execute.if.entity('@e[name=Values,scores={S_FallDamage=1}]').run.tellraw('@a', [{"text":"Fall Damage?","color":"gray"},{"text":" [NO]","bold":"true","color":"red","clickEvent":{"action":"run_command","value":"/trigger Select set 16"}}])

  execute.if.entity('@e[scores={Select=2}]').run.execute.if.entity('@e[name=Values,scores={S_FireDamage=0}]').run.tellraw('@a', [{"text":"Fire Damage?","color":"gray"},{"text":" [YES]","bold":"true","color":"green","clickEvent":{"action":"run_command","value":"/trigger Select set 17"}}])
  execute.if.entity('@e[scores={Select=2}]').run.execute.if.entity('@e[name=Values,scores={S_FireDamage=1}]').run.tellraw('@a', [{"text":"Fire Damage?","color":"gray"},{"text":" [NO]","bold":"true","color":"red","clickEvent":{"action":"run_command","value":"/trigger Select set 18"}}])

  execute.if.entity('@e[scores={Select=2}]').run.execute.if.entity('@e[name=Values,scores={S_NaturalRegen=0}]').run.tellraw('@a', [{"text":"Natural Regeneration?","color":"gray"},{"text":" [YES]","bold":"true","color":"green","clickEvent":{"action":"run_command","value":"/trigger Select set 19"}}])
  execute.if.entity('@e[scores={Select=2}]').run.execute.if.entity('@e[name=Values,scores={S_NaturalRegen=1}]').run.tellraw('@a', [{"text":"Natural Regeneration?","color":"gray"},{"text":" [NO]","bold":"true","color":"red","clickEvent":{"action":"run_command","value":"/trigger Select set 20"}}])

  execute.if.entity('@e[scores={Select=2}]').run.execute.if.entity('@e[name=Values,scores={S_DeathSwapPlus=0}]').run.tellraw('@a', [{"text":"DeathSwap+?","color":"gray"},{"text":" [YES]","bold":"true","color":"green","clickEvent":{"action":"run_command","value":"/trigger Select set 21"}}])
  execute.if.entity('@e[scores={Select=2}]').run.execute.if.entity('@e[name=Values,scores={S_DeathSwapPlus=1}]').run.tellraw('@a', [{"text":"DeathSwap+?","color":"gray"},{"text":" [NO]","bold":"true","color":"red","clickEvent":{"action":"run_command","value":"/trigger Select set 22"}}])

  execute.if.entity('@e[scores={Select=2}]').run.execute.if.entity('@e[name=Values,scores={AutoBorder=0}]').run.tellraw('@a', [{"text":"AutoBorder","color":"gray"},{"text":" [YES]","bold":"true","color":"green","clickEvent":{"action":"run_command","value":"/trigger Select set 30"}}])
  execute.if.entity('@e[scores={Select=2}]').run.execute.if.entity('@e[name=Values,scores={AutoBorder=1}]').run.tellraw('@a', [{"text":"AutoBorder","color":"gray"},{"text":" [NO]","bold":"true","color":"red","clickEvent":{"action":"run_command","value":"/trigger Select set 31"}}])

  // TIME STUFF //
  execute.if.entity('@e[scores={Select=2}]').run.execute.if.entity('@e[name=Values,scores={S_TimerCount=600}]').run.tellraw('@a', [{"text":"Timer 0.5 mins","color":"gray"},{"text":" [+]","bold":"true","color":"green","clickEvent":{"action":"run_command","value":"/trigger Select set 41"}},{"text":" [-]","color":"red","bold":"true","clickEvent":{"action":"run_command","value":"/trigger Select set 49"}}])
  execute.if.entity('@e[scores={Select=2}]').run.execute.if.entity('@e[name=Values,scores={S_TimerCount=1200}]').run.tellraw('@a', [{"text":"Timer 1 mins","color":"gray"},{"text":" [+]","bold":"true","color":"green","clickEvent":{"action":"run_command","value":"/trigger Select set 42"}},{"text":" [-]","color":"red","bold":"true","clickEvent":{"action":"run_command","value":"/trigger Select set 40"}}])
  execute.if.entity('@e[scores={Select=2}]').run.execute.if.entity('@e[name=Values,scores={S_TimerCount=2400}]').run.tellraw('@a', [{"text":"Timer 2 mins","color":"gray"},{"text":" [+]","bold":"true","color":"green","clickEvent":{"action":"run_command","value":"/trigger Select set 43"}},{"text":" [-]","color":"red","bold":"true","clickEvent":{"action":"run_command","value":"/trigger Select set 41"}}])
  execute.if.entity('@e[scores={Select=2}]').run.execute.if.entity('@e[name=Values,scores={S_TimerCount=3600}]').run.tellraw('@a', [{"text":"Timer 3 mins","color":"gray"},{"text":" [+]","bold":"true","color":"green","clickEvent":{"action":"run_command","value":"/trigger Select set 44"}},{"text":" [-]","color":"red","bold":"true","clickEvent":{"action":"run_command","value":"/trigger Select set 42"}}])
  execute.if.entity('@e[scores={Select=2}]').run.execute.if.entity('@e[name=Values,scores={S_TimerCount=4800}]').run.tellraw('@a', [{"text":"Timer 4 mins","color":"gray"},{"text":" [+]","bold":"true","color":"green","clickEvent":{"action":"run_command","value":"/trigger Select set 45"}},{"text":" [-]","color":"red","bold":"true","clickEvent":{"action":"run_command","value":"/trigger Select set 43"}}])
  execute.if.entity('@e[scores={Select=2}]').run.execute.if.entity('@e[name=Values,scores={S_TimerCount=6000}]').run.tellraw('@a', [{"text":"Timer 5 mins","color":"gray"},{"text":" [+]","bold":"true","color":"green","clickEvent":{"action":"run_command","value":"/trigger Select set 46"}},{"text":" [-]","color":"red","bold":"true","clickEvent":{"action":"run_command","value":"/trigger Select set 44"}}])
  execute.if.entity('@e[scores={Select=2}]').run.execute.if.entity('@e[name=Values,scores={S_TimerCount=7200}]').run.tellraw('@a', [{"text":"Timer 6 mins","color":"gray"},{"text":" [+]","bold":"true","color":"green","clickEvent":{"action":"run_command","value":"/trigger Select set 47"}},{"text":" [-]","color":"red","bold":"true","clickEvent":{"action":"run_command","value":"/trigger Select set 45"}}])
  execute.if.entity('@e[scores={Select=2}]').run.execute.if.entity('@e[name=Values,scores={S_TimerCount=8400}]').run.tellraw('@a', [{"text":"Timer 7 mins","color":"gray"},{"text":" [+]","bold":"true","color":"green","clickEvent":{"action":"run_command","value":"/trigger Select set 48"}},{"text":" [-]","color":"red","bold":"true","clickEvent":{"action":"run_command","value":"/trigger Select set 46"}}])
  execute.if.entity('@e[scores={Select=2}]').run.execute.if.entity('@e[name=Values,scores={S_TimerCount=9600}]').run.tellraw('@a', [{"text":"Timer 8 mins","color":"gray"},{"text":" [+]","bold":"true","color":"green","clickEvent":{"action":"run_command","value":"/trigger Select set 49"}},{"text":" [-]","color":"red","bold":"true","clickEvent":{"action":"run_command","value":"/trigger Select set 47"}}])
  execute.if.entity('@e[scores={Select=2}]').run.execute.if.entity('@e[name=Values,scores={S_TimerCount=10800}]').run.tellraw('@a', [{"text":"Timer 9 mins","color":"gray"},{"text":" [+]","bold":"true","color":"green","clickEvent":{"action":"run_command","value":"/trigger Select set 40"}},{"text":" [-]","color":"red","bold":"true","clickEvent":{"action":"run_command","value":"/trigger Select set 48"}}])

  execute.if.entity('@e[scores={Select=2}]').run.tellraw('@a', '')
  execute.if.entity('@e[scores={Select=2}]').run.tellraw('@a', [{"text":"Uninstall Datapack","color":"gray"},{"text":" [Click here]","bold":"false","color":"yellow","clickEvent":{"action":"run_command","value":"/trigger Select set 4"}}])
  execute.if.entity('@e[scores={Select=2}]').run.tellraw('@a', [{"text":"Reload","color":"gray"},{"text":" [Click here]","color":"yellow","clickEvent":{"action":"run_command","value":"/trigger Select set 3"}}])
  execute.if.entity('@e[scores={Select=2}]').run.tellraw('@a', [{"text":"Start game","color":"gray"},{"text":" [Click here]","color":"yellow","clickEvent":{"action":"run_command","value":"/trigger Select set 1"}}])

  execute.if.entity('@e[scores={Select=2}]').run.scoreboard.players.set('@e[scores={Select=2}]', 'Select', 0)
})

/*

execute.if.entity('@e[scores={Select=2}]').run.

Open the settings

S_Achievements
0 : yes (default)
1 : no

S_Nether
0 : yes (default)
1 : no

S_AnSwap
0 : yes (default)
1 : no

S_ShowTimer
0 : yes
1 : no (default)

S_Hunger
0 : yes (default)
1 : no

*/