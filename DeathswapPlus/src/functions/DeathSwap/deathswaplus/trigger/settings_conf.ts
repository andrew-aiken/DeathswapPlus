import { MCFunction, execute } from 'sandstone'

MCFunction('deathswaplus/trigger/settings_conf', () => {
  // Disable Advancements //
  execute.if.entity('@e[scores={Select=5}]').run.scoreboard.players.set('@e[name=Values]', 'S_Achievements', 1)
  execute.if.entity('@e[scores={Select=5}]').run.gamerule('announceAdvancements', false)
  execute.if.entity('@e[scores={Select=5}]').run.scoreboard.players.set('@a', 'Select', 2)

  // Enable Advancements //
  execute.if.entity('@e[scores={Select=6}]').run.scoreboard.players.set('@e[name=Values]', 'S_Achievements', 0)
  execute.if.entity('@e[scores={Select=6}]').run.gamerule('announceAdvancements', true)
  execute.if.entity('@e[scores={Select=6}]').run.scoreboard.players.set('@a', 'Select', 2)
  
  // Disable Nether Portal //
  execute.if.entity('@e[scores={Select=7}]').run.scoreboard.players.set('@e[name=Values]', 'S_NetherPortal', 1)
  execute.if.entity('@e[scores={Select=7}]').run.scoreboard.players.set('@a', 'Select', 2)

  // Enable Nether Portal //
  execute.if.entity('@e[scores={Select=8}]').run.scoreboard.players.set('@e[name=Values]', 'S_NetherPortal', 0)
  execute.if.entity('@e[scores={Select=8}]').run.scoreboard.players.set('@a', 'Select', 2)
  
  // Don't Announce Swap //
  execute.if.entity('@e[scores={Select=9}]').run.scoreboard.players.set('@e[name=Values]', 'S_AnSwap', 1)
  execute.if.entity('@e[scores={Select=9}]').run.scoreboard.players.set('@a', 'Select', 2)

  // Announce Swap //
  execute.if.entity('@e[scores={Select=10}]').run.scoreboard.players.set('@e[name=Values]', 'S_AnSwap', 0)
  execute.if.entity('@e[scores={Select=10}]').run.scoreboard.players.set('@a', 'Select', 2)
})

/*

Used for setting configuration, reloading, & uninstalling the datapack

*/