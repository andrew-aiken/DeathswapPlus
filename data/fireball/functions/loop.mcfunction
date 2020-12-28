execute as @e[type=minecraft:snowball,nbt={Item:{tag:{fireball:1b}}}] as @s at @s anchored eyes run function fireball:throw

execute as @a[nbt={Inventory:[{id:"minecraft:jigsaw"}]}] run function fireball:give
