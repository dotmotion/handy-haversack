export const toryc = {
  "generalInfo": {
    "name": "Toryc",
    "race": "Gnoll",
    "sub-race": "",
    "class": "Rogue",
    "background": "Criminal",
    "xp": 5450,
    "alignment": "Chaotic Neutral",
    "armor-class": 16,
    "speed": 30,
    "hit-die": "4d8",
    "use-xp": true,
    "use-alignment": false,
    "multiclass": false
  },
  "ability-scores": {
    "strength": 14,
    "dexterity": 18,
    "constitution": 16,
    "intelligence": 14,
    "wisdom": 12,
    "charisma": 14
  },
  "proficiencies": {
    "saving-throws": ["dexterity", "intelligence"],
    "skill-throws": [
      "deception",
      "history",
      "intimidation",
      "perception",
      "persuasion"
    ],
    "other": {
      "languages": ["gnoll", "common", "abyssal"],
      "prof": ["Dice", "Light Armor", "Simple Weapons", "Rapier", "Short Sword"]
    }
  },
  "equipment": {
    "coins": {
      "cp": 5,
      "sp": 7,
      "ep": 0,
      "gp": 36,
      "pp": 0
    },
    "weapons": [
      {
        "name": "Dagger",
        "bonus": 4,
        "dice": "1d4",
        "damage": "piercing"
      },
      {
        "name": "Hand Axe",
        "bonus": 4,
        "dice": "1d6",
        "damage": "slash"
      },
      {
        "name": "Light Crossbow",
        "bonus": 4,
        "dice": "1d8",
        "damage": "piercing"
      }
    ],
    "equipment": [
      {
        "name": "Dark Common Clothes",
        "ammount": 1,
        "single-use": false
      },
      {
        "name": "Leather Armor",
        "ammount": 1,
        "single-use": false
      },
      {
        "name": "Ring of protection (+1 AC)",
        "ammount": 1,
        "single-use": false
      },
      {
        "name": "Burglar's Pack",
        "ammount": 1,
        "single-use": false
      }
    ]
  },
  "feats": ["Darkvision", "Fae Ancestry", "Perception"],
  "spellcasting": {
    "level": 2,
    "spell slots": 2,
    "ability": "intelligence",
    "spell-save": 12,
    "attack-bonus": 4,
    "level-0": {
      "total": 3,
      "spells": [
        {
          "name": "Dancing Lights",
          "desc": [
            "You create up to four torch-sized lights within range, making them appear as torches, lanterns, or glowing orbs that hover in the air for the duration. You can also combine the four lights into one glowing vaguely humanoid form of Medium size. Whichever form you choose, each light sheds dim light in a 10-foot radius.",
            "As a bonus action on your turn, you can move the lights up to 60 feet to a new spot within range. A light must be within 20 feet of another light created by this spell, and a light winks out if it exceeds the spell's range."
          ],
          "page": "phb 230",
          "range": "120 feet",
          "components": ["V", "S", "M"],
          "material": "A bit of phosphorus or wychwood, or a glowworm.",
          "ritual": "no",
          "duration": "Up to 1 minute",
          "concentration": "yes",
          "casting_time": "1 action",
          "level": 0,
          "school": "Evocation"
        },
        {
          "name": "Mage Hand",
          "desc": [
            "A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration or until you dismiss it as an action. The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again.",
            "You can use your action to control the hand. You can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial. You can move the hand up to 30 feet each time you use it.",
            "The hand can't attack, activate magic items, or carry more than 10 pounds."
          ],
          "page": "phb 256",
          "range": "30 feet",
          "components": ["V", "S"],
          "ritual": "no",
          "duration": "1 minute",
          "concentration": "no",
          "casting_time": "1 action",
          "level": 0,
          "school": "Conjuration"
        },
        {
          "name": "Eldritch Blast",
          "desc": [
            "A beam of crackling energy streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 force damage."
          ],
          "page": "phb 236",
          "range": "120 feet",
          "components": ["V", "S"],
          "ritual": "no",
          "duration": "Instantaneous",
          "concentration": "no",
          "casting_time": "1 action",
          "level": 0,
          "school": "Evocation"
        }
      ]
    },
    "level-1": {
      "total": 3,
      "spells": [
        {
          "name": "Charm Person",
          "desc": [
            "You attempt to charm a humanoid you can see within range. It must make a wisdom saving throw, and does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature regards you as a friendly acquaintance. When the spell ends, the creature knows it was charmed by you.",
            "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them."
          ],
          "page": "phb 221",
          "range": "30 feet",
          "components": ["V", "S"],
          "ritual": "no",
          "duration": "1 hour",
          "concentration": "no",
          "casting_time": "1 action",
          "level": 1,
          "school": "Enchantment"
        },
        {
          "name": "Armor of Agathys",
          "desc": [],
          "page": "",
          "range": "",
          "components": [],
          "ritual": "",
          "duration": "",
          "concentration": "",
          "casting_time": "",
          "level": 1,
          "school": ""
        },
        {
          "name": "Witch Bolt",
          "desc": [],
          "page": "",
          "range": "",
          "components": [],
          "ritual": "",
          "duration": "",
          "concentration": "",
          "casting_time": "",
          "level": 1,
          "school": ""
        }
      ]
    }
  }
}
