/* Our Global Variables */

//There are at least 3 species in a branch. All bees can be bred
//together into different combinations. 

/* to add:
as long as the window is open you get a new bee every 5 minutes and start off with 10
game shows current sign
bee products and other items
active vs passive traits?
all breeding functionality
interface
beepedia
beemancy (getting magic energy from bees)
spells
potion crafting
research
*/

/**** GLOBAL VARIABLES ****/

var DEBUG = true;

var MAGIC = {};
var BEES = {};

var BEEHOUSE = [];
var ITEMS = [];
var SPELLBOOK = [];
var POTIONBAG = [];

var EFFECTS = [];

var BRANCHES = {
	"ORDINARY": 0,
	"ROYAL": 1,
	"FRIGID": 2, 
	"SUMMERY": 3, 
	"EARTHY": 4,
	"AIRY": 5,
	"WET": 6,
	"FIERY": 7,
	"ETHEREAL": 8
}

var SEX = {
	0: "DRONE",
	1: "QUEEN"
}

var SPECIES = {
	"COMMON": 0, 
	"SUNNY": 1,
	"BUMBLE": 2,
	"CARPENTER": 3,
	"AUGUST": 4,
	"MAJESTIC": 5,
	"REGAL": 6,
	"CHILLY": 7,
	"FREEZING": 8,
	"ICY": 9,
	"RUSTY": 10,
	"WARM": 11,
	"PLAYFUL": 12,
	"WOODY": 13,
	"DIGGER": 14,
	"TIMBER": 15,
	"BREEZY": 16,
	"LOFTY": 17,
	"LIGHT": 18,
	"DAMP": 19,
	"MOIST": 20,
	"SOAKED": 21,
	"SPICY": 22,
	"BURNING": 23,
	"MOLTEN": 24,
	"FAIRY": 25,
	"CELESTIAL": 26,
	"SUBLIME": 27
}

