import { LootTable } from "sandstone";

LootTable('chests/egg_loot', {
    pools: [
        {
            rolls: 2,
            bonus_rolls: 2,
            entries: [
                {
                    type: 'item',
                    name: "minecraft:emerald",
                    weight: 7,
                    functions: [
                        {
                            function: 'set_count',
                            count: {
                                type: "uniform",
                                min: 2,
                                max: 6
                            }
                        }
                    ]
                },
                {
                    type: 'item',
                    name: "minecraft:experience_bottle",
                    weight: 7,
                    functions: [
                        {
                            function: 'set_count',
                            count: {
                                type: "uniform",
                                min: 8,
                                max: 16
                            }
                        }
                    ]
                },
                {
                    type: 'item',
                    name: "minecraft:spectral_arrow",
                    weight: 5,
                    functions: [
                        {
                            function: 'set_count',
                            count: {
                                type: "uniform",
                                min: 8,
                                max: 16
                            }
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
                    name: "minecraft:splash_potion",
                    weight: 3,
                    functions: [
                        {
                            function: 'set_nbt',
                            tag: '{display:{Name:"{\\"text\\":\\"Splash Potion of Slow Falling\\"}"}, CustomPotionEffects:[{Id:28,Duration:240}], CustomPotionColor:3471353}'
                        }
                    ]
                },
                {
                    type: 'item',
                    name: "minecraft:splash_potion",
                    weight: 3,
                    functions: [
                        {
                            function: 'set_nbt',
                            tag: '{CustomPotionEffects:[{Id:12,Duration:1200}],CustomPotionColor:15368750,display:{Name:"{\\"text\\":\\"Fire Skin Potion\\"}"}}'
                        }
                    ]
                },
                {
                    type: 'item',
                    name: "minecraft:splash_potion",
                    weight: 3,
                    functions: [
                        {
                            function: 'set_nbt',
                            tag: '{CustomPotionEffects:[{Id:1,Amplifier:2,Duration:300},{Id:5,Amplifier:2,Duration:300},{Id:24,Duration:600}],CustomPotionColor:16121871,display:{Name:"{\\"text\\":\\"Anger Potion\\"}"}}'
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
                            tag: '{CustomPotionEffects:[{Id:9,Duration:600},{Id:17,Amplifier:4,Duration:600},{Id:19,Duration:600}],CustomPotionColor:8625180,display:{Name:"{\\"text\\":\\"Sickness in a Bottle\\"}"}}'
                        }
                    ]
                },
            ]
        }
    ]
})