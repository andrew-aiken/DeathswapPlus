import { say, MCFunction, execute, team, scoreboard } from 'sandstone'

var PlayerTeamCount:number = 16;

MCFunction('deathswaplus/setup', () => {
  say("setup")
  execute.if.entity('@e[type=armor_stand,name=Values,scores={GameStatus=1}]').run.gamerule('doDaylightCycle', true)
  execute.if.entity('@e[type=armor_stand,name=Values,scores={GameStatus=1}]').run.gamemode('survival', '@a[gamemode=adventure]')


  // Team Setup //
  team.join('teamless', '@a')
  for (var teamNum:any = 0; teamNum < PlayerTeamCount ; teamNum++) {
    team.join(teamNum, '@r[team=teamless]')
    execute.if.entity(`@a[team=${teamNum}]`).run.scoreboard.players.set('@e[type=armor_stand,name=Values]', 'Players', teamNum)
  }

  scoreboard.players.set('@e[type=armor_stand,name=Values]', 'Swap', 0)
  scoreboard.players.set('@e[type=armor_stand,name=Values]', 'Timer', 0)
  scoreboard.players.set('@e[type=armor_stand,name=Values]', 'PlayersDeath', 0)

  // Start the Game //
  execute.if.entity('@e[name=Values,scores={Players=2..}]').run.tellraw('@a', [{"text":"[!]","color":"yellow"},{"text":" Game has started!","color":"gray"}])
  execute.if.entity('@e[name=Values,scores={Players=2..}]').run.scoreboard.players.set('@e[type=armor_stand,name=Values]', 'GameStatus', 1)
  execute.if.entity('@e[name=Values,scores={Players=2..}]').run.execute.at('@a').run.playsound('minecraft:entity.arrow.hit_player', 'master', '@p', ['~ ~ ~'], 100, 1)

  // No enough Players //
  execute.if.entity('@e[name=Values,scores={Players=1}]').run.execute.at('@a').run.playsound('minecraft:block.anvil.break', 'master', '@p', ['~ ~ ~'], 100, 0)
  execute.if.entity('@e[name=Values,scores={Players=1}]').run.tellraw('@a', [{"text":"Not enough players to start the game!","color":"red"}])
  execute.if.entity('@e[name=Values,scores={Players=1}]').run.title('@a').actionbar([{"text":"You must be at least 2 players!","color":"gold"}])
  execute.if.entity('@e[name=Values,scores={Players=1}]').run.tellraw('@a', [{"text":"[!] ","color":"yellow"},{"text":"Click here to start the game!","color":"gray","clickEvent":{"action":"run_command","value":"/trigger Select set 1"}}])
  execute.if.entity('@e[name=Values,scores={Players=1}]').run.tellraw('@a', [{"text":" "}])
  execute.if.entity('@e[name=Values,scores={Players=1}]').run.tellraw('@a', [{"text":"[!] ","color":"yellow"},{"text":"Click here to change the settings!","color":"gray","clickEvent":{"action":"run_command","value":"/trigger Select set 2"}}])


  /*
    For each team
    take one player (@r) from the 'teamless' and assign to team X

    -- Based on that people can be in multiple teams
  */
})