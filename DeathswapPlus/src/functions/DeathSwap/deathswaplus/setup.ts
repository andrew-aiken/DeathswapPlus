import { say, MCFunction, execute } from 'sandstone'

MCFunction('deathswaplus/setup', () => {
  say("setup")
  execute.if.entity('@e[type=armor_stand,name=Values,scores={GameStatus=1}]').run.gamerule('doDaylightCycle', true)
  execute.if.entity('@e[type=armor_stand,name=Values,scores={GameStatus=1}]').run.gamemode('survival', '@e[gamemode=adventure]')

  /*
    For each team
    take one player (@r) from the 'teamless' and assign to team X
    if on team X remove them from the 'teamless'

    -- Based on that people can be in multiple teams
  */
})