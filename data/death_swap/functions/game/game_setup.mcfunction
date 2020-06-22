#These commands will be triggered once to setup the game and scores

execute if entity @e[scores={Select=1}] run tellraw @a ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"]

execute if entity @e[scores={Select=1}] run team join bol @a
execute if entity @e[scores={Select=1}] run team join 1 @r[team=bol]
execute if entity @e[scores={Select=1}] run team join 2 @r[team=bol]
execute if entity @e[scores={Select=1}] run team join 3 @r[team=bol]
execute if entity @e[scores={Select=1}] run team join 4 @r[team=bol]
execute if entity @e[scores={Select=1}] run team join 5 @r[team=bol]
execute if entity @e[scores={Select=1}] run team join 6 @r[team=bol]
execute if entity @e[scores={Select=1}] run team join 7 @r[team=bol]
execute if entity @e[scores={Select=1}] run team join 8 @r[team=bol]

execute if entity @e[scores={Select=1}] run scoreboard players set @e[name=Values] Swap 0
execute if entity @e[scores={Select=1}] run scoreboard players set @e[name=Values] Timer 0

execute if entity @e[scores={Select=1}] run scoreboard players set @e[name=Values] PlayersDeath 0

execute if entity @e[scores={Select=1}] run execute if entity @p[team=1] run scoreboard players set @e[name=Values] Players 1
execute if entity @e[scores={Select=1}] run execute if entity @p[team=2] run scoreboard players set @e[name=Values] Players 2
execute if entity @e[scores={Select=1}] run execute if entity @p[team=3] run scoreboard players set @e[name=Values] Players 3
execute if entity @e[scores={Select=1}] run execute if entity @p[team=4] run scoreboard players set @e[name=Values] Players 4
execute if entity @e[scores={Select=1}] run execute if entity @p[team=5] run scoreboard players set @e[name=Values] Players 5
execute if entity @e[scores={Select=1}] run execute if entity @p[team=6] run scoreboard players set @e[name=Values] Players 6
execute if entity @e[scores={Select=1}] run execute if entity @p[team=7] run scoreboard players set @e[name=Values] Players 7
execute if entity @e[scores={Select=1}] run execute if entity @p[team=8] run scoreboard players set @e[name=Values] Players 8

execute if entity @e[scores={Select=1}] run execute if entity @e[name=Values,scores={Players=2..}] run tellraw @a [{"text":"[!]","color":"yellow"},{"text":" Game has started!","color":"gray"}]
execute if entity @e[scores={Select=1}] run execute if entity @e[name=Values,scores={Players=2..}] run scoreboard players set @e[name=Values] GameStart 1
execute if entity @e[scores={Select=1}] run execute if entity @e[name=Values,scores={Players=1}] run tellraw @a {"text":"Not enough players to start the game!","color":"red"}
execute if entity @e[scores={Select=1}] run execute if entity @e[name=Values,scores={Players=1}] run title @a actionbar {"text":"You must be at least 2 players!","color":"gold"}
execute if entity @e[scores={Select=1}] run execute if entity @e[name=Values,scores={Players=1}] run execute at @a[team=1] run playsound block.anvil.land master @a ~ ~ ~ 100 2
execute if entity @e[scores={Select=1}] run execute if entity @e[name=Values,scores={Players=1}] run tellraw @a [{"text":"[!] ","color":"yellow"},{"text":"Click here to start the game!","color":"gray","clickEvent":{"action":"run_command","value":"/trigger Select set 1"}}]
execute if entity @e[scores={Select=1}] run execute if entity @e[name=Values,scores={Players=1}] run tellraw @a {"text":" "}
execute if entity @e[scores={Select=1}] run execute if entity @e[name=Values,scores={Players=1}] run tellraw @a [{"text":"[!] ","color":"yellow"},{"text":"Click here to change the settings!","color":"gray","clickEvent":{"action":"run_command","value":"/trigger Select set 2"}}]
execute if entity @e[scores={Select=1}] run execute if entity @e[name=Values,scores={Players=2..}] run execute at @a[team=1] run playsound entity.arrow.hit_player master @a[team=1] ~ ~ ~ 100 1
execute if entity @e[scores={Select=1}] run execute at @a run playsound entity.arrow.hit_player master @p ~ ~ ~ 100 1

execute if entity @e[scores={Select=1}] run advancement revoke @a everything
execute if entity @e[scores={Select=1}] run scoreboard players set @a Death 0
execute if entity @e[scores={Select=1}] run execute if entity @e[name=Values,scores={Players=1}] run scoreboard players enable @p Select
execute if entity @e[scores={Select=1}] run scoreboard players set @e[scores={Select=1}] Select 0