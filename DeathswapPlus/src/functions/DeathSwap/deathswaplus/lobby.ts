import { MCFunction, execute } from 'sandstone'

MCFunction('deathswaplus/lobby', () => {
  execute.if.entity('@e[type=armor_stand,name=Values,scores={GameStatus=0}]').run.weather.clear(9999)
  execute.if.entity('@e[type=armor_stand,name=Values,scores={GameStatus=0}]').run.time.set('day')
  execute.if.entity('@e[type=armor_stand,name=Values,scores={GameStatus=0}]').run.gamerule('doDaylightCycle', false)
  execute.if.entity('@e[type=armor_stand,name=Values,scores={GameStatus=0}]').run.functionCmd('deathswapplus:deathswaplus/trigger')
  execute.if.entity('@e[type=armor_stand,name=Values,scores={GameStatus=0}]').run.effect.give('@a', 'minecraft:regeneration', 3, 255, true)
  execute.if.entity('@e[type=armor_stand,name=Values,scores={GameStatus=0}]').run.effect.give('@e', 'minecraft:resistance', 3, 255, true)
  execute.if.entity('@e[type=armor_stand,name=Values,scores={GameStatus=0}]').run.effect.give('@a', 'minecraft:saturation', 3, 255, true)
  execute.if.entity('@e[type=armor_stand,name=Values,scores={GameStatus=0}]').run.scoreboard.players.enable('@a', 'Select')
})
