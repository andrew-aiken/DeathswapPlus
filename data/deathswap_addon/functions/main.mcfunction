
scoreboard objectives add deathswap_bool dummy

execute unless score $init deathswap_bool matches 1 run function deathswap_addon:scripts/init