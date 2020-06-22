#These commands will be repeated forever while the variable is true

execute if entity @e[name=Values,scores={AnSwap=1,Timer=7000,TimerCount=7200}] run tellraw @a {"text":"Swapping in 10 seconds!","color":"red","bold":"true"}
execute if entity @e[name=Values,scores={AnSwap=1,Timer=7020,TimerCount=7200}] run tellraw @a {"text":"Swapping in 9 seconds!","color":"red","bold":"true"}
execute if entity @e[name=Values,scores={AnSwap=1,Timer=7040,TimerCount=7200}] run tellraw @a {"text":"Swapping in 8 seconds!","color":"red","bold":"true"}
execute if entity @e[name=Values,scores={AnSwap=1,Timer=7060,TimerCount=7200}] run tellraw @a {"text":"Swapping in 7 seconds!","color":"red","bold":"true"}
execute if entity @e[name=Values,scores={AnSwap=1,Timer=7080,TimerCount=7200}] run tellraw @a {"text":"Swapping in 6 seconds!","color":"red","bold":"true"}
execute if entity @e[name=Values,scores={AnSwap=1,Timer=7100,TimerCount=7200}] run tellraw @a {"text":"Swapping in 5 seconds!","color":"red","bold":"true"}
execute if entity @e[name=Values,scores={AnSwap=1,Timer=7120,TimerCount=7200}] run tellraw @a {"text":"Swapping in 4 seconds!","color":"red","bold":"true"}
execute if entity @e[name=Values,scores={AnSwap=1,Timer=7140,TimerCount=7200}] run tellraw @a {"text":"Swapping in 3 seconds!","color":"red","bold":"true"}
execute if entity @e[name=Values,scores={AnSwap=1,Timer=7160,TimerCount=7200}] run tellraw @a {"text":"Swapping in 2 seconds!","color":"red","bold":"true"}
execute if entity @e[name=Values,scores={AnSwap=1,Timer=7180,TimerCount=7200}] run tellraw @a {"text":"Swapping in 1 second!","color":"red","bold":"true"}

execute if entity @e[name=Values,scores={Timer=7200,TimerCount=7200}] run scoreboard players set @e[name=Values] Swap 1