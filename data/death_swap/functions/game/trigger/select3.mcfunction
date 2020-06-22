#Select 3
execute if entity @e[scores={Select=3}] run reload

#Select 4
execute if entity @e[scores={Select=4}] run playsound minecraft:block.anvil.break master @p ~ ~ ~ 100 0
execute if entity @e[scores={Select=4}] run scoreboard players set @a Select 2

#Select 5
execute if entity @e[scores={Select=5}] run scoreboard players set @e[name=Values] TimerCount 9600
execute if entity @e[scores={Select=5}] run scoreboard players set @a Select 2

#Select 6
execute if entity @e[scores={Select=6}] run scoreboard players set @e[name=Values] TimerCount 10800
execute if entity @e[scores={Select=6}] run scoreboard players set @a Select 2

#Select 7
execute if entity @e[scores={Select=7}] run scoreboard players set @e[name=Values] TimerCount 8400
execute if entity @e[scores={Select=7}] run scoreboard players set @a Select 2

#Select 8
execute if entity @e[scores={Select=8}] run scoreboard players set @e[name=Values] TimerCount 9600
execute if entity @e[scores={Select=8}] run scoreboard players set @a Select 2

#Select 9
execute if entity @e[scores={Select=9}] run scoreboard players set @e[name=Values] TimerCount 7200
execute if entity @e[scores={Select=9}] run scoreboard players set @a Select 2

#Select 10
execute if entity @e[scores={Select=10}] run scoreboard players set @e[name=Values] TimerCount 8400
execute if entity @e[scores={Select=10}] run scoreboard players set @a Select 2

#Select 11
execute if entity @e[scores={Select=11}] run scoreboard players set @e[name=Values] TimerCount 6000
execute if entity @e[scores={Select=11}] run scoreboard players set @a Select 2

#Select 12
execute if entity @e[scores={Select=12}] run scoreboard players set @e[name=Values] TimerCount 7200
execute if entity @e[scores={Select=12}] run scoreboard players set @a Select 2

#Select 13
execute if entity @e[scores={Select=13}] run scoreboard players set @e[name=Values] TimerCount 4800
execute if entity @e[scores={Select=13}] run scoreboard players set @a Select 2

#Select 14
execute if entity @e[scores={Select=14}] run scoreboard players set @e[name=Values] TimerCount 6000
execute if entity @e[scores={Select=14}] run scoreboard players set @a Select 2

#Select 15
execute if entity @e[scores={Select=15}] run scoreboard players set @e[name=Values] TimerCount 3600
execute if entity @e[scores={Select=15}] run scoreboard players set @a Select 2

#Select 16
execute if entity @e[scores={Select=16}] run scoreboard players set @e[name=Values] TimerCount 4800
execute if entity @e[scores={Select=16}] run scoreboard players set @a Select 2

#Select 17
execute if entity @e[scores={Select=17}] run scoreboard players set @e[name=Values] TimerCount 2400
execute if entity @e[scores={Select=17}] run scoreboard players set @a Select 2

#Select 18
execute if entity @e[scores={Select=18}] run scoreboard players set @e[name=Values] TimerCount 3600
execute if entity @e[scores={Select=18}] run scoreboard players set @a Select 2

#Select 19
#ERROR TIMER VALUE TOO LOW.
execute if entity @e[scores={Select=19}] run playsound minecraft:block.anvil.break master @p ~ ~ ~ 100 0
execute if entity @e[scores={Select=19}] run scoreboard players set @a Select 2

#Select 20
execute if entity @e[scores={Select=20}] run scoreboard players set @e[name=Values] RandomScore 1
execute if entity @e[scores={Select=20}] run gamerule announceAdvancements false
execute if entity @e[scores={Select=20}] run scoreboard players set @a Select 2

#Select 21
execute if entity @e[scores={Select=21}] run scoreboard players set @e[name=Values] RandomScore 0
execute if entity @e[scores={Select=21}] run gamerule announceAdvancements true
execute if entity @e[scores={Select=21}] run scoreboard players set @a Select 2

#Select 22
execute if entity @e[scores={Select=22}] run scoreboard players set @e[name=Values] RandomScore2 1
execute if entity @e[scores={Select=22}] run scoreboard objectives setdisplay sidebar Time
execute if entity @e[scores={Select=22}] run scoreboard players set @a Select 2

#Select 23
execute if entity @e[scores={Select=23}] run scoreboard players set @e[name=Values] RandomScore2 0
execute if entity @e[scores={Select=23}] run scoreboard objectives setdisplay sidebar
execute if entity @e[scores={Select=23}] run scoreboard players set @a Select 2

#Select 24
execute if entity @e[scores={Select=24}] run scoreboard players set @e[name=Values] RandomScore3 1
execute if entity @e[scores={Select=24}] run scoreboard players set @a Select 2

#Select 25
execute if entity @e[scores={Select=25}] run scoreboard players set @e[name=Values] RandomScore3 0
execute if entity @e[scores={Select=25}] run scoreboard players set @a Select 2

#Select 26
execute if entity @e[scores={Select=26}] run function death_swap:uninstall
execute if entity @e[scores={Select=26}] run scoreboard players set @a Select 2

#Select 27
execute if entity @e[scores={Select=27}] run scoreboard players set @e[name=Values] NetherPortal 1
execute if entity @e[scores={Select=27}] run scoreboard players set @a Select 2

#Select 28
execute if entity @e[scores={Select=28}] run scoreboard players set @e[name=Values] NetherPortal 0
execute if entity @e[scores={Select=28}] run scoreboard players set @a Select 2

#Select 29
execute if entity @e[scores={Select=29}] run scoreboard players set @e[name=Values] AnSwap 0
execute if entity @e[scores={Select=29}] run scoreboard players set @a Select 2

#Select 30
execute if entity @e[scores={Select=30}] run scoreboard players set @e[name=Values] AnSwap 1
execute if entity @e[scores={Select=30}] run scoreboard players set @a Select 2