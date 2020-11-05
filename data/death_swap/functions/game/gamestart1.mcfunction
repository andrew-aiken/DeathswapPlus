#These commands will be repeated forever while the variable is true

execute if entity @e[name=Values,scores={GameStart=1}] run gamemode survival @a[gamemode=adventure]
execute if entity @e[name=Values,scores={GameStart=1}] run gamerule doDaylightCycle true

execute if entity @e[name=Values,scores={GameStart=1,RandomScore3=1}] run effect give @a saturation 5 255 true
execute if entity @e[name=Values,scores={GameStart=1,NetherPortal=1}] run function death_swap:game/settings/netherportal

execute if entity @e[name=Values,scores={GameStart=1}] run function death_swap:game/timer/timerscore

function death_swap:game/deaths

execute if entity @e[name=Values,scores={Players=1,PlayersDeath=1..}] run function death_swap:game/win


