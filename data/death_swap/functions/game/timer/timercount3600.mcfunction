#These commands will be repeated forever while the variable is true

execute if entity @e[name=Values,scores={AnSwap=1,Timer=3400,TimerCount=3600}] run tellraw @a {"text":"Swapping in 10 seconds!","color":"red","bold":"true"}
execute if entity @e[name=Values,scores={AnSwap=1,Timer=3420,TimerCount=3600}] run tellraw @a {"text":"Swapping in 9 seconds!","color":"red","bold":"true"}
execute if entity @e[name=Values,scores={AnSwap=1,Timer=3440,TimerCount=3600}] run tellraw @a {"text":"Swapping in 8 seconds!","color":"red","bold":"true"}
execute if entity @e[name=Values,scores={AnSwap=1,Timer=3460,TimerCount=3600}] run tellraw @a {"text":"Swapping in 7 seconds!","color":"red","bold":"true"}
execute if entity @e[name=Values,scores={AnSwap=1,Timer=3480,TimerCount=3600}] run tellraw @a {"text":"Swapping in 6 seconds!","color":"red","bold":"true"}
execute if entity @e[name=Values,scores={AnSwap=1,Timer=3500,TimerCount=3600}] run tellraw @a {"text":"Swapping in 5 seconds!","color":"red","bold":"true"}
execute if entity @e[name=Values,scores={AnSwap=1,Timer=3520,TimerCount=3600}] run tellraw @a {"text":"Swapping in 4 seconds!","color":"red","bold":"true"}
execute if entity @e[name=Values,scores={AnSwap=1,Timer=3540,TimerCount=3600}] run tellraw @a {"text":"Swapping in 3 seconds!","color":"red","bold":"true"}
execute if entity @e[name=Values,scores={AnSwap=1,Timer=3560,TimerCount=3600}] run tellraw @a {"text":"Swapping in 2 seconds!","color":"red","bold":"true"}
execute if entity @e[name=Values,scores={AnSwap=1,Timer=3580,TimerCount=3600}] run tellraw @a {"text":"Swapping in 1 second!","color":"red","bold":"true"}

execute if entity @e[name=Values,scores={Timer=3600,TimerCount=3600}] run scoreboard players set @e[name=Values] Swap 1