var MUTATIONS = {
	"COMMON": 
		[{
			partner: "COMMON",
			yields: "SUNNY",
			chance: 15,
			bestSign: "FIRE"
		}, 
		{
			partner: "COMMON",
			yields: "WOODY",
			chance: 15,
			bestSign: "EARTH"
		},
		{
			partner: "COMMON",
			yields: "CARPENTER",
			chance: 15,
			bestSign: "WATER"
		},
		{
			partner: "COMMON",
			yields: "BUMBLE",
			chance: 15,
			bestSign: "AIR"
		},
		{
			partner: "COMMON",
			yields: "AUGUST",
			chance: 10,
			bestSign: "ETHER"
		},
		{
			partner: "SUNNY",
			yields: "SPICY",
			chance: 25,
			bestSign: ""
		}, 
		{
			partner: "BUMBLE",
			yields: "BREEZY",
			chance: 25,
			bestSign: ""
		}, 
		{
			partner: "CARPENTER",
			yields: "CHILLY",
			chance: 25,
			bestSign: ""
		},
		{
			partner: "AUGUST",
			yields: "MAJESTIC",
			chance: 25,
			bestSign: ""
		}],
	"SUNNY": 
		[{
			partner: "SUNNY",
			yields: "BUMBLE",
			chance: 15,
			bestSign: "AIR"
		}, 
		{
			partner: "SUNNY",
			yields: "SPICY",
			chance: 25,
			bestSign: ""
		},
		{
			partner: "BUMBLE",
			yields: "CARPENTER",
			chance: 15,
			bestSign: "WATER"
		}, 
		{
			partner: "CARPENTER",
			yields: "RUSTY",
			chance: 15,
			bestSign: "FIRE"
		}, 
		{
			partner: "RUSTY",
			yields: "WARM",
			chance: 25,
			bestSign: ""
		}, 
		{
			partner: "SPICY",
			yields: "BURNING",
			chance: 25,
			bestSign: ""
		}],
	"BUMBLE":
		[{
			partner: "SUNNY",
			yields: "CARPENTER",
			chance: 25,
			bestSign: "WATER"
		},
		{
			partner: "BUMBLE",
			yields: "CARPENTER",
			chance: 15,
			bestSign: "WATER"
		},
		{
			partner: "BREEZY",
			yields: "FAIRY",
			chance: 10,
			bestSign: "ETHER"
		},
		{
			partner: "BREEZY",
			yields: "LOFTY",
			chance: 20,
			bestSign: ""
		}],
	"CARPENTER": 
		[{
			partner: "COMMON",
			yields: "CHILLY",
			chance: 25
		}, 
		{
			partner: "CARPENTER",
			yields: "DAMP",
			chance: 25
		}, 
		{
			partner: "DAMP",
			yields: "MOIST",
			chance: 20
		}],
	"AUGUST":
		[{
			partner: "COMMON",
			yields: "MAJESTIC",
			chance: 15,
			bestSign: "ETHER"
		},
		{
			partner: "AUGUST",
			yields: "MAJESTIC",
			chance: 25,
			bestSign: ""
		},
		{
			partner: "MAJESTIC",
			yields: "REGAL",
			chance: 20,
			bestSign: ""
		}],
	"MAJESTIC": 
		[{
			partner: "AUGUST",
			yields: "REGAL",
			chance: 20,
			bestSign: ""
		},{
			partner: "MAJESTIC",
			yields: "REGAL",
			chance: 25,
			bestSign: ""
		},
		{
			partner: "LOFTY",
			yields: "CELESTIAL",
			chance: 15,
			bestSign: "ETHER"
		}],
	"REGAL": 
		[{
			partner: "LIGHT",
			yields: "SUBLIME",
			chance: 10,
			bestSign: "ETHER"
		}],
	"CHILLY": 
		[{
			partner: "CHILLY",
			yields: "FREEZING",
			chance: 25,
			bestSign: ""
		},
		{
			partner: "FREEZING",
			yields: "ICY",
			chance: 20,
			bestSign: ""
		},
		{
			partner: "RUSTY",
			yields: "DAMP",
			chance: 15,
			bestSign: "FIRE"
		},
		{
			partner: "SPICY",
			yields: "DAMP",
			chance: 15,
			bestSign: "FIRE"
		}],
	"FREEZING":
		[{
			partner: "CHILLY",
			yields: "ICY",
			chance: 20,
			bestSign: ""
		},
		{
			partner: "FREEZING",
			yields: "ICY",
			chance: 25,
			bestSign: ""
		},
		{
			partner: "WARM",
			yields: "MOIST",
			chance: 15,
			bestSign: "FIRE"
		},
		{
			partner: "BURNING",
			yields: "MOIST",
			chance: 15,
			bestSign: "FIRE"
		}],
	"ICY":
		[{
			partner: "PLAYFUL",
			yields: "SOAKED",
			chance: 15,
			bestSign: "FIRE"
		},
		{
			partner: "MOLTEN",
			yields: "SOAKED",
			chance: 15,
			bestSign: "FIRE"
		}],
	"RUSTY":
		[{
			partner: "RUSTY",
			yields: "WARM",
			chance: 25,
			bestSign: ""
		},
		{
			partner: "WARM",
			yields: "PLAYFUL",
			chance: 20,
			bestSign: ""
		},
		{
			partner: "CHILLY",
			yields: "DAMP",
			chance: 20,
			bestSign: ""
		}],
	"WARM":
		[{
			partner: "WARM",
			yields: "PLAYFUL",
			chance: 25,
			bestSign: ""
		},
		{
			partner: "RUSTY",
			yields: "PLAYFUL",
			chance: 20,
			bestSign: ""
		},
		{
			partner: "FREEZING",
			yields: "MOIST",
			chance: 20,
			bestSign: ""
		}],
	"PLAYFUL":
		[{
			partner: "ICY",
			yields: "SOAKED",
			chance: 15,
			bestSign: "FIRE"
		}],
	"WOODY": 
		[{
			partner: "WOODY",
			yields: "DIGGER",
			chance: 25,
			bestSign: ""
		},
		{
			partner: "DIGGER",
			yields: "TIMBER",
			chance: 25,
			bestSign: ""
		},
		]
}

