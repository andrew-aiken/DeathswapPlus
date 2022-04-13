import { say, MCFunction, execute, kill, sleep, scoreboard, title, worldborder, clear, effect, gamerule } from 'sandstone'

MCFunction('deathswaplus/create_boundary', () => {
  say("create_boundary")

  worldborder.set(1000000, 0)

  scoreboard.players.set('@e[type=minecraft:armor_stand,name="Values"]', 'S_ResetZone', 1)
  scoreboard.players.set('@e[type=minecraft:armor_stand,name="Values"]', 'S_ValidZone', 1)
  execute.at('@e[type=minecraft:armor_stand,name=Border,limit=1]').run.forceload.remove(['~', '~'])
  

  kill('@e[type=minecraft:armor_stand,name=Border]')
  sleep('1s')
  

  execute.at('@r').run.summon('minecraft:armor_stand', ['~', '63', '~'], {CustomName:"{\"text\":\"Border\"}",Marker:1,Invisible:1,NoGravity:1})
  
  execute.at('@e[type=minecraft:armor_stand,name=Border,limit=1]').run.forceload.add(['~800 ~'])
  execute.at('@e[type=minecraft:armor_stand,name=Border,limit=1]').run.tp('@e[type=minecraft:armor_stand,name=Border,limit=1]', ['~800', '63', '~'])
  execute.at('@e[type=minecraft:armor_stand,name=Border,limit=1]').run.forceload.remove(['~ ~'])
  //execute.at('@e[type=minecraft:armor_stand,name=Border,limit=1]').run.tp('@a',  ['~', '~300', '~'])
  
  execute.if.entity('@e[type=minecraft:armor_stand,name="Values",scores={S_ValidZone=1..}]').run.functionCmd('deathswapplus:deathswaplus/create_boundary/while')

  //scoreboard.players.set('@e[type=minecraft:armor_stand,name="Values"]', 'S_ValidZone', 1)
})



MCFunction('deathswaplus/create_boundary/while', async () => {
  await sleep('1t')
 // execute.at('@e[type=minecraft:armor_stand,name=Border,limit=1]').run.forceload.remove(['~ ~'])
  execute.if.entity('@e[type=minecraft:armor_stand,name="Values",scores={S_ValidZone=1}]').at('@e[type=minecraft:armor_stand,name=Border,limit=1]').run.tp('@e[type=minecraft:armor_stand,name=Border,limit=1]', ['~20', '63', '~'])
//  execute.if.entity('@e[type=minecraft:armor_stand,name="Values",scores={S_ValidZone=1}]').at('@e[type=minecraft:armor_stand,name=Border,limit=1]').run.forceload.add(['~ ~'])
  execute.if.entity('@e[type=minecraft:armor_stand,name="Values",scores={S_ValidZone=1}]').at('@e[type=minecraft:armor_stand,name=Border,limit=1]').run.tp('@a',  ['~', '~300', '~'])

  execute.if.entity('@e[type=minecraft:armor_stand,name="Values",scores={S_ValidZone=1}]').at('@e[type=minecraft:armor_stand,name=Border,limit=1]').unless.block(['~ 62 ~'], 'minecraft:water').run.scoreboard.players.set('@e[type=minecraft:armor_stand,name="Values"]', 'S_ValidZone', 0)

  execute.if.entity('@e[type=minecraft:armor_stand,name="Values",scores={S_ResetZone=1,S_ValidZone=1}]').run.functionCmd('deathswapplus:deathswaplus/create_boundary/while')
  execute.if.entity('@e[type=minecraft:armor_stand,name="Values",scores={S_ValidZone=0}]').run.functionCmd('deathswapplus:deathswaplus/create_boundary/border')
})

MCFunction('deathswaplus/create_boundary/border', async () => {
  say('border called')
  execute.at('@e[type=minecraft:armor_stand,name=Border,limit=1]').run.setworldspawn(['~', '~', '~'])
  execute.at('@e[type=minecraft:armor_stand,name=Border,limit=1]').run.worldborder.center(['~ ~'])
  worldborder.set(15, 0)
  clear('@a')

  gamerule('fallDamage', false)
  effect.give('@a', 'minecraft:resistance', 16, 255, true)
  execute.at('@e[type=minecraft:armor_stand,name=Border,limit=1]').run.tp('@a', '~ ~300 ~')

  worldborder.damageBuffer(20)

  await sleep('10s')

  
  
  scoreboard.players.set('@e[type=minecraft:armor_stand,name="Values"]', 'S_ResetZone', 0)

  title('@a').actionbar([{"text":"3","color":"gold"}])
  await sleep('1s')
  title('@a').actionbar([{"text":"2","color":"gold"}])
  await sleep('1s')
  title('@a').actionbar([{"text":"1","color":"gold"}])
  await sleep('1s')
  title('@a').actionbar([{"text":"Start","color":"gold"}])

  effect.give('@a', 'minecraft:absorption', 30, 4, false)
  effect.give('@a', 'minecraft:speed', 16, 2, false)

  scoreboard.players.set('@e[type=armor_stand,name="Values"]', 'GameStatus', 1)

  execute.if.entity('@e[scores={Select=15}]').run.gamerule('fallDamage', false)
  execute.if.entity('@e[scores={Select=16}]').run.gamerule('fallDamage', true)

  worldborder.set(400, 0)
})

/*

Get the x, y of a player at random

Summon armor stand there at world hight

Run something that goes out 100 blocks & sees if it is a water / solid

*/