#These commands will be repeated forever while the variable is true

execute if entity @e[name=Values,scores={GameStart=0}] run weather clear 9999
execute if entity @e[name=Values,scores={GameStart=0}] run time set day
execute if entity @e[name=Values,scores={GameStart=0}] run gamerule doDaylightCycle false
execute if entity @e[name=Values,scores={GameStart=0}] run function death_swap:game/trigger
execute if entity @e[name=Values,scores={GameStart=0}] run gamemode adventure @a
execute if entity @e[name=Values,scores={GameStart=0}] run effect give @a regeneration 1 255 true
execute if entity @e[name=Values,scores={GameStart=0}] run effect give @e resistance 1 255 true
execute if entity @e[name=Values,scores={GameStart=0}] run effect give @a saturation 5 255 true
execute if entity @e[name=Values,scores={GameStart=0}] run scoreboard players enable @a Select