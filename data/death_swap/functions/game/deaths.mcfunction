#These commands will be repeated forever while the variable is true

gamemode spectator @a[scores={Death=1}]

execute if entity @p[team=1,scores={Death=1}] run team join 1 @p[team=2]
execute if entity @p[team=1,scores={Death=1}] run team join 2 @p[team=3]
execute if entity @p[team=1,scores={Death=1}] run team join 3 @p[team=4]
execute if entity @p[team=1,scores={Death=1}] run team join 4 @p[team=5]
execute if entity @p[team=1,scores={Death=1}] run team join 5 @p[team=6]
execute if entity @p[team=1,scores={Death=1}] run team join 6 @p[team=7]
execute if entity @p[team=1,scores={Death=1}] run team join 7 @p[team=8]

execute if entity @p[team=2,scores={Death=1}] run team join 2 @p[team=3]
execute if entity @p[team=2,scores={Death=1}] run team join 3 @p[team=4]
execute if entity @p[team=2,scores={Death=1}] run team join 4 @p[team=5]
execute if entity @p[team=2,scores={Death=1}] run team join 5 @p[team=6]
execute if entity @p[team=2,scores={Death=1}] run team join 6 @p[team=7]
execute if entity @p[team=2,scores={Death=1}] run team join 7 @p[team=8]

execute if entity @p[team=3,scores={Death=1}] run team join 3 @p[team=4]
execute if entity @p[team=3,scores={Death=1}] run team join 4 @p[team=5]
execute if entity @p[team=3,scores={Death=1}] run team join 5 @p[team=6]
execute if entity @p[team=3,scores={Death=1}] run team join 6 @p[team=7]
execute if entity @p[team=3,scores={Death=1}] run team join 7 @p[team=8]

execute if entity @p[team=4,scores={Death=1}] run team join 4 @p[team=5]
execute if entity @p[team=4,scores={Death=1}] run team join 5 @p[team=6]
execute if entity @p[team=4,scores={Death=1}] run team join 6 @p[team=7]
execute if entity @p[team=4,scores={Death=1}] run team join 7 @p[team=8]

execute if entity @p[team=5,scores={Death=1}] run team join 5 @p[team=6]
execute if entity @p[team=5,scores={Death=1}] run team join 6 @p[team=7]
execute if entity @p[team=5,scores={Death=1}] run team join 7 @p[team=8]

execute if entity @p[team=6,scores={Death=1}] run team join 6 @p[team=7]
execute if entity @p[team=6,scores={Death=1}] run team join 7 @p[team=8]

execute if entity @p[team=7,scores={Death=1}] run team join 7 @p[team=8]


team leave @a[scores={Death=1}]

execute if entity @p[scores={Death=1}] run scoreboard players add @e[name=Values] PlayersDeath 1

execute if entity @p[scores={Death=1}] run scoreboard players remove @e[name=Values] Players 1

scoreboard players set @a[scores={Death=1}] Death 2