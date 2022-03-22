import { MCFunction, execute } from 'sandstone'

MCFunction('deathswaplus/settings/deathswapplus', () => {
  execute.if.entity('@e[type=armor_stand,name=Values,scores={GameStatus=1,S_DeathSwapPlus=0}]').run.execute.at('@a').if.block(['~ ~-0.5 ~'], 'minecraft:stonecutter').run.effect.give('@p', 'minecraft:wither', 1, 1, true)
})