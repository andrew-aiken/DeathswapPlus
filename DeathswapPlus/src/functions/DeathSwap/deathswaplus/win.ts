import { MCFunction, execute, tellraw, playsound } from 'sandstone'

MCFunction('deathswaplus/win', () => {
  tellraw('@a', '\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n')
  
  execute.if.entity('@e[type=minecraft:armor_stand,name=Values,scores={Players=1,PlayersDeath=1..}]').at('@p[gamemode=survival]').run.tellraw('@a', [{"text":"","color":"green","extra":[{"selector":"@p"},{"text":" has won the game!"}]}])
  execute.if.entity('@e[type=minecraft:armor_stand,name=Values,scores={Players=1,PlayersDeath=1..}]').at('@p[gamemode=survival]').run.playsound('minecraft:ui.toast.challenge_complete', 'block', '@p[gamemode=survival]', ['~ ~ ~'], 100, 1)
  execute.if.entity('@e[type=minecraft:armor_stand,name=Values,scores={Players=1,PlayersDeath=1..}]').run.title('@a').actionbar({"text":"Type ''/reload'' to play again!","color":"gold"})

  execute.if.entity('@e[type=minecraft:armor_stand,name=Values,scores={Players=1,PlayersDeath=1..}]').run.scoreboard.players.set('@e[type=minecraft:armor_stand,name=Values', 'GameStart', 0)
  execute.if.entity('@e[type=minecraft:armor_stand,name=Values,scores={Players=1,PlayersDeath=1..}]').run.scoreboard.players.set('Seconds', 'Time', 0)
  execute.if.entity('@e[type=minecraft:armor_stand,name=Values,scores={Players=1,PlayersDeath=1..}]').run.scoreboard.players.set('Minutes', 'Time', 0)
  execute.if.entity('@e[type=minecraft:armor_stand,name=Values,scores={Players=1,PlayersDeath=1..}]').run.scoreboard.players.set('@e[type=minecraft:armor_stand,name=Values', 'TimerSecs', 0)
  execute.if.entity('@e[type=minecraft:armor_stand,name=Values,scores={Players=1,PlayersDeath=1..}]').run.scoreboard.players.set('@e[type=minecraft:armor_stand,name=Values', 'TimerMins', 0)


  execute.if.entity('@e[type=minecraft:armor_stand,name=Values,scores={Players=1,PlayersDeath=1..}]').run.tellraw('@a', {"text":"DeathSwap+","color":"gold"})
  execute.if.entity('@e[type=minecraft:armor_stand,name=Values,scores={Players=1,PlayersDeath=1..}]').run.tellraw('@a', [{"text":"[!] ","color":"yellow"},{"text":"Click here to start the game!","color":"gray","clickEvent":{"action":"run_command","value":"/trigger Select set 1"}}])
  execute.if.entity('@e[type=minecraft:armor_stand,name=Values,scores={Players=1,PlayersDeath=1..}]').run.tellraw('@a', '')
  execute.if.entity('@e[type=minecraft:armor_stand,name=Values,scores={Players=1,PlayersDeath=1..}]').run.tellraw('@a', [{"text":"[!] ","color":"yellow"},{"text":"Click here to change the settings!","color":"gray","clickEvent":{"action":"run_command","value":"/trigger Select set 2"}}])
  playsound('minecraft:ui.button.click', 'master', '@p', ['~ ~ ~'], 100, 2)
})