var FERTILITY = {
	"COMMON": 3,
	"SUNNY": 3,
	"BUMBLE": 2,
	"CARPENTER": 2,
	"AUGUST": 3,
	"MAJESTIC": 3,
	"REGAL": 2,
	"CHILLY": 3,
	"FREEZING": 3,
	"ICY": 2,
	"RUSTY": 3,
	"WARM": 3,
	"PLAYFUL": 2,
	"WOODY": 3,
	"DIGGER": 3,
	"TIMBER": 2,
	"BREEZY": 3,
	"LOFTY": 3,
	"LIGHT": 2,
	"DAMP": 3,
	"MOIST": 3,
	"SOAKED": 2,
	"SPICY": 3,
	"BURNING": 3,
	"MOLTEN": 2,
	"FAIRY": 2,
	"CELESTIAL": 2,
	"SUBLIME": 2
}

var ELEMENTS = {
	"EARTH": 0,
	"AIR": 1, 
	"WATER": 2, 
	"FIRE": 3, 
	"ETHER": 4
}

var SIGNS = {
	0: "ARIES",
	1: "TAURUS", 
	2: "GEMINI", 
	3: "CANCER", 
	4: "LEO", 
	5: "VIRGO",
	6: "LIBRA",
	7: "SCORPIO",
	8: "SAGITTARIUS",
	9: "CAPRICORN",
	10: "AQUARIUS",
	11: "PISCES"
}

var PHASES = {
	0: "NEW",
	1: "WAXING",
	2: "FULL",
	3: "WANING"
}

var SPELLDATA = {
	"SACCHARUM": { // Makes earth bees reproduce 2x
		bestPhase: "WAXING", // waxing
		worstPhase: "WANING", // waning
		earth: 4,
		air: 0,
		water: 2,
		fire: 0,
		ether: 0,
		successRate: 30,
		bee: "COMMON"
	},
	"IGNITIO": { // Makes fire bees reproduce 2x
		bestPhase: "FULL",
		worstPhase: "NEW",
		earth: 0,
		air: 2,
		water: 0,
		fire: 4,
		ether: 0,
		successRate: 30,
		bee: "SUNNY"
	},
	"VENTUS": { // Makes air bees reproduce 2x
		bestPhase: "FULL",
		worstPhase: "NEW",
		earth: 0,
		air: 4,
		water: 0,
		fire: 2,
		ether: 0,
		successRate: 30,
		bee: "BUMBLE"
	},
	"HUMIDUS": { // Makes water bees reproduce 2x
		bestPhase: "FULL",
		worstPhase: "NEW",
		earth: 2,
		air: 0,
		water: 4,
		fire: 0,
		ether: 0,
		successRate: 30,
		bee: "CARPENTER"
	},
	"AETHERIUS": { // Makes ether bees reproduce 2x
		bestPhase: "FULL",
		worstPhase: "NEW",
		earth: 0,
		air: 0,
		water: 0,
		fire: 0,
		ether: 6,
		successRate: 20,
		bee: "AUGUST"
	}
}



