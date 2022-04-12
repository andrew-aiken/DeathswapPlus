import type { SandstoneConfig } from 'sandstone'

export default {
  name: 'DeathswapPlus',
  description: 'DeathswapPlus',
  formatVersion: 9,
  namespace: 'deathswapplus',
  packUid: 'oSr1maYV',
  saveOptions: { path: '/Users/aaiken/pub_repo/DS' },
  onConflict: {
    default: 'warn',
  },
} as SandstoneConfig
