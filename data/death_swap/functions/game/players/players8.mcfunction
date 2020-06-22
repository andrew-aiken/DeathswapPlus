#These commands will be repeated forever while the variable is true

execute if entity @e[name=Values,scores={Players=8,Swap=1}] run execute at @a[team=1] run summon armor_stand ~ ~ ~ {CustomName:"{\"text\":\"Player1\"}",Invisible:1,NoGravity:1}
execute if entity @e[name=Values,scores={Players=8,Swap=1}] run execute at @a[team=2] run summon armor_stand ~ ~ ~ {CustomName:"{\"text\":\"Player2\"}",Invisible:1,NoGravity:1}
execute if entity @e[name=Values,scores={Players=8,Swap=1}] run execute at @a[team=3] run summon armor_stand ~ ~ ~ {CustomName:"{\"text\":\"Player3\"}",Invisible:1,NoGravity:1}
execute if entity @e[name=Values,scores={Players=8,Swap=1}] run execute at @a[team=4] run summon armor_stand ~ ~ ~ {CustomName:"{\"text\":\"Player4\"}",Invisible:1,NoGravity:1}
execute if entity @e[name=Values,scores={Players=8,Swap=1}] run execute at @a[team=5] run summon armor_stand ~ ~ ~ {CustomName:"{\"text\":\"Player5\"}",Invisible:1,NoGravity:1}
execute if entity @e[name=Values,scores={Players=8,Swap=1}] run execute at @a[team=6] run summon armor_stand ~ ~ ~ {CustomName:"{\"text\":\"Player6\"}",Invisible:1,NoGravity:1}
execute if entity @e[name=Values,scores={Players=8,Swap=1}] run execute at @a[team=7] run summon armor_stand ~ ~ ~ {CustomName:"{\"text\":\"Player7\"}",Invisible:1,NoGravity:1}
execute if entity @e[name=Values,scores={Players=8,Swap=1}] run execute at @a[team=8] run summon armor_stand ~ ~ ~ {CustomName:"{\"text\":\"Player8\"}",Invisible:1,NoGravity:1}

execute if entity @e[name=Values,scores={Players=8,Swap=1}] run execute at @e[name=Player1] run tp @a[team=4] ~ ~ ~
execute if entity @e[name=Values,scores={Players=8,Swap=1}] run execute at @e[name=Player2] run tp @a[team=3] ~ ~ ~
execute if entity @e[name=Values,scores={Players=8,Swap=1}] run execute at @e[name=Player3] run tp @a[team=2] ~ ~ ~
execute if entity @e[name=Values,scores={Players=8,Swap=1}] run execute at @e[name=Player4] run tp @a[team=1] ~ ~ ~
execute if entity @e[name=Values,scores={Players=8,Swap=1}] run execute at @e[name=Player5] run tp @a[team=8] ~ ~ ~
execute if entity @e[name=Values,scores={Players=8,Swap=1}] run execute at @e[name=Player6] run tp @a[team=7] ~ ~ ~
execute if entity @e[name=Values,scores={Players=8,Swap=1}] run execute at @e[name=Player7] run tp @a[team=6] ~ ~ ~
execute if entity @e[name=Values,scores={Players=8,Swap=1}] run execute at @e[name=Player8] run tp @a[team=5] ~ ~ ~

execute if entity @e[name=Values,scores={Players=8,Swap=1}] run kill @e[name=Player1]
execute if entity @e[name=Values,scores={Players=8,Swap=1}] run kill @e[name=Player2]
execute if entity @e[name=Values,scores={Players=8,Swap=1}] run kill @e[name=Player3]
execute if entity @e[name=Values,scores={Players=8,Swap=1}] run kill @e[name=Player4]
execute if entity @e[name=Values,scores={Players=8,Swap=1}] run kill @e[name=Player5]
execute if entity @e[name=Values,scores={Players=8,Swap=1}] run kill @e[name=Player6]
execute if entity @e[name=Values,scores={Players=8,Swap=1}] run kill @e[name=Player7]
execute if entity @e[name=Values,scores={Players=8,Swap=1}] run kill @e[name=Player8]

execute if entity @e[name=Values,scores={Players=8,Swap=1}] run execute at @a run playsound entity.enderman.teleport ambient @a ~ ~ ~ 100 1