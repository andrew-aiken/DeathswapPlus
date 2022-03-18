import { LootTable } from "sandstone";

LootTable('redstoner', {
    pools: [
        {
            rolls: 1,
            bonus_rolls: 0,
            entries: [
                {
                    type: 'item',
                    name: "minecraft:redstone_block",
                    weight: 1,
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
            rolls: 3,
            bonus_rolls: 5,
            entries: [
                {
                    type: 'item',
                    name: "minecraft:repeater",
                    weight: 1,
                    functions: [
                        {
                            function: 'set_count',
                            count: 4
                        }
                    ]
                },
                {
                    type: 'item',
                    name: "minecraft:observer",
                    weight: 1,
                    functions: [
                        {
                            function: 'set_count',
                            count: 4
                        }
                    ]
                },
                {
                    type: 'item',
                    name: "minecraft:redstone_torch",
                    weight: 1,
                    functions: [
                        {
                            function: 'set_count',
                            count: 16
                        }
                    ]
                },
                {
                    type: 'item',
                    name: "minecraft:comparator",
                    weight: 1,
                    functions: [
                        {
                            function: 'set_count',
                            count: 4
                        }
                    ]
                },
                {
                    type: 'item',
                    name: "minecraft:trapped_chest",
                    weight: 1,
                    functions: [
                        {
                            function: 'set_count',
                            count: 4
                        }
                    ]
                },
                {
                    type: 'item',
                    name: "minecraft:piston",
                    weight: 1,
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
                    name: "minecraft:sticky_piston",
                    weight: 1,
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
                    name: "minecraft:dispenser",
                    weight: 1,
                    functions: [
                        {
                            function: 'set_count',
                            count: 8
                        }
                    ]
                },
            ]
        }
    ]
})