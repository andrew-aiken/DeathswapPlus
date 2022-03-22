import { MCFunction, execute } from 'sandstone'

MCFunction('deathswaplus/settings/hunger', () => {
  execute.if.entity('@e[type=armor_stand,name=Values,scores={GameStatus=1,S_Hunger=1}]').run.effect.give('@a', 'minecraft:saturation', 5, 255, true)
})