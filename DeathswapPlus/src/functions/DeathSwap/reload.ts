import { MCFunction, scoreboard, gamerule, gamemode, advancement, recipe, kill, tellraw, team, summon, forceload, playsound, execute, worldborder, effect } from 'sandstone'

var PlayerTeamCount:number = 16;

MCFunction('reload', () => {
  tellraw('@a', {"text":"Reloading DeathSwap+","color":"green"})

  gamerule('forgiveDeadPlayers', false)
  gamerule('universalAnger', true)
  gamerule('doImmediateRespawn', true)
  gamerule('announceAdvancements', true)
  gamerule('commandBlockOutput', false)
  gamerule('sendCommandFeedback', false)
  gamemode('adventure', '@a')

  effect.clear('@a')

  // Remove objectives & advancement from last game //
  advancement.revoke('@a').everything()
  recipe.give('@a', '*')

  kill('@e[type=minecraft:armor_stand,name=Values]')
  kill('@e[type=minecraft:armor_stand,name=Border]')
  
  scoreboard.objectives.remove('S_AnSwap')
  scoreboard.objectives.remove('Death')
  scoreboard.objectives.remove('S_FallDamage')
  scoreboard.objectives.remove('S_FireDamage')
  scoreboard.objectives.remove('GameStatus')
  scoreboard.objectives.remove('Hearts')
  scoreboard.objectives.remove('S_NaturalRegen')
  scoreboard.objectives.remove('S_DeathSwapPlus')
  scoreboard.objectives.remove('S_Nether')
  scoreboard.objectives.remove('Players')
  scoreboard.objectives.remove('PlayersDeath')
  scoreboard.objectives.remove('S_Achievements')
  scoreboard.objectives.remove('S_Border')
  scoreboard.objectives.remove('S_ShowTimer')
  scoreboard.objectives.remove('S_Hunger')
  scoreboard.objectives.remove('Select')
  scoreboard.objectives.remove('Swap')
  scoreboard.objectives.remove('Time')
  scoreboard.objectives.remove('Timer')
  scoreboard.objectives.remove('S_TimerCount')
  scoreboard.objectives.remove('S_ValidZone')
  scoreboard.objectives.remove('S_ResetZone')
  scoreboard.objectives.remove('TimerMins')
  scoreboard.objectives.remove('TimerSecs')
  
  worldborder.set(1000000, 0)

  // Setup objectives //
  scoreboard.objectives.add('Hearts', 'health')
  scoreboard.objectives.setDisplay('list', 'Hearts')

  scoreboard.objectives.add('S_AnSwap', 'dummy')
  scoreboard.objectives.add('Death', 'deathCount', 'Deaths')
  scoreboard.objectives.add('S_FallDamage', 'dummy')
  scoreboard.objectives.add('S_FireDamage', 'dummy')
  scoreboard.objectives.add('GameStatus', 'dummy')
  scoreboard.objectives.add('S_NaturalRegen', 'dummy')
  scoreboard.objectives.add('S_DeathSwapPlus', 'dummy')
  scoreboard.objectives.add('S_Nether', 'dummy')
  scoreboard.objectives.add('Players', 'dummy', 'Player count')
  scoreboard.objectives.add('PlayersDeath', 'dummy')
  scoreboard.objectives.add('S_Achievements', 'dummy')
  scoreboard.objectives.add('S_Border', 'dummy')
  scoreboard.objectives.add('S_ShowTimer', 'dummy')
  scoreboard.objectives.add('S_Hunger', 'dummy')
  scoreboard.objectives.add('Select', 'trigger')
  scoreboard.objectives.add('Swap', 'dummy')
  scoreboard.objectives.add('Time', 'dummy', [{"text":"--=","color":"dark_gray","bold":"false"},{"text":"TIME","color":"white","bold":"true"},{"text":"=--","color":"dark_gray","bold":"false"}])
  scoreboard.objectives.add('Timer', 'dummy', 'Timer')
  scoreboard.objectives.add('S_TimerCount', 'dummy')
  scoreboard.objectives.add('S_ValidZone', 'dummy')
  scoreboard.objectives.add('S_ResetZone', 'dummy')
  scoreboard.objectives.add('TimerMins', 'dummy')
  scoreboard.objectives.add('TimerSecs', 'dummy')

  // Setup Teams //
  for (var teamNum:any = 0; teamNum < PlayerTeamCount ; teamNum++) {
    team.remove(teamNum)
    team.add(teamNum, `Team ${teamNum}`)
  }

  team.remove('teamless')
  team.add('teamless', 'teamless')
  team.join('teamless', '@a')

  summon('minecraft:armor_stand', ['0', '0', '0'], {CustomName:"{\"text\":\"Values\"}",Marker:1,Invisible:1,NoGravity:1})
  forceload.add(['0', '0'], ['0', '0'])

  // Setup Variables //
  scoreboard.players.set('@e[type=minecraft:armor_stand,name=Values]', 'GameStatus', 0)
  scoreboard.players.set('@e[type=minecraft:armor_stand,name=Values]', 'Players', 0)
  scoreboard.players.set('@e[type=minecraft:armor_stand,name=Values]', 'Swap', 0)
  scoreboard.players.set('@e[type=minecraft:armor_stand,name=Values]', 'S_TimerCount', 6000)
  scoreboard.players.set('@e[type=minecraft:armor_stand,name=Values]', 'S_ValidZone', 1)
  scoreboard.players.set('@e[type=minecraft:armor_stand,name=Values]', 'S_ResetZone', 0)

  // Default Settings
  scoreboard.players.set('@e[type=minecraft:armor_stand,name=Values]', 'S_Border', 0)
  scoreboard.players.set('@e[type=minecraft:armor_stand,name=Values]', 'S_Achievements', 0)
  scoreboard.players.set('@e[type=minecraft:armor_stand,name=Values]', 'S_Nether', 0)
  scoreboard.players.set('@e[type=minecraft:armor_stand,name=Values]', 'S_AnSwap', 0)
  scoreboard.players.set('@e[type=minecraft:armor_stand,name=Values]', 'S_ShowTimer', 1)
  scoreboard.players.set('@e[type=minecraft:armor_stand,name=Values]', 'S_Hunger', 0)
  scoreboard.players.set('@e[type=minecraft:armor_stand,name=Values]', 'S_FallDamage', 0)
  scoreboard.players.set('@e[type=minecraft:armor_stand,name=Values]', 'S_FireDamage', 0)
  scoreboard.players.set('@e[type=minecraft:armor_stand,name=Values]', 'S_NaturalRegen', 0)
  scoreboard.players.set('@e[type=minecraft:armor_stand,name=Values]', 'S_DeathSwapPlus', 0)

  scoreboard.players.set('Seconds', 'Time', 0)
  scoreboard.players.set('Minutes', 'Time', 0)

  // Display Settings //
  tellraw('@a', '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
  
  execute.if.entity('@e[type=minecraft:armor_stand,name=Values]').run.tellraw('@a', {"text":"DeathSwap+","color":"gold"})
  execute.if.entity('@e[type=minecraft:armor_stand,name=Values]').run.tellraw('@a', [{"text":"[!] ","color":"yellow"},{"text":"Click here to start the game!","color":"gray","clickEvent":{"action":"run_command","value":"/trigger Select set 1"}}])
  execute.if.entity('@e[type=minecraft:armor_stand,name=Values]').run.tellraw('@a', '')
  execute.if.entity('@e[type=minecraft:armor_stand,name=Values]').run.tellraw('@a', [{"text":"[!] ","color":"yellow"},{"text":"Click here to change the settings!","color":"gray","clickEvent":{"action":"run_command","value":"/trigger Select set 2"}}])
  playsound('minecraft:ui.button.click', 'master', '@p', ['~ ~ ~'], 100, 2)

}, {runOnLoad: true})



/*

GameStart -> GameStatus

*/
