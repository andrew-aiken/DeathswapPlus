import { say, MCFunction, execute } from 'sandstone'

MCFunction('deathswaplus/in_game', () => {
  say("in_game")
  execute.if.entity('@e[type=armor_stand,name=Values,scores={GameStatus=1}]').run.gamerule('doDaylightCycle', true)

})