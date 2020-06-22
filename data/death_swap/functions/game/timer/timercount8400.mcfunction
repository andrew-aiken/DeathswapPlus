#These commands will be repeated forever while the variable is true

execute if entity @e[name=Values,scores={AnSwap=1,Timer=8200,TimerCount=8400}] run tellraw @a {"text":"Swapping in 10 seconds!","color":"red","bold":"true"}
execute if entity @e[name=Values,scores={AnSwap=1,Timer=8220,TimerCount=8400}] run tellraw @a {"text":"Swapping in 9 seconds!","color":"red","bold":"true"}
execute if entity @e[name=Values,scores={AnSwap=1,Timer=8240,TimerCount=8400}] run tellraw @a {"text":"Swapping in 8 seconds!","color":"red","bold":"true"}
execute if entity @e[name=Values,scores={AnSwap=1,Timer=8260,TimerCount=8400}] run tellraw @a {"text":"Swapping in 7 seconds!","color":"red","bold":"true"}
execute if entity @e[name=Values,scores={AnSwap=1,Timer=8280,TimerCount=8400}] run tellraw @a {"text":"Swapping in 6 seconds!","color":"red","bold":"true"}
execute if entity @e[name=Values,scores={AnSwap=1,Timer=8300,TimerCount=8400}] run tellraw @a {"text":"Swapping in 5 seconds!","color":"red","bold":"true"}
execute if entity @e[name=Values,scores={AnSwap=1,Timer=8320,TimerCount=8400}] run tellraw @a {"text":"Swapping in 4 seconds!","color":"red","bold":"true"}
execute if entity @e[name=Values,scores={AnSwap=1,Timer=8340,TimerCount=8400}] run tellraw @a {"text":"Swapping in 3 seconds!","color":"red","bold":"true"}
execute if entity @e[name=Values,scores={AnSwap=1,Timer=8360,TimerCount=8400}] run tellraw @a {"text":"Swapping in 2 seconds!","color":"red","bold":"true"}
execute if entity @e[name=Values,scores={AnSwap=1,Timer=8380,TimerCount=8400}] run tellraw @a {"text":"Swapping in 1 second!","color":"red","bold":"true"}

execute if entity @e[name=Values,scores={Timer=8400,TimerCount=8400}] run scoreboard players set @e[name=Values] Swap 1