import { say, MCFunction, execute, kill, sleep, scoreboard, forceload } from 'sandstone'

MCFunction('deathswaplus/create_boundary', () => {
  say("create_boundary")
  scoreboard.players.set('@e[type=minecraft:armor_stand,name=Values]', 'S_ResetZone', 1)
  scoreboard.players.set('@e[type=minecraft:armor_stand,name=Values]', 'S_ValidZone', 1)
  execute.at('@e[type=minecraft:armor_stand,name=Border,limit=1]').run.forceload.remove(['~ ~'])
  

  kill('@e[type=minecraft:armor_stand,name=Border]')
  sleep('1s')
  execute.at('@r').run.summon('minecraft:armor_stand', ['~100', '63', '~'], {CustomName:"{\"text\":\"Border\"}",Marker:1,Invisible:1,NoGravity:1})
  execute.at('@e[type=minecraft:armor_stand,name=Border,limit=1]').run.tp('@a',  ['~', '~300', '~'])
  
  //execute.if.score('@e[type=minecraft:armor_stand,name=Values,limit=1]', 'S_ValidZone', 'matches', 1).run.functionCmd('deathswapplus:deathswaplus/create_boundary/while')
  execute.if.entity('@e[type=minecraft:armor_stand,name=Values,scores={S_ValidZone=1..}]').run.functionCmd('deathswapplus:deathswaplus/create_boundary/while')

  //scoreboard.players.set('@e[type=minecraft:armor_stand,name=Values]', 'S_ValidZone', 1)
})



MCFunction('deathswaplus/create_boundary/while', async () => {
  say('---')

  await sleep('1t')
 // execute.at('@e[type=minecraft:armor_stand,name=Border,limit=1]').run.forceload.remove(['~ ~'])
  execute.if.entity('@e[type=minecraft:armor_stand,name=Values,scores={S_ValidZone=1}]').at('@e[type=minecraft:armor_stand,name=Border,limit=1]').run.tp('@e[type=minecraft:armor_stand,name=Border,limit=1]', ['~20', '63', '~'])
//  execute.if.entity('@e[type=minecraft:armor_stand,name=Values,scores={S_ValidZone=1}]').at('@e[type=minecraft:armor_stand,name=Border,limit=1]').run.forceload.add(['~ ~'])
  execute.if.entity('@e[type=minecraft:armor_stand,name=Values,scores={S_ValidZone=1}]').at('@e[type=minecraft:armor_stand,name=Border,limit=1]').run.tp('@a',  ['~', '~300', '~'])

  execute.if.entity('@e[type=minecraft:armor_stand,name=Values,scores={S_ValidZone=1}]').at('@e[type=minecraft:armor_stand,name=Border,limit=1]').unless.block(['~ 62 ~'], 'minecraft:water').run.scoreboard.players.set('@e[type=minecraft:armor_stand,name=Values]', 'S_ValidZone', 0)

  execute.if.entity('@e[type=minecraft:armor_stand,name=Values,scores={S_ResetZone=1,S_ValidZone=1}]').run.functionCmd('deathswapplus:deathswaplus/create_boundary/while')
  execute.if.entity('@e[type=minecraft:armor_stand,name=Values,scores={S_ValidZone=0}]').run.functionCmd('deathswapplus:deathswaplus/create_boundary/border')
})

// .if.block(['~', '~-0.5', '~'], 'minecraft:water')


MCFunction('deathswaplus/create_boundary/border', async () => {
  say('border called')
  execute.at('@e[type=minecraft:armor_stand,name=Border,limit=1]').run.setworldspawn(['~', '~', '~'])
  execute.at('@e[type=minecraft:armor_stand,name=Border,limit=1]').run.worldborder.center(['~ ~'])
  kill('@a')
  execute.at('@e[type=minecraft:armor_stand,name=Border,limit=1]').run.worldborder.damageBuffer(20)
  execute.at('@e[type=minecraft:armor_stand,name=Border,limit=1]').run.worldborder.set(100, 0)
  scoreboard.players.set('@e[type=minecraft:armor_stand,name=Values]', 'S_ResetZone', 0)
})

/*

Get the x, y of a player at random

Summon armor stand there at world hight

Run something that goes out 100 blocks & sees if it is a water / solid

*/