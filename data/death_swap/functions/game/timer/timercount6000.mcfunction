#These commands will be repeated forever while the variable is true

execute if entity @e[name=Values,scores={AnSwap=1,Timer=5800,TimerCount=6000}] run tellraw @a {"text":"Swapping in 10 seconds!","color":"red","bold":"true"}
execute if entity @e[name=Values,scores={AnSwap=1,Timer=5820,TimerCount=6000}] run tellraw @a {"text":"Swapping in 9 seconds!","color":"red","bold":"true"}
execute if entity @e[name=Values,scores={AnSwap=1,Timer=5840,TimerCount=6000}] run tellraw @a {"text":"Swapping in 8 seconds!","color":"red","bold":"true"}
execute if entity @e[name=Values,scores={AnSwap=1,Timer=5860,TimerCount=6000}] run tellraw @a {"text":"Swapping in 7 seconds!","color":"red","bold":"true"}
execute if entity @e[name=Values,scores={AnSwap=1,Timer=5880,TimerCount=6000}] run tellraw @a {"text":"Swapping in 6 seconds!","color":"red","bold":"true"}
execute if entity @e[name=Values,scores={AnSwap=1,Timer=5900,TimerCount=6000}] run tellraw @a {"text":"Swapping in 5 seconds!","color":"red","bold":"true"}
execute if entity @e[name=Values,scores={AnSwap=1,Timer=5920,TimerCount=6000}] run tellraw @a {"text":"Swapping in 4 seconds!","color":"red","bold":"true"}
execute if entity @e[name=Values,scores={AnSwap=1,Timer=5940,TimerCount=6000}] run tellraw @a {"text":"Swapping in 3 seconds!","color":"red","bold":"true"}
execute if entity @e[name=Values,scores={AnSwap=1,Timer=5960,TimerCount=6000}] run tellraw @a {"text":"Swapping in 2 seconds!","color":"red","bold":"true"}
execute if entity @e[name=Values,scores={AnSwap=1,Timer=5980,TimerCount=6000}] run tellraw @a {"text":"Swapping in 1 second!","color":"red","bold":"true"}

execute if entity @e[name=Values,scores={Timer=6000,TimerCount=6000}] run scoreboard players set @e[name=Values] Swap 1