$(document).ready(function() {
	/**** PLAYER LOGIC ****/
var PLAYER = new Player();
var MOON = new Moon();

function Player() {
	this.earth = 10;
	this.air = 10;
	this.water = 10;
	this.fire = 10;
	this.ether = 10;
	this.sign = SIGNS[0];
}

Player.prototype.generateSign = function () {
	//the sign a player gets is determined by what hour it currently is
	var date = new Date();
	date = date.getHours();
	if(date > 11) {
		date = date%12;
	}

	var sign = date;

	if(DEBUG == true) {
		console.log("Player's sign: " + SIGNS[sign]);
	}

	this.sign = SIGNS[sign];
}

/**** SPELLS LOGIC ****/

function Spell(name, quantity) {
	this.name = name;
	this.quantity = quantity;
	this.earth = SPELLDATA[this.name].earth;
	this.air = SPELLDATA[this.name].air;
	this.water = SPELLDATA[this.name].water;
	this.fire = SPELLDATA[this.name].fire;
	this.bestPhase = SPELLDATA[this.name].bestPhase;
	this.worstPhase = SPELLDATA[this.name].worstPhase;
	this.successRate = SPELLDATA[this.name].successRate;
	this.bee = SPELLDATA[this.name].bee;
}

MAGIC.useSpell = function(spellName) {
	var hasSpell = false;
	for(var i = 0; i < SPELLBOOK.length; i++) {
		if(SPELLBOOK[i].name == spellName) {
			console.log("has spell");
			hasSpell = true;
			break;
		}
	}

	if(hasSpell == true) {
		SPELLBOOK[i].quantity--; 

		var successRate = SPELLDATA[spellName].successRate;
		if(PLAYER.earth >= SPELLDATA[spellName].earth && PLAYER.air >= SPELLDATA[spellName].air
			&& PLAYER.water >= SPELLDATA[spellName].water && PLAYER.fire >= SPELLDATA[spellName].fire
			&& PLAYER.ether >= SPELLDATA[spellName].ether) {
			if(MOON.getPhase() == SPELLDATA[spellName].bestPhase) {
				successRate += 15;
			}

			else if(MOON.getPhase() == SPELLDATA[spellName].worstPhase) {
				successRate -= 15;
			}

			if(chanceTime(100) > successRate) {
				var startTime = new Date().getMinutes()
				if(startTime < 55) {
					endTime = startTime + 5;
				}

				else {
					endTime = 60 - startTime;
				}

				
				var effect = {name: spellName, endTime: endTime};
				EFFECTS.push(effect);
				console.log("Chance: " + successRate + " - Used " + spellName + "! Will expire in 5 minutes.");
				
				PLAYER.earth -= SPELLDATA[spellName].earth;
				PLAYER.air -= SPELLDATA[spellName].air;
				PLAYER.water -= SPELLDATA[spellName].water;
				PLAYER.fire -= SPELLDATA[spellName].fire;
				PLAYER.ether -= SPELLDATA[spellName].ether;
			}

			else {
				console.log("Your spell failed...");
			}
		}

		else {
			console.log("You don't have enough elemental points to use this spell!");
		}

		if(DEBUG == true) {
			console.log("Spell '" + spellName + "' quantity: " + SPELLBOOK[i].quantity);
		}

		if(SPELLBOOK[i].quantity == 0) {
			SPELLBOOK.pop(SPELLBOOK.indexOf(spellName), 1);
		}
	}
}

MAGIC.checkEffectsExpire = function() {
	for(var i = 0; i < EFFECTS.length; i++) {
		if(EFFECTS[i].endTime == new Date().getMinutes()) {
			EFFECTS.splice(i, 1);
		}
	}
}

MAGIC.learnSpell = function(spellName) {
	var hasBee = false;
	for(var i = 0; i < BEEHOUSE.length; i++) {
		if(BEEHOUSE[i].species == SPELLDATA[spellName].bee) {
			SPELLBOOK.push({name: spellName, quantity: 1});
			hasBee = true;
			break;
		}
	}

	if(hasBee == false) {
		console.log("Sorry! You need a " + SPELLDATA[spellName].bee + " bee to learn this spell!");
	}
}

/**** MOON LOGIC ****/

function Moon() {
	this.phase = PHASES[0]; 
	this.sign = SIGNS[0];
}

Moon.prototype.progressPhase = function() {
 	var date = new Date();
 	date = date.getMinutes();
 	if(date >= 0 && date < 15) {
 		this.phase = PHASES[0];
 	}

 	else if(date >= 15 && date < 30) {
 		this.phase = PHASES[1];
 	}

 	else if(date >= 30 && date < 45) {
 		this.phase = PHASES[2];
 	}

 	else if(date >= 45 && date < 60) {
 		this.phase = PHASES[3];
 	}


	$("#moon .phase").html("<img src='/bees/images/" + this.phase + ".png' title='" + this.phase + "'>");

 	console.log("Current phase: " + this.phase);
 };

Moon.prototype.getPhase = function() {
	return this.phase;
};

Moon.prototype.progressSign = function() {
	//the sign is determined by what hour it currently is
	var date = new Date();
	date = date.getHours();
	if(date > 11) {
		date = date%12;
	}

	var sign = date;

	if(DEBUG == true) {
		console.log("Moon's sign: " + SIGNS[sign]);
	}

	$("#moon .sign").text("Moon's sign: " + SIGNS[sign]);

	return SIGNS[sign];
}

/**** BEE LOGIC ****/

/* make bee functions under bee namespace*/
BEES.Bee = function(sex, species) {
	this.sex = SEX[sex];
	this.species = species; 
	this.branch = BEES.getBranchFromSpecies(this.species);
	this.fertility = BEES.getFertilityFromSpecies(this.species);
	this.element = BEES.getElementFromSpecies(this.species);
	this.mutations = MUTATIONS[this.species];
	this.sign = BEES.generateSign();
}

/* long boy, wew */
BEES.getBranchFromSpecies = function(species) {
	if(species == "COMMON" || species == "SUNNY" || species == "BUMBLE" || species == "CARPENTER") {
		return "ORDINARY";
	}

	else if(species == "AUGUST" || species == "MAJESTIC" || species == "REGAL") {
		return "ROYAL";
	}

	else if(species == "CHILLY" || species == "FREEZING" || species == "ICY") {
		return "FRIGID";
	}

	else if(species == "RUSTY" || species == "WARM" || species == "PLAYFUL") {
		return "SUMMERY";
	}

	else if(species == "WOODY" || species == "DIGGER" || species == "TIMBER") {
		return "EARTHY";
	}

	else if(species == "BREEZY" || species == "LOFTY" || species == "LIGHT") {
		return "AIRY";
	}

	else if(species == "DAMP" || species == "MOIST" || species == "SOAKED") {
		return "WET";
	}

	else if(species == "SPICY" || species == "BURNING" || species == "MOLTEN") {
		return "FIERY";
	}

	else if(species == "FAIRY" || species == "CELESTIAL" || species == "SUBLIME") {
		return "ETHEREAL"
	}

	else {
		return "NOT DEFINED";
	}
}

BEES.getElementFromSpecies = function(species) {
	//ORDINARY BRANCH
	if(species == "COMMON") {
		return "EARTH";
	}

	else if(species == "SUNNY") {
		return "FIRE";
	}

	else if(species == "BUMBLE") {
		return "AIR";
	}

	else if(species == "CARPENTER") {
		return "WATER";
	}

	//ROYAL BRANCH
	else if(species == "AUGUST") {
		return "ETHER";
	}

	else if(species == "MAJESTIC") {
		return "ETHER";
	}

	else if(species == "REGAL") {
		return "ETHER";
	}

	//FRIGID BRANCH
	else if(species == "CHILLY") {
		return "WATER";
	}

	else if(species == "FREEZING") {
		return "WATER";
	}

	else if(species == "ICY") {
		return "WATER";
	}

	//SUMMERY BRANCH
	else if(species == "RUSTY") {
		return "FIRE";
	}

	else if(species == "WARM") {
		return "FIRE";
	}

	else if(species == "PLAYFUL") {
		return "FIRE";
	}

	//EARTHY BRANCH
	else if(species == "WOODY") {
		return "EARTH";
	}

	else if(species == "DIGGER") {
		return "EARTH";
	}

	else if(species == "TIMBER") {
		return "EARTH";
	}

	//AIRY BRANCH
	else if(species == "BREEZY") {
		return "AIR";
	}

	else if(species == "LOFTY") {
		return "AIR";
	}

	else if(species == "LIGHT") {
		return "AIR";
	}

	//WET BRANCH
	else if(species == "DAMP") {
		return "WATER";
	}

	else if(species == "MOIST") {
		return "WATER";
	}

	else if(species == "SOAKED") {
		return "WATER";
	}

	//FIERY BRANCH
	else if(species == "SPICY") {
		return "FIRE";
	}

	else if(species == "BURNING") {
		return "FIRE";
	}

	else if(species == "MOLTEN") {
		return "FIRE";
	}

	//ETHEREAL BRANCH
	else if(species == "FAIRY") {
		return "ETHER";
	}

	else if(species == "CELESTIAL") {
		return "ETHER";
	}

	else if(species == "SUBLIME") {
		return "ETHER";
	}
}

BEES.getFertilityFromSpecies = function(species) {
	return FERTILITY[species];
}

BEES.generateSign = function() {
	//the sign a bee gets is determined by what minute it currently is
	var date = new Date();
	date = date.getMinutes();
	if(date > 11) {
		date = date%12;
	}

	var sign = date;
	return SIGNS[sign];
}

//parent1 should be a queen while parent2 should be a drone
BEES.breedBees = function(parent1, parent2) {
	//determines how many bees we're going to make - if chance is less than 50, pick 1, if greater, the other
	var count = (chanceTime(100) < 50) ? parent1.fertility : parent2.fertility;

	for(var i = 0; i < EFFECTS.length; i++) {
		if(EFFECTS[i].name == "SACCHARUM") {
			if(parent1.element == "EARTH" || parent2.element == "EARTH") {
				count = count*2;
			}
		}

		else if(EFFECTS[i].name == "IGNITIO") {
			if(parent1.element == "FIRE" || parent2.element == "FIRE") {
				count = count*2;
			}
		}

		else if(EFFECTS[i].name == "VENTUS") {
			if(parent1.element == "AIR" || parent2.element == "AIR") {
				count = count*2;
			}
		}

		else if(EFFECTS[i].name == "HUMIDUS") {
			if(parent1.element == "WATER" || parent2.element == "WATER") {
				count = count*2;
			}
		}

		else if(EFFECTS[i].name == "AETHERIUS") {
			if(parent1.element == "ETHER" || parent2.element == "ETHER") {
				count = count*2;
			}
		}
	}

	//make the number of bees determined above
	for(var j = 0; j < count; j++) {
		//look for mutations first
		var mutated = false; 
		//check parent1's mutations
		for(var i = 0; i < parent1.mutations.length; i++) {
			//if a mutation was found, then do a roll
			if(parent1.mutations[i].partner == parent2.species) {
				var chance = chanceTime(100);

				if(DEBUG == true) {
					console.log("Chance to mutate: " + chance);
				}

				//if we get the right number, then make a mutated bee
				if(chance < parent1.mutations[i].chance) {
					if(DEBUG == true) {
						console.log("Mutating!");
					}

					var child = new BEES.Bee(BEES.randomSex(), parent1.mutations[i].yields)
					
					//20% chance to mutate the element (pick from 1 of the 2 parent's elements, which may be different)
					if(chanceTime(100) < 20) {
						child.element = (chanceTime(100) < 50) ? parent1.element : parent2.element;
					}

					//add the child to the player's bees
					BEEHOUSE.push(child);
					mutated = true;
				}
			}

			if(mutated == true) {
				continue;
			}
		}

		/* now check for parent2's mutations
		for(var k = 0; k < parent2.mutations.length; k++) {
			if(DEBUG == true) {
				console.log(parent2.mutations);
			}

			//if a mutation was found, then do a roll
			if(parent2.mutations[k].partner == parent1.species) {
				var chance = chanceTime(100);

				if(DEBUG == true) {
					console.log("Chance to mutate: " + chance);
				}

				//if we get the right number, then make a mutated bee
				if(chance < parent2.mutations[k].chance) {
					var child = new BEES.Bee(BEES.randomSex(), parent2.mutations[k].yields)
					
					//20% chance to mutate the element (pick from 1 of the 2 parent's elements, which may be different)
					if(chanceTime(100) < 20) {
						child.element = (chanceTime(100) < 50) ? parent1.element : parent2.element;
					}			
					BEEHOUSE.push(child);
					mutated = true;
				}
			}
		} */

		//if we created a mutation, move to the next value in the bee count loop
		

		//make another bee if mutating failed / there are no mutations available
		var parent = (chanceTime(100) < 50) ? parent1.species : parent2.species;
		var child = new BEES.Bee(BEES.randomSex(), parent);
		//20% chance to mutate the element
		if(chanceTime(100) < 20) {
			child.element = (chanceTime(100) < 50) ? parent1.element : parent2.element;

		}
		BEEHOUSE.push(child);
	}
}

BEES.randomSex = function() {
	return Math.floor(Math.random() * 2);
}

/* GRAPHICAL LOGIC */

var MAP = {};

function Map() {
	this.w = 0;
	this.h = 0;
	this.title = "";
	this.img = ""; // must be a URL
}



function chanceTime(percent) {
	return Math.floor(Math.random() * (percent)+1);
}

function main() {
	PLAYER.generateSign();
	MOON.progressPhase();
	MOON.progressSign();
	setInterval(MAGIC.checkEffectsExpire, 1000);
	setInterval(MOON.progressPhase, 60000); // Check moon phase once a minute and sign every 30 minutes
	setInterval(MOON.progressSign, 1800000);
	MAGIC.learnSpell("SACCHARUM", 2);
}

	/**** CONTROLS ****/

	$("#breed").click(function() {
		bee = new BEES.Bee(0, $("#bee1").val());
		bee2 = new BEES.Bee(1, $("#bee2").val());
		BEES.breedBees(bee, bee2);
	});

	$("#inventory").click(function() {
		$("#output").html("");
		$("#output").append("<h2>Your Bees</h2>");
		for(var i = 0; i < BEEHOUSE.length; i++) {
			$("#output").append("<h3 id='bee-"+i+"' class='bee'>Bee Entry</h3>");
			$("#output").append("<li>Species: <span class='species'>" + BEEHOUSE[i].species + "</span></li>");
			$("#output").append("<li>Branch: <img src='/bees/images/" + BEEHOUSE[i].branch + ".png' title='" + BEEHOUSE[i].branch + "'></li>");
			$("#output").append("<li>Sex: " + BEEHOUSE[i].sex + "</li>");
			$("#output").append("<li>Fertility: " + BEEHOUSE[i].fertility + "</li>");
			$("#output").append("<li>Element: <img src='/bees/images/" + BEEHOUSE[i].element + ".png' title='" + BEEHOUSE[i].element + "'></li>");
			$("#output").append("<li>Sign: " + BEEHOUSE[i].sign + "</li></ul>");
		}

		$(".bee").click(function() {
			var beeID = $(this).attr("id").slice(4, $(this).attr("id").length);
			alert("clicked on a bee");
			$("#bee1").val(BEEHOUSE[beeID].species);
		});
	});

	$("#spellbook").click(function() {
		$("#output").html("");
		$("#output").append("<h2>Spellbook</h2>");
		for(var i = 0; i < SPELLBOOK.length; i++) {
			$("#output").append("<h3 id='spell-"+i+"' class='spell'>"+SPELLBOOK[i].name+"</h3>");
			$("#output").append("<h4>Cost to Use</h4>");
			$("#output").append("<p> <img src='/bees/images/EARTH.png'> <span>"+SPELLDATA[SPELLBOOK[i].name].earth+"</span> <img src='/bees/images/AIR.png'> <span>"+SPELLDATA[SPELLBOOK[i].name].air+"</span> <img src='/bees/images/WATER.png'> <span>"+SPELLDATA[SPELLBOOK[i].name].water+"</span> <img src='/bees/images/FIRE.png'> <span>"+SPELLDATA[SPELLBOOK[i].name].fire+"</span> <img src='/bees/images/ETHER.png'> <span>"+SPELLDATA[SPELLBOOK[i].name].ether+"</span></p>");
			$("#output").append("<p>Bee: "+SPELLDATA[SPELLBOOK[i].name].bee + " Strong Phase: "+SPELLDATA[SPELLBOOK[i].name].bestPhase+" Weak Phase: "+SPELLDATA[SPELLBOOK[i].name].worstPhase+" Success Rate: "+SPELLDATA[SPELLBOOK[i].name].successRate+"</p>");
		}

		$(".spell").click(function() {
			var spellName = $(this).text();
			console.log(spellName);
			MAGIC.useSpell(spellName);
		});
	});

	$("#effects").click(function() {
		$("#output").html("");
		$("#output").append("<h2>Current Effects</h2>");
		for(var i = 0; i < EFFECTS.length; i++) {
			$("#output").append("<h3 id='effect-"+i+"' class='effect'>" + EFFECTS[i].name+"</h3>");
		}
	});

	$("#player").click(function() {
		$("#stats").html("");
		$("#stats").append("<h2>Stats</h2>");
		$("#stats").append("<p>Born in " + PLAYER.sign);
		$("#stats").append("<p> <img src='/bees/images/EARTH.png'> <span>"+PLAYER.earth+"</span> <img src='/bees/images/AIR.png'> <span>"+PLAYER.air+"</span> <img src='/bees/images/WATER.png'> <span>"+PLAYER.water+"</span> <img src='/bees/images/FIRE.png'> <span>"+PLAYER.fire+"</span> <img src='/bees/images/ETHER.png'> <span>"+PLAYER.ether+"</span></p>");
			
	});

	main();
});