import { MCFunction, execute } from 'sandstone'

MCFunction('deathswaplus/settings/netherportal', () => {
  execute.if.entity(' @e[name=Values,scores={GameStart=1,S_NetherPortal=1}]').run.execute.at('@a').run.execute.if.block(['~ ~ ~'], 'minecraft:nether_portal').run.setblock(['~ ~ ~'], 'minecraft:air', 'destroy')
  execute.if.entity(' @e[name=Values,scores={GameStart=1,S_NetherPortal=1}]').run.execute.at('@a').run.execute.if.block(['~1 ~ ~'], 'minecraft:nether_portal').run.setblock(['~1 ~ ~'], 'minecraft:air', 'destroy')
  execute.if.entity(' @e[name=Values,scores={GameStart=1,S_NetherPortal=1}]').run.execute.at('@a').run.execute.if.block(['~-1 ~ ~'], 'minecraft:nether_portal').run.setblock(['~-1 ~ ~'], 'minecraft:air', 'destroy')
  execute.if.entity(' @e[name=Values,scores={GameStart=1,S_NetherPortal=1}]').run.execute.at('@a').run.execute.if.block(['~ ~ ~1'], 'minecraft:nether_portal').run.setblock(['~ ~ ~1'], 'minecraft:air', 'destroy')
  execute.if.entity(' @e[name=Values,scores={GameStart=1,S_NetherPortal=1}]').run.execute.at('@a').run.execute.if.block(['~ ~ ~-1'], 'minecraft:nether_portal').run.setblock(['~ ~ ~-1'], 'minecraft:air', 'destroy')
})
