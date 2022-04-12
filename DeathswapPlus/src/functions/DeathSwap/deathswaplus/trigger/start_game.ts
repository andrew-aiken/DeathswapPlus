import { MCFunction, execute } from 'sandstone'

MCFunction('deathswaplus/trigger/start_game', () => {
    execute.if.entity('@e[scores={Select=1}]').run.worldborder.set(1000000, 0)
    execute.if.entity('@e[scores={Select=1}]').run.functionCmd('deathswapplus:deathswaplus/setup')
    execute.if.entity('@e[scores={Select=1}]').run.scoreboard.players.set('@e[scores={Select=1}]', 'Select', 0)
})

/*

Runs the functions to start the game

*/