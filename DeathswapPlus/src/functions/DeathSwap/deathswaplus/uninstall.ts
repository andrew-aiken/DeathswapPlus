import { MCFunction, gamerule, advancement, kill, datapack, scoreboard, team, tellraw, gamemode, worldborder, forceload } from 'sandstone'

var PlayerTeamCount:number = 16;

MCFunction('deathswaplus/uninstall', () => {

  forceload.removeAll()

  //gamerule('forgiveDeadPlayers', false)
  //gamerule('universalAnger', true)
  gamerule('doImmediateRespawn', false)
  gamerule('announceAdvancements', true)
  gamerule('doDaylightCycle', true)
  gamerule('fallDamage', true)
  gamerule('fireDamage', true)
  gamerule('naturalRegeneration', true)
  
  advancement.revoke('@a').everything()

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
  scoreboard.objectives.remove('S_DeathSwapPlus')

  worldborder.set(1000000, 0)

  team.remove('teamless')
  for (var teamNum:any = 0; teamNum < PlayerTeamCount ; teamNum++) {
    team.remove(teamNum)
  }

  tellraw('@a', '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
  tellraw('@a', {"text":"________________________________________","color":"black"})
  tellraw('@a', {"text":" "})
  tellraw('@a', {"text":"DeathSwap+ Uninstalled!","color":"red"})
  tellraw('@a', {"text":" "})
  tellraw('@a', {"text":"--------To reinstall type!--------","color":"green"})
  tellraw('@a', {"text":"/datapack enable \"file/DeathswapPlus\"","color":"gold"})
  tellraw('@a', {"text":" "})
  tellraw('@a', {"text":"________________________________________","color":"black"})

  gamerule('commandBlockOutput', true)
  gamerule('sendCommandFeedback', true)
  gamemode('survival', '@a')

  datapack.disable('"file/DeathswapPlus"')
})