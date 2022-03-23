import { MCFunction, execute, gamemode, team, scoreboard } from 'sandstone'

MCFunction('deathswaplus/death', () => {
  gamemode('spectator', '@a[scores={Death=1}]')



  team.leave('@a[scores={Death=1}]')
  execute.if.entity('@p[scores={Death=1}]').run.scoreboard.players.add('@e[type=armor_stand,name=Values]', 'PlayersDeath', 1)
  execute.if.entity('@p[scores={Death=1}]').run.scoreboard.players.remove('@e[type=armor_stand,name=Values]', 'Players', 1)
  scoreboard.players.set('@a[scores={Death=1}]', 'Death', 1)
})