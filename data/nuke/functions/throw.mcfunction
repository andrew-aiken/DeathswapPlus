summon minecraft:fireball ^ ^-0.2 ^0.2 {Tags:["motion_projectile"],ExplosionPower:64}

playsound minecraft:entity.ender_dragon.flap player @a ~ ~ ~ 1 1.2
playsound minecraft:entity.ender_dragon.shoot hostile @a ~ ~ ~
playsound minecraft:entity.ghast.shoot hostile @a ~ ~ ~
playsound minecraft:entity.generic.burn player @a ~ ~ ~ 0.5 1

kill @e[type=minecraft:snowball,nbt={Item:{tag:{nuke:1b}}},sort=nearest,limit=1]