import { MCFunction, give, clear } from 'sandstone'

MCFunction('advancements/shroom', () => {
  // Clear old items
  clear('@s', 'minecraft:red_mushroom', 1)
  clear('@s', 'minecraft:brown_mushroom', 1)
  clear('@s', 'minecraft:warped_fungus', 1)
  clear('@s', 'minecraft:crimson_fungus', 1)

  // F R O G
  give('@s', 'minecraft:frog_spawn_egg')

  // Give the crown
  give('@s', 'minecraft:golden_helmet{Unbreakable:1,AttributeModifiers:[{AttributeName:"generic.movement_speed",Amount:0.05,Name:"generic.movement_speed",UUID:[I;-122219,27398,112528,-54796]}],display:{Name:\'[{"text":"Shroom Lord","italic":false,"color":"dark_green","bold":true}]\',Lore:[\'[{"text":"Quested the land for the shroomiest mushrooms & shall be rewarded for you find.","italic":false}]\']},Enchantments:[{id:blast_protection,lvl:3},{id:binding_curse,lvl:1},{id:vanishing_curse,lvl:1},{id:fire_protection,lvl:3},{id:projectile_protection,lvl:3},{id:protection,lvl:3}],HideFlags:3}', 1)
})