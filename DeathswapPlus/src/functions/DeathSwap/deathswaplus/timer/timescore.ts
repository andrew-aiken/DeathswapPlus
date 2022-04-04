import { MCFunction, execute } from 'sandstone'

MCFunction('deathswaplus/timer/timescore', () => {
  execute.if.entity('@e[type=armor_stand,name=Values,scores={GameStatus=1}]').run.scoreboard.players.add('@e[type=armor_stand,name=Values]', 'TimerSecs', 1)
  execute.if.entity('@e[type=armor_stand,name=Values,scores={GameStatus=1}]').run.scoreboard.players.add('@e[type=armor_stand,name=Values]', 'TimerMins', 1)

  execute.if.entity('@e[type=armor_stand,name=Values,scores={TimerSecs=20,GameStatus=1}]').run.scoreboard.players.add('Seconds', 'Time', 0)
  execute.if.entity('@e[type=armor_stand,name=Values,scores={TimerSecs=20,GameStatus=1}]').run.scoreboard.players.set('@e[type=armor_stand,name=Values]', 'TimerSecs', 0)
  execute.if.entity('@e[type=armor_stand,name=Values,scores={TimerMins=1200,GameStatus=1}]').run.scoreboard.players.set('Minutes', 'Time', 1)
  execute.if.entity('@e[type=armor_stand,name=Values,scores={TimerMins=1200,GameStatus=1}]').run.scoreboard.players.set('Seconds', 'Time', 0)
  execute.if.entity('@e[type=armor_stand,name=Values,scores={TimerMins=1200,GameStatus=1}]').run.scoreboard.players.set('@e[type=armor_stand,name=Values]', 'TimerMins', 0)

  execute.if.entity('@e[type=armor_stand,name=Values,scores={GameStatus=1}]').run.scoreboard.players.add('@e[type=armor_stand,name=Values]', 'Timer', 1)
  execute.if.entity('@e[type=armor_stand,name=Values,scores={S_TimerCount=600,GameStatus=1}]').run.functionCmd('deathswapplus:deathswaplus/timer/600')
  execute.if.entity('@e[type=armor_stand,name=Values,scores={S_TimerCount=1200,GameStatus=1}]').run.functionCmd('deathswapplus:deathswaplus/timer/1200')
  execute.if.entity('@e[type=armor_stand,name=Values,scores={S_TimerCount=2400,GameStatus=1}]').run.functionCmd('deathswapplus:deathswaplus/timer/2400')
  execute.if.entity('@e[type=armor_stand,name=Values,scores={S_TimerCount=3600,GameStatus=1}]').run.functionCmd('deathswapplus:deathswaplus/timer/3600')
  execute.if.entity('@e[type=armor_stand,name=Values,scores={S_TimerCount=4800,GameStatus=1}]').run.functionCmd('deathswapplus:deathswaplus/timer/4800')
  execute.if.entity('@e[type=armor_stand,name=Values,scores={S_TimerCount=6000,GameStatus=1}]').run.functionCmd('deathswapplus:deathswaplus/timer/6000')
  execute.if.entity('@e[type=armor_stand,name=Values,scores={S_TimerCount=7200,GameStatus=1}]').run.functionCmd('deathswapplus:deathswaplus/timer/7200')
  execute.if.entity('@e[type=armor_stand,name=Values,scores={S_TimerCount=8400,GameStatus=1}]').run.functionCmd('deathswapplus:deathswaplus/timer/8400')
  execute.if.entity('@e[type=armor_stand,name=Values,scores={S_TimerCount=9600,GameStatus=1}]').run.functionCmd('deathswapplus:deathswaplus/timer/9600')
  execute.if.entity('@e[type=armor_stand,name=Values,scores={S_TimerCount=10800,GameStatus=1}]').run.functionCmd('deathswapplus:deathswaplus/timer/10800')

  execute.if.entity('@e[type=armor_stand,name=Values,scores={Swap=1,GameStatus=1}]').run.scoreboard.players.set('Minutes', 'Time', 0)
  execute.if.entity('@e[type=armor_stand,name=Values,scores={Swap=1,GameStatus=1}]').run.scoreboard.players.set('Seconds', 'Time', 0)

  execute.if.entity('@e[type=armor_stand,name=Values,scores={Swap=1,GameStatus=1}]').run.functionCmd('deathswapplus:deathswaplus/players/config')

  execute.if.entity('@e[type=armor_stand,name=Values,scores={Swap=1,GameStatus=1}]').run.tellraw('@a', {"text":"Swapping!","bold":"true","color":"white"})
  execute.if.entity('@e[type=armor_stand,name=Values,scores={Swap=1,GameStatus=1}]').run.scoreboard.players.set('@e[type=armor_stand,name=Values]', 'Timer', 0)
  execute.if.entity('@e[type=armor_stand,name=Values,scores={Swap=1,GameStatus=1}]').run.scoreboard.players.set('@e[type=armor_stand,name=Values]', 'Swap', 0)
})