#These commands will be repeated forever while the variable is true

#New 12/19/2020
execute at @a if block ~ ~-0.5 ~ minecraft:stonecutter run effect give @a minecraft:wither 1 1 true

execute if entity @e[name=Values,scores={GameStart=1}] run gamemode survival @a[gamemode=adventure]
execute if entity @e[name=Values,scores={GameStart=1}] run gamerule doDaylightCycle true

execute if entity @e[name=Values,scores={GameStart=1,RandomScore3=1}] run effect give @a saturation 5 255 true
execute if entity @e[name=Values,scores={GameStart=1,NetherPortal=1}] run function death_swap:game/settings/netherportal

execute if entity @e[name=Values,scores={GameStart=1}] run function death_swap:game/timer/timerscore

function death_swap:game/deaths

execute if entity @e[name=Values,scores={Players=1,PlayersDeath=1..}] run function death_swap:game/win


