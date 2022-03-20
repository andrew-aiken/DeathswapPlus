import { MCFunction, scoreboard, gamerule, gamemode, advancement, recipe, kill, tellraw, team, summon, forceload, playsound, execute } from 'sandstone'

var PlayerTeamCount:number = 10;

MCFunction('reload', () => {
  tellraw('@a', {"text":"Reloading DeathSwap+","color":"green"})

  gamerule('doImmediateRespawn', true)
  gamerule('announceAdvancements', true)
  //gamerule('commandBlockOutput', false)
  //gamerule('sendCommandFeedback', false)
  //gamemode('survival', '@a')

  
  // Remove objectives & advancement from last game //
  advancement.revoke('@a').everything()
  recipe.give('@a', '*')

  kill('@e[type=minecraft:armor_stand,name=Values]')
  
  scoreboard.objectives.remove('AnSwap')
  scoreboard.objectives.remove('Death')
  scoreboard.objectives.remove('GameStatus')
  scoreboard.objectives.remove('Hearts') // custom
  scoreboard.objectives.remove('S_NetherPortal')
  scoreboard.objectives.remove('Players')
  scoreboard.objectives.remove('PlayersDeath')
  scoreboard.objectives.remove('S_Achievements')
  scoreboard.objectives.remove('RandomScore1')
  scoreboard.objectives.remove('RandomScore2')
  scoreboard.objectives.remove('Select')
  scoreboard.objectives.remove('Swap')
  scoreboard.objectives.remove('Time')
  scoreboard.objectives.remove('Timer')
  scoreboard.objectives.remove('TimerCount')
  scoreboard.objectives.remove('TimerMins')
  scoreboard.objectives.remove('TimerSecs')

  // Setup objectives //
  scoreboard.objectives.add('Hearts', 'health')
  scoreboard.objectives.setDisplay('list', 'Hearts')

  scoreboard.objectives.add('AnSwap', 'dummy')
  scoreboard.objectives.add('Death', 'deathCount', 'Deaths')
  scoreboard.objectives.add('GameStatus', 'dummy')
  scoreboard.objectives.add('S_NetherPortal', 'dummy')
  scoreboard.objectives.add('Players', 'dummy', 'Player count')
  scoreboard.objectives.add('PlayersDeath', 'dummy')
  scoreboard.objectives.add('S_Achievements', 'dummy')
  scoreboard.objectives.add('RandomScore1', 'dummy')
  scoreboard.objectives.add('RandomScore2', 'dummy')
  scoreboard.objectives.add('Select', 'trigger')
  scoreboard.objectives.add('Swap', 'dummy')
  scoreboard.objectives.add('Time', 'dummy', [{"text":"--=","color":"dark_gray","bold":"false"},{"text":"TIME","color":"white","bold":"true"},{"text":"=--","color":"dark_gray","bold":"false"}])
  scoreboard.objectives.add('Timer', 'dummy', 'Timer')
  scoreboard.objectives.add('TimerCount', 'dummy')
  scoreboard.objectives.add('TimerMins', 'dummy')
  scoreboard.objectives.add('TimerSecs', 'dummy')

  // Setup Teams //
  for (var teamNum:any = 0; teamNum < PlayerTeamCount ; teamNum++) {
    team.remove(teamNum)
    team.add(teamNum, `Team ${teamNum}`)
  }

  team.remove('bol')
  team.add('bol', 'bol')
  team.join('bol', '@a')
  //team.join('1', '@r[team=bol]')
  // NOTE Have players join team, removed from bol & repeat

  /*
  summon('minecraft:armor_stand', ['0', '0', '0'], {CustomName:"{\"text\":\"Values\"}",Marker:1,Invisible:1,NoGravity:1})
  forceload.add(['0', '0'], ['0', '0'])
  */
  summon('minecraft:armor_stand', ['16', '-32', '-9'], {CustomName:"{\"text\":\"Values\"}",Marker:1,Invisible:1,NoGravity:1})


  // Setup Variables //
  scoreboard.players.set('@e[type=minecraft:armor_stand,name=Values]', 'GameStatus', 0)
  scoreboard.players.set('@e[type=minecraft:armor_stand,name=Values]', 'Players', 1)
  scoreboard.players.set('@e[type=minecraft:armor_stand,name=Values]', 'Swap', 0)
  scoreboard.players.set('@e[type=minecraft:armor_stand,name=Values]', 'TimerCount', 6000)

  // Default Settings
  scoreboard.players.set('@e[type=minecraft:armor_stand,name=Values]', 'S_Achievements', 0)
  scoreboard.players.set('@e[type=minecraft:armor_stand,name=Values]', 'S_NetherPortal', 0)
  scoreboard.players.set('@e[type=minecraft:armor_stand,name=Values]', 'S_AnSwap', 0)
  // disable / enable deathswap+
  // fall damage
  // fire damage
  // naturalRegeneration
  // pvp
  scoreboard.players.set('@e[type=minecraft:armor_stand,name=Values]', 'RandomScore1', 0)
  scoreboard.players.set('@e[type=minecraft:armor_stand,name=Values]', 'RandomScore2', 0)

  scoreboard.players.set('Seconds', 'Time', 0)
  scoreboard.players.set('Minutes', 'Time', 0)

  // Display Settings //
  tellraw('@a', '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
  
  execute.if.entity('@e[type=minecraft:armor_stand,name=Values,scores={Players=1..}]').run.tellraw('@a', {"text":"DeathSwap+","color":"gold"})
  execute.if.entity('@e[type=minecraft:armor_stand,name=Values,scores={Players=1..}]').run.tellraw('@a', [{"text":"[!] ","color":"yellow"},{"text":"Click here to start the game!","color":"gray","clickEvent":{"action":"run_command","value":"/trigger Select set 1"}}])
  execute.if.entity('@e[type=minecraft:armor_stand,name=Values,scores={Players=1..}]').run.tellraw('@a', '')
  execute.if.entity('@e[type=minecraft:armor_stand,name=Values,scores={Players=1..}]').run.tellraw('@a', [{"text":"[!] ","color":"yellow"},{"text":"Click here to change the settings!","color":"gray","clickEvent":{"action":"run_command","value":"/trigger Select set 2"}}])
  playsound('minecraft:ui.button.click', 'master', '@p', ['~ ~ ~'], 100, 2)

}, {runOnLoad: true})



/*

GameStart -> GameStatus

*/
