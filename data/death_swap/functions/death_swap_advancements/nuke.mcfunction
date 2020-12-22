title @a times 20 100 20
title @a title ["",{"text":"! ","color":"black"},{"text":"Nuke ","color":"red"},{"text":"!","color":"black"}]

execute as @a at @a run playsound minecraft:entity.dolphin.death neutral @a ~ ~ ~
execute as @a at @a run playsound minecraft:entity.ender_dragon.hurt hostile @a ~ ~ ~
execute as @a at @a run playsound minecraft:entity.blaze.hurt hostile @a ~ ~ ~
execute as @a at @a run playsound minecraft:entity.ghast.scream hostile @a ~ ~ ~

title @a actionbar ["",{"text":"\u2622","color":"black"},{"text":" Nuke ","color":"red"},{"text":"\u2622","color":"black"}]