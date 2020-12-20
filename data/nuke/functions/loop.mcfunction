execute as @e[type=minecraft:snowball,nbt={Item:{tag:{nuke:1b}}}] as @p at @s anchored eyes run function nuke:throw

execute as @a[nbt={Inventory:[{id:"minecraft:end_portal_frame"}]}] run function nuke:give
