#Select 1
execute if entity @e[scores={Select=1}] run function death_swap:game/trigger/select1

#Select 2
execute if entity @e[scores={Select=2}] run function death_swap:game/trigger/select2

#Select 3
execute if entity @e[scores={Select=3..}] run function death_swap:game/trigger/select3
