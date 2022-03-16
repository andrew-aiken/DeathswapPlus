import type { SandstoneConfig } from 'sandstone'

export default {
  name: 'itemPack',
  description: 'DeathswapPlus',
  formatVersion: 8,
  namespace: 'deathswap-plus',
  packUid: 'oSr1maYV',
  saveOptions: { path: '/mnt/c/Users/aaiken/AppData/Roaming/.minecraft/saves/DataPackTesting/datapacks' },
  onConflict: {
    default: 'warn',
  },
} as SandstoneConfig
