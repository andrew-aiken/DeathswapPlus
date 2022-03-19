import { MCFunction, give, clear } from 'sandstone'

MCFunction('pickle', () => {
  clear('@s', 'minecraft:sea_pickle', 1)
  give('@s', 'minecraft:sea_pickle{Unbreakable:1,display:{Name:\'[{"text":"Pointy Pickle","italic":true,"color":"green"}]\'},Enchantments:[{id:knockback,lvl:3},{id:looting,lvl:3},{id:sharpness,lvl:7}],HideFlags:4}', 1)
}) 