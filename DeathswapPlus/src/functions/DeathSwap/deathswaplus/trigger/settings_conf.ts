import { MCFunction, execute } from 'sandstone'

MCFunction('deathswaplus/trigger/settings_conf', () => {
  // Reload //
  execute.if.entity('@e[scores={Select=3}]').run.reload()

  // Uninstall //
  execute.if.entity('@e[scores={Select=4}]').run.functionCmd('deathswapplus:deathswaplus/uninstall')

  // Disable Advancements //
  execute.if.entity('@e[scores={Select=5}]').run.scoreboard.players.set('@e[name=Values]', 'S_Achievements', 1)
  execute.if.entity('@e[scores={Select=5}]').run.gamerule('announceAdvancements', false)

  // Enable Advancements //
  execute.if.entity('@e[scores={Select=6}]').run.scoreboard.players.set('@e[name=Values]', 'S_Achievements', 0)
  execute.if.entity('@e[scores={Select=6}]').run.gamerule('announceAdvancements', true)
  
  // Disable Nether Portal //
  execute.if.entity('@e[scores={Select=7}]').run.scoreboard.players.set('@e[name=Values]', 'S_Nether', 1)

  // Enable Nether Portal //
  execute.if.entity('@e[scores={Select=8}]').run.scoreboard.players.set('@e[name=Values]', 'S_Nether', 0)
  
  // Don't Announce Swap //
  execute.if.entity('@e[scores={Select=9}]').run.scoreboard.players.set('@e[name=Values]', 'S_AnSwap', 1)

  // Announce Swap //
  execute.if.entity('@e[scores={Select=10}]').run.scoreboard.players.set('@e[name=Values]', 'S_AnSwap', 0)

  // Hide Timer //
  execute.if.entity('@e[scores={Select=11}]').run.scoreboard.players.set('@e[name=Values]', 'S_ShowTimer', 1)
  execute.if.entity('@e[scores={Select=11}]').run.scoreboard.objectives.setDisplay('sidebar')
  
  // Show Timer //
  execute.if.entity('@e[scores={Select=12}]').run.scoreboard.players.set('@e[name=Values]', 'S_ShowTimer', 0)
  execute.if.entity('@e[scores={Select=12}]').run.scoreboard.objectives.setDisplay('sidebar', 'Time')

  // Disable Hunger //
  execute.if.entity('@e[scores={Select=13}]').run.scoreboard.players.set('@e[name=Values]', 'S_Hunger', 1)
  
  // Enable Hunger //
  execute.if.entity('@e[scores={Select=14}]').run.scoreboard.players.set('@e[name=Values]', 'S_Hunger', 0)

  // Game Time Count //
  execute.if.entity('@e[scores={Select=20}]').run.scoreboard.players.set('@e[name=Values]', 'S_TimerCount', 600)
  execute.if.entity('@e[scores={Select=21}]').run.scoreboard.players.set('@e[name=Values]', 'S_TimerCount', 1200)
  execute.if.entity('@e[scores={Select=22}]').run.scoreboard.players.set('@e[name=Values]', 'S_TimerCount', 2400)
  execute.if.entity('@e[scores={Select=23}]').run.scoreboard.players.set('@e[name=Values]', 'S_TimerCount', 3600)
  execute.if.entity('@e[scores={Select=24}]').run.scoreboard.players.set('@e[name=Values]', 'S_TimerCount', 4800)
  execute.if.entity('@e[scores={Select=25}]').run.scoreboard.players.set('@e[name=Values]', 'S_TimerCount', 6000)
  execute.if.entity('@e[scores={Select=26}]').run.scoreboard.players.set('@e[name=Values]', 'S_TimerCount', 7200)
  execute.if.entity('@e[scores={Select=27}]').run.scoreboard.players.set('@e[name=Values]', 'S_TimerCount', 8400)
  execute.if.entity('@e[scores={Select=28}]').run.scoreboard.players.set('@e[name=Values]', 'S_TimerCount', 9600)
  execute.if.entity('@e[scores={Select=29}]').run.scoreboard.players.set('@e[name=Values]', 'S_TimerCount', 10800)

  // Back to settings page
  execute.if.entity('@e[scores={Select=5..29}]').run.scoreboard.players.set('@a', 'Select', 2)
})

/*

Used for setting configuration, reloading, & uninstalling the datapack

*/