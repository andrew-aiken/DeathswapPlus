import { MCFunction, execute } from 'sandstone'

MCFunction('deathswaplus/timer/600', () => {
  for (var timeCount:any = 10; timeCount > 0 ; timeCount-- ) {
    execute.if.entity(`@e[type=armor_stand,name=Values,scores={S_AnSwap=1,Timer=${600 - (timeCount * 20)},S_TimerCount=600,GameStatus=1}]`).run.tellraw('@a', {"text":`Swapping in ${timeCount} seconds!`,"color":"red","bold":"true"})
  }
  execute.if.entity('@e[type=armor_stand,name=Values,scores={Timer=600,S_TimerCount=600,GameStatus=1}]').run.scoreboard.players.set('@e[type=armor_stand,name=Values]', 'Swap', 1)
})

MCFunction('deathswaplus/timer/1200', () => {
  for (var timeCount:any = 10; timeCount > 0 ; timeCount-- ) {
    execute.if.entity(`@e[type=armor_stand,name=Values,scores={S_AnSwap=1,Timer=${1200 - (timeCount * 20)},S_TimerCount=1200,GameStatus=1}]`).run.tellraw('@a', {"text":`Swapping in ${timeCount} seconds!`,"color":"red","bold":"true"})
  }
  execute.if.entity('@e[type=armor_stand,name=Values,scores={Timer=1200,S_TimerCount=1200,GameStatus=1}]').run.scoreboard.players.set('@e[type=armor_stand,name=Values]', 'Swap', 1)
})

MCFunction('deathswaplus/timer/2400', () => {
  for (var timeCount:any = 10; timeCount > 0 ; timeCount-- ) {
    execute.if.entity(`@e[type=armor_stand,name=Values,scores={S_AnSwap=1,Timer=${2400 - (timeCount * 20)},S_TimerCount=2400,GameStatus=1}]`).run.tellraw('@a', {"text":`Swapping in ${timeCount} seconds!`,"color":"red","bold":"true"})
  }
  execute.if.entity('@e[type=armor_stand,name=Values,scores={Timer=2400,S_TimerCount=2400,GameStatus=1}]').run.scoreboard.players.set('@e[type=armor_stand,name=Values]', 'Swap', 1)
})

MCFunction('deathswaplus/timer/3600', () => {
  for (var timeCount:any = 10; timeCount > 0 ; timeCount-- ) {
    execute.if.entity(`@e[type=armor_stand,name=Values,scores={S_AnSwap=1,Timer=${3600 - (timeCount * 20)},S_TimerCount=3600,GameStatus=1}]`).run.tellraw('@a', {"text":`Swapping in ${timeCount} seconds!`,"color":"red","bold":"true"})
  }
  execute.if.entity('@e[type=armor_stand,name=Values,scores={Timer=3600,S_TimerCount=3600,GameStatus=1}]').run.scoreboard.players.set('@e[type=armor_stand,name=Values]', 'Swap', 1)
})

MCFunction('deathswaplus/timer/4800', () => {
  for (var timeCount:any = 10; timeCount > 0 ; timeCount-- ) {
    execute.if.entity(`@e[type=armor_stand,name=Values,scores={S_AnSwap=1,Timer=${4800 - (timeCount * 20)},S_TimerCount=4800,GameStatus=1}]`).run.tellraw('@a', {"text":`Swapping in ${timeCount} seconds!`,"color":"red","bold":"true"})
  }
  execute.if.entity('@e[type=armor_stand,name=Values,scores={Timer=4800,S_TimerCount=4800,GameStatus=1}]').run.scoreboard.players.set('@e[type=armor_stand,name=Values]', 'Swap', 1)
})

MCFunction('deathswaplus/timer/6000', () => {
  for (var timeCount:any = 10; timeCount > 0 ; timeCount-- ) {
    execute.if.entity(`@e[type=armor_stand,name=Values,scores={S_AnSwap=1,Timer=${6000 - (timeCount * 20)},S_TimerCount=6000,GameStatus=1}]`).run.tellraw('@a', {"text":`Swapping in ${timeCount} seconds!`,"color":"red","bold":"true"})
  }
  execute.if.entity('@e[type=armor_stand,name=Values,scores={Timer=6000,S_TimerCount=6000,GameStatus=1}]').run.scoreboard.players.set('@e[type=armor_stand,name=Values]', 'Swap', 1)
})

MCFunction('deathswaplus/timer/7200', () => {
  for (var timeCount:any = 10; timeCount > 0 ; timeCount-- ) {
    execute.if.entity(`@e[type=armor_stand,name=Values,scores={S_AnSwap=1,Timer=${7200 - (timeCount * 20)},S_TimerCount=7200,GameStatus=1}]`).run.tellraw('@a', {"text":`Swapping in ${timeCount} seconds!`,"color":"red","bold":"true"})
  }
  execute.if.entity('@e[type=armor_stand,name=Values,scores={Timer=7200,S_TimerCount=7200,GameStatus=1}]').run.scoreboard.players.set('@e[type=armor_stand,name=Values]', 'Swap', 1)
})

MCFunction('deathswaplus/timer/8400', () => {
  for (var timeCount:any = 10; timeCount > 0 ; timeCount-- ) {
    execute.if.entity(`@e[type=armor_stand,name=Values,scores={S_AnSwap=1,Timer=${8400 - (timeCount * 20)},S_TimerCount=8400,GameStatus=1}]`).run.tellraw('@a', {"text":`Swapping in ${timeCount} seconds!`,"color":"red","bold":"true"})
  }
  execute.if.entity('@e[type=armor_stand,name=Values,scores={Timer=8400,S_TimerCount=8400,GameStatus=1}]').run.scoreboard.players.set('@e[type=armor_stand,name=Values]', 'Swap', 1)
})

MCFunction('deathswaplus/timer/9600', () => {
  for (var timeCount:any = 10; timeCount > 0 ; timeCount-- ) {
    execute.if.entity(`@e[type=armor_stand,name=Values,scores={S_AnSwap=1,Timer=${9600 - (timeCount * 20)},S_TimerCount=9600,GameStatus=1}]`).run.tellraw('@a', {"text":`Swapping in ${timeCount} seconds!`,"color":"red","bold":"true"})
  }
  execute.if.entity('@e[type=armor_stand,name=Values,scores={Timer=9600,S_TimerCount=9600,GameStatus=1}]').run.scoreboard.players.set('@e[type=armor_stand,name=Values]', 'Swap', 1)
})

MCFunction('deathswaplus/timer/10800', () => {
  for (var timeCount:any = 10; timeCount > 0 ; timeCount-- ) {
    execute.if.entity(`@e[type=armor_stand,name=Values,scores={S_AnSwap=1,Timer=${10800 - (timeCount * 20)},S_TimerCount=10800,GameStatus=1}]`).run.tellraw('@a', {"text":`Swapping in ${timeCount} seconds!`,"color":"red","bold":"true"})
  }
  execute.if.entity('@e[type=armor_stand,name=Values,scores={Timer=10800,S_TimerCount=10800,GameStatus=1}]').run.scoreboard.players.set('@e[type=armor_stand,name=Values]', 'Swap', 1)
})
