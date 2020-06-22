gamerule doImmediateRespawn false
gamerule commandBlockOutput true
gamerule doDaylightCycle true
gamerule announceAdvancements true



scoreboard objectives remove deathswap_bool
tellraw @a [{"text": "Deathswap Addons uninstalled"}]
datapack disable "file/Deathswap_addon"



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

team remove bol
team remove 1
team remove 2
team remove 3
team remove 4
team remove 5
team remove 6
team remove 7
team remove 8

tellraw @a {"text":"________________________________________","color":"black"}
tellraw @a {"text":" "}
tellraw @a {"text":"Death Swap has been successfully uninstalled!","color":"red"}
tellraw @a {"text":"------The Datapack has been disabled.------","color":"gold"}
tellraw @a {"text":"--------Type ''/reload'' to reinstall!--------","color":"green"}
tellraw @a {"text":"________________________________________","color":"black"}

gamemode survival @a
gamerule sendCommandFeedback true