#These commands will be repeated forever while the variable is true

execute if entity @e[name=Values,scores={GameStart=1,NetherPortal=1}] run execute at @a run execute if block ~ ~ ~ nether_portal run setblock ~ ~ ~ air
execute if entity @e[name=Values,scores={GameStart=1,NetherPortal=1}] run execute at @a run execute if block ~1 ~ ~ nether_portal run setblock ~1 ~ ~ air
execute if entity @e[name=Values,scores={GameStart=1,NetherPortal=1}] run execute at @a run execute if block ~-1 ~ ~ nether_portal run setblock ~-1 ~ ~ air
execute if entity @e[name=Values,scores={GameStart=1,NetherPortal=1}] run execute at @a run execute if block ~ ~ ~1 nether_portal run setblock ~ ~ ~1 air
execute if entity @e[name=Values,scores={GameStart=1,NetherPortal=1}] run execute at @a run execute if block ~ ~ ~-1 nether_portal run setblock ~ ~ ~-1 air