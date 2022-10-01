import { MCFunction, execute, gamemode, team, scoreboard, comment } from 'sandstone'

var PlayerTeamCount:number = 16;

MCFunction('deathswaplus/death', () => {
  gamemode('spectator', '@a[scores={Death=1}]')

  for (var teamNum:any = 0; teamNum < PlayerTeamCount - 1 ; teamNum++) {
    for (var teamNum2:any = teamNum; teamNum2 < PlayerTeamCount - 1 ; teamNum2++) {
      execute.if.entity(`@p[team=${teamNum},scores={Death=1}]`).run.team.join(teamNum2, `@p[team=${teamNum2 + 1}]`)
    }
    comment('')
  }


  team.leave('@a[scores={Death=1}]')
  execute.if.entity('@p[scores={Death=1}]').run.scoreboard.players.add('@e[type=armor_stand,name=Values]', 'PlayersDeath', 1)
  execute.if.entity('@p[scores={Death=1}]').run.scoreboard.players.remove('@e[type=armor_stand,name=Values]', 'Players', 1)
  scoreboard.players.set('@a[scores={Death=1}]', 'Death', 2)
})
