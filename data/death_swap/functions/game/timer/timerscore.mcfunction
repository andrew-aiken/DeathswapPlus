#These commands will be repeated forever while the variable is true

execute if entity @e[name=Values,scores={GameStart=1}] run scoreboard players add @e[name=Values] TimerSecs 1
execute if entity @e[name=Values,scores={GameStart=1}] run scoreboard players add @e[name=Values] TimerMins 1
execute if entity @e[name=Values,scores={GameStart=1}] run execute if entity @e[name=Values,scores={TimerSecs=20}] run scoreboard players add Seconds Time 1
execute if entity @e[name=Values,scores={GameStart=1}] run execute if entity @e[name=Values,scores={TimerSecs=20}] run scoreboard players set @e[name=Values] TimerSecs 0
execute if entity @e[name=Values,scores={GameStart=1}] run execute if entity @e[name=Values,scores={TimerMins=1200}] run scoreboard players add Minutes Time 1
execute if entity @e[name=Values,scores={GameStart=1}] run execute if entity @e[name=Values,scores={TimerMins=1200}] run scoreboard players set Seconds Time 0
execute if entity @e[name=Values,scores={GameStart=1}] run execute if entity @e[name=Values,scores={TimerMins=1200}] run scoreboard players set @e[name=Values] TimerMins 0

execute if entity @e[name=Values,scores={GameStart=1}] run scoreboard players add @e[name=Values] Timer 1
execute if entity @e[name=Values,scores={GameStart=1,TimerCount=2400}] run function death_swap:game/timer/timercount2400
execute if entity @e[name=Values,scores={GameStart=1,TimerCount=3600}] run function death_swap:game/timer/timercount3600
execute if entity @e[name=Values,scores={GameStart=1,TimerCount=4800}] run function death_swap:game/timer/timercount4800
execute if entity @e[name=Values,scores={GameStart=1,TimerCount=6000}] run function death_swap:game/timer/timercount6000
execute if entity @e[name=Values,scores={GameStart=1,TimerCount=7200}] run function death_swap:game/timer/timercount7200
execute if entity @e[name=Values,scores={GameStart=1,TimerCount=8400}] run function death_swap:game/timer/timercount8400
execute if entity @e[name=Values,scores={GameStart=1,TimerCount=9600}] run function death_swap:game/timer/timercount9600
execute if entity @e[name=Values,scores={GameStart=1,TimerCount=9600}] run function death_swap:game/timer/timercount10800

execute if entity @e[name=Values,scores={Swap=1}] run scoreboard players set Minutes Time 0
execute if entity @e[name=Values,scores={Swap=1}] run scoreboard players set Seconds Time 0

execute if entity @e[name=Values,scores={GameStart=1}] run function death_swap:game/players/players_config

execute if entity @e[name=Values,scores={Swap=1}] run tellraw @a {"text":"Swapping!","bold":"true","color":"white"}
execute if entity @e[name=Values,scores={Swap=1}] run scoreboard players set @e[name=Values] Timer 0
execute if entity @e[name=Values,scores={Swap=1}] run scoreboard players set @e[name=Values] Swap 0

