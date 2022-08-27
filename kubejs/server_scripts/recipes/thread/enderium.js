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
			{ "name": "tconstruct:molten_silver", "amount": 9000 },
			{ "name": "tconstruct:ender_slime", "amount": 20250 },
			{ "name": "tconstruct:molten_ender", "amount": 20250 }
		],
		"result": {
			"fluid": "tconstruct:molten_enderium",
			"amount": 9000
		},
		"temperature": 850
	})

	event.custom({
		"type": "tconstruct:melting",
		"ingredient": {
			"item": "promenade:dark_amaranth_fungus"
		},
		"result": {
			"fluid": "tconstruct:ender_slime",
			"amount": 27000
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

	let infinity = (id, amount, other_ingredient) => {
		event.remove({ output: id })
		if (other_ingredient) {
			event.smithing(Item.of(id, amount), "avaritia:infinity", other_ingredient)
			event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: "avaritia:infinity", B: other_ingredient })
		}
		else
		 event.stonecutting(Item.of(id, amount), "avaritia:infinity")
	}

	infinity("ae2:creative_item_cell", 1, 'projecte:transmutation_tablet')
	infinity("botania:creative_pool", 1, 'botania:fabulous_pool')
	infinity("buddycards:creative_grading_sleeve", 1, 'buddycards:luminis_sleeve')
	infinity("pipez:item_pipe", 16)
	infinity("pipez:fluid_pipe", 16)
	infinity("pipez:energy_pipe", 16)
	infinity("pipez:gas_pipe", 16)
})