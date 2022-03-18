import { LootTable } from "sandstone";

LootTable('chests/all_egg_loot', {
    pools: [
        {
            rolls: 3,
            bonus_rolls: 2,
            entries: [
                {
                    type: 'item',
                    name: "minecraft:diamond",
                    weight: 3,
                    functions: [
                        {
                            function: 'set_count',
                            count: {
                                type: "uniform",
                                min: 1,
                                max: 3
                            }
                        }
                    ]
                },
                {
                    type: 'item',
                    name: "minecraft:gold_ingot",
                    weight: 4,
                    functions: [
                        {
                            function: 'set_count',
                            count: {
                                type: "uniform",
                                min: 1,
                                max: 3
                            }
                        }
                    ]
                },
                {
                    type: 'item',
                    name: "minecraft:experience_bottle",
                    weight: 3,
                    functions: [
                        {
                            function: 'set_count',
                            count: {
                                type: "uniform",
                                min: 32,
                                max: 64
                            }
                        }
                    ]
                },
                {
                    type: 'item',
                    name: "minecraft:ravager_spawn_egg",
                    weight: 2,
                    functions: [
                        {
                            function: 'set_count',
                            count: 1
                        }
                    ]
                },
                {
                    type: 'item',
                    name: "minecraft:vindicator_spawn_egg",
                    weight: 4,
                    functions: [
                        {
                            function: 'set_count',
                            count: {
                                type: "uniform",
                                min: 1,
                                max: 2
                            }
                        }
                    ]
                }
            ]
        },
        {
            rolls: 1,
            bonus_rolls: 1,
            entries: [
                {
                    type: 'item',
                    name: "minecraft:potion",
                    weight: 3,
                    functions: [
                        {
                            function: 'set_nbt',
                            tag: '{CustomPotionEffects:[{Id:10,Amplifier:69,Duration:1200},{Id:11,Amplifier:69,Duration:1200},{Id:12,Amplifier:69,Duration:1200}],CustomPotionColor:11280868,display:{Name:"{\\"text\\":\\"Imperium Elixir\\"}"}}'
                        }
                    ]
                },
                {
                    type: 'item',
                    name: "minecraft:potion",
                    weight: 2,
                    functions: [
                        {
                            function: 'set_nbt',
                            tag: '{CustomPotionEffects:[{Id:1,Amplifier:2,Duration:1200},{Id:5,Amplifier:2,Duration:1200},{Id:14,Amplifier:2,Duration:1200},{Id:16,Amplifier:2,Duration:1200}],CustomPotionColor:15398400,display:{Name:"{\\"text\\":\\"Vampires Brew\\"}"}}'
                        }
                    ]
                },
                {
                    type: 'item',
                    name: "minecraft:splash_potion",
                    weight: 2,
                    functions: [
                        {
                            function: 'set_nbt',
                            tag: '{CustomPotionEffects:[{Id:2,Duration:2147483647},{Id:4,Duration:2147483647},{Id:15,Duration:2147483647},{Id:17,Duration:2147483647},{Id:18,Duration:2147483647},{Id:19,Duration:2147483647},{Id:24,Duration:2147483647},{Id:31,Duration:2147483647}],CustomPotionColor:0,display:{Name:"{\\"text\\":\\"Auntie Agnes Curse\\"}"}}'
                        }
                    ]
                }
            ]
        },
        {
            rolls: 1,
            bonus_rolls: 0,
            entries: [
                {
                    type: 'item',
                    name: "minecraft:enchanting_table",
                    weight: 2,
                    functions: [
                        {
                            function: 'set_count',
                            count: 1
                        }
                    ]
                },
                {
                    type: 'item',
                    name: "minecraft:anvil",
                    weight: 3,
                    functions: [
                        {
                            function: 'set_count',
                            count: 1
                        }
                    ]
                }
            ]
        }
    ]
})