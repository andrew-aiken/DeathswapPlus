summon minecraft:fireball ^ ^-0.2 ^1.8 {Tags:["motion_projectile"],ExplosionPower:64}

playsound minecraft:entity.ender_dragon.flap player @a ~ ~ ~ 1 1.2
playsound minecraft:entity.generic.burn player @a ~ ~ ~ 0.5 1

kill @e[type=minecraft:snowball,nbt={Item:{tag:{nuke:1b}}},sort=nearest,limit=1]