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

  // No fall Damage //
  execute.if.entity('@e[scores={Select=15}]').run.scoreboard.players.set('@e[name=Values]', 'S_FallDamage', 1)
  execute.if.entity('@e[scores={Select=15}]').run.gamerule('fallDamage', false)

  // Fall Damage //
  execute.if.entity('@e[scores={Select=16}]').run.scoreboard.players.set('@e[name=Values]', 'S_FallDamage', 0)
  execute.if.entity('@e[scores={Select=16}]').run.gamerule('fallDamage', true)

  // No fire Damage //
  execute.if.entity('@e[scores={Select=17}]').run.scoreboard.players.set('@e[name=Values]', 'S_FireDamage', 1)
  execute.if.entity('@e[scores={Select=17}]').run.gamerule('fireDamage', false)
  
  // Fire Damage //
  execute.if.entity('@e[scores={Select=18}]').run.scoreboard.players.set('@e[name=Values]', 'S_FireDamage', 0)
  execute.if.entity('@e[scores={Select=18}]').run.gamerule('fireDamage', true)

  // No Natural Regeneration //
  execute.if.entity('@e[scores={Select=19}]').run.scoreboard.players.set('@e[name=Values]', 'S_NaturalRegen', 1)
  execute.if.entity('@e[scores={Select=19}]').run.gamerule('naturalRegeneration', false)
  
  // Natural Regeneration //
  execute.if.entity('@e[scores={Select=20}]').run.scoreboard.players.set('@e[name=Values]', 'S_NaturalRegen', 0)
  execute.if.entity('@e[scores={Select=20}]').run.gamerule('naturalRegeneration', true)

  // Disable DeathSwap+ //
  execute.if.entity('@e[scores={Select=21}]').run.scoreboard.players.set('@e[name=Values]', 'S_DeathSwapPlus', 1)
  
  // Enable DeathSwap+  //
  execute.if.entity('@e[scores={Select=22}]').run.scoreboard.players.set('@e[name=Values]', 'S_DeathSwapPlus', 0)

  // Disable Auto Border //
  execute.if.entity('@e[scores={Select=30}]').run.scoreboard.players.set('@e[name=Values]', 'AutoBorder', 1)

  // Enable Auto Border //
  execute.if.entity('@e[scores={Select=31}]').run.scoreboard.players.set('@e[name=Values]', 'AutoBorder', 0)

  // Game Time Count //
  execute.if.entity('@e[scores={Select=40}]').run.scoreboard.players.set('@e[name=Values]', 'S_TimerCount', 600)
  execute.if.entity('@e[scores={Select=41}]').run.scoreboard.players.set('@e[name=Values]', 'S_TimerCount', 1200)
  execute.if.entity('@e[scores={Select=42}]').run.scoreboard.players.set('@e[name=Values]', 'S_TimerCount', 2400)
  execute.if.entity('@e[scores={Select=43}]').run.scoreboard.players.set('@e[name=Values]', 'S_TimerCount', 3600)
  execute.if.entity('@e[scores={Select=44}]').run.scoreboard.players.set('@e[name=Values]', 'S_TimerCount', 4800)
  execute.if.entity('@e[scores={Select=45}]').run.scoreboard.players.set('@e[name=Values]', 'S_TimerCount', 6000)
  execute.if.entity('@e[scores={Select=46}]').run.scoreboard.players.set('@e[name=Values]', 'S_TimerCount', 7200)
  execute.if.entity('@e[scores={Select=47}]').run.scoreboard.players.set('@e[name=Values]', 'S_TimerCount', 8400)
  execute.if.entity('@e[scores={Select=48}]').run.scoreboard.players.set('@e[name=Values]', 'S_TimerCount', 9600)
  execute.if.entity('@e[scores={Select=49}]').run.scoreboard.players.set('@e[name=Values]', 'S_TimerCount', 10800)

  // Back to settings page
  execute.if.entity('@e[scores={Select=5..49}]').run.scoreboard.players.set('@a', 'Select', 2)
})

/*

Used for setting configuration, reloading, & uninstalling the datapack

*/