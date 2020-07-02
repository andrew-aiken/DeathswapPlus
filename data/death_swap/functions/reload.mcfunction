#These actions will only be triggered once per reload, They will also allow the game to restart with a 100% clean reload

gamerule doImmediateRespawn true
gamerule commandBlockOutput false
gamerule sendCommandFeedback false
gamemode survival @a



scoreboard objectives add Hearts health
scoreboard objectives setdisplay list Hearts



advancement revoke @a everything
recipe give @a *


kill @e[name=Values]

tellraw @a ["\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"]

scoreboard objectives remove Death
scoreboard objectives remove AnSwap
scoreboard objectives remove Players
scoreboard objectives remove Timer
scoreboard objectives remove PlayersDeath
scoreboard objectives remove GameStart
scoreboard objectives remove Swap
scoreboard objectives remove Select
scoreboard objectives remove TimerCount
scoreboard objectives remove RandomScore
scoreboard objectives remove Time
scoreboard objectives remove RandomScore2
scoreboard objectives remove RandomScore3
scoreboard objectives remove TimerSecs
scoreboard objectives remove TimerMins
scoreboard objectives remove NetherPortal

scoreboard objectives add Death deathCount "Deaths"
scoreboard objectives add AnSwap dummy
scoreboard objectives add PlayersDeath dummy
scoreboard objectives add Players dummy "Player count"
scoreboard objectives add Timer dummy "Timer"
scoreboard objectives add GameStart dummy
scoreboard objectives add Swap dummy
scoreboard objectives add Select trigger
scoreboard objectives add TimerCount dummy
scoreboard objectives add RandomScore dummy
scoreboard objectives add Time dummy [{"text":"--=","color":"dark_gray","bold":"false"},{"text":"TIME","color":"white","bold":"true"},{"text":"=--","color":"dark_gray","bold":"false"}]
scoreboard objectives add RandomScore2 dummy
scoreboard objectives add TimerSecs dummy
scoreboard objectives add TimerMins dummy
scoreboard objectives add RandomScore3 dummy
scoreboard objectives add NetherPortal dummy

team remove bol
team remove 1
team remove 2
team remove 3
team remove 4
team remove 5
team remove 6
team remove 7
team remove 8

team add 1 "Team 1"
team add 2 "Team 2"
team add 3 "Team 3"
team add 4 "Team 4"
team add 5 "Team 5"
team add 6 "Team 6"
team add 7 "Team 7"
team add 8 "Team 8"
team add bol "bol"

team join bol @a
team join 1 @r[team=bol]

summon armor_stand 0 60 0 {CustomName:"{\"text\":\"Values\"}",Marker:1,Invisible:1,NoGravity:1}
forceload add 0 0

scoreboard players set @e[name=Values] RandomScore 0
scoreboard players set @e[name=Values] RandomScore2 0
scoreboard players set @e[name=Values] RandomScore3 0
scoreboard players set @e[name=Values] TimerCount 6000
scoreboard players set @e[name=Values] GameStart 0
scoreboard players set @e[name=Values] Swap 0
scoreboard players set @e[name=Values] Players 1
scoreboard players set @e[name=Values] NetherPortal 0
scoreboard players set @e[name=Values] AnSwap 1

scoreboard players set Seconds Time 0
scoreboard players set Minutes Time 0

execute if entity @e[name=Values,scores={Players=1..}] run tellraw @a {"text":"Game has been reloaded!","color":"green"}
execute if entity @e[name=Values,scores={Players=1..}] run tellraw @a {"text":"Death Swap V1.2, by _Raph_R","color":"yellow"}
execute if entity @e[name=Values,scores={Players=1..}] run tellraw @a [{"text":"[!] ","color":"yellow"},{"text":"Click here to start the game!","color":"gray","clickEvent":{"action":"run_command","value":"/trigger Select set 1"}}]
execute if entity @e[name=Values,scores={Players=1..}] run tellraw @a {"text":" "}
execute if entity @e[name=Values,scores={Players=1..}] run tellraw @a [{"text":"[!] ","color":"yellow"},{"text":"Click here to change the settings!","color":"gray","clickEvent":{"action":"run_command","value":"/trigger Select set 2"}}]
execute at @a run playsound minecraft:ui.button.click master @p ~ ~ ~ 100 2