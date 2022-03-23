import { MCFunction, execute } from 'sandstone'

MCFunction('deathswaplus/settings/netherportal', () => {
  execute.if.entity('@e[name=Values,scores={GameStatus=1,S_Nether=1}]').at('@a').if.block(['~ ~ ~'], 'minecraft:nether_portal').run.setblock(['~ ~ ~'], 'minecraft:air', 'destroy')
  execute.if.entity('@e[name=Values,scores={GameStatus=1,S_Nether=1}]').at('@a').if.block(['~1 ~ ~'], 'minecraft:nether_portal').run.setblock(['~1 ~ ~'], 'minecraft:air', 'destroy')
  execute.if.entity('@e[name=Values,scores={GameStatus=1,S_Nether=1}]').at('@a').if.block(['~-1 ~ ~'], 'minecraft:nether_portal').run.setblock(['~-1 ~ ~'], 'minecraft:air', 'destroy')
  execute.if.entity('@e[name=Values,scores={GameStatus=1,S_Nether=1}]').at('@a').if.block(['~ ~ ~1'], 'minecraft:nether_portal').run.setblock(['~ ~ ~1'], 'minecraft:air', 'destroy')
  execute.if.entity('@e[name=Values,scores={GameStatus=1,S_Nether=1}]').at('@a').if.block(['~ ~ ~-1'], 'minecraft:nether_portal').run.setblock(['~ ~ ~-1'], 'minecraft:air', 'destroy')
})
