import { say, MCFunction, execute, team, scoreboard, tellraw } from 'sandstone'

var PlayerTeamCount:number = 16;

MCFunction('deathswaplus/setup', () => {
  say("setup")

  // Team Setup //
  team.join('teamless', '@a')
  for (var teamNum:any = 0; teamNum < PlayerTeamCount ; teamNum++) {
    team.join(teamNum, '@r[team=teamless]')
    execute.if.entity(`@a[team=${teamNum}]`).run.scoreboard.players.set('@e[type=armor_stand,name=Values]', 'Players', teamNum + 1)
  }

  scoreboard.players.set('@e[type=armor_stand,name=Values]', 'Swap', 0)
  scoreboard.players.set('@e[type=armor_stand,name=Values]', 'Timer', 0)
  scoreboard.players.set('@e[type=armor_stand,name=Values]', 'PlayersDeath', 0)

  tellraw('@a', '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')

  // Start the Game //
  execute.if.entity('@e[name=Values,scores={Players=2..}]').at('@a').run.playsound('minecraft:entity.arrow.hit_player', 'master', '@p', ['~ ~ ~'], 100, 1)

  execute.if.entity('@e[name=Values,scores={Players=2..}]').run.effect.clear('@a')
  execute.if.entity('@e[name=Values,scores={Players=2..}]').run.kill('@e[type=minecraft:item]')
  execute.if.entity('@e[name=Values,scores={Players=2..}]').run.kill('@e[type=minecraft:experience_orb]')
  execute.if.entity('@e[name=Values,scores={Players=2..}]').run.experience.set('@a', 0, 'level')
  execute.if.entity('@e[name=Values,scores={Players=2..}]').run.experience.set('@a', 0, 'points')
  execute.if.entity('@e[name=Values,scores={Players=2..}]').run.advancement.revoke('@a').everything()
  execute.if.entity('@e[name=Values,scores={Players=2..}]').run.scoreboard.players.set('@a', 'Death', 0)
  execute.if.entity('@e[name=Values,scores={Players=2..,AutoBorder=0}]').run.functionCmd('deathswapplus:deathswaplus/create_boundary')
  execute.if.entity('@e[name=Values,scores={Players=2..,AutoBorder=1}]').run.scoreboard.players.set('@e[type=armor_stand,name="Values"]', 'GameStatus', 1)
  execute.if.entity('@e[name=Values,scores={Players=2..}]').run.tellraw('@a', [{"text":"[!]","color":"yellow"},{"text":" Game has started!","color":"gray"}])
  execute.if.entity('@e[name=Values,scores={Players=2..}]').run.gamerule('doDaylightCycle', true)
  execute.if.entity('@e[name=Values,scores={Players=2..}]').run.gamemode('survival', '@a')
  execute.if.entity('@e[name=Values,scores={Players=2..,SpeedyStart=0}]').run.effect.give('@a', 'minecraft:absorption', 30, 4, false)
  execute.if.entity('@e[name=Values,scores={Players=2..,SpeedyStart=0}]').run.effect.give('@a', 'minecraft:speed', 16, 2, false)

  // No enough Players //
  execute.if.entity('@e[name=Values,scores={Players=1}]').at('@a').run.playsound('minecraft:block.anvil.place', 'master', '@p', ['~ ~ ~'], 100, 0)
  execute.if.entity('@e[name=Values,scores={Players=1}]').run.tellraw('@a', [{"text":"Not enough players to start the game!","color":"red"}])
  execute.if.entity('@e[name=Values,scores={Players=1}]').run.title('@a').actionbar([{"text":"You must be at least 2 players!","color":"gold"}])
  execute.if.entity('@e[name=Values,scores={Players=1}]').run.tellraw('@a', [{"text":"[!] ","color":"yellow"},{"text":"Click here to start the game!","color":"gray","clickEvent":{"action":"run_command","value":"/trigger Select set 1"}}])
  execute.if.entity('@e[name=Values,scores={Players=1}]').run.tellraw('@a', [{"text":" "}])
  execute.if.entity('@e[name=Values,scores={Players=1}]').run.tellraw('@a', [{"text":"[!] ","color":"yellow"},{"text":"Click here to change the settings!","color":"gray","clickEvent":{"action":"run_command","value":"/trigger Select set 2"}}])
})
