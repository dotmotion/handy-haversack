export const beasts = [
  {
    index: "ape",
    name: "Ape",
    size: "Medium",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 12,
    hit_points: 19,
    hit_dice: "3d8",
    speed: { walk: "30 ft.", climb: "30 ft." },
    strength: 16,
    dexterity: 14,
    constitution: 14,
    intelligence: 6,
    wisdom: 12,
    charisma: 7,
    proficiencies: [
      {
        name: "Skill: Athletics",
        url: "/api/proficiencies/skill-athletics",
        value: 5
      },
      {
        name: "Skill: Perception",
        url: "/api/proficiencies/skill-perception",
        value: 3
      }
    ],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { passive_perception: 13 },
    languages: "",
    challenge_rating: 0.5,
    actions: [
      { name: "Multiattack", desc: "The ape makes two fist attacks." },
      {
        name: "Fist",
        desc:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage.",
        attack_bonus: 5,
        damage: [
          {
            damage_type: {
              name: "Bludgeoning",
              url: "/api/damage-types/bludgeoning"
            },
            damage_dice: "1d6",
            damage_bonus: 3
          }
        ]
      },
      {
        name: "Rock",
        desc:
          "Ranged Weapon Attack: +5 to hit, range 25/50 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage.",
        attack_bonus: 5,
        damage: [
          {
            damage_type: {
              name: "Bludgeoning",
              url: "/api/damage-types/bludgeoning"
            },
            damage_dice: "1d6",
            damage_bonus: 3
          }
        ]
      }
    ],
    url: "/api/monsters/ape",
    cr: "1/2"
  },
  {
    index: "axe-beak",
    name: "Axe Beak",
    size: "Large",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 11,
    hit_points: 19,
    hit_dice: "3d10",
    speed: { walk: "50 ft." },
    strength: 14,
    dexterity: 12,
    constitution: 12,
    intelligence: 2,
    wisdom: 10,
    charisma: 5,
    proficiencies: [],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { passive_perception: 10 },
    languages: "",
    challenge_rating: 0.25,
    actions: [
      {
        name: "Beak",
        desc:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) slashing damage.",
        attack_bonus: 4,
        damage: [
          {
            damage_type: {
              name: "Slashing",
              url: "/api/damage-types/slashing"
            },
            damage_dice: "1d8",
            damage_bonus: 2
          }
        ]
      }
    ],
    url: "/api/monsters/axe-beak",
    cr: "1/4"
  },
  {
    index: "baboon",
    name: "Baboon",
    size: "Small",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 12,
    hit_points: 3,
    hit_dice: "1d6",
    speed: { walk: "30 ft.", climb: "30 ft." },
    strength: 8,
    dexterity: 14,
    constitution: 11,
    intelligence: 4,
    wisdom: 12,
    charisma: 6,
    proficiencies: [],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { passive_perception: 11 },
    languages: "",
    challenge_rating: 0,
    special_abilities: [
      {
        name: "Pack Tactics",
        desc:
          "The baboon has advantage on an attack roll against a creature if at least one of the baboon's allies is within 5 ft. of the creature and the ally isn't incapacitated."
      }
    ],
    actions: [
      {
        name: "Bite",
        desc:
          "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 (1d4 - 1) piercing damage.",
        attack_bonus: 1,
        damage: [
          {
            damage_type: {
              name: "Piercing",
              url: "/api/damage-types/piercing"
            },
            damage_dice: "1d4",
            damage_bonus: -1
          }
        ]
      }
    ],
    url: "/api/monsters/baboon",
    cr: "0"
  },
  {
    index: "badger",
    name: "Badger",
    size: "Tiny",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 10,
    hit_points: 3,
    hit_dice: "1d4",
    speed: { walk: "20 ft.", burrow: "5 ft." },
    strength: 4,
    dexterity: 11,
    constitution: 12,
    intelligence: 2,
    wisdom: 12,
    charisma: 5,
    proficiencies: [],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { darkvision: "30 ft.", passive_perception: 11 },
    languages: "",
    challenge_rating: 0,
    special_abilities: [
      {
        name: "Keen Smell",
        desc:
          "The badger has advantage on Wisdom (Perception) checks that rely on smell."
      }
    ],
    actions: [
      {
        name: "Bite",
        desc:
          "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 1 piercing damage.",
        attack_bonus: 2,
        damage: [
          {
            damage_type: {
              name: "Bludgeoning",
              url: "/api/damage-types/bludgeoning"
            },
            damage_dice: "0d4",
            damage_bonus: 1
          }
        ]
      }
    ],
    url: "/api/monsters/badger",
    cr: "0"
  },
  {
    index: "bat",
    name: "Bat",
    size: "Tiny",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 12,
    hit_points: 1,
    hit_dice: "1d4",
    speed: { walk: "5 ft.", fly: "30 ft." },
    strength: 2,
    dexterity: 15,
    constitution: 8,
    intelligence: 2,
    wisdom: 12,
    charisma: 4,
    proficiencies: [],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { blindsight: "60 ft.", passive_perception: 11 },
    languages: "",
    challenge_rating: 0,
    special_abilities: [
      {
        name: "Echolocation",
        desc: "The bat can't use its blindsight while deafened."
      },
      {
        name: "Keen Hearing",
        desc:
          "The bat has advantage on Wisdom (Perception) checks that rely on hearing."
      }
    ],
    actions: [
      {
        name: "Bite",
        desc:
          "Melee Weapon Attack: +0 to hit, reach 5 ft., one creature. Hit: 1 piercing damage.",
        attack_bonus: 0,
        damage: [
          {
            damage_type: {
              name: "Piercing",
              url: "/api/damage-types/piercing"
            },
            damage_dice: "0d4",
            damage_bonus: 1
          }
        ]
      }
    ],
    url: "/api/monsters/bat",
    cr: "0"
  },
  {
    index: "black-bear",
    name: "Black Bear",
    size: "Medium",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 11,
    hit_points: 19,
    hit_dice: "3d8",
    speed: { walk: "40 ft.", climb: "30 ft." },
    strength: 15,
    dexterity: 10,
    constitution: 14,
    intelligence: 2,
    wisdom: 12,
    charisma: 7,
    proficiencies: [],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { passive_perception: 13 },
    languages: "",
    challenge_rating: 0.5,
    special_abilities: [
      {
        name: "Keen Smell",
        desc:
          "The bear has advantage on Wisdom (Perception) checks that rely on smell."
      }
    ],
    actions: [
      {
        name: "Multiattack",
        desc:
          "The bear makes two attacks: one with its bite and one with its claws."
      },
      {
        name: "Bite",
        desc:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
        attack_bonus: 3,
        damage: [
          {
            damage_type: {
              name: "Piercing",
              url: "/api/damage-types/piercing"
            },
            damage_dice: "1d6",
            damage_bonus: 2
          }
        ]
      },
      {
        name: "Claws",
        desc:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) slashing damage.",
        attack_bonus: 3,
        damage: [
          {
            damage_type: {
              name: "Slashing",
              url: "/api/damage-types/slashing"
            },
            damage_dice: "2d4",
            damage_bonus: 2
          }
        ]
      }
    ],
    url: "/api/monsters/black-bear",
    cr: "1/2"
  },
  {
    index: "blood-hawk",
    name: "Blood Hawk",
    size: "Small",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 12,
    hit_points: 7,
    hit_dice: "2d6",
    speed: { walk: "10 ft.", fly: "60 ft." },
    strength: 6,
    dexterity: 14,
    constitution: 10,
    intelligence: 3,
    wisdom: 14,
    charisma: 5,
    proficiencies: [
      {
        name: "Skill: Perception",
        url: "/api/proficiencies/skill-perception",
        value: 4
      }
    ],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { passive_perception: 14 },
    languages: "",
    challenge_rating: 0.125,
    special_abilities: [
      {
        name: "Keen Sight",
        desc:
          "The hawk has advantage on Wisdom (Perception) checks that rely on sight."
      },
      {
        name: "Pack Tactics",
        desc:
          "The hawk has advantage on an attack roll against a creature if at least one of the hawk's allies is within 5 ft. of the creature and the ally isn't incapacitated."
      }
    ],
    actions: [
      {
        name: "Beak",
        desc:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage.",
        attack_bonus: 4,
        damage: [
          {
            damage_type: {
              name: "Piercing",
              url: "/api/damage-types/piercing"
            },
            damage_dice: "1d4",
            damage_bonus: 2
          }
        ]
      }
    ],
    url: "/api/monsters/blood-hawk",
    cr: "1/8"
  },
  {
    index: "boar",
    name: "Boar",
    size: "Medium",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 11,
    hit_points: 11,
    hit_dice: "2d8",
    speed: { walk: "40 ft." },
    strength: 13,
    dexterity: 11,
    constitution: 12,
    intelligence: 2,
    wisdom: 9,
    charisma: 5,
    proficiencies: [],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { passive_perception: 9 },
    languages: "",
    challenge_rating: 0.25,
    special_abilities: [
      {
        name: "Charge",
        desc:
          "If the boar moves at least 20 ft. straight toward a target and then hits it with a tusk attack on the same turn, the target takes an extra 3 (1d6) slashing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone.",
        damage: [
          {
            damage_type: {
              name: "Slashing",
              url: "/api/damage-types/slashing"
            },
            damage_dice: "1d6",
            damage_bonus: 0
          }
        ]
      },
      {
        name: "Relentless",
        desc:
          "If the boar takes 7 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead.",
        usage: { type: "recharge after rest", rest_types: ["short", "long"] }
      }
    ],
    actions: [
      {
        name: "Tusk",
        desc:
          "Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) slashing damage.",
        attack_bonus: 3,
        damage: [
          {
            damage_type: {
              name: "Slashing",
              url: "/api/damage-types/slashing"
            },
            damage_dice: "1d6",
            damage_bonus: 1
          }
        ]
      }
    ],
    url: "/api/monsters/boar",
    cr: "1/4"
  },
  {
    index: "brown-bear",
    name: "Brown Bear",
    size: "Large",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 11,
    hit_points: 34,
    hit_dice: "4d10",
    speed: { walk: "40 ft.", climb: "30 ft." },
    strength: 19,
    dexterity: 10,
    constitution: 16,
    intelligence: 2,
    wisdom: 13,
    charisma: 7,
    proficiencies: [
      {
        name: "Skill: Perception",
        url: "/api/proficiencies/skill-perception",
        value: 3
      }
    ],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { passive_perception: 13 },
    languages: "",
    challenge_rating: 1,
    special_abilities: [
      {
        name: "Keen Smell",
        desc:
          "The bear has advantage on Wisdom (Perception) checks that rely on smell."
      }
    ],
    actions: [
      {
        name: "Multiattack",
        desc:
          "The bear makes two attacks: one with its bite and one with its claws."
      },
      {
        name: "Bite",
        desc:
          "Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d8 + 4) piercing damage.",
        attack_bonus: 5,
        damage: [
          {
            damage_type: {
              name: "Piercing",
              url: "/api/damage-types/piercing"
            },
            damage_dice: "1d8",
            damage_bonus: 4
          }
        ]
      },
      {
        name: "Claws",
        desc:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) slashing damage.",
        attack_bonus: 5,
        damage: [
          {
            damage_type: {
              name: "Slashing",
              url: "/api/damage-types/slashing"
            },
            damage_dice: "2d6",
            damage_bonus: 4
          }
        ]
      }
    ],
    url: "/api/monsters/brown-bear",
    cr: "1"
  },
  {
    index: "camel",
    name: "Camel",
    size: "Large",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 9,
    hit_points: 15,
    hit_dice: "2d10",
    speed: { walk: "50 ft." },
    strength: 16,
    dexterity: 8,
    constitution: 14,
    intelligence: 2,
    wisdom: 8,
    charisma: 5,
    proficiencies: [],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { passive_perception: 9 },
    languages: "",
    challenge_rating: 0.125,
    actions: [
      {
        name: "Bite",
        desc:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 2 (1d4) bludgeoning damage.",
        attack_bonus: 5,
        damage: [
          {
            damage_type: {
              name: "Bludgeoning",
              url: "/api/damage-types/bludgeoning"
            },
            damage_dice: "1d4",
            damage_bonus: 0
          }
        ]
      }
    ],
    url: "/api/monsters/camel",
    cr: "1/8"
  },
  {
    index: "cat",
    name: "Cat",
    size: "Tiny",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 12,
    hit_points: 2,
    hit_dice: "1d4",
    speed: { walk: "40 ft.", climb: "30 ft." },
    strength: 3,
    dexterity: 15,
    constitution: 10,
    intelligence: 3,
    wisdom: 12,
    charisma: 7,
    proficiencies: [
      {
        name: "Skill: Perception",
        url: "/api/proficiencies/skill-perception",
        value: 3
      },
      {
        name: "Skill: Stealth",
        url: "/api/proficiencies/skill-stealth",
        value: 4
      }
    ],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { passive_perception: 13 },
    languages: "",
    challenge_rating: 0,
    special_abilities: [
      {
        name: "Keen Smell",
        desc:
          "The cat has advantage on Wisdom (Perception) checks that rely on smell."
      }
    ],
    actions: [
      {
        name: "Claws",
        desc:
          "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 slashing damage.",
        attack_bonus: 0,
        damage: [
          {
            damage_type: {
              name: "Slashing",
              url: "/api/damage-types/slashing"
            },
            damage_dice: "0d4",
            damage_bonus: 1
          }
        ]
      }
    ],
    url: "/api/monsters/cat",
    cr: "0"
  },
  {
    index: "constrictor-snake",
    name: "Constrictor Snake",
    size: "Large",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 12,
    hit_points: 13,
    hit_dice: "2d10",
    speed: { walk: "30 ft.", swim: "30 ft." },
    strength: 15,
    dexterity: 14,
    constitution: 12,
    intelligence: 1,
    wisdom: 10,
    charisma: 3,
    proficiencies: [],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { blindsight: "10 ft.", passive_perception: 10 },
    languages: "",
    challenge_rating: 0.25,
    actions: [
      {
        name: "Bite",
        desc:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) piercing damage.",
        attack_bonus: 4,
        damage: [
          {
            damage_type: {
              name: "Piercing",
              url: "/api/damage-types/piercing"
            },
            damage_dice: "1d6",
            damage_bonus: 2
          }
        ]
      },
      {
        name: "Constrict",
        desc:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 6 (1d8 + 2) bludgeoning damage, and the target is grappled (escape DC 14). Until this grapple ends, the creature is restrained, and the snake can't constrict another target.",
        attack_bonus: 4,
        damage: [
          {
            damage_type: {
              name: "Bludgeoning",
              url: "/api/damage-types/bludgeoning"
            },
            damage_dice: "1d8",
            damage_bonus: 2
          }
        ]
      }
    ],
    url: "/api/monsters/constrictor-snake",
    cr: "1/4"
  },
  {
    index: "crab",
    name: "Crab",
    size: "Tiny",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 11,
    hit_points: 2,
    hit_dice: "1d4",
    speed: { walk: "20 ft.", swim: "20 ft." },
    strength: 2,
    dexterity: 11,
    constitution: 10,
    intelligence: 1,
    wisdom: 8,
    charisma: 2,
    proficiencies: [
      {
        name: "Skill: Stealth",
        url: "/api/proficiencies/skill-stealth",
        value: 2
      }
    ],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { blindsight: "30 ft.", passive_perception: 9 },
    languages: "",
    challenge_rating: 0,
    special_abilities: [
      { name: "Amphibious", desc: "The crab can breathe air and water." }
    ],
    actions: [
      {
        name: "Claw",
        desc:
          "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 bludgeoning damage.",
        attack_bonus: 0,
        damage: [
          {
            damage_type: {
              name: "Bludgeoning",
              url: "/api/damage-types/bludgeoning"
            },
            damage_dice: "0d4",
            damage_bonus: 1
          }
        ]
      }
    ],
    url: "/api/monsters/crab",
    cr: "0"
  },
  {
    index: "crocodile",
    name: "Crocodile",
    size: "Large",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 12,
    hit_points: 19,
    hit_dice: "3d10",
    speed: { walk: "20 ft.", swim: "20 ft." },
    strength: 15,
    dexterity: 10,
    constitution: 13,
    intelligence: 2,
    wisdom: 10,
    charisma: 5,
    proficiencies: [
      {
        name: "Skill: Stealth",
        url: "/api/proficiencies/skill-stealth",
        value: 2
      }
    ],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { passive_perception: 10 },
    languages: "",
    challenge_rating: 0.5,
    special_abilities: [
      {
        name: "Hold Breath",
        desc: "The crocodile can hold its breath for 15 minutes."
      }
    ],
    actions: [
      {
        name: "Bite",
        desc:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (1d10 + 2) piercing damage, and the target is grappled (escape DC 12). Until this grapple ends, the target is restrained, and the crocodile can't bite another target",
        attack_bonus: 4,
        damage: [
          {
            damage_type: {
              name: "Bludgeoning",
              url: "/api/damage-types/bludgeoning"
            },
            damage_dice: "1d10",
            damage_bonus: 2
          }
        ]
      }
    ],
    url: "/api/monsters/crocodile",
    cr: "1/2"
  },
  {
    index: "deer",
    name: "Deer",
    size: "Medium",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 13,
    hit_points: 4,
    hit_dice: "1d8",
    speed: { walk: "50 ft." },
    strength: 11,
    dexterity: 16,
    constitution: 11,
    intelligence: 2,
    wisdom: 14,
    charisma: 5,
    proficiencies: [],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { passive_perception: 12 },
    languages: "",
    challenge_rating: 0,
    actions: [
      {
        name: "Bite",
        desc:
          "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) piercing damage.",
        attack_bonus: 2,
        damage: [
          {
            damage_type: {
              name: "Piercing",
              url: "/api/damage-types/piercing"
            },
            damage_dice: "1d4",
            damage_bonus: 0
          }
        ]
      }
    ],
    url: "/api/monsters/deer",
    cr: "0"
  },
  {
    index: "dire-wolf",
    name: "Dire Wolf",
    size: "Large",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 14,
    hit_points: 37,
    hit_dice: "5d10",
    speed: { walk: "50 ft." },
    strength: 17,
    dexterity: 15,
    constitution: 15,
    intelligence: 3,
    wisdom: 12,
    charisma: 7,
    proficiencies: [
      {
        name: "Skill: Perception",
        url: "/api/proficiencies/skill-perception",
        value: 3
      },
      {
        name: "Skill: Stealth",
        url: "/api/proficiencies/skill-stealth",
        value: 4
      }
    ],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { passive_perception: 13 },
    languages: "",
    challenge_rating: 1,
    special_abilities: [
      {
        name: "Keen Hearing and Smell",
        desc:
          "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell."
      },
      {
        name: "Pack Tactics",
        desc:
          "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 ft. of the creature and the ally isn't incapacitated."
      }
    ],
    actions: [
      {
        name: "Bite",
        desc:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone.",
        attack_bonus: 5,
        damage: [
          {
            damage_type: {
              name: "Piercing",
              url: "/api/damage-types/piercing"
            },
            damage_dice: "2d6",
            damage_bonus: 3
          }
        ]
      }
    ],
    url: "/api/monsters/dire-wolf",
    cr: "1"
  },
  {
    index: "draft-horse",
    name: "Draft Horse",
    size: "Large",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 10,
    hit_points: 19,
    hit_dice: "3d10",
    speed: { walk: "40 ft." },
    strength: 18,
    dexterity: 10,
    constitution: 12,
    intelligence: 2,
    wisdom: 11,
    charisma: 7,
    proficiencies: [],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { passive_perception: 10 },
    languages: "",
    challenge_rating: 0.25,
    actions: [
      {
        name: "Hooves",
        desc:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 9 (2d4 + 4) bludgeoning damage.",
        attack_bonus: 6,
        damage: [
          {
            damage_type: {
              name: "Bludgeoning",
              url: "/api/damage-types/bludgeoning"
            },
            damage_dice: "2d4",
            damage_bonus: 4
          }
        ]
      }
    ],
    url: "/api/monsters/draft-horse",
    cr: "1/4"
  },
  {
    index: "eagle",
    name: "Eagle",
    size: "Small",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 12,
    hit_points: 3,
    hit_dice: "1d6",
    speed: { walk: "10 ft.", fly: "60 ft." },
    strength: 6,
    dexterity: 15,
    constitution: 10,
    intelligence: 2,
    wisdom: 14,
    charisma: 7,
    proficiencies: [
      {
        name: "Skill: Perception",
        url: "/api/proficiencies/skill-perception",
        value: 4
      }
    ],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { passive_perception: 14 },
    languages: "",
    challenge_rating: 0,
    special_abilities: [
      {
        name: "Keen Sight",
        desc:
          "The eagle has advantage on Wisdom (Perception) checks that rely on sight."
      }
    ],
    actions: [
      {
        name: "Talons",
        desc:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) slashing damage.",
        attack_bonus: 4,
        damage: [
          {
            damage_type: {
              name: "Bludgeoning",
              url: "/api/damage-types/bludgeoning"
            },
            damage_dice: "1d4",
            damage_bonus: 2
          }
        ]
      }
    ],
    url: "/api/monsters/eagle",
    cr: "0"
  },
  {
    index: "elephant",
    name: "Elephant",
    size: "Huge",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 12,
    hit_points: 76,
    hit_dice: "8d12",
    speed: { walk: "40 ft." },
    strength: 22,
    dexterity: 9,
    constitution: 17,
    intelligence: 3,
    wisdom: 11,
    charisma: 6,
    proficiencies: [],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { passive_perception: 10 },
    languages: "",
    challenge_rating: 4,
    special_abilities: [
      {
        name: "Trampling Charge",
        desc:
          "If the elephant moves at least 20 ft. straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the elephant can make one stomp attack against it as a bonus action."
      }
    ],
    actions: [
      {
        name: "Gore",
        desc:
          "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 19 (3d8 + 6) piercing damage.",
        attack_bonus: 8,
        damage: [
          {
            damage_type: {
              name: "Piercing",
              url: "/api/damage-types/piercing"
            },
            damage_dice: "3d8",
            damage_bonus: 6
          }
        ]
      },
      {
        name: "Stomp",
        desc:
          "Melee Weapon Attack: +8 to hit, reach 5 ft., one prone creature. Hit: 22 (3d10 + 6) bludgeoning damage.",
        attack_bonus: 8,
        damage: [
          {
            damage_type: {
              name: "Bludgeoning",
              url: "/api/damage-types/bludgeoning"
            },
            damage_dice: "3d10",
            damage_bonus: 6
          }
        ]
      }
    ],
    url: "/api/monsters/elephant",
    cr: "4"
  },
  {
    index: "elk",
    name: "Elk",
    size: "Large",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 10,
    hit_points: 13,
    hit_dice: "2d10",
    speed: { walk: "50 ft." },
    strength: 16,
    dexterity: 10,
    constitution: 12,
    intelligence: 2,
    wisdom: 10,
    charisma: 6,
    proficiencies: [],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { passive_perception: 10 },
    languages: "",
    challenge_rating: 0.25,
    special_abilities: [
      {
        name: "Charge",
        desc:
          "If the elk moves at least 20 ft. straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone."
      }
    ],
    actions: [
      {
        name: "Ram",
        desc:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) bludgeoning damage.",
        attack_bonus: 5,
        damage: [
          {
            damage_type: {
              name: "Bludgeoning",
              url: "/api/damage-types/bludgeoning"
            },
            damage_dice: "1d6",
            damage_bonus: 3
          }
        ]
      },
      {
        name: "Hooves",
        desc:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one prone creature. Hit: 8 (2d4 + 3) bludgeoning damage.",
        attack_bonus: 5,
        damage: [
          {
            damage_type: {
              name: "Bludgeoning",
              url: "/api/damage-types/bludgeoning"
            },
            damage_dice: "2d4",
            damage_bonus: 3
          }
        ]
      }
    ],
    url: "/api/monsters/elk",
    cr: "1/4"
  },
  {
    index: "flying-snake",
    name: "Flying Snake",
    size: "Tiny",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 14,
    hit_points: 5,
    hit_dice: "2d4",
    speed: { walk: "30 ft.", fly: "60 ft.", swim: "30 ft." },
    strength: 4,
    dexterity: 18,
    constitution: 11,
    intelligence: 2,
    wisdom: 12,
    charisma: 5,
    proficiencies: [],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { blindsight: "10 ft.", passive_perception: 11 },
    languages: "",
    challenge_rating: 0.125,
    special_abilities: [
      {
        name: "Flyby",
        desc:
          "The snake doesn't provoke opportunity attacks when it flies out of an enemy's reach."
      }
    ],
    actions: [
      {
        name: "Bite",
        desc:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 1 piercing damage plus 7 (3d4) poison damage.",
        attack_bonus: 6,
        damage: [
          {
            damage_type: {
              name: "Bludgeoning",
              url: "/api/damage-types/bludgeoning"
            },
            damage_dice: "0d4",
            damage_bonus: 1
          },
          {
            damage_type: { name: "Poison", url: "/api/damage-types/poison" },
            damage_dice: "3d4",
            damage_bonus: 0
          }
        ]
      }
    ],
    url: "/api/monsters/flying-snake",
    cr: "1/8"
  },
  {
    index: "frog",
    name: "Frog",
    size: "Tiny",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 11,
    hit_points: 1,
    hit_dice: "1d4",
    speed: { walk: "20 ft.", swim: "20 ft." },
    strength: 1,
    dexterity: 13,
    constitution: 8,
    intelligence: 1,
    wisdom: 8,
    charisma: 3,
    proficiencies: [
      {
        name: "Skill: Perception",
        url: "/api/proficiencies/skill-perception",
        value: 1
      },
      {
        name: "Skill: Stealth",
        url: "/api/proficiencies/skill-stealth",
        value: 3
      }
    ],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { darkvision: "30 ft.", passive_perception: 11 },
    languages: "",
    challenge_rating: 0,
    special_abilities: [
      { name: "Amphibious", desc: "The frog can breathe air and water" },
      {
        name: "Standing Leap",
        desc:
          "The frog's long jump is up to 10 ft. and its high jump is up to 5 ft., with or without a running start."
      }
    ],
    url: "/api/monsters/frog",
    cr: "0"
  },
  {
    index: "giant-ape",
    name: "Giant Ape",
    size: "Huge",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 12,
    hit_points: 157,
    hit_dice: "15d12",
    speed: { walk: "40 ft.", climb: "40 ft." },
    strength: 23,
    dexterity: 14,
    constitution: 18,
    intelligence: 7,
    wisdom: 12,
    charisma: 7,
    proficiencies: [
      {
        name: "Skill: Athletics",
        url: "/api/proficiencies/skill-athletics",
        value: 9
      },
      {
        name: "Skill: Perception",
        url: "/api/proficiencies/skill-perception",
        value: 4
      }
    ],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { passive_perception: 14 },
    languages: "",
    challenge_rating: 7,
    actions: [
      { name: "Multiattack", desc: "The ape makes two fist attacks." },
      {
        name: "Fist",
        desc:
          "Melee Weapon Attack: +9 to hit, reach 10 ft., one target. Hit: 22 (3d10 + 6) bludgeoning damage.",
        attack_bonus: 9,
        damage: [
          {
            damage_type: {
              name: "Bludgeoning",
              url: "/api/damage-types/bludgeoning"
            },
            damage_dice: "3d10",
            damage_bonus: 6
          }
        ]
      },
      {
        name: "Rock",
        desc:
          "Ranged Weapon Attack: +9 to hit, range 50/100 ft., one target. Hit: 30 (7d6 + 6) bludgeoning damage.",
        attack_bonus: 9,
        damage: [
          {
            damage_type: {
              name: "Bludgeoning",
              url: "/api/damage-types/bludgeoning"
            },
            damage_dice: "7d6",
            damage_bonus: 6
          }
        ]
      }
    ],
    url: "/api/monsters/giant-ape",
    cr: "7"
  },
  {
    index: "giant-badger",
    name: "Giant Badger",
    size: "Medium",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 10,
    hit_points: 13,
    hit_dice: "2d8",
    speed: { walk: "30 ft.", burrow: "10 ft." },
    strength: 13,
    dexterity: 10,
    constitution: 15,
    intelligence: 2,
    wisdom: 12,
    charisma: 5,
    proficiencies: [],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { darkvision: "30 ft.", passive_perception: 11 },
    languages: "",
    challenge_rating: 0.25,
    special_abilities: [
      {
        name: "Keen Smell",
        desc:
          "The badger has advantage on Wisdom (Perception) checks that rely on smell."
      }
    ],
    actions: [
      {
        name: "Multiattack",
        desc:
          "The badger makes two attacks: one with its bite and one with its claws."
      },
      {
        name: "Bite",
        desc:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) piercing damage.",
        attack_bonus: 3,
        damage: [
          {
            damage_type: {
              name: "Piercing",
              url: "/api/damage-types/piercing"
            },
            damage_dice: "1d6",
            damage_bonus: 1
          }
        ]
      },
      {
        name: "Claws",
        desc:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 6 (2d4 + 1) slashing damage.",
        attack_bonus: 3,
        damage: [
          {
            damage_type: {
              name: "Slashing",
              url: "/api/damage-types/slashing"
            },
            damage_dice: "2d4",
            damage_bonus: 1
          }
        ]
      }
    ],
    url: "/api/monsters/giant-badger",
    cr: "1/4"
  },
  {
    index: "giant-bat",
    name: "Giant Bat",
    size: "Large",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 13,
    hit_points: 22,
    hit_dice: "4d10",
    speed: { walk: "10 ft.", fly: "60 ft." },
    strength: 15,
    dexterity: 16,
    constitution: 11,
    intelligence: 2,
    wisdom: 12,
    charisma: 6,
    proficiencies: [],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { blindsight: "60 ft.", passive_perception: 11 },
    languages: "",
    challenge_rating: 0.25,
    special_abilities: [
      {
        name: "Echolocation",
        desc: "The bat can't use its blindsight while deafened."
      },
      {
        name: "Keen Hearing",
        desc:
          "The bat has advantage on Wisdom (Perception) checks that rely on hearing."
      }
    ],
    actions: [
      {
        name: "Bite",
        desc:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) piercing damage.",
        attack_bonus: 4,
        damage: [
          {
            damage_type: {
              name: "Piercing",
              url: "/api/damage-types/piercing"
            },
            damage_dice: "1d6",
            damage_bonus: 2
          }
        ]
      }
    ],
    url: "/api/monsters/giant-bat",
    cr: "1/4"
  },
  {
    index: "giant-boar",
    name: "Giant Boar",
    size: "Large",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 12,
    hit_points: 42,
    hit_dice: "5d10",
    speed: { walk: "40 ft." },
    strength: 17,
    dexterity: 10,
    constitution: 16,
    intelligence: 2,
    wisdom: 7,
    charisma: 5,
    proficiencies: [],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { passive_perception: 8 },
    languages: "",
    challenge_rating: 2,
    special_abilities: [
      {
        name: "Charge",
        desc:
          "If the boar moves at least 20 ft. straight toward a target and then hits it with a tusk attack on the same turn, the target takes an extra 7 (2d6) slashing damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone."
      },
      {
        name: "Relentless",
        desc:
          "If the boar takes 10 damage or less that would reduce it to 0 hit points, it is reduced to 1 hit point instead.",
        usage: { type: "recharge after rest", rest_types: ["short", "long"] }
      }
    ],
    actions: [
      {
        name: "Tusk",
        desc:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage.",
        attack_bonus: 5,
        damage: [
          {
            damage_type: {
              name: "Slashing",
              url: "/api/damage-types/slashing"
            },
            damage_dice: "2d6",
            damage_bonus: 3
          }
        ]
      }
    ],
    url: "/api/monsters/giant-boar",
    cr: "2"
  },
  {
    index: "giant-centipede",
    name: "Giant Centipede",
    size: "Small",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 13,
    hit_points: 4,
    hit_dice: "1d6",
    speed: { walk: "30 ft.", climb: "30 ft." },
    strength: 5,
    dexterity: 14,
    constitution: 12,
    intelligence: 1,
    wisdom: 7,
    charisma: 3,
    proficiencies: [],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { blindsight: "30 ft.", passive_perception: 8 },
    languages: "",
    challenge_rating: 0.25,
    actions: [
      {
        name: "Bite",
        desc:
          "Bite. Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 4 (1d4 + 2) piercing damage, and the target must succeed on a DC 11 Constitution saving throw or take 10 (3d6) poison damage. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.",
        attack_bonus: 4,
        damage: [
          {
            damage_type: {
              name: "Piercing",
              url: "/api/damage-types/piercing"
            },
            damage_dice: "1d4",
            damage_bonus: 2
          }
        ]
      }
    ],
    url: "/api/monsters/giant-centipede",
    cr: "1/4"
  },
  {
    index: "giant-constrictor-snake",
    name: "Giant Constrictor Snake",
    size: "Huge",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 12,
    hit_points: 60,
    hit_dice: "8d12",
    speed: { walk: "30 ft.", swim: "30 ft." },
    strength: 19,
    dexterity: 14,
    constitution: 12,
    intelligence: 1,
    wisdom: 10,
    charisma: 3,
    proficiencies: [
      {
        name: "Skill: Perception",
        url: "/api/proficiencies/skill-perception",
        value: 2
      }
    ],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { blindsight: "10 ft.", passive_perception: 12 },
    languages: "",
    challenge_rating: 2,
    actions: [
      {
        name: "Bite",
        desc:
          "Melee Weapon Attack: +6 to hit, reach 10 ft., one creature. Hit: 11 (2d6 + 4) piercing damage.",
        attack_bonus: 6,
        damage: [
          {
            damage_type: {
              name: "Piercing",
              url: "/api/damage-types/piercing"
            },
            damage_dice: "2d6",
            damage_bonus: 4
          }
        ]
      },
      {
        name: "Constrict",
        desc:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one creature. Hit: 13 (2d8 + 4) bludgeoning damage, and the target is grappled (escape DC 16). Until this grapple ends, the creature is restrained, and the snake can't constrict another target.",
        attack_bonus: 6,
        damage: [
          {
            damage_type: {
              name: "Bludgeoning",
              url: "/api/damage-types/bludgeoning"
            },
            damage_dice: "2d8",
            damage_bonus: 4
          }
        ]
      }
    ],
    url: "/api/monsters/giant-constrictor-snake",
    cr: "2"
  },
  {
    index: "giant-crab",
    name: "Giant Crab",
    size: "Medium",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 15,
    hit_points: 13,
    hit_dice: "3d8",
    speed: { walk: "30 ft.", swim: "30 ft." },
    strength: 13,
    dexterity: 15,
    constitution: 11,
    intelligence: 1,
    wisdom: 9,
    charisma: 3,
    proficiencies: [
      {
        name: "Skill: Stealth",
        url: "/api/proficiencies/skill-stealth",
        value: 4
      }
    ],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { blindsight: "30 ft.", passive_perception: 9 },
    languages: "",
    challenge_rating: 0.125,
    special_abilities: [
      { name: "Amphibious", desc: "The crab can breathe air and water." }
    ],
    actions: [
      {
        name: "Claw",
        desc:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) bludgeoning damage, and the target is grappled (escape DC 11). The crab has two claws, each of which can grapple only one target.",
        attack_bonus: 3,
        damage: [
          {
            damage_type: {
              name: "Bludgeoning",
              url: "/api/damage-types/bludgeoning"
            },
            damage_dice: "1d6",
            damage_bonus: 1
          }
        ]
      }
    ],
    url: "/api/monsters/giant-crab",
    cr: "1/8"
  },
  {
    index: "giant-crocodile",
    name: "Giant Crocodile",
    size: "Huge",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 14,
    hit_points: 85,
    hit_dice: "9d12",
    speed: { walk: "30 ft.", swim: "50 ft." },
    strength: 21,
    dexterity: 9,
    constitution: 17,
    intelligence: 2,
    wisdom: 10,
    charisma: 7,
    proficiencies: [
      {
        name: "Skill: Stealth",
        url: "/api/proficiencies/skill-stealth",
        value: 5
      }
    ],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { passive_perception: 10 },
    languages: "",
    challenge_rating: 5,
    special_abilities: [
      {
        name: "Hold Breath",
        desc: "The crocodile can hold its breath for 30 minutes."
      }
    ],
    actions: [
      {
        name: "Multiattack",
        desc:
          "The crocodile makes two attacks: one with its bite and one with its tail."
      },
      {
        name: "Bite",
        desc:
          "Melee Weapon Attack: +8 to hit, reach 5 ft., one target. Hit: 21 (3d10 + 5) piercing damage, and the target is grappled (escape DC 16). Until this grapple ends, the target is restrained, and the crocodile can't bite another target.",
        attack_bonus: 8,
        damage: [
          {
            damage_type: {
              name: "Piercing",
              url: "/api/damage-types/piercing"
            },
            damage_dice: "3d10",
            damage_bonus: 5
          }
        ]
      },
      {
        name: "Tail",
        desc:
          "Melee Weapon Attack: +8 to hit, reach 10 ft., one target not grappled by the crocodile. Hit: 14 (2d8 + 5) bludgeoning damage. If the target is a creature, it must succeed on a DC 16 Strength saving throw or be knocked prone.",
        attack_bonus: 8,
        damage: [
          {
            damage_type: {
              name: "Bludgeoning",
              url: "/api/damage-types/bludgeoning"
            },
            damage_dice: "2d8",
            damage_bonus: 5
          }
        ]
      }
    ],
    url: "/api/monsters/giant-crocodile",
    cr: "5"
  },
  {
    index: "giant-eagle",
    name: "Giant Eagle",
    size: "Large",
    type: "beast",
    subtype: null,
    alignment: "neutral good",
    armor_class: 13,
    hit_points: 26,
    hit_dice: "4d10",
    speed: { walk: "10 ft.", fly: "80 ft." },
    strength: 16,
    dexterity: 17,
    constitution: 13,
    intelligence: 8,
    wisdom: 14,
    charisma: 10,
    proficiencies: [
      {
        name: "Skill: Perception",
        url: "/api/proficiencies/skill-perception",
        value: 4
      }
    ],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { passive_perception: 14 },
    languages: "Giant Eagle, understands Common and Auran but can't speak",
    challenge_rating: 1,
    special_abilities: [
      {
        name: "Keen Sight",
        desc:
          "The eagle has advantage on Wisdom (Perception) checks that rely on sight."
      }
    ],
    actions: [
      {
        name: "Multiattack",
        desc:
          "The eagle makes two attacks: one with its beak and one with its talons."
      },
      {
        name: "Beak",
        desc:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) piercing damage.",
        attack_bonus: 5,
        damage: [
          {
            damage_type: {
              name: "Piercing",
              url: "/api/damage-types/piercing"
            },
            damage_dice: "1d6",
            damage_bonus: 3
          }
        ]
      },
      {
        name: "Talons",
        desc:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) slashing damage.",
        attack_bonus: 5,
        damage: [
          {
            damage_type: {
              name: "Slashing",
              url: "/api/damage-types/slashing"
            },
            damage_dice: "2d6",
            damage_bonus: 3
          }
        ]
      }
    ],
    url: "/api/monsters/giant-eagle",
    cr: "1"
  },
  {
    index: "giant-elk",
    name: "Giant Elk",
    size: "Huge",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 15,
    hit_points: 42,
    hit_dice: "5d12",
    speed: { walk: "60 ft." },
    strength: 19,
    dexterity: 16,
    constitution: 14,
    intelligence: 7,
    wisdom: 14,
    charisma: 10,
    proficiencies: [
      {
        name: "Skill: Perception",
        url: "/api/proficiencies/skill-perception",
        value: 4
      }
    ],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { passive_perception: 14 },
    languages:
      "Giant Elk, understands Common, Elvish, and Sylvan but can't speak",
    challenge_rating: 2,
    special_abilities: [
      {
        name: "Charge",
        desc:
          "If the elk moves at least 20 ft. straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) damage. If the target is a creature, it must succeed on a DC 14 Strength saving throw or be knocked prone."
      }
    ],
    actions: [
      {
        name: "Ram",
        desc:
          "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage.",
        attack_bonus: 6,
        damage: [
          {
            damage_type: {
              name: "Bludgeoning",
              url: "/api/damage-types/bludgeoning"
            },
            damage_dice: "2d6",
            damage_bonus: 4
          }
        ]
      },
      {
        name: "Hooves",
        desc:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one prone creature. Hit: 22 (4d8 + 4) bludgeoning damage.",
        attack_bonus: 6,
        damage: [
          {
            damage_type: {
              name: "Bludgeoning",
              url: "/api/damage-types/bludgeoning"
            },
            damage_dice: "4d8",
            damage_bonus: 4
          }
        ]
      }
    ],
    url: "/api/monsters/giant-elk",
    cr: "2"
  },
  {
    index: "giant-fire-beetle",
    name: "Giant Fire Beetle",
    size: "Small",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 13,
    hit_points: 4,
    hit_dice: "1d6",
    speed: { walk: "30 ft." },
    strength: 8,
    dexterity: 10,
    constitution: 12,
    intelligence: 1,
    wisdom: 7,
    charisma: 3,
    proficiencies: [],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { blindsight: "30 ft.", passive_perception: 8 },
    languages: "",
    challenge_rating: 0,
    special_abilities: [
      {
        name: "Illumination",
        desc:
          "The beetle sheds bright light in a 10-foot radius and dim light for an additional 10 ft.."
      }
    ],
    actions: [
      {
        name: "Bite",
        desc:
          "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 2 (1d6 - 1) slashing damage.",
        attack_bonus: 1,
        damage: [
          {
            damage_type: {
              name: "Slashing",
              url: "/api/damage-types/slashing"
            },
            damage_dice: "1d6",
            damage_bonus: -1
          }
        ]
      }
    ],
    url: "/api/monsters/giant-fire-beetle",
    cr: "0"
  },
  {
    index: "giant-frog",
    name: "Giant Frog",
    size: "Medium",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 11,
    hit_points: 18,
    hit_dice: "4d8",
    speed: { walk: "30 ft.", swim: "30 ft." },
    strength: 12,
    dexterity: 13,
    constitution: 11,
    intelligence: 2,
    wisdom: 10,
    charisma: 3,
    proficiencies: [
      {
        name: "Skill: Perception",
        url: "/api/proficiencies/skill-perception",
        value: 2
      },
      {
        name: "Skill: Stealth",
        url: "/api/proficiencies/skill-stealth",
        value: 3
      }
    ],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { darkvision: "30 ft.", passive_perception: 12 },
    languages: "",
    challenge_rating: 0.25,
    special_abilities: [
      { name: "Amphibious", desc: "The frog can breathe air and water" },
      {
        name: "Standing Leap",
        desc:
          "The frog's long jump is up to 20 ft. and its high jump is up to 10 ft., with or without a running start."
      }
    ],
    actions: [
      {
        name: "Bite",
        desc:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) piercing damage, and the target is grappled (escape DC 11). Until this grapple ends, the target is restrained, and the frog can't bite another target.",
        attack_bonus: 3,
        damage: [
          {
            damage_type: {
              name: "Piercing",
              url: "/api/damage-types/piercing"
            },
            damage_dice: "1d6",
            damage_bonus: 1
          }
        ]
      },
      {
        name: "Swallow",
        desc:
          "The frog makes one bite attack against a Small or smaller target it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the frog, and it takes 5 (2d4) acid damage at the start of each of the frog's turns. The frog can have only one target swallowed at a time. If the frog dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 5 ft. of movement, exiting prone."
      }
    ],
    url: "/api/monsters/giant-frog",
    cr: "1/4"
  },
  {
    index: "giant-goat",
    name: "Giant Goat",
    size: "Large",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 11,
    hit_points: 19,
    hit_dice: "3d10",
    speed: { walk: "40 ft." },
    strength: 17,
    dexterity: 11,
    constitution: 12,
    intelligence: 3,
    wisdom: 12,
    charisma: 6,
    proficiencies: [],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { passive_perception: 11 },
    languages: "",
    challenge_rating: 0.5,
    special_abilities: [
      {
        name: "Charge",
        desc:
          "If the goat moves at least 20 ft. straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 5 (2d4) bludgeoning damage. If the target is a creature, it must succeed on a DC 13 Strength saving throw or be knocked prone."
      },
      {
        name: "Sure-Footed",
        desc:
          "The goat has advantage on Strength and Dexterity saving throws made against effects that would knock it prone."
      }
    ],
    actions: [
      {
        name: "Ram",
        desc:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4 + 3) bludgeoning damage.",
        attack_bonus: 5,
        damage: [
          {
            damage_type: {
              name: "Bludgeoning",
              url: "/api/damage-types/bludgeoning"
            },
            damage_dice: "2d4",
            damage_bonus: 3
          }
        ]
      }
    ],
    url: "/api/monsters/giant-goat",
    cr: "1/2"
  },
  {
    index: "giant-hyena",
    name: "Giant Hyena",
    size: "Large",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 12,
    hit_points: 45,
    hit_dice: "6d10",
    speed: { walk: "50 ft." },
    strength: 16,
    dexterity: 14,
    constitution: 14,
    intelligence: 2,
    wisdom: 12,
    charisma: 7,
    proficiencies: [
      {
        name: "Skill: Perception",
        url: "/api/proficiencies/skill-perception",
        value: 3
      }
    ],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { passive_perception: 13 },
    languages: "",
    challenge_rating: 1,
    special_abilities: [
      {
        name: "Rampage",
        desc:
          "When the hyena reduces a creature to 0 hit points with a melee attack on its turn, the hyena can take a bonus action to move up to half its speed and make a bite attack."
      }
    ],
    actions: [
      {
        name: "Bite",
        desc:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 10 (2d6 + 3) piercing damage.",
        attack_bonus: 5,
        damage: [
          {
            damage_type: {
              name: "Piercing",
              url: "/api/damage-types/piercing"
            },
            damage_dice: "2d6",
            damage_bonus: 3
          }
        ]
      }
    ],
    url: "/api/monsters/giant-hyena",
    cr: "1"
  },
  {
    index: "giant-lizard",
    name: "Giant Lizard",
    size: "Large",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 12,
    hit_points: 19,
    hit_dice: "3d10",
    speed: { walk: "30 ft.", climb: "30 ft." },
    strength: 15,
    dexterity: 12,
    constitution: 13,
    intelligence: 2,
    wisdom: 10,
    charisma: 5,
    proficiencies: [],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { darkvision: "30 ft.", passive_perception: 10 },
    languages: "",
    challenge_rating: 0.25,
    special_abilities: [
      {
        name: "Variant: Hold Breath",
        desc:
          "The lizard can hold its breath for 15 minutes. (A lizard that has this trait also has a swimming speed of 30 feet.)"
      },
      {
        name: "Variant: Spider Climb",
        desc:
          "The lizard can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
      }
    ],
    actions: [
      {
        name: "Bite",
        desc:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing damage.",
        attack_bonus: 4,
        damage: [
          {
            damage_type: {
              name: "Piercing",
              url: "/api/damage-types/piercing"
            },
            damage_dice: "1d8",
            damage_bonus: 2
          }
        ]
      }
    ],
    url: "/api/monsters/giant-lizard",
    cr: "1/4"
  },
  {
    index: "giant-octopus",
    name: "Giant Octopus",
    size: "Large",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 11,
    hit_points: 52,
    hit_dice: "8d10",
    speed: { walk: "10 ft.", swim: "60 ft." },
    strength: 17,
    dexterity: 13,
    constitution: 13,
    intelligence: 4,
    wisdom: 10,
    charisma: 4,
    proficiencies: [
      {
        name: "Skill: Perception",
        url: "/api/proficiencies/skill-perception",
        value: 4
      },
      {
        name: "Skill: Stealth",
        url: "/api/proficiencies/skill-stealth",
        value: 5
      }
    ],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { darkvision: "60 ft.", passive_perception: 14 },
    languages: "",
    challenge_rating: 1,
    special_abilities: [
      {
        name: "Hold Breath",
        desc: "While out of water, the octopus can hold its breath for 1 hour."
      },
      {
        name: "Underwater Camouflage",
        desc:
          "The octopus has advantage on Dexterity (Stealth) checks made while underwater."
      },
      {
        name: "Water Breathing",
        desc: "The octopus can breathe only underwater."
      }
    ],
    actions: [
      {
        name: "Tentacles",
        desc:
          "Melee Weapon Attack: +5 to hit, reach 15 ft., one target. Hit: 10 (2d6 + 3) bludgeoning damage. If the target is a creature, it is grappled (escape DC 16). Until this grapple ends, the target is restrained, and the octopus can't use its tentacles on another target.",
        attack_bonus: 5,
        damage: [
          {
            damage_type: {
              name: "Bludgeoning",
              url: "/api/damage-types/bludgeoning"
            },
            damage_dice: "2d6",
            damage_bonus: 3
          }
        ]
      },
      {
        name: "Ink Cloud",
        desc:
          "A 20-foot-radius cloud of ink extends all around the octopus if it is underwater. The area is heavily obscured for 1 minute, although a significant current can disperse the ink. After releasing the ink, the octopus can use the Dash action as a bonus action.",
        usage: { type: "recharge after rest", rest_types: ["short", "long"] }
      }
    ],
    url: "/api/monsters/giant-octopus",
    cr: "1"
  },
  {
    index: "giant-owl",
    name: "Giant Owl",
    size: "Large",
    type: "beast",
    subtype: null,
    alignment: "neutral",
    armor_class: 12,
    hit_points: 19,
    hit_dice: "3d10",
    speed: { walk: "5 ft.", fly: "60 ft." },
    strength: 13,
    dexterity: 15,
    constitution: 12,
    intelligence: 8,
    wisdom: 13,
    charisma: 10,
    proficiencies: [
      {
        name: "Skill: Perception",
        url: "/api/proficiencies/skill-perception",
        value: 5
      },
      {
        name: "Skill: Stealth",
        url: "/api/proficiencies/skill-stealth",
        value: 4
      }
    ],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { darkvision: "120 ft.", passive_perception: 15 },
    languages:
      "Giant Owl, understands Common, Elvish, and Sylvan but can't speak",
    challenge_rating: 0.25,
    special_abilities: [
      {
        name: "Flyby",
        desc:
          "The owl doesn't provoke opportunity attacks when it flies out of an enemy's reach."
      },
      {
        name: "Keen Hearing and Sight",
        desc:
          "The owl has advantage on Wisdom (Perception) checks that rely on hearing or sight."
      }
    ],
    actions: [
      {
        name: "Talons",
        desc:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 8 (2d6 + 1) slashing damage.",
        attack_bonus: 3,
        damage: [
          {
            damage_type: {
              name: "Slashing",
              url: "/api/damage-types/slashing"
            },
            damage_dice: "2d6",
            damage_bonus: 1
          }
        ]
      }
    ],
    url: "/api/monsters/giant-owl",
    cr: "1/4"
  },
  {
    index: "giant-poisonous-snake",
    name: "Giant Poisonous Snake",
    size: "Medium",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 14,
    hit_points: 11,
    hit_dice: "2d8",
    speed: { walk: "30 ft.", swim: "30 ft." },
    strength: 10,
    dexterity: 18,
    constitution: 13,
    intelligence: 2,
    wisdom: 10,
    charisma: 3,
    proficiencies: [
      {
        name: "Skill: Perception",
        url: "/api/proficiencies/skill-perception",
        value: 2
      }
    ],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { blindsight: "10 ft.", passive_perception: 12 },
    languages: "",
    challenge_rating: 0.25,
    actions: [
      {
        name: "Bite",
        desc:
          "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 6 (1d4 + 4) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one.",
        attack_bonus: 6,
        damage: [
          {
            damage_type: {
              name: "Piercing",
              url: "/api/damage-types/piercing"
            },
            damage_dice: "1d4",
            damage_bonus: 4
          }
        ]
      }
    ],
    url: "/api/monsters/giant-poisonous-snake",
    cr: "1/4"
  },
  {
    index: "giant-rat",
    name: "Giant Rat",
    size: "Small",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 12,
    hit_points: 7,
    hit_dice: "2d6",
    speed: { walk: "30 ft." },
    strength: 7,
    dexterity: 15,
    constitution: 11,
    intelligence: 2,
    wisdom: 10,
    charisma: 4,
    proficiencies: [],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { darkvision: "60 ft.", passive_perception: 10 },
    languages: "",
    challenge_rating: 0.125,
    special_abilities: [
      {
        name: "Keen Smell",
        desc:
          "The rat has advantage on Wisdom (Perception) checks that rely on smell."
      },
      {
        name: "Pack Tactics",
        desc:
          "The rat has advantage on an attack roll against a creature if at least one of the rat's allies is within 5 ft. of the creature and the ally isn't incapacitated."
      }
    ],
    actions: [
      {
        name: "Bite",
        desc:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) piercing damage.",
        attack_bonus: 4,
        damage: [
          {
            damage_type: {
              name: "Piercing",
              url: "/api/damage-types/piercing"
            },
            damage_dice: "1d4",
            damage_bonus: 2
          }
        ]
      }
    ],
    url: "/api/monsters/giant-rat",
    cr: "1/8"
  },
  {
    index: "giant-rat-diseased",
    name: "Giant Rat (Diseased)",
    size: "Small",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 12,
    hit_points: 7,
    hit_dice: "2d6",
    speed: { walk: "30 ft." },
    strength: 7,
    dexterity: 15,
    constitution: 11,
    intelligence: 2,
    wisdom: 10,
    charisma: 4,
    proficiencies: [],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { darkvision: "60 ft.", passive_perception: 10 },
    languages: "",
    challenge_rating: 0.125,
    actions: [
      {
        name: "Bite",
        desc:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 2) piercing damage. If the target is a creature, it must succeed on a DC 10 Constitution saving throw or contract a disease. Until the disease is cured, the target can't regain hit points except by magical means, and the target's hit point maximum decreases by 3 (1d6) every 24 hours. If the target's hit point maximum drops to 0 as a result of this disease, the target dies.",
        attack_bonus: 4,
        damage: [
          {
            damage_type: {
              name: "Piercing",
              url: "/api/damage-types/piercing"
            },
            damage_dice: "1d4",
            damage_bonus: 2
          }
        ]
      }
    ],
    url: "/api/monsters/giant-rat-diseased",
    cr: "1/8"
  },
  {
    index: "giant-scorpion",
    name: "Giant Scorpion",
    size: "Large",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 15,
    hit_points: 52,
    hit_dice: "7d10",
    speed: { walk: "40 ft." },
    strength: 15,
    dexterity: 13,
    constitution: 15,
    intelligence: 1,
    wisdom: 9,
    charisma: 3,
    proficiencies: [],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { blindsight: "60 ft.", passive_perception: 9 },
    languages: "",
    challenge_rating: 3,
    actions: [
      {
        name: "Claw",
        desc:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) bludgeoning damage, and the target is grappled (escape DC 12). The scorpion has two claws, each of which can grapple only one target.",
        attack_bonus: 4,
        damage: [
          {
            damage_type: {
              name: "Bludgeoning",
              url: "/api/damage-types/bludgeoning"
            },
            damage_dice: "1d8",
            damage_bonus: 2
          }
        ]
      },
      {
        name: "Multiattack",
        desc:
          "The scorpion makes three attacks: two with its claws and one with its sting."
      },
      {
        name: "Sting",
        desc:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 7 (1d10 + 2) piercing damage, and the target must make a DC 12 Constitution saving throw, taking 22 (4d10) poison damage on a failed save, or half as much damage on a successful one.",
        attack_bonus: 4,
        damage: [
          {
            damage_type: {
              name: "Piercing",
              url: "/api/damage-types/piercing"
            },
            damage_dice: "1d10",
            damage_bonus: 2
          }
        ]
      }
    ],
    url: "/api/monsters/giant-scorpion",
    cr: "3"
  },
  {
    index: "giant-sea-horse",
    name: "Giant Sea Horse",
    size: "Large",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 13,
    hit_points: 16,
    hit_dice: "3d10",
    speed: { walk: "0 ft.", swim: "40 ft." },
    strength: 12,
    dexterity: 15,
    constitution: 11,
    intelligence: 2,
    wisdom: 12,
    charisma: 5,
    proficiencies: [],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { passive_perception: 11 },
    languages: "",
    challenge_rating: 0.5,
    special_abilities: [
      {
        name: "Charge",
        desc:
          "If the sea horse moves at least 20 ft. straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 7 (2d6) bludgeoning damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone."
      },
      {
        name: "Water Breathing",
        desc: "The sea horse can breathe only underwater."
      }
    ],
    actions: [
      {
        name: "Ram",
        desc:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) bludgeoning damage.",
        attack_bonus: 3,
        damage: [
          {
            damage_type: {
              name: "Bludgeoning",
              url: "/api/damage-types/bludgeoning"
            },
            damage_dice: "1d6",
            damage_bonus: 1
          }
        ]
      }
    ],
    url: "/api/monsters/giant-sea-horse",
    cr: "1/2"
  },
  {
    index: "giant-shark",
    name: "Giant Shark",
    size: "Huge",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 13,
    hit_points: 126,
    hit_dice: "11d12",
    speed: { swim: "50 ft." },
    strength: 23,
    dexterity: 11,
    constitution: 21,
    intelligence: 1,
    wisdom: 10,
    charisma: 5,
    proficiencies: [
      {
        name: "Skill: Perception",
        url: "/api/proficiencies/skill-perception",
        value: 3
      }
    ],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { blindsight: "60 ft.", passive_perception: 13 },
    languages: "",
    challenge_rating: 5,
    special_abilities: [
      {
        name: "Blood Frenzy",
        desc:
          "The shark has advantage on melee attack rolls against any creature that doesn't have all its hit points."
      },
      {
        name: "Water Breathing",
        desc: "The shark can breathe only underwater."
      }
    ],
    actions: [
      {
        name: "Bite",
        desc:
          "Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 22 (3d10 + 6) piercing damage.",
        attack_bonus: 9,
        damage: [
          {
            damage_type: {
              name: "Piercing",
              url: "/api/damage-types/piercing"
            },
            damage_dice: "3d10",
            damage_bonus: 6
          }
        ]
      }
    ],
    url: "/api/monsters/giant-shark",
    cr: "5"
  },
  {
    index: "giant-spider",
    name: "Giant Spider",
    size: "Large",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 14,
    hit_points: 26,
    hit_dice: "4d10",
    speed: { walk: "30 ft.", climb: "30 ft." },
    strength: 14,
    dexterity: 16,
    constitution: 12,
    intelligence: 2,
    wisdom: 11,
    charisma: 4,
    proficiencies: [
      {
        name: "Skill: Stealth",
        url: "/api/proficiencies/skill-stealth",
        value: 7
      }
    ],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: {
      blindsight: "10 ft.",
      darkvision: "60 ft.",
      passive_perception: 10
    },
    languages: "",
    challenge_rating: 1,
    special_abilities: [
      {
        name: "Spider Climb",
        desc:
          "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
      },
      {
        name: "Web Sense",
        desc:
          "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web."
      },
      {
        name: "Web Walker",
        desc: "The spider ignores movement restrictions caused by webbing."
      }
    ],
    actions: [
      {
        name: "Bite",
        desc:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 7 (1d8 + 3) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 9 (2d8) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.",
        attack_bonus: 5,
        damage: [
          {
            damage_type: {
              name: "Piercing",
              url: "/api/damage-types/piercing"
            },
            damage_dice: "1d8",
            damage_bonus: 3
          }
        ]
      },
      {
        name: "Web",
        desc:
          "Ranged Weapon Attack: +5 to hit, range 30/60 ft., one creature. Hit: The target is restrained by webbing. As an action, the restrained target can make a DC 12 Strength check, bursting the webbing on a success. The webbing can also be attacked and destroyed (AC 10; hp 5; vulnerability to fire damage; immunity to bludgeoning, poison, and psychic damage).",
        usage: { type: "recharge on roll", dice: "1d6", min_value: 5 },
        attack_bonus: 5
      }
    ],
    url: "/api/monsters/giant-spider",
    cr: "1"
  },
  {
    index: "giant-toad",
    name: "Giant Toad",
    size: "Large",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 11,
    hit_points: 39,
    hit_dice: "6d10",
    speed: { walk: "20 ft.", swim: "40 ft." },
    strength: 15,
    dexterity: 13,
    constitution: 13,
    intelligence: 2,
    wisdom: 10,
    charisma: 3,
    proficiencies: [],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { darkvision: "30 ft.", passive_perception: 10 },
    languages: "",
    challenge_rating: 1,
    special_abilities: [
      { name: "Amphibious", desc: "The toad can breathe air and water" },
      {
        name: "Standing Leap",
        desc:
          "The toad's long jump is up to 20 ft. and its high jump is up to 10 ft., with or without a running start."
      }
    ],
    actions: [
      {
        name: "Bite",
        desc:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (1d10 + 2) piercing damage plus 5 (1d10) poison damage, and the target is grappled (escape DC 13). Until this grapple ends, the target is restrained, and the toad can't bite another target.",
        attack_bonus: 4,
        damage: [
          {
            damage_type: {
              name: "Piercing",
              url: "/api/damage-types/piercing"
            },
            damage_dice: "1d10",
            damage_bonus: 8
          },
          {
            damage_type: { name: "Poison", url: "/api/damage-types/poison" },
            damage_dice: "1d10",
            damage_bonus: 0
          }
        ]
      },
      {
        name: "Swallow",
        desc:
          "The toad makes one bite attack against a Medium or smaller target it is grappling. If the attack hits, the target is swallowed, and the grapple ends. The swallowed target is blinded and restrained, it has total cover against attacks and other effects outside the toad, and it takes 10 (3d6) acid damage at the start of each of the toad's turns. The toad can have only one target swallowed at a time.\nIf the toad dies, a swallowed creature is no longer restrained by it and can escape from the corpse using 5 feet of movement, exiting prone."
      }
    ],
    url: "/api/monsters/giant-toad",
    cr: "1"
  },
  {
    index: "giant-vulture",
    name: "Giant Vulture",
    size: "Large",
    type: "beast",
    subtype: null,
    alignment: "neutral evil",
    armor_class: 10,
    hit_points: 22,
    hit_dice: "3d10",
    speed: { walk: "10 ft.", fly: "60 ft." },
    strength: 15,
    dexterity: 10,
    constitution: 15,
    intelligence: 6,
    wisdom: 12,
    charisma: 7,
    proficiencies: [
      {
        name: "Skill: Perception",
        url: "/api/proficiencies/skill-perception",
        value: 3
      }
    ],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { passive_perception: 13 },
    languages: "understands Common but can't speak",
    challenge_rating: 1,
    special_abilities: [
      {
        name: "Keen Sight and Smell",
        desc:
          "The vulture has advantage on Wisdom (Perception) checks that rely on sight or smell."
      },
      {
        name: "Pack Tactics",
        desc:
          "The vulture has advantage on an attack roll against a creature if at least one of the vulture's allies is within 5 ft. of the creature and the ally isn't incapacitated."
      }
    ],
    actions: [
      {
        name: "Multiattack",
        desc:
          "The vulture makes two attacks: one with its beak and one with its talons."
      },
      {
        name: "Beak",
        desc:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) piercing damage.",
        attack_bonus: 4,
        damage: [
          {
            damage_type: {
              name: "Piercing",
              url: "/api/damage-types/piercing"
            },
            damage_dice: "2d4",
            damage_bonus: 2
          }
        ]
      },
      {
        name: "Talons",
        desc:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 9 (2d6 + 2) slashing damage.",
        attack_bonus: 4,
        damage: [
          {
            damage_type: {
              name: "Slashing",
              url: "/api/damage-types/slashing"
            },
            damage_dice: "2d6",
            damage_bonus: 2
          }
        ]
      }
    ],
    url: "/api/monsters/giant-vulture",
    cr: "1"
  },
  {
    index: "giant-wasp",
    name: "Giant Wasp",
    size: "Medium",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 12,
    hit_points: 13,
    hit_dice: "3d8",
    speed: { walk: "10 ft.", fly: "50 ft.", swim: "50 ft." },
    strength: 10,
    dexterity: 14,
    constitution: 10,
    intelligence: 1,
    wisdom: 10,
    charisma: 3,
    proficiencies: [],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { passive_perception: 10 },
    languages: "",
    challenge_rating: 0.5,
    actions: [
      {
        name: "Sting",
        desc:
          "Sting. Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 5 (1d6 + 2) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 10 (3d6) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.",
        attack_bonus: 4,
        damage: [
          {
            damage_type: {
              name: "Piercing",
              url: "/api/damage-types/piercing"
            },
            damage_dice: "1d6",
            damage_bonus: 2
          }
        ]
      }
    ],
    url: "/api/monsters/giant-wasp",
    cr: "1/2"
  },
  {
    index: "giant-weasel",
    name: "Giant Weasel",
    size: "Medium",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 13,
    hit_points: 9,
    hit_dice: "2d8",
    speed: { walk: "40 ft." },
    strength: 11,
    dexterity: 16,
    constitution: 10,
    intelligence: 4,
    wisdom: 12,
    charisma: 5,
    proficiencies: [
      {
        name: "Skill: Perception",
        url: "/api/proficiencies/skill-perception",
        value: 3
      },
      {
        name: "Skill: Stealth",
        url: "/api/proficiencies/skill-stealth",
        value: 5
      }
    ],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { darkvision: "60 ft.", passive_perception: 13 },
    languages: "",
    challenge_rating: 0.125,
    special_abilities: [
      {
        name: "Keen Hearing and Smell",
        desc:
          "The weasel has advantage on Wisdom (Perception) checks that rely on hearing or smell."
      }
    ],
    actions: [
      {
        name: "Bite",
        desc:
          "Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 5 (1d4 + 3) piercing damage.",
        attack_bonus: 5,
        damage: [
          {
            damage_type: {
              name: "Piercing",
              url: "/api/damage-types/piercing"
            },
            damage_dice: "1d4",
            damage_bonus: 3
          }
        ]
      }
    ],
    url: "/api/monsters/giant-weasel",
    cr: "1/8"
  },
  {
    index: "giant-wolf-spider",
    name: "Giant Wolf Spider",
    size: "Medium",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 13,
    hit_points: 11,
    hit_dice: "2d8",
    speed: { walk: "40 ft.", climb: "40 ft." },
    strength: 12,
    dexterity: 16,
    constitution: 13,
    intelligence: 3,
    wisdom: 12,
    charisma: 4,
    proficiencies: [
      {
        name: "Skill: Perception",
        url: "/api/proficiencies/skill-perception",
        value: 3
      },
      {
        name: "Skill: Stealth",
        url: "/api/proficiencies/skill-stealth",
        value: 7
      }
    ],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: {
      blindsight: "10 ft.",
      darkvision: "60 ft.",
      passive_perception: 13
    },
    languages: "",
    challenge_rating: 0.25,
    special_abilities: [
      {
        name: "Spider Climb",
        desc:
          "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
      },
      {
        name: "Web Sense",
        desc:
          "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web."
      },
      {
        name: "Web Walker",
        desc: "The spider ignores movement restrictions caused by webbing."
      }
    ],
    actions: [
      {
        name: "Bite",
        desc:
          "Weapon Attack: +3 to hit, reach 5 ft., one creature. Hit: 4 (1d6 + 1) piercing damage, and the target must make a DC 11 Constitution saving throw, taking 7 (2d6) poison damage on a failed save, or half as much damage on a successful one. If the poison damage reduces the target to 0 hit points, the target is stable but poisoned for 1 hour, even after regaining hit points, and is paralyzed while poisoned in this way.",
        attack_bonus: 3,
        damage: [
          {
            damage_type: {
              name: "Piercing",
              url: "/api/damage-types/piercing"
            },
            damage_dice: "1d6",
            damage_bonus: 1
          }
        ]
      }
    ],
    url: "/api/monsters/giant-wolf-spider",
    cr: "1/4"
  },
  {
    index: "goat",
    name: "Goat",
    size: "Medium",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 10,
    hit_points: 4,
    hit_dice: "1d8",
    speed: { walk: "40 ft." },
    strength: 12,
    dexterity: 10,
    constitution: 11,
    intelligence: 2,
    wisdom: 10,
    charisma: 5,
    proficiencies: [],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { passive_perception: 10 },
    languages: "",
    challenge_rating: 0,
    special_abilities: [
      {
        name: "Charge",
        desc:
          "If the goat moves at least 20 ft. straight toward a target and then hits it with a ram attack on the same turn, the target takes an extra 2 (1d4) bludgeoning damage. If the target is a creature, it must succeed on a DC 10 Strength saving throw or be knocked prone."
      },
      {
        name: "Sure-Footed",
        desc:
          "The goat has advantage on Strength and Dexterity saving throws made against effects that would knock it prone."
      }
    ],
    actions: [
      {
        name: "Ram",
        desc:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 3 (1d4 + 1) bludgeoning damage.",
        attack_bonus: 3,
        damage: [
          {
            damage_type: {
              name: "Bludgeoning",
              url: "/api/damage-types/bludgeoning"
            },
            damage_dice: "1d4",
            damage_bonus: 1
          }
        ]
      }
    ],
    url: "/api/monsters/goat",
    cr: "0"
  },
  {
    index: "hawk",
    name: "Hawk",
    size: "Tiny",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 13,
    hit_points: 1,
    hit_dice: "1d4",
    speed: { walk: "10 ft.", fly: "60 ft." },
    strength: 5,
    dexterity: 16,
    constitution: 8,
    intelligence: 2,
    wisdom: 14,
    charisma: 6,
    proficiencies: [
      {
        name: "Skill: Perception",
        url: "/api/proficiencies/skill-perception",
        value: 4
      }
    ],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { passive_perception: 14 },
    languages: "",
    challenge_rating: 0,
    special_abilities: [
      {
        name: "Keen Sight",
        desc:
          "The hawk has advantage on Wisdom (Perception) checks that rely on sight."
      }
    ],
    actions: [
      {
        name: "Talons",
        desc:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 slashing damage.",
        attack_bonus: 5,
        damage: [
          {
            damage_type: {
              name: "Slashing",
              url: "/api/damage-types/slashing"
            },
            damage_dice: "0d4",
            damage_bonus: 1
          }
        ]
      }
    ],
    url: "/api/monsters/hawk",
    cr: "0"
  },
  {
    index: "hunter-shark",
    name: "Hunter Shark",
    size: "Large",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 12,
    hit_points: 45,
    hit_dice: "6d10",
    speed: { swim: "40 ft." },
    strength: 18,
    dexterity: 13,
    constitution: 15,
    intelligence: 1,
    wisdom: 10,
    charisma: 4,
    proficiencies: [
      {
        name: "Skill: Perception",
        url: "/api/proficiencies/skill-perception",
        value: 2
      }
    ],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { darkvision: "30 ft.", passive_perception: 12 },
    languages: "",
    challenge_rating: 2,
    special_abilities: [
      {
        name: "Blood Frenzy",
        desc:
          "The shark has advantage on melee attack rolls against any creature that doesn't have all its hit points."
      },
      {
        name: "Water Breathing",
        desc: "The shark can breathe only underwater."
      }
    ],
    actions: [
      {
        name: "Bite",
        desc:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 13 (2d8 + 4) piercing damage.",
        attack_bonus: 6,
        damage: [
          {
            damage_type: {
              name: "Bludgeoning",
              url: "/api/damage-types/bludgeoning"
            },
            damage_dice: "2d8",
            damage_bonus: 4
          }
        ]
      }
    ],
    url: "/api/monsters/hunter-shark",
    cr: "2"
  },
  {
    index: "hyena",
    name: "Hyena",
    size: "Medium",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 11,
    hit_points: 5,
    hit_dice: "1d8",
    speed: { walk: "50 ft." },
    strength: 11,
    dexterity: 13,
    constitution: 12,
    intelligence: 2,
    wisdom: 12,
    charisma: 5,
    proficiencies: [
      {
        name: "Skill: Perception",
        url: "/api/proficiencies/skill-perception",
        value: 3
      }
    ],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { passive_perception: 13 },
    languages: "",
    challenge_rating: 0,
    special_abilities: [
      {
        name: "Pack Tactics",
        desc:
          "The hyena has advantage on an attack roll against a creature if at least one of the hyena's allies is within 5 ft. of the creature and the ally isn't incapacitated."
      }
    ],
    actions: [
      {
        name: "Bite",
        desc:
          "Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 3 (1d6) piercing damage.",
        attack_bonus: 2,
        damage: [
          {
            damage_type: {
              name: "Piercing",
              url: "/api/damage-types/piercing"
            },
            damage_dice: "1d6",
            damage_bonus: 0
          }
        ]
      }
    ],
    url: "/api/monsters/hyena",
    cr: "0"
  },
  {
    index: "jackal",
    name: "Jackal",
    size: "Small",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 12,
    hit_points: 3,
    hit_dice: "1d6",
    speed: { walk: "40 ft." },
    strength: 8,
    dexterity: 15,
    constitution: 11,
    intelligence: 3,
    wisdom: 12,
    charisma: 6,
    proficiencies: [
      {
        name: "Skill: Perception",
        url: "/api/proficiencies/skill-perception",
        value: 3
      }
    ],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { passive_perception: 13 },
    languages: "",
    challenge_rating: 0,
    special_abilities: [
      {
        name: "Keen Hearing and Smell",
        desc:
          "The jackal has advantage on Wisdom (Perception) checks that rely on hearing or smell."
      },
      {
        name: "Pack Tactics",
        desc:
          "The jackal has advantage on an attack roll against a creature if at least one of the jackal's allies is within 5 ft. of the creature and the ally isn't incapacitated."
      }
    ],
    actions: [
      {
        name: "Bite",
        desc:
          "Melee Weapon Attack: +1 to hit, reach 5 ft., one target. Hit: 1 (1d4 - 1) piercing damage.",
        attack_bonus: 1,
        damage: [
          {
            damage_type: {
              name: "Piercing",
              url: "/api/damage-types/piercing"
            },
            damage_dice: "1d4",
            damage_bonus: -1
          }
        ]
      }
    ],
    url: "/api/monsters/jackal",
    cr: "0"
  },
  {
    index: "killer-whale",
    name: "Killer Whale",
    size: "Huge",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 12,
    hit_points: 90,
    hit_dice: "12d12",
    speed: { swim: "60 ft." },
    strength: 19,
    dexterity: 10,
    constitution: 13,
    intelligence: 3,
    wisdom: 12,
    charisma: 7,
    proficiencies: [
      {
        name: "Skill: Perception",
        url: "/api/proficiencies/skill-perception",
        value: 3
      }
    ],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { blindsight: "120 ft.", passive_perception: 13 },
    languages: "",
    challenge_rating: 3,
    special_abilities: [
      {
        name: "Echolocation",
        desc: "The whale can't use its blindsight while deafened."
      },
      {
        name: "Hold Breath",
        desc: "The whale can hold its breath for 30 minutes"
      },
      {
        name: "Keen Hearing",
        desc:
          "The whale has advantage on Wisdom (Perception) checks that rely on hearing."
      }
    ],
    actions: [
      {
        name: "Bite",
        desc:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 21 (5d6 + 4) piercing damage.",
        attack_bonus: 6,
        damage: [
          {
            damage_type: {
              name: "Piercing",
              url: "/api/damage-types/piercing"
            },
            damage_dice: "5d6",
            damage_bonus: 4
          }
        ]
      }
    ],
    url: "/api/monsters/killer-whale",
    cr: "3"
  },
  {
    index: "lion",
    name: "Lion",
    size: "Large",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 12,
    hit_points: 26,
    hit_dice: "4d10",
    speed: { walk: "50 ft." },
    strength: 17,
    dexterity: 15,
    constitution: 13,
    intelligence: 3,
    wisdom: 12,
    charisma: 8,
    proficiencies: [
      {
        name: "Skill: Perception",
        url: "/api/proficiencies/skill-perception",
        value: 3
      },
      {
        name: "Skill: Stealth",
        url: "/api/proficiencies/skill-stealth",
        value: 6
      }
    ],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { passive_perception: 13 },
    languages: "",
    challenge_rating: 1,
    special_abilities: [
      {
        name: "Keen Smell",
        desc:
          "The lion has advantage on Wisdom (Perception) checks that rely on smell."
      },
      {
        name: "Pack Tactics",
        desc:
          "The lion has advantage on an attack roll against a creature if at least one of the lion's allies is within 5 ft. of the creature and the ally isn't incapacitated."
      },
      {
        name: "Pounce",
        desc:
          "If the lion moves at least 20 ft. straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the lion can make one bite attack against it as a bonus action."
      },
      {
        name: "Running Leap",
        desc:
          "With a 10-foot running start, the lion can long jump up to 25 ft.."
      }
    ],
    actions: [
      {
        name: "Bite",
        desc:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) piercing damage.",
        attack_bonus: 5,
        damage: [
          {
            damage_type: {
              name: "Piercing",
              url: "/api/damage-types/piercing"
            },
            damage_dice: "1d8",
            damage_bonus: 3
          }
        ]
      },
      {
        name: "Claw",
        desc:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 6 (1d6 + 3) slashing damage.",
        attack_bonus: 5,
        damage: [
          {
            damage_type: {
              name: "Slashing",
              url: "/api/damage-types/slashing"
            },
            damage_dice: "1d6",
            damage_bonus: 3
          }
        ]
      }
    ],
    url: "/api/monsters/lion",
    cr: "1"
  },
  {
    index: "lizard",
    name: "Lizard",
    size: "Tiny",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 10,
    hit_points: 2,
    hit_dice: "1d4",
    speed: { walk: "20 ft.", climb: "20 ft." },
    strength: 2,
    dexterity: 11,
    constitution: 10,
    intelligence: 1,
    wisdom: 8,
    charisma: 3,
    proficiencies: [],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { darkvision: "30 ft.", passive_perception: 9 },
    languages: "",
    challenge_rating: 0,
    actions: [
      {
        name: "Bite",
        desc:
          "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 piercing damage.",
        attack_bonus: 0,
        damage: [
          {
            damage_type: {
              name: "Piercing",
              url: "/api/damage-types/piercing"
            },
            damage_dice: "0d4",
            damage_bonus: 1
          }
        ]
      }
    ],
    url: "/api/monsters/lizard",
    cr: "0"
  },
  {
    index: "mammoth",
    name: "Mammoth",
    size: "Huge",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 13,
    hit_points: 126,
    hit_dice: "11d12",
    speed: { walk: "40 ft." },
    strength: 24,
    dexterity: 9,
    constitution: 21,
    intelligence: 3,
    wisdom: 11,
    charisma: 6,
    proficiencies: [],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { passive_perception: 10 },
    languages: "",
    challenge_rating: 6,
    special_abilities: [
      {
        name: "Trampling Charge",
        desc:
          "If the mammoth moves at least 20 ft. straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 18 Strength saving throw or be knocked prone. If the target is prone, the mammoth can make one stomp attack against it as a bonus action."
      }
    ],
    actions: [
      {
        name: "Gore",
        desc:
          "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 25 (4d8 + 7) piercing damage.",
        attack_bonus: 10,
        damage: [
          {
            damage_type: {
              name: "Piercing",
              url: "/api/damage-types/piercing"
            },
            damage_dice: "4d8",
            damage_bonus: 7
          }
        ]
      },
      {
        name: "Stomp",
        desc:
          "Melee Weapon Attack: +10 to hit, reach 5 ft., one prone creature. Hit: 29 (4d10 + 7) bludgeoning damage.",
        attack_bonus: 10,
        damage: [
          {
            damage_type: {
              name: "Bludgeoning",
              url: "/api/damage-types/bludgeoning"
            },
            damage_dice: "4d10",
            damage_bonus: 7
          }
        ]
      }
    ],
    url: "/api/monsters/mammoth",
    cr: "6"
  },
  {
    index: "mastiff",
    name: "Mastiff",
    size: "Medium",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 12,
    hit_points: 5,
    hit_dice: "1d8",
    speed: { walk: "40 ft." },
    strength: 13,
    dexterity: 14,
    constitution: 12,
    intelligence: 3,
    wisdom: 12,
    charisma: 7,
    proficiencies: [
      {
        name: "Skill: Perception",
        url: "/api/proficiencies/skill-perception",
        value: 3
      }
    ],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { passive_perception: 13 },
    languages: "",
    challenge_rating: 0.125,
    special_abilities: [
      {
        name: "Keen Hearing and Smell",
        desc:
          "The mastiff has advantage on Wisdom (Perception) checks that rely on hearing or smell."
      }
    ],
    actions: [
      {
        name: "Bite",
        desc:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 4 (1d6 + 1) piercing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone.",
        attack_bonus: 3,
        damage: [
          {
            damage_type: {
              name: "Piercing",
              url: "/api/damage-types/piercing"
            },
            damage_dice: "1d6",
            damage_bonus: 1
          }
        ]
      }
    ],
    url: "/api/monsters/mastiff",
    cr: "1/8"
  },
  {
    index: "mule",
    name: "Mule",
    size: "Medium",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 10,
    hit_points: 11,
    hit_dice: "2d8",
    speed: { walk: "40 ft." },
    strength: 14,
    dexterity: 10,
    constitution: 13,
    intelligence: 2,
    wisdom: 10,
    charisma: 5,
    proficiencies: [],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { passive_perception: 10 },
    languages: "",
    challenge_rating: 0.125,
    special_abilities: [
      {
        name: "Beast of Burden",
        desc:
          "The mule is considered to be a Large animal for the purpose of determining its carrying capacity."
      },
      {
        name: "Sure-Footed",
        desc:
          "The mule has advantage on Strength and Dexterity saving throws made against effects that would knock it prone."
      }
    ],
    actions: [
      {
        name: "Hooves",
        desc:
          "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) bludgeoning damage.",
        attack_bonus: 2,
        damage: [
          {
            damage_type: {
              name: "Bludgeoning",
              url: "/api/damage-types/bludgeoning"
            },
            damage_dice: "1d4",
            damage_bonus: 2
          }
        ]
      }
    ],
    url: "/api/monsters/mule",
    cr: "1/8"
  },
  {
    index: "octopus",
    name: "Octopus",
    size: "Small",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 12,
    hit_points: 3,
    hit_dice: "1d6",
    speed: { walk: "5 ft.", swim: "30 ft." },
    strength: 4,
    dexterity: 15,
    constitution: 11,
    intelligence: 3,
    wisdom: 10,
    charisma: 4,
    proficiencies: [
      {
        name: "Skill: Perception",
        url: "/api/proficiencies/skill-perception",
        value: 2
      },
      {
        name: "Skill: Stealth",
        url: "/api/proficiencies/skill-stealth",
        value: 4
      }
    ],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { darkvision: "30 ft.", passive_perception: 12 },
    languages: "",
    challenge_rating: 0,
    special_abilities: [
      {
        name: "Hold Breath",
        desc:
          "While out of water, the octopus can hold its breath for 30 minutes."
      },
      {
        name: "Underwater Camouflage",
        desc:
          "The octopus has advantage on Dexterity (Stealth) checks made while underwater."
      },
      {
        name: "Water Breathing",
        desc: "The octopus can breathe only underwater."
      }
    ],
    actions: [
      {
        name: "Tentacles",
        desc:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 1 bludgeoning damage, and the target is grappled (escape DC 10). Until this grapple ends, the octopus can't use its tentacles on another target.",
        attack_bonus: 4,
        damage: [
          {
            damage_type: {
              name: "Bludgeoning",
              url: "/api/damage-types/bludgeoning"
            },
            damage_dice: "0d4",
            damage_bonus: 1
          }
        ]
      },
      {
        name: "Ink Cloud",
        desc:
          "A 5-foot-radius cloud of ink extends all around the octopus if it is underwater. The area is heavily obscured for 1 minute, although a significant current can disperse the ink. After releasing the ink, the octopus can use the Dash action as a bonus action.",
        usage: { type: "recharge after rest", rest_types: ["short", "long"] },
        attack_bonus: 0
      }
    ],
    url: "/api/monsters/octopus",
    cr: "0"
  },
  {
    index: "owl",
    name: "Owl",
    size: "Tiny",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 11,
    hit_points: 1,
    hit_dice: "1d4",
    speed: { walk: "5 ft.", fly: "60 ft." },
    strength: 3,
    dexterity: 13,
    constitution: 8,
    intelligence: 2,
    wisdom: 12,
    charisma: 7,
    proficiencies: [
      {
        name: "Skill: Perception",
        url: "/api/proficiencies/skill-perception",
        value: 3
      },
      {
        name: "Skill: Stealth",
        url: "/api/proficiencies/skill-stealth",
        value: 3
      }
    ],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { darkvision: "120 ft.", passive_perception: 13 },
    languages: "",
    challenge_rating: 0,
    special_abilities: [
      {
        name: "Flyby",
        desc:
          "The owl doesn't provoke opportunity attacks when it flies out of an enemy's reach."
      },
      {
        name: "Keen Hearing and Sight",
        desc:
          "The owl has advantage on Wisdom (Perception) checks that rely on hearing or sight."
      }
    ],
    actions: [
      {
        name: "Talons",
        desc:
          "Melee Weapon Attack: +3 to hit, reach 5 ft., one target. Hit: 1 slashing damage.",
        attack_bonus: 3,
        damage: [
          {
            damage_type: {
              name: "Slashing",
              url: "/api/damage-types/slashing"
            },
            damage_dice: "0d4",
            damage_bonus: 1
          }
        ]
      }
    ],
    url: "/api/monsters/owl",
    cr: "0"
  },
  {
    index: "panther",
    name: "Panther",
    size: "Medium",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 12,
    hit_points: 13,
    hit_dice: "3d8",
    speed: { walk: "50 ft.", climb: "40 ft." },
    strength: 14,
    dexterity: 15,
    constitution: 10,
    intelligence: 3,
    wisdom: 14,
    charisma: 7,
    proficiencies: [
      {
        name: "Skill: Perception",
        url: "/api/proficiencies/skill-perception",
        value: 4
      },
      {
        name: "Skill: Stealth",
        url: "/api/proficiencies/skill-stealth",
        value: 6
      }
    ],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { passive_perception: 14 },
    languages: "",
    challenge_rating: 0.25,
    special_abilities: [
      {
        name: "Keen Smell",
        desc:
          "The panther has advantage on Wisdom (Perception) checks that rely on smell."
      },
      {
        name: "Pounce",
        desc:
          "If the panther moves at least 20 ft. straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 12 Strength saving throw or be knocked prone. If the target is prone, the panther can make one bite attack against it as a bonus action."
      }
    ],
    actions: [
      {
        name: "Bite",
        desc:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 5 (1d6 + 2) piercing damage.",
        attack_bonus: 4,
        damage: [
          {
            damage_type: {
              name: "Piercing",
              url: "/api/damage-types/piercing"
            },
            damage_dice: "1d6",
            damage_bonus: 2
          }
        ]
      },
      {
        name: "Claw",
        desc:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 4 (1d4 + 2) slashing damage.",
        attack_bonus: 4,
        damage: [
          {
            damage_type: {
              name: "Slashing",
              url: "/api/damage-types/slashing"
            },
            damage_dice: "1d4",
            damage_bonus: 2
          }
        ]
      }
    ],
    url: "/api/monsters/panther",
    cr: "1/4"
  },
  {
    index: "plesiosaurus",
    name: "Plesiosaurus",
    size: "Large",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 13,
    hit_points: 68,
    hit_dice: "8d10",
    speed: { walk: "20 ft.", swim: "40 ft." },
    strength: 18,
    dexterity: 15,
    constitution: 16,
    intelligence: 2,
    wisdom: 12,
    charisma: 5,
    proficiencies: [
      {
        name: "Skill: Perception",
        url: "/api/proficiencies/skill-perception",
        value: 3
      },
      {
        name: "Skill: Stealth",
        url: "/api/proficiencies/skill-stealth",
        value: 4
      }
    ],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { passive_perception: 13 },
    languages: "",
    challenge_rating: 2,
    special_abilities: [
      {
        name: "Hold Breath",
        desc: "The plesiosaurus can hold its breath for 1 hour."
      }
    ],
    actions: [
      {
        name: "Bite",
        desc:
          "Melee Weapon Attack: +6 to hit, reach 10 ft., one target. Hit: 14 (3d6 + 4) piercing damage.",
        attack_bonus: 6,
        damage: [
          {
            damage_type: {
              name: "Bludgeoning",
              url: "/api/damage-types/bludgeoning"
            },
            damage_dice: "3d6",
            damage_bonus: 4
          }
        ]
      }
    ],
    url: "/api/monsters/plesiosaurus",
    cr: "2"
  },
  {
    index: "poisonous-snake",
    name: "Poisonous Snake",
    size: "Tiny",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 13,
    hit_points: 2,
    hit_dice: "1d4",
    speed: { walk: "30 ft.", swim: "30 ft." },
    strength: 2,
    dexterity: 16,
    constitution: 11,
    intelligence: 1,
    wisdom: 10,
    charisma: 3,
    proficiencies: [],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { blindsight: "10 ft.", passive_perception: 10 },
    languages: "",
    challenge_rating: 0.125,
    actions: [
      {
        name: "Bite",
        desc:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 piercing damage, and the target must make a DC 10 Constitution saving throw, taking 5 (2d4) poison damage on a failed save, or half as much damage on a successful one.",
        attack_bonus: 5,
        damage: [
          {
            damage_type: {
              name: "Piercing",
              url: "/api/damage-types/piercing"
            },
            damage_dice: "0d4",
            damage_bonus: 1
          }
        ]
      }
    ],
    url: "/api/monsters/poisonous-snake",
    cr: "1/8"
  },
  {
    index: "polar-bear",
    name: "Polar Bear",
    size: "Large",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 12,
    hit_points: 42,
    hit_dice: "5d10",
    speed: { walk: "40 ft.", swim: "30 ft." },
    strength: 20,
    dexterity: 10,
    constitution: 16,
    intelligence: 2,
    wisdom: 13,
    charisma: 7,
    proficiencies: [
      {
        name: "Skill: Perception",
        url: "/api/proficiencies/skill-perception",
        value: 3
      }
    ],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { passive_perception: 13 },
    languages: "",
    challenge_rating: 2,
    special_abilities: [
      {
        name: "Keen Smell",
        desc:
          "The bear has advantage on Wisdom (Perception) checks that rely on smell."
      }
    ],
    actions: [
      {
        name: "Multiattack",
        desc:
          "The bear makes two attacks: one with its bite and one with its claws."
      },
      {
        name: "Bite",
        desc:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 9 (1d8 + 5) piercing damage.",
        attack_bonus: 7,
        damage: [
          {
            damage_type: {
              name: "Piercing",
              url: "/api/damage-types/piercing"
            },
            damage_dice: "1d8",
            damage_bonus: 5
          }
        ]
      },
      {
        name: "Claws",
        desc:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage.",
        attack_bonus: 7,
        damage: [
          {
            damage_type: {
              name: "Slashing",
              url: "/api/damage-types/slashing"
            },
            damage_dice: "2d6",
            damage_bonus: 5
          }
        ]
      }
    ],
    url: "/api/monsters/polar-bear",
    cr: "2"
  },
  {
    index: "pony",
    name: "Pony",
    size: "Medium",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 10,
    hit_points: 11,
    hit_dice: "2d8",
    speed: { walk: "40 ft." },
    strength: 15,
    dexterity: 10,
    constitution: 13,
    intelligence: 2,
    wisdom: 11,
    charisma: 7,
    proficiencies: [],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { passive_perception: 10 },
    languages: "",
    challenge_rating: 0.125,
    actions: [
      {
        name: "Hooves",
        desc:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) bludgeoning damage.",
        attack_bonus: 4,
        damage: [
          {
            damage_type: {
              name: "Bludgeoning",
              url: "/api/damage-types/bludgeoning"
            },
            damage_dice: "2d4",
            damage_bonus: 2
          }
        ]
      }
    ],
    url: "/api/monsters/pony",
    cr: "1/8"
  },
  {
    index: "quipper",
    name: "Quipper",
    size: "Tiny",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 13,
    hit_points: 1,
    hit_dice: "1d4",
    speed: { swim: "40 ft." },
    strength: 2,
    dexterity: 16,
    constitution: 9,
    intelligence: 1,
    wisdom: 7,
    charisma: 2,
    proficiencies: [],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { darkvision: "60 ft.", passive_perception: 8 },
    languages: "",
    challenge_rating: 0,
    special_abilities: [
      {
        name: "Blood Frenzy",
        desc:
          "The quipper has advantage on melee attack rolls against any creature that doesn't have all its hit points."
      },
      {
        name: "Water Breathing",
        desc: "The quipper can breathe only underwater."
      }
    ],
    actions: [
      {
        name: "Bite",
        desc:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 1 piercing damage.",
        attack_bonus: 5,
        damage: [
          {
            damage_type: {
              name: "Piercing",
              url: "/api/damage-types/piercing"
            },
            damage_dice: "0d4",
            damage_bonus: 1
          }
        ]
      }
    ],
    url: "/api/monsters/quipper",
    cr: "0"
  },
  {
    index: "rat",
    name: "Rat",
    size: "Tiny",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 10,
    hit_points: 1,
    hit_dice: "1d4",
    speed: { walk: "20 ft." },
    strength: 2,
    dexterity: 11,
    constitution: 9,
    intelligence: 2,
    wisdom: 10,
    charisma: 4,
    proficiencies: [],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { darkvision: "30 ft.", passive_perception: 10 },
    languages: "",
    challenge_rating: 0,
    special_abilities: [
      {
        name: "Keen Smell",
        desc:
          "The rat has advantage on Wisdom (Perception) checks that rely on smell."
      }
    ],
    actions: [
      {
        name: "Bite",
        desc:
          "Melee Weapon Attack: +0 to hit, reach 5 ft., one target. Hit: 1 piercing damage.",
        attack_bonus: 0,
        damage: [
          {
            damage_type: {
              name: "Piercing",
              url: "/api/damage-types/piercing"
            },
            damage_dice: "0d4",
            damage_bonus: 1
          }
        ]
      }
    ],
    url: "/api/monsters/rat",
    cr: "0"
  },
  {
    index: "raven",
    name: "Raven",
    size: "Tiny",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 12,
    hit_points: 1,
    hit_dice: "1d4",
    speed: { walk: "10 ft.", fly: "50 ft." },
    strength: 2,
    dexterity: 14,
    constitution: 8,
    intelligence: 2,
    wisdom: 12,
    charisma: 6,
    proficiencies: [
      {
        name: "Skill: Perception",
        url: "/api/proficiencies/skill-perception",
        value: 3
      }
    ],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { passive_perception: 13 },
    languages: "",
    challenge_rating: 0,
    special_abilities: [
      {
        name: "Mimicry",
        desc:
          "The raven can mimic simple sounds it has heard, such as a person whispering, a baby crying, or an animal chittering. A creature that hears the sounds can tell they are imitations with a successful DC 10 Wisdom (Insight) check."
      }
    ],
    actions: [
      {
        name: "Beak",
        desc:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 1 piercing damage.",
        attack_bonus: 4,
        damage: [
          {
            damage_type: {
              name: "Piercing",
              url: "/api/damage-types/piercing"
            },
            damage_dice: "0d4",
            damage_bonus: 1
          }
        ]
      }
    ],
    url: "/api/monsters/raven",
    cr: "0"
  },
  {
    index: "reef-shark",
    name: "Reef Shark",
    size: "Medium",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 12,
    hit_points: 22,
    hit_dice: "4d8",
    speed: { swim: "40 ft." },
    strength: 14,
    dexterity: 13,
    constitution: 13,
    intelligence: 1,
    wisdom: 10,
    charisma: 4,
    proficiencies: [
      {
        name: "Skill: Perception",
        url: "/api/proficiencies/skill-perception",
        value: 2
      }
    ],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { blindsight: "30 ft.", passive_perception: 12 },
    languages: "",
    challenge_rating: 0.5,
    special_abilities: [
      {
        name: "Pack Tactics",
        desc:
          "The shark has advantage on an attack roll against a creature if at least one of the shark's allies is within 5 ft. of the creature and the ally isn't incapacitated."
      },
      {
        name: "Water Breathing",
        desc: "The shark can breathe only underwater."
      }
    ],
    actions: [
      {
        name: "Bite",
        desc:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 6 (1d8 + 2) piercing damage.",
        attack_bonus: 4,
        damage: [
          {
            damage_type: {
              name: "Piercing",
              url: "/api/damage-types/piercing"
            },
            damage_dice: "1d8",
            damage_bonus: 2
          }
        ]
      }
    ],
    url: "/api/monsters/reef-shark",
    cr: "1/2"
  },
  {
    index: "rhinoceros",
    name: "Rhinoceros",
    size: "Large",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 11,
    hit_points: 45,
    hit_dice: "6d10",
    speed: { walk: "40 ft." },
    strength: 21,
    dexterity: 8,
    constitution: 15,
    intelligence: 2,
    wisdom: 12,
    charisma: 6,
    proficiencies: [],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { passive_perception: 11 },
    languages: "",
    challenge_rating: 2,
    special_abilities: [
      {
        name: "Charge",
        desc:
          "If the rhinoceros moves at least 20 ft. straight toward a target and then hits it with a gore attack on the same turn, the target takes an extra 9 (2d8) bludgeoning damage. If the target is a creature, it must succeed on a DC 15 Strength saving throw or be knocked prone."
      }
    ],
    actions: [
      {
        name: "Gore",
        desc:
          "Melee Weapon Attack: +7 to hit, reach 5 ft., one target. Hit: 14 (2d8 + 5) bludgeoning damage.",
        attack_bonus: 7,
        damage: [
          {
            damage_type: {
              name: "Bludgeoning",
              url: "/api/damage-types/bludgeoning"
            },
            damage_dice: "2d8",
            damage_bonus: 5
          }
        ]
      }
    ],
    url: "/api/monsters/rhinoceros",
    cr: "2"
  },
  {
    index: "riding-horse",
    name: "Riding Horse",
    size: "Large",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 10,
    hit_points: 13,
    hit_dice: "2d10",
    speed: { walk: "60 ft." },
    strength: 16,
    dexterity: 10,
    constitution: 12,
    intelligence: 2,
    wisdom: 11,
    charisma: 7,
    proficiencies: [],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { passive_perception: 10 },
    languages: "",
    challenge_rating: 0.25,
    actions: [
      {
        name: "Hooves",
        desc:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (2d4 + 3) bludgeoning damage.",
        attack_bonus: 5,
        damage: [
          {
            damage_type: {
              name: "Bludgeoning",
              url: "/api/damage-types/bludgeoning"
            },
            damage_dice: "2d4",
            damage_bonus: 3
          }
        ]
      }
    ],
    url: "/api/monsters/riding-horse",
    cr: "1/4"
  },
  {
    index: "saber-toothed-tiger",
    name: "Saber-Toothed Tiger",
    size: "Large",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 12,
    hit_points: 52,
    hit_dice: "7d10",
    speed: { walk: "40 ft." },
    strength: 18,
    dexterity: 14,
    constitution: 15,
    intelligence: 3,
    wisdom: 12,
    charisma: 8,
    proficiencies: [
      {
        name: "Skill: Perception",
        url: "/api/proficiencies/skill-perception",
        value: 3
      },
      {
        name: "Skill: Stealth",
        url: "/api/proficiencies/skill-stealth",
        value: 6
      }
    ],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { passive_perception: 13 },
    languages: "",
    challenge_rating: 2,
    special_abilities: [
      {
        name: "Keen Smell",
        desc:
          "The tiger has advantage on Wisdom (Perception) checks that rely on smell."
      },
      {
        name: "Pounce",
        desc:
          "If the tiger moves at least 20 ft. straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the tiger can make one bite attack against it as a bonus action."
      }
    ],
    actions: [
      {
        name: "Bite",
        desc:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 10 (1d10 + 5) piercing damage.",
        attack_bonus: 6,
        damage: [
          {
            damage_type: {
              name: "Piercing",
              url: "/api/damage-types/piercing"
            },
            damage_dice: "1d10",
            damage_bonus: 5
          }
        ]
      },
      {
        name: "Claw",
        desc:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 12 (2d6 + 5) slashing damage.",
        attack_bonus: 6,
        damage: [
          {
            damage_type: {
              name: "Slashing",
              url: "/api/damage-types/slashing"
            },
            damage_dice: "2d6",
            damage_bonus: 5
          }
        ]
      }
    ],
    url: "/api/monsters/saber-toothed-tiger",
    cr: "2"
  },
  {
    index: "scorpion",
    name: "Scorpion",
    size: "Tiny",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 11,
    hit_points: 1,
    hit_dice: "1d4",
    speed: { walk: "10 ft." },
    strength: 2,
    dexterity: 11,
    constitution: 8,
    intelligence: 1,
    wisdom: 8,
    charisma: 2,
    proficiencies: [],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { blindsight: "10 ft.", passive_perception: 9 },
    languages: "",
    challenge_rating: 0,
    actions: [
      {
        name: "Sting",
        desc:
          "Melee Weapon Attack: +2 to hit, reach 5 ft., one creature. Hit: 1 piercing damage, and the target must make a DC 9 Constitution saving throw, taking 4 (1d8) poison damage on a failed save, or half as much damage on a successful one.",
        attack_bonus: 2,
        damage: [
          {
            damage_type: {
              name: "Bludgeoning",
              url: "/api/damage-types/bludgeoning"
            },
            damage_dice: "0d4",
            damage_bonus: 1
          }
        ]
      }
    ],
    url: "/api/monsters/scorpion",
    cr: "0"
  },
  {
    index: "sea-horse",
    name: "Sea Horse",
    size: "Tiny",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 11,
    hit_points: 1,
    hit_dice: "1d4",
    speed: { swim: "20 ft." },
    strength: 1,
    dexterity: 12,
    constitution: 8,
    intelligence: 1,
    wisdom: 10,
    charisma: 2,
    proficiencies: [],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { passive_perception: 10 },
    languages: "",
    challenge_rating: 0,
    special_abilities: [
      {
        name: "Water Breathing",
        desc: "The sea horse can breathe only underwater."
      }
    ],
    url: "/api/monsters/sea-horse",
    cr: "0"
  },
  {
    index: "spider",
    name: "Spider",
    size: "Tiny",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 12,
    hit_points: 1,
    hit_dice: "1d4",
    speed: { walk: "20 ft.", climb: "20 ft." },
    strength: 2,
    dexterity: 14,
    constitution: 8,
    intelligence: 1,
    wisdom: 10,
    charisma: 2,
    proficiencies: [
      {
        name: "Skill: Stealth",
        url: "/api/proficiencies/skill-stealth",
        value: 4
      }
    ],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { darkvision: "30 ft.", passive_perception: 12 },
    languages: "",
    challenge_rating: 0,
    special_abilities: [
      {
        name: "Spider Climb",
        desc:
          "The spider can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check."
      },
      {
        name: "Web Sense",
        desc:
          "While in contact with a web, the spider knows the exact location of any other creature in contact with the same web."
      },
      {
        name: "Web Walker",
        desc: "The spider ignores movement restrictions caused by webbing."
      }
    ],
    actions: [
      {
        name: "Bite",
        desc:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one creature. Hit: 1 piercing damage, and the target must succeed on a DC 9 Constitution saving throw or take 2 (1d4) poison damage.",
        attack_bonus: 4,
        damage: [
          {
            damage_type: {
              name: "Piercing",
              url: "/api/damage-types/piercing"
            },
            damage_dice: "0d4",
            damage_bonus: 1
          }
        ]
      }
    ],
    url: "/api/monsters/spider",
    cr: "0"
  },
  {
    index: "stirge",
    name: "Stirge",
    size: "Tiny",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 14,
    hit_points: 2,
    hit_dice: "1d4",
    speed: { walk: "10 ft.", fly: "40 ft." },
    strength: 4,
    dexterity: 16,
    constitution: 11,
    intelligence: 2,
    wisdom: 8,
    charisma: 6,
    proficiencies: [],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { darkvision: "60 ft.", passive_perception: 9 },
    languages: "",
    challenge_rating: 0.125,
    actions: [
      {
        name: "Blood Drain",
        desc:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 5 (1d4 + 3) piercing damage, and the stirge attaches to the target. While attached, the stirge doesn't attack. Instead, at the start of each of the stirge's turns, the target loses 5 (1d4 + 3) hit points due to blood loss.\nThe stirge can detach itself by spending 5 feet of its movement. It does so after it drains 10 hit points of blood from the target or the target dies. A creature, including the target, can use its action to detach the stirge.",
        attack_bonus: 5,
        damage: [
          {
            damage_type: {
              name: "Piercing",
              url: "/api/damage-types/piercing"
            },
            damage_dice: "1d4",
            damage_bonus: 3
          }
        ]
      }
    ],
    url: "/api/monsters/stirge",
    cr: "1/8"
  },
  {
    index: "tiger",
    name: "Tiger",
    size: "Large",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 12,
    hit_points: 37,
    hit_dice: "5d10",
    speed: { walk: "40 ft." },
    strength: 17,
    dexterity: 15,
    constitution: 14,
    intelligence: 3,
    wisdom: 12,
    charisma: 8,
    proficiencies: [
      {
        name: "Skill: Perception",
        url: "/api/proficiencies/skill-perception",
        value: 3
      },
      {
        name: "Skill: Stealth",
        url: "/api/proficiencies/skill-stealth",
        value: 6
      }
    ],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { darkvision: "60 ft.", passive_perception: 13 },
    languages: "",
    challenge_rating: 1,
    special_abilities: [
      {
        name: "Keen Smell",
        desc:
          "The tiger has advantage on Wisdom (Perception) checks that rely on smell."
      },
      {
        name: "Pounce",
        desc:
          "If the tiger moves at least 20 ft. straight toward a creature and then hits it with a claw attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the tiger can make one bite attack against it as a bonus action."
      }
    ],
    actions: [
      {
        name: "Bite",
        desc:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 8 (1d10 + 3) piercing damage.",
        attack_bonus: 5,
        damage: [
          {
            damage_type: {
              name: "Piercing",
              url: "/api/damage-types/piercing"
            },
            damage_dice: "1d10",
            damage_bonus: 3
          }
        ]
      },
      {
        name: "Claw",
        desc:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one target. Hit: 7 (1d8 + 3) slashing damage.",
        attack_bonus: 5,
        damage: [
          {
            damage_type: {
              name: "Slashing",
              url: "/api/damage-types/slashing"
            },
            damage_dice: "1d8",
            damage_bonus: 3
          }
        ]
      }
    ],
    url: "/api/monsters/tiger",
    cr: "1"
  },
  {
    index: "triceratops",
    name: "Triceratops",
    size: "Huge",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 13,
    hit_points: 95,
    hit_dice: "10d12",
    speed: { walk: "50 ft." },
    strength: 22,
    dexterity: 9,
    constitution: 17,
    intelligence: 2,
    wisdom: 11,
    charisma: 5,
    proficiencies: [],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { passive_perception: 10 },
    languages: "",
    challenge_rating: 5,
    special_abilities: [
      {
        name: "Trampling Charge",
        desc:
          "If the triceratops moves at least 20 ft. straight toward a creature and then hits it with a gore attack on the same turn, that target must succeed on a DC 13 Strength saving throw or be knocked prone. If the target is prone, the triceratops can make one stomp attack against it as a bonus action."
      }
    ],
    actions: [
      {
        name: "Gore",
        desc:
          "Melee Weapon Attack: +9 to hit, reach 5 ft., one target. Hit: 24 (4d8 + 6) piercing damage.",
        attack_bonus: 9,
        damage: [
          {
            damage_type: {
              name: "Piercing",
              url: "/api/damage-types/piercing"
            },
            damage_dice: "4d8",
            damage_bonus: 6
          }
        ]
      },
      {
        name: "Stomp",
        desc:
          "Melee Weapon Attack: +9 to hit, reach 5 ft., one prone creature. Hit: 22 (3d10 + 6) bludgeoning damage",
        attack_bonus: 9,
        damage: [
          {
            damage_type: {
              name: "Bludgeoning",
              url: "/api/damage-types/bludgeoning"
            },
            damage_dice: "3d10",
            damage_bonus: 6
          }
        ]
      }
    ],
    url: "/api/monsters/triceratops",
    cr: "5"
  },
  {
    index: "tyrannosaurus-rex",
    name: "Tyrannosaurus Rex",
    size: "Huge",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 13,
    hit_points: 136,
    hit_dice: "13d12",
    speed: { walk: "50 ft." },
    strength: 25,
    dexterity: 10,
    constitution: 19,
    intelligence: 2,
    wisdom: 12,
    charisma: 9,
    proficiencies: [
      {
        name: "Skill: Perception",
        url: "/api/proficiencies/skill-perception",
        value: 4
      }
    ],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { passive_perception: 14 },
    languages: "",
    challenge_rating: 8,
    actions: [
      {
        name: "Multiattack",
        desc:
          "The tyrannosaurus makes two attacks: one with its bite and one with its tail. It can't make both attacks against the same target."
      },
      {
        name: "Bite",
        desc:
          "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 33 (4d12 + 7) piercing damage. If the target is a Medium or smaller creature, it is grappled (escape DC 17). Until this grapple ends, the target is restrained, and the tyrannosaurus can't bite another target.",
        attack_bonus: 10,
        damage: [
          {
            damage_type: {
              name: "Piercing",
              url: "/api/damage-types/piercing"
            },
            damage_dice: "4d12",
            damage_bonus: 7
          }
        ]
      },
      {
        name: "Tail",
        desc:
          "Melee Weapon Attack: +10 to hit, reach 10 ft., one target. Hit: 20 (3d8 + 7) bludgeoning damage.",
        attack_bonus: 10,
        damage: [
          {
            damage_type: {
              name: "Bludgeoning",
              url: "/api/damage-types/bludgeoning"
            },
            damage_dice: "3d8",
            damage_bonus: 7
          }
        ]
      }
    ],
    url: "/api/monsters/tyrannosaurus-rex",
    cr: "8"
  },
  {
    index: "vulture",
    name: "Vulture",
    size: "Medium",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 10,
    hit_points: 5,
    hit_dice: "1d8",
    speed: { walk: "10 ft.", fly: "50 ft." },
    strength: 7,
    dexterity: 10,
    constitution: 13,
    intelligence: 2,
    wisdom: 12,
    charisma: 4,
    proficiencies: [
      {
        name: "Skill: Perception",
        url: "/api/proficiencies/skill-perception",
        value: 3
      }
    ],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { passive_perception: 13 },
    languages: "",
    challenge_rating: 0,
    special_abilities: [
      {
        name: "Keen Sight and Smell",
        desc:
          "The vulture has advantage on Wisdom (Perception) checks that rely on sight or smell."
      },
      {
        name: "Pack Tactics",
        desc:
          "The vulture has advantage on an attack roll against a creature if at least one of the vulture's allies is within 5 ft. of the creature and the ally isn't incapacitated."
      }
    ],
    actions: [
      {
        name: "Beak",
        desc:
          "Melee Weapon Attack: +2 to hit, reach 5 ft., one target. Hit: 2 (1d4) piercing damage.",
        attack_bonus: 2,
        damage: [
          {
            damage_type: {
              name: "Piercing",
              url: "/api/damage-types/piercing"
            },
            damage_dice: "1d4",
            damage_bonus: 0
          }
        ]
      }
    ],
    url: "/api/monsters/vulture",
    cr: "0"
  },
  {
    index: "warhorse",
    name: "Warhorse",
    size: "Large",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 11,
    hit_points: 19,
    hit_dice: "3d10",
    speed: { walk: "60 ft." },
    strength: 18,
    dexterity: 12,
    constitution: 13,
    intelligence: 2,
    wisdom: 12,
    charisma: 7,
    proficiencies: [],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { passive_perception: 11 },
    languages: "",
    challenge_rating: 0.5,
    special_abilities: [
      {
        name: "Trampling Charge",
        desc:
          "If the horse moves at least 20 ft. straight toward a creature and then hits it with a hooves attack on the same turn, that target must succeed on a DC 14 Strength saving throw or be knocked prone. If the target is prone, the horse can make another attack with its hooves against it as a bonus action."
      }
    ],
    actions: [
      {
        name: "Hooves",
        desc:
          "Melee Weapon Attack: +6 to hit, reach 5 ft., one target. Hit: 11 (2d6 + 4) bludgeoning damage.",
        attack_bonus: 6,
        damage: [
          {
            damage_type: {
              name: "Bludgeoning",
              url: "/api/damage-types/bludgeoning"
            },
            damage_dice: "2d6",
            damage_bonus: 4
          }
        ]
      }
    ],
    url: "/api/monsters/warhorse",
    cr: "1/2"
  },
  {
    index: "weasel",
    name: "Weasel",
    size: "Tiny",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 13,
    hit_points: 1,
    hit_dice: "1d4",
    speed: { walk: "30 ft." },
    strength: 3,
    dexterity: 16,
    constitution: 8,
    intelligence: 2,
    wisdom: 12,
    charisma: 3,
    proficiencies: [
      {
        name: "Skill: Perception",
        url: "/api/proficiencies/skill-perception",
        value: 3
      },
      {
        name: "Skill: Stealth",
        url: "/api/proficiencies/skill-stealth",
        value: 5
      }
    ],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { passive_perception: 13 },
    languages: "",
    challenge_rating: 0,
    special_abilities: [
      {
        name: "Keen Hearing and Smell",
        desc:
          "The weasel has advantage on Wisdom (Perception) checks that rely on hearing or smell."
      }
    ],
    actions: [
      {
        name: "Bite",
        desc:
          "Melee Weapon Attack: +5 to hit, reach 5 ft., one creature. Hit: 1 piercing damage.",
        attack_bonus: 5,
        damage: [
          {
            damage_type: {
              name: "Piercing",
              url: "/api/damage-types/piercing"
            },
            damage_dice: "0d4",
            damage_bonus: 1
          }
        ]
      }
    ],
    url: "/api/monsters/weasel",
    cr: "0"
  },
  {
    index: "wolf",
    name: "Wolf",
    size: "Medium",
    type: "beast",
    subtype: null,
    alignment: "unaligned",
    armor_class: 13,
    hit_points: 11,
    hit_dice: "2d8",
    speed: { walk: "40 ft." },
    strength: 12,
    dexterity: 15,
    constitution: 12,
    intelligence: 3,
    wisdom: 12,
    charisma: 6,
    proficiencies: [
      {
        name: "Skill: Perception",
        url: "/api/proficiencies/skill-perception",
        value: 3
      },
      {
        name: "Skill: Stealth",
        url: "/api/proficiencies/skill-stealth",
        value: 4
      }
    ],
    damage_vulnerabilities: [],
    damage_resistances: [],
    damage_immunities: [],
    condition_immunities: [],
    senses: { passive_perception: 13 },
    languages: "",
    challenge_rating: 0.25,
    special_abilities: [
      {
        name: "Keen Hearing and Smell",
        desc:
          "The wolf has advantage on Wisdom (Perception) checks that rely on hearing or smell."
      },
      {
        name: "Pack Tactics",
        desc:
          "The wolf has advantage on an attack roll against a creature if at least one of the wolf's allies is within 5 ft. of the creature and the ally isn't incapacitated."
      }
    ],
    actions: [
      {
        name: "Bite",
        desc:
          "Melee Weapon Attack: +4 to hit, reach 5 ft., one target. Hit: 7 (2d4 + 2) piercing damage. If the target is a creature, it must succeed on a DC 11 Strength saving throw or be knocked prone.",
        attack_bonus: 4,
        damage: [
          {
            damage_type: {
              name: "Piercing",
              url: "/api/damage-types/piercing"
            },
            damage_dice: "2d4",
            damage_bonus: 2
          }
        ]
      }
    ],
    url: "/api/monsters/wolf",
    cr: "1/4"
  }
];
