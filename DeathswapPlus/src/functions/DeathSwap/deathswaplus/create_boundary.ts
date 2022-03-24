import { say, MCFunction, execute, kill, sleep } from 'sandstone'

MCFunction('deathswaplus/create_boundary', () => {
  say("create_boundary")
  kill('@e[type=minecraft:armor_stand,name=Border]')
  execute.at('@r').run.summon('minecraft:armor_stand', ['~', '~', '~'], {CustomName:"{\"text\":\"Border\"}"})
  
  //execute.if.score('@e[type=minecraft:armor_stand,name=Values,limit=1]', 'S_ValidZone', 'matches', 1).run.say('Matches 1')
  execute.if.entity('@e[type=minecraft:armor_stand,name=Values,scores={S_ValidZone=1..}]').run.say('Matches 1')

  //execute.if.score('@e[type=minecraft:armor_stand,name=Values,limit=1]', 'S_ValidZone', 'matches', 1).run.functionCmd('deathswapplus:deathswaplus/create_boundary/while')
  execute.if.entity('@e[type=minecraft:armor_stand,name=Values,scores={S_ValidZone=1..}]').run.functionCmd('deathswapplus:deathswaplus/create_boundary/while')

  //scoreboard.players.set('@e[type=minecraft:armor_stand,name=Values]', 'S_ValidZone', 1)
})

MCFunction('deathswaplus/create_boundary/while', async () => {
  say('---')
  await sleep('1s')
  //execute.if.score('@e[type=minecraft:armor_stand,name=Values,limit=1]', 'S_ValidZone', 'matches', 1).at('@e[type=minecraft:armor_stand,name=Border,limit=1]').run.tp('@e[type=minecraft:armor_stand,name=Border,limit=1]', ['~1', '~', '~'])
  execute.if.entity('@e[type=minecraft:armor_stand,name=Values,scores={S_ValidZone=1..}]').at('@e[type=minecraft:armor_stand,name=Border,limit=1]').run.tp('@e[type=minecraft:armor_stand,name=Border,limit=1]', ['~1', '~', '~'])
  //execute.at('@e[type=minecraft:armor_stand,name=Border,limit=1]').if.block(['~', '~-1', '~'], 'minecraft:sandstone').run.scoreboard.players.set('@e[type=minecraft:armor_stand,name=Values]', 'S_ValidZone', 0)
  
  //execute.if.score('@e[type=minecraft:armor_stand,name=Values,limit=1]', 'S_ValidZone', 'matches', 1).run.functionCmd('deathswapplus:deathswaplus/create_boundary/while')
  execute.if.entity('@e[type=minecraft:armor_stand,name=Values,scores={S_ValidZone=1..}]').if.block(['~', '~-1', '~'], 'minecraft:water').run.functionCmd('deathswapplus:deathswaplus/create_boundary/while')
  execute.if.entity('@e[type=minecraft:armor_stand,name=Values,scores={S_ValidZone=0}]').run.functionCmd('deathswapplus:deathswaplus/create_boundary/border')
})

MCFunction('deathswaplus/create_boundary/border', async () => {
  execute.at('@e[type=minecraft:armor_stand,name=Border,limit=1]').run.setworldspawn(['~', '~', '~'])
  execute.at('@e[type=minecraft:armor_stand,name=Border,limit=1]').run.worldborder.center(['~', '~', '~'])
  kill('@a')
  execute.at('@e[type=minecraft:armor_stand,name=Border,limit=1]').run.worldborder.damageBuffer(20)
  execute.at('@e[type=minecraft:armor_stand,name=Border,limit=1]').run.worldborder.set(10, 0)
})

/*

Get the x, y of a player at random

Summon armor stand there at world hight

Run something that goes out 100 blocks & sees if it is a water / solid

*/