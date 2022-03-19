import { MCFunction, execute, give, sleep, playsound } from 'sandstone'

MCFunction('fireball/loop', () => {
  execute.as('@a[nbt={Inventory:[{id:"minecraft:jigsaw"}]}]').run.functionCmd('deathswapplus:fireball/give')
  execute.as('@e[type=minecraft:snowball,nbt={Item:{tag:{fireball:1b}}}]').at('@s').anchored('eyes').run.functionCmd('deathswapplus:fireball/throw')
}, {runOnLoad: false, runEachTick: true})

MCFunction('fireball/give', () => {
  execute.as('@a[nbt={Inventory:[{id:"minecraft:jigsaw"}]}]').run.clear('@s', 'minecraft:jigsaw', 1)
  give('@s', 'minecraft:snowball{display:{Name:\'{"text":"Fireball","color":"white","italic":false}\'},CustomModelData:420,fireball:1b}', 1)
})

MCFunction('fireball/throw', async () => {
  execute.at('@e[type=minecraft:snowball,nbt={Item:{tag:{fireball:1b}}},sort=nearest,limit=1]').run.summon(
    'minecraft:fireball',
    ['~', '~', '~'],
    {
      ExplosionPower: 3,
      Tags: ["motion_projectile"]
    }
  )

  execute.as('@e[tag=motion_projectile,sort=nearest,limit=1]').at('@s').run.data.modify.entity('@s', 'Motion').set.from.entity('@e[type=minecraft:snowball,nbt={Item:{tag:{fireball:1b}}},sort=nearest,limit=1]', 'Motion')
  //execute.as('@e[tag=motion_projectile,sort=nearest,limit=1]').at('@s').run.data.modify.entity('@s', 'power').set.from.entity('@e[type=minecraft:snowball,nbt={Item:{tag:{fireball:1b}}},sort=nearest,limit=1]', 'Motion')

  execute.as('@e[tag=motion_projectile,sort=nearest,limit=1]').at('@s').run.data.modify.entity('@s', 'Direction').set.from.entity('@e[type=minecraft:snowball,nbt={Item:{tag:{fireball:1b}}},sort=nearest,limit=1]', 'Motion')
  execute.as('@e[tag=motion_projectile,sort=nearest,limit=1]').at('@s').run.data.modify.entity('@s', 'Rotation').set.from.entity('@e[type=minecraft:snowball,nbt={Item:{tag:{fireball:1b}}},sort=nearest,limit=1]', 'Rotation')  

  //execute.as('@e[tag=motion_projectile,sort=nearest,limit=1]').at('@s').run.data.modify.entity('@s', 'power').set.value(['5.0d','0.0','0.0d'])
  
  playsound('minecraft:entity.ender_dragon.flap', 'player', '@a', '~ ~ ~', 1, 1.2)
  playsound('minecraft:entity.generic.burn', 'player', '@a', '~ ~ ~', 0.5, 1)

  execute.as('@e[tag=motion_projectile,sort=nearest,limit=1]').at('@s').run.kill('@e[type=minecraft:snowball,nbt={Item:{tag:{fireball:1b}}},sort=nearest,limit=1]')
  execute.as('@e[tag=motion_projectile,sort=nearest,limit=1]').at('@s').run.tag('@s').add('countdown')
  execute.as('@e[tag=motion_projectile,sort=nearest,limit=1]').at('@s').run.tag('@s').remove('motion_projectile')

  await sleep('3s')
  execute.at('@e[type=minecraft:snowball,nbt={Item:{tag:{fireball:1b}}},sort=nearest,limit=1]')
  execute.as('@e[tag=countdown,sort=nearest,limit=1]').at('@s').run.summon(
    'minecraft:creeper',
    ['~', '~', '~'],
    {
      Fuse: 1,
      ExplosionRadius: 2,
      ignited: 1,
      CustomName: '[{"text":"Fireball","color":"gold"}]',
      Invulnerable: '1b',
      NoAI: '1b',
      NoGravity: '1b',
      PersistenceRequired: '1b',
      Silent: '1b',
      Tags: {
        fireball: 'true'
      }
    }
  )
  execute.as('@e[tag=countdown,sort=nearest,limit=1]').at('@s').run.kill('@e[type=minecraft:fireball,tag=countdown,sort=nearest,limit=1]')
})
