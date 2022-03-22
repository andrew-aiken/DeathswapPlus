import { MCFunction, gamerule, advancement, kill, datapack, scoreboard, team, tellraw, gamemode } from 'sandstone'

var PlayerTeamCount:number = 16;

MCFunction('deathswaplus/uninstall', () => {


  //gamerule('forgiveDeadPlayers', false)
  //gamerule('universalAnger', true)
  gamerule('doImmediateRespawn', false)
  gamerule('announceAdvancements', true)
  gamerule('doDaylightCycle', true)
  gamerule('fallDamage', true)
  gamerule('fireDamage', true)
  gamerule('naturalRegeneration', true)
  
  advancement.revoke('@a').everything()
  datapack.disable('file/deathswaplus')

  kill('@e[type=minecraft:armor_stand,name=Values]')
  
  scoreboard.objectives.remove('deathswap_bool')
  scoreboard.objectives.remove('S_AnSwap')
  scoreboard.objectives.remove('Death')
  scoreboard.objectives.remove('S_FallDamage')
  scoreboard.objectives.remove('S_FireDamage')
  scoreboard.objectives.remove('GameStatus')
  scoreboard.objectives.remove('Hearts')
  scoreboard.objectives.remove('S_NaturalRegen')
  scoreboard.objectives.remove('S_Nether')
  scoreboard.objectives.remove('Players')
  scoreboard.objectives.remove('PlayersDeath')
  scoreboard.objectives.remove('S_Achievements')
  scoreboard.objectives.remove('S_ShowTimer')
  scoreboard.objectives.remove('S_Hunger')
  scoreboard.objectives.remove('Select')
  scoreboard.objectives.remove('Swap')
  scoreboard.objectives.remove('Time')
  scoreboard.objectives.remove('Timer')
  scoreboard.objectives.remove('S_TimerCount')
  scoreboard.objectives.remove('TimerMins')
  scoreboard.objectives.remove('TimerSecs')
  scoreboard.objectives.remove('S_DeathSwapPlus')

  team.remove('bol')
  for (var teamNum:any = 0; teamNum < PlayerTeamCount ; teamNum++) {
    team.remove(teamNum)
  }

  tellraw('@a', '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
  tellraw('@a', {"text":"________________________________________","color":"black"})
  tellraw('@a', {"text":" "})
  tellraw('@a', {"text":"DeathSwap+ Uninstalled!","color":"red"})
  tellraw('@a', {"text":" "})
  tellraw('@a', {"text":"--------Type ''/reload'' to reinstall!--------","color":"green"})
  tellraw('@a', {"text":" "})
  tellraw('@a', {"text":"________________________________________","color":"black"})

  gamerule('commandBlockOutput', true)
  gamerule('sendCommandFeedback', true)
  gamemode('survival', '@a')
})