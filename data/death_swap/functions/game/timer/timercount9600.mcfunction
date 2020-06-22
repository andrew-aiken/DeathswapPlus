#These commands will be repeated forever while the variable is true

execute if entity @e[name=Values,scores={AnSwap=1,Timer=9600,TimerCount=9600}] run tellraw @a {"text":"Swapping in 10 seconds!","color":"red","bold":"true"}
execute if entity @e[name=Values,scores={AnSwap=1,Timer=9620,TimerCount=9600}] run tellraw @a {"text":"Swapping in 9 seconds!","color":"red","bold":"true"}
execute if entity @e[name=Values,scores={AnSwap=1,Timer=9640,TimerCount=9600}] run tellraw @a {"text":"Swapping in 8 seconds!","color":"red","bold":"true"}
execute if entity @e[name=Values,scores={AnSwap=1,Timer=9660,TimerCount=9600}] run tellraw @a {"text":"Swapping in 7 seconds!","color":"red","bold":"true"}
execute if entity @e[name=Values,scores={AnSwap=1,Timer=9680,TimerCount=9600}] run tellraw @a {"text":"Swapping in 6 seconds!","color":"red","bold":"true"}
execute if entity @e[name=Values,scores={AnSwap=1,Timer=9700,TimerCount=9600}] run tellraw @a {"text":"Swapping in 5 seconds!","color":"red","bold":"true"}
execute if entity @e[name=Values,scores={AnSwap=1,Timer=9720,TimerCount=9600}] run tellraw @a {"text":"Swapping in 4 seconds!","color":"red","bold":"true"}
execute if entity @e[name=Values,scores={AnSwap=1,Timer=9740,TimerCount=9600}] run tellraw @a {"text":"Swapping in 3 seconds!","color":"red","bold":"true"}
execute if entity @e[name=Values,scores={AnSwap=1,Timer=9760,TimerCount=9600}] run tellraw @a {"text":"Swapping in 2 seconds!","color":"red","bold":"true"}
execute if entity @e[name=Values,scores={AnSwap=1,Timer=9780,TimerCount=9600}] run tellraw @a {"text":"Swapping in 1 second!","color":"red","bold":"true"}

execute if entity @e[name=Values,scores={Timer=9600,TimerCount=9600}] run scoreboard players set @e[name=Values] Swap 1