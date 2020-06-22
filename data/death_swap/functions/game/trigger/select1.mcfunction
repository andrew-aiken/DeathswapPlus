#Redirect

execute if entity @e[scores={Select=1}] run function death_swap:game/game_setup
execute if entity @e[scores={Select=1}] run scoreboard players set @e[scores={Select=1}] Select 0