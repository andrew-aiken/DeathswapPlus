import { MCFunction, execute, comment } from 'sandstone'

var PlayerTeamCount:number = 16;

for (var teamNum:any = 1; teamNum < PlayerTeamCount ; teamNum++) {
  callMCFunction(teamNum + 1)
}

function callMCFunction(number: number) {
  MCFunction(`deathswaplus/players/players_${number}`, () => {
    for (var num:any = 0; num < number ; num++) {
      execute.if.entity(`@e[type=armor_stand,name="Values",scores={Players=${number}}]`).at(`@a[team=${num}]`).run.summon('minecraft:armor_stand', ['~', '~', '~'], {
        CustomName: '{"text": "Player' + num + '"}',
        Invisible:1,
        NoGravity:1
      })
    }

    comment()
    for (var num:any = 0; num < number ; num++) {
      var num2:number = num + 1
      if (number == num2) {
        num2 = 0
      }
      execute.if.entity(`@e[type=armor_stand,name="Values",scores={Players=${number}}]`).at(`@e[type=armor_stand,name="Player${num}"]`).run.tp(`@e[team=${num2}]`, ['~', '~', '~'])
    }

    comment()
    for (var num:any = 0; num < number ; num++) {
      execute.if.entity(`@e[type=armor_stand,name="Values",scores={Players=${number}}]`).run.kill(`@e[type=armor_stand,name="Player${num}"]`)
    }

    comment()
    execute.if.entity(`@e[type=armor_stand,name="Values",scores={Players=${number}}]`).at('@a').run.playsound('minecraft:entity.enderman.teleport', 'ambient', '@a', ['~ ~ ~'], 100, 1)
  })
}