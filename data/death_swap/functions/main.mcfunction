##################################################################
# Description: This minigame is called death swap.               #
# Every few minutes, you will switch positions with the other    #
# player (Up to 8 players). The point is to make it so that when #
# the positions are swapped you kill the opponent by trapping em.#
# The last player to live is the winner.                         #
#                                                                #
# Source of Idea: Back in 2013 a minecraft youtuber by the name  #
# Sethbling created this game. I updated it and made it work with#
# multiple players rather than 2.                                #
# I learnt about this minigame from other minecraft youtubers by #
# the name of Dream and GeorgeNotFound. You should go check them #
# out they make hilarious content.                               #
#________________________________________________________________#
#                                                                #
#                      Creator: _Raph_                           #
#                                                                #
#          Reach me at: pro.raphaelromeo1@gmail.com              #
#                                                                #
##################################################################

execute if entity @e[name=Values,scores={GameStart=0}] run function death_swap:game/gamestart0

execute if entity @e[name=Values,scores={GameStart=1}] run function death_swap:game/gamestart1