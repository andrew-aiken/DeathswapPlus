import { MCFunction, give, clear } from 'sandstone'

MCFunction('advancements/buttered_up', () => {
  clear('@s', 'minecraft:golden_helmet', 1)
  clear('@s', 'minecraft:golden_chestplate', 1)
  clear('@s', 'minecraft:golden_leggings', 1)
  clear('@s', 'minecraft:golden_boots', 1)

  give('@s', 'minecraft:golden_helmet{Unbreakable:1,display:{Name:\'[{"text":"Butter leggings","italic":false}]\'},Enchantments:[{id:blast_protection,lvl:5},{id:binding_curse,lvl:1},{id:vanishing_curse,lvl:1}]}', 1)
  give('@s', 'minecraft:golden_chestplate{Unbreakable:1,display:{Name:\'[{"text":"Butter leggings","italic":false}]\'},Enchantments:[{id:blast_protection,lvl:5},{id:binding_curse,lvl:1},{id:vanishing_curse,lvl:1}]}', 1)
  give('@s', 'minecraft:golden_leggings{Unbreakable:1,display:{Name:\'[{"text":"Butter leggings","italic":false}]\'},Enchantments:[{id:blast_protection,lvl:5},{id:binding_curse,lvl:1},{id:vanishing_curse,lvl:1}]}', 1)
  give('@s', 'minecraft:golden_boots{Unbreakable:1,display:{Name:\'[{"text":"Butter leggings","italic":false}]\'},Enchantments:[{id:blast_protection,lvl:5},{id:binding_curse,lvl:1},{id:vanishing_curse,lvl:1}]}', 1)
})