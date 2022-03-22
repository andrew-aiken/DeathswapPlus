import { MCFunction, execute } from 'sandstone'

MCFunction('deathswaplus/trigger/start_game', () => {

    execute.if.entity('@e[type=armor_stand,name=Values,scores={Select=1}]').run.advancement.revoke('@a').everything()
    execute.if.entity('@e[type=armor_stand,name=Values,scores={Select=1}]').run.scoreboard.players.set('@a', 'Death', 0)

    execute.if.entity('@e[type=armor_stand,name=Values,scores={Select=1}]').run.functionCmd('deathswapplus:deathswaplus/setup')
    execute.if.entity('@e[type=armor_stand,name=Values,scores={Select=1}]').run.scoreboard.players.set('@e[scores={Select=1}]', 'Select', 0)
})

/*

Runs the functions to start the game

*/