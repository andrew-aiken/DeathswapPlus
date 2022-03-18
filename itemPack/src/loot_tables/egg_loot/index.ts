import { LootTable } from "sandstone";

LootTable('egg_loot', {
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
                }
            ]
        }
    ]
})