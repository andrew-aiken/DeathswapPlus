import { MCFunction, execute } from 'sandstone'

var PlayerTeamCount:number = 16;

MCFunction('deathswaplus/players/config', () => {
  for (var teamNum:any = 1; teamNum < PlayerTeamCount ; teamNum++) {
    execute.if.entity(`@e[type=armor_stand,name=Values,scores={Players=${teamNum+1}}]`).run.functionCmd(`deathswapplus:deathswaplus/players/players_${teamNum+1}`)
  }
})