onEvent("recipes", event => {
  event.shaped(KJ("enderium_machine"), [
		"SSS",
		"SCS",
		"SSS"
	], {
		C: KJ("enderium_casing"),
		S: KJ("abstruse_mechanism")
	})

	event.custom({
		"type": "tconstruct:alloy",
		"inputs": [
			{ "name": "tconstruct:molten_silver", "amount": 800 },
			{ "name": "tconstruct:ender_slime", "amount": 100 },
			{ "name": "tconstruct:molten_ender", "amount": 100 }
		],
		"result": {
			"fluid": "tconstruct:molten_enderium",
			"amount": 1000
		},
		"temperature": 850
	})

	event.custom({
		"type": "tconstruct:melting",
		"ingredient": {
			"item": "minecraft:chorus_fruit"
		},
		"result": {
			"fluid": "tconstruct:ender_slime",
			"amount": 90
		},
		"temperature": 100,
		"time": 10
	})

	let ender_machine = (id, amount, other_ingredient) => {
		event.remove({ output: id })
		if (other_ingredient) {
			event.smithing(Item.of(id, amount), "kubejs:enderium_machine", other_ingredient)
			event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: "kubejs:enderium_machine", B: other_ingredient })
		}
		else
		 event.stonecutting(Item.of(id, amount), "kubejs:enderium_machine")
	}

	ender_machine("enderstorage:ender_chest", 1, MC('chest'))
	ender_machine("enderstorage:ender_tank", 1, CR('fluid_tank'))
	ender_machine("portality:controller", 1, MC('diamond'))
	ender_machine(TE("upgrade_augment_3"), 1, MC('redstone'))
	ender_machine(AE2("quantum_ring"), 1, AE2('energy_cell'))
	ender_machine(AE2("quantum_link"), 1, AE2('fluix_pearl'))
	ender_machine(("portality:frame"), 1, ('mekanism:ingot_refined_obsidian'))
	ender_machine(("mekanism:teleporter_frame"), 1, ('mekanism:ingot_refined_glowstone'))
	ender_machine(('excompressum:auto_hammer'), 1, '#exnihilosequentia:hammer')
	ender_machine(('excompressum:auto_sieve'), 1, '#excompressum:sieves')
	ender_machine(('excompressum:auto_compressed_hammer'), 1, '#excompressum:compressed_hammer')
	ender_machine(('excompressum:auto_heavy_sieve'), 1, '#excompressum:heavy_sieve')
	ender_machine(('excompressum:auto_compressor'), 1, 'avaritia:compressed_crafting_table')
	ender_machine('kubejs:pipe_module_tier_3', 4)

})