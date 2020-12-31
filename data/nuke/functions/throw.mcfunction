execute at @e[type=minecraft:snowball,nbt={Item:{tag:{nuke:1b}}},sort=nearest,limit=1] run summon fireball ~ ~ ~ {Tags:["motion_projectile"],ExplosionPower:64}

execute as @e[tag=motion_projectile] at @s run data modify entity @s direction set from entity @e[type=minecraft:snowball,nbt={Item:{tag:{nuke:1b}}},sort=nearest,limit=1] Motion
execute as @e[tag=motion_projectile] at @s run data modify entity @s power set from entity @e[type=minecraft:snowball,nbt={Item:{tag:{nuke:1b}}},sort=nearest,limit=1] Motion


playsound minecraft:entity.ender_dragon.flap player @a ~ ~ ~ 1 1.2
playsound minecraft:entity.ender_dragon.shoot hostile @a ~ ~ ~
playsound minecraft:entity.ghast.shoot hostile @a ~ ~ ~
playsound minecraft:entity.generic.burn player @a ~ ~ ~ 0.5 1

execute as @e[tag=motion_projectile] at @s run kill @e[type=minecraft:snowball,nbt={Item:{tag:{nuke:1b}}},sort=nearest,limit=1]
execute as @e[tag=motion_projectile] at @s run tag @s remove motion_projectile