#These commands will be repeated forever while the variable is true

tellraw @a ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"]
execute if entity @e[name=Values,scores={Players=1,PlayersDeath=1..}] run execute at @p[gamemode=survival] run tellraw @a {"text":"","color":"green","extra":[{"selector":"@p"},{"text":" has won the game!"}]}
execute if entity @e[name=Values,scores={Players=1,PlayersDeath=1..}] run execute at @p[gamemode=survival] run playsound ui.toast.challenge_complete block @p[gamemode=survival] ~ ~ ~ 100 1
execute if entity @e[name=Values,scores={Players=1,PlayersDeath=1..}] run title @a actionbar {"text":"Type ''/reload'' to play again!","color":"gold"}
execute if entity @e[name=Values,scores={Players=1,PlayersDeath=1..}] run scoreboard players set @e[name=Values] GameStart 0
execute if entity @e[name=Values,scores={Players=1,PlayersDeath=1..}] run scoreboard players set Seconds Time 0
execute if entity @e[name=Values,scores={Players=1,PlayersDeath=1..}] run scoreboard players set Minutes Time 0
execute if entity @e[name=Values,scores={Players=1,PlayersDeath=1..}] run scoreboard players set @e[name=Values] TimerSecs 0
execute if entity @e[name=Values,scores={Players=1,PlayersDeath=1..}] run scoreboard players set @e[name=Values] TimerMins 0

execute if entity @e[name=Values,scores={Players=1..}] run tellraw @a [{"text":"[!] ","color":"yellow"},{"text":"Click here to start the game!","color":"gray","clickEvent":{"action":"run_command","value":"/trigger Select set 1"}}]
execute if entity @e[name=Values,scores={Players=1..}] run tellraw @a {"text":" "}
execute if entity @e[name=Values,scores={Players=1..}] run tellraw @a [{"text":"[!] ","color":"yellow"},{"text":"Click here to change the settings!","color":"gray","clickEvent":{"action":"run_command","value":"/trigger Select set 2"}}]
execute at @a run playsound minecraft:ui.button.click master @p ~ ~ ~ 100 2