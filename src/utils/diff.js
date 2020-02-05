const full = [
  "Acid Splash",
  "Blade Ward",
  "Chill Touch",
  "Dancing Lights",
  "Druidcraft",
  "Eldritch Blast",
  "Fire Bolt",
  "Friends",
  "Guidance",
  "Light",
  "Mage Hand",
  "Mending",
  "Message",
  "Minor Illusion",
  "Poison Spray",
  "Prestidigitation",
  "Produce Flame",
  "Ray of Frost",
  "Resistance",
  "Sacred Flame",
  "Shillelagh",
  "Shocking Grasp",
  "Spare the Dying",
  "Thaumaturgy",
  "Thorn Whip",
  "True Strike",
  "Vicious Mockery",
  "Alarm",
  "Animal Friendship",
  "Armor of Agathys",
  "Arms of Hadar",
  "Bane",
  "Bless",
  "Burning Hands",
  "Charm Person",
  "Chromatic Orb",
  "Color Spray",
  "Command",
  "Compelled Duel",
  "Comprehend Languages",
  "Create or Destroy Water",
  "Cure Wounds",
  "Detect Evil and Good",
  "Detect Magic",
  "Detect Poison and Disease",
  "Disguise Self",
  "Dissonant Whispers",
  "Divine Favor",
  "Ensnaring Strike",
  "Entangle",
  "Expeditious Retreat",
  "Faerie Fire",
  "False Life",
  "Feather Fall",
  "Find Familiar",
  "Fog Cloud",
  "Goodberry",
  "Grease",
  "Guiding Bolt",
  "Hail of Thorns",
  "Healing Word",
  "Hellish Rebuke",
  "Heroism",
  "Hex",
  "Hunter's Mark",
  "Identify",
  "Illusory Script",
  "Inflict Wounds",
  "Jump",
  "Longstrider",
  "Mage Armor",
  "Magic Missile",
  "Protection from Evil and Good",
  "Purify Food and Drink",
  "Ray of Sickness",
  "Sanctuary",
  "Searing Smite",
  "Shield",
  "Shield of Faith",
  "Silent Image",
  "Sleep",
  "Speak with Animals",
  "Tasha's Hideous Laughter",
  "Tenser's Floating Disk",
  "Thunderous Smite",
  "Thunderwave",
  "Unseen Servant",
  "Witch Bolt",
  "Wrathful Smite",
  "Aid",
  "Alter Self",
  "Animal Messenger",
  "Arcane Lock",
  "Augury",
  "Barkskin",
  "Beast Sense",
  "Blindness/Deafness",
  "Blur",
  "Branding Smite",
  "Calm Emotions",
  "Cloud of Daggers",
  "Continual Flame",
  "Cordon of Arrows",
  "Crown of Madness",
  "Darkness",
  "Darkvision",
  "Detect Thoughts",
  "Enhance Ability",
  "Enlarge/Reduce",
  "Enthrall",
  "Find Steed",
  "Find Traps",
  "Flame Blade",
  "Flaming Sphere",
  "Gentle Repose",
  "Gust of Wind",
  "Heat Metal",
  "Hold Person",
  "Invisibility",
  "Knock",
  "Lesser Restoration",
  "Levitate",
  "Locate Animals or Plants",
  "Locate Object",
  "Magic Mouth",
  "Magic Weapon",
  "Melf's Acid Arrow",
  "Mirror Image",
  "Misty Step",
  "Moonbeam",
  "Nystul's Magic Aura",
  "Pass without Trace",
  "Phantasmal Force",
  "Prayer of Healing",
  "Protection from Poison",
  "Ray of Enfeeblement",
  "Rope Trick",
  "Scorching Ray",
  "See Invisibility",
  "Shatter",
  "Silence",
  "Spider Climb",
  "Spike Growth",
  "Spiritual Weapon",
  "Suggestion",
  "Warding Bond",
  "Web",
  "Zone of Truth",
  "Animate Dead",
  "Aura of Vitality",
  "Beacon of Hope",
  "Bestow Curse",
  "Blinding Smite",
  "Blink",
  "Call Lightning",
  "Clairvoyance",
  "Conjure Animals",
  "Conjure Barrage",
  "Counterspell",
  "Create Food and Water",
  "Crusader's Mantle",
  "Daylight",
  "Dispel Magic",
  "Elemental Weapon",
  "Fear",
  "Feign Death",
  "Fireball",
  "Fly",
  "Gaseous Form",
  "Glyph of Warding",
  "Haste",
  "Hunger of Hadar",
  "Hypnotic Pattern",
  "Leomund's Tiny Hut",
  "Lightning Arrow",
  "Lightning Bolt",
  "Magic Circle",
  "Major Image",
  "Mass Healing Word",
  "Meld into Stone",
  "Nondetection",
  "Phantom Steed",
  "Plant Growth",
  "Protection from Energy",
  "Remove Curse",
  "Revivify",
  "Sending",
  "Sleet Storm",
  "Slow",
  "Speak with Dead",
  "Speak with Plants",
  "Spirit Guardian",
  "Stinking Cloud",
  "Tongues",
  "Vampiric Touch",
  "Water Breathing",
  "Water Walk",
  "Wind Wall",
  "Arcane Eye",
  "Aura of Life",
  "Aura of Purity",
  "Banishment",
  "Blight",
  "Compulsion",
  "Confusion",
  "Conjure Minor Elementals",
  "Conjure Woodland Beings",
  "Control Water",
  "Death Ward",
  "Dimension Door",
  "Divination",
  "Dominate Beast",
  "Evard's Black Tentacles",
  "Fabricate",
  "Fire Shield",
  "Freedom of Movement",
  "Giant Insect",
  "Grasping Vine",
  "Greater Invisibility",
  "Guardian of Faith",
  "Hallucinatory Terrain",
  "Ice Storm",
  "Leomund's Secret Chest",
  "Locate Creature",
  "Mordenkainen's Faithful Hound",
  "Mordenkainen's Private Sanctum",
  "Otiluke's Resilient Sphere",
  "Phantasmal Killer",
  "Polymorph",
  "Staggering Smite",
  "Stone Shape",
  "Stoneskin",
  "Wall of Fire",
  "Animate Objects",
  "Antilife Shell",
  "Awaken",
  "Banishing Smite",
  "Bigby's Hand",
  "Circle of Power",
  "Cloudkill",
  "Commune",
  "Commune with Nature",
  "Cone of Cold",
  "Conjure Elemental",
  "Conjure Volley",
  "Contact Other Plane",
  "Contagion",
  "Creation",
  "Destructive Wave",
  "Dispel Evil and Good",
  "Dominate Person",
  "Dream",
  "Flame Strike",
  "Geas",
  "Greater Restoration",
  "Hallow",
  "Hold Monster",
  "Insect Plague",
  "Legend Lore",
  "Mass Cure Wounds",
  "Mislead",
  "Modify Memory",
  "Passwall",
  "Planar Binding",
  "Raise Dead",
  "Rary's Telepathic Bond",
  "Reincarnate",
  "Scrying",
  "Seeming",
  "Swift Quiver",
  "Telekinesis",
  "Teleportation Circle",
  "Tree Stride",
  "Wall of Force",
  "Wall of Stone",
  "Arcane Gate",
  "Blade Barrier",
  "Chain Lightning",
  "Circle of Death",
  "Conjure Fey",
  "Contingency",
  "Create Undead",
  "Disintegrate",
  "Drawmij's Instant Summons",
  "Eyebite",
  "Find the Path",
  "Flesh to Stone",
  "Forbiddance",
  "Globe of Invulnerability",
  "Guards and Wards",
  "Harm",
  "Heal",
  "Heroes' Feast",
  "Magic Jar",
  "Mass Suggestion",
  "Move Earth",
  "Otiluke's Freezing Sphere",
  "Otto's Irresistable Dance",
  "Planar Ally",
  "Programmed Illusion",
  "Sunbeam",
  "Transport via Plants",
  "True Seeing",
  "Wall of Ice",
  "Wall of Thorns",
  "Wind Walk",
  "Word of Recall",
  "Conjure Celestial",
  "Delayed Blast Fireball",
  "Divine Word",
  "Etherealness",
  "Finger of Death",
  "Fire Storm",
  "Forcecage",
  "Mirage Arcane",
  "Mordenkainen's Magnificent Mansion",
  "Mordenkainen's Sword",
  "Plane Shift",
  "Prismatic Spray",
  "Project Image",
  "Regenerate",
  "Resurrection",
  "Reverse Gravity",
  "Sequester",
  "Simulacrum",
  "Symbol",
  "Teleport",
  "Animal Shapes",
  "Antimagic Field",
  "Antipathy/Sympathy",
  "Clone",
  "Control Weather",
  "Demiplane",
  "Dominate Monster",
  "Earthquake",
  "Feeblemind",
  "Glibness",
  "Holy Aura",
  "Incendiary Cloud",
  "Maze",
  "Mind Blank",
  "Power Word Stun",
  "Sunburst",
  "Telepathy",
  "Tsunami",
  "Astral Projection",
  "Foresight",
  "Gate",
  "Imprisonment",
  "Mass Heal",
  "Meteor Swarm",
  "Power Word Heal",
  "Power Word Kill",
  "Prismatic Wall",
  "Shapechange",
  "Storm of Vengeance",
  "Time Stop",
  "True Polymorph",
  "True Resurrection",
  "Weird",
  "Wish"
];

const diff = [
  {
    index: "",
    name: "",
    desc: [""],
    higher_level: [""],
    page: "",
    range: "",
    components: ["V", "S", "M"],
    material: "",
    ritual: false,
    duration: "",
    concentration: false,
    casting_time: "",
    level: 2,
    school: {
      name: "",
      url: ""
    },
    classes: [
      {
        name: "",
        url: ""
      }
    ],
    subclasses: [],
    url: ""
  },
  {
    index: "blade-ward",
    name: "Blade Ward",
    desc: [
      "You extend your hand and trace a sigil of warding in the air. Until the end of your next turn, you have resistance against bludgeoning, piercing, and slashing damage dealt by weapon attacks. "
    ],
    higher_level: [""],
    page: "218",
    range: "self",
    components: ["V", "S"],
    material: "",
    ritual: false,
    duration: "1 round",
    concentration: false,
    casting_time: "1 action",
    level: 0,
    school: {
      name: "Abjuration",
      url: "/api/magic-schools/abjuration"
    },
    classes: [
      {
        name: "Bard",
        url: "/api/classes/bard"
      },
      {
        name: "Sorcerer",
        url: "/api/classes/sorcerer"
      },
      {
        name: "Wizard",
        url: "/api/classes/wizard"
      },
      {
        name: "Warlock",
        url: "/api/classes/warlock"
      }
    ],
    subclasses: [],
    url: ""
  },
  {
    index: "friends",
    name: "Friends",
    desc: [
      "For the duration, you have advantage on all Charisma checks directed at one creature of your choice that isn’t hostile toward you. When the spell ends, the creature realizes that you used magic to influence its mood and becomes hostile toward you. A creature prone to violence might attack you. Another creature might seek retribution in other ways (at the DM’s discretion), depending on the nature of your interaction with it. "
    ],
    higher_level: [""],
    page: "244",
    range: "self",
    components: ["S", "M"],
    material:
      "a small amount of makeup applied to the face as this spell is cast",
    ritual: false,
    duration: "Up to 1 minute",
    concentration: true,
    casting_time: "1 action",
    level: 0,
    school: {
      name: "Enchantment",
      url: "/api/magic-schools/enchantment"
    },
    classes: [
      {
        name: "Bard",
        url: "/api/classes/bard"
      },
      {
        name: "Sorcerer",
        url: "/api/classes/sorcerer"
      },
      {
        name: "Wizard",
        url: "/api/classes/wizard"
      },
      {
        name: "Warlock",
        url: "/api/classes/warlock"
      }
    ],
    subclasses: [],
    url: ""
  },
  {
    index: "thorn-whip",
    name: "Thorn Whip",
    desc: [
      "You create a long, vine-like whip covered in thorns that lashes out at your command toward a creature in range. Make a melee spell attack against the target. If the attack hits, the creature takes 1d6 piercing damage, and if the creature is Large or smaller, you pull the creature up to 10 feet closer to you. "
    ],
    higher_level: [
      "This spell’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6). "
    ],
    page: "282",
    range: "30 feet",
    components: ["V", "S", "M"],
    material: "the stem of a plant with thorns",
    ritual: false,
    duration: "instantaneous",
    concentration: false,
    casting_time: "1 action",
    level: 0,
    school: {
      name: "Transmutation",
      url: "/api/magic-schools/transmutation"
    },
    classes: [
      {
        name: "Druid",
        url: "/api/classes/druid"
      }
    ],
    subclasses: [],
    url: ""
  },
  {
    index: "armor-of-agathys",
    name: "Armor of Agathys",
    desc: [
      "A protective magical force surrounds you, manifesting as a spectral frost that covers you and your gear. ",
      "You gain 5 temporary hit points for the duration. If a creature hits you with a melee attack while you have these hit points, the creature takes 5 cold damage.  "
    ],
    higher_level: [
      "When you cast this spell using a spell slot of 2nd level or higher, both the temporary hit points and the cold damage increase by 5 for each slot "
    ],
    page: "215",
    range: "self",
    components: ["V", "S", "M"],
    material: "a cup of water",
    ritual: false,
    duration: "1 hour",
    concentration: false,
    casting_time: "1 action",
    level: 1,
    school: {
      name: "Abjuration",
      url: "/api/magic-schools/abjuration"
    },
    classes: [
      {
        name: "Warlock",
        url: "/api/classes/warlock"
      }
    ],
    subclasses: [],
    url: ""
  },
  {
    index: "arms-of-hadar",
    name: "Arms of Hadar",
    desc: [
      "You invoke the power of Hadar, the Dark Hunger.",
      "Tendrils of dark energy erupt from you and batter all creatures within 10 feet of you. Each creature in that area must make a Strength saving throw. On a failed save, a target takes 2d6 necrotic damage and can’t take reactions until its next turn. On a successful save, the creature takes half damage, but suffers no other effect.  "
    ],
    higher_level: [
      "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st. "
    ],
    page: "215",
    range: "self",
    components: ["V", "S"],
    material: "",
    ritual: false,
    duration: "instantaneous",
    concentration: false,
    casting_time: "1 action",
    level: 1,
    school: {
      name: "Conjuration",
      url: "/api/magic-schools/conjuration"
    },
    classes: [
      {
        name: "Warlock",
        url: "/api/classes/warlock"
      }
    ],
    subclasses: [],
    url: ""
  },
  {
    index: "chromatic-orb",
    name: "Chromatic Orb",
    desc: [
      "You hurl a 4-inch-diameter sphere of energy at a creature that you can see within range. You choose acid, cold, fire, lightning, poison, or thunder for the type of orb you create, and then make a ranged spell attack against the target. If the attack hits, the creature takes 3d8 damage of the type you chose.  "
    ],
    higher_level: [
      "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st. "
    ],
    page: "221",
    range: "90 feet",
    components: ["V", "S", "M"],
    material: "a diamond worth at least 50 gp",
    ritual: false,
    duration: "",
    concentration: false,
    casting_time: "1 action",
    level: 1,
    school: {
      name: "Evocation",
      url: "/api/magic-schools/evocation"
    },
    classes: [
      {
        name: "Sorcerer",
        url: "/api/classes/sorcerer"
      },
      {
        name: "Wizard",
        url: "/api/classes/wizard"
      }
    ],
    subclasses: [],
    url: ""
  },
  {
    index: "compelled-duel",
    name: "Compelled Duel",
    desc: [
      "You attempt to compel a creature into a duel.",
      "One creature that you can see within range must make a Wisdom saving throw. On a failed save, the creature is drawn to you, compelled by your divine demand. For the duration, it has disadvantage on attack rolls against creatures other than you, and must make a Wisdom saving throw each time it attempts to move to a space that is more than 30 feet away from you; if it succeeds on this saving throw, this spell doesn’t restrict the target’s movement for that turn. ",
      "The spell ends if you attack any other creature, if you cast a spell that targets a hostile creature other than the target, if a creature friendly to you damages the target or casts a harmful spell on it, or if you end your turn more than 30 feet away from the target. "
    ],
    higher_level: [""],
    page: "224",
    range: "30 feet",
    components: ["V"],
    material: "",
    ritual: false,
    duration: "up to 1 minute",
    concentration: true,
    casting_time: "1 bonus action",
    level: 1,
    school: {
      name: "Enchantment",
      url: "/api/magic-schools/enchantment"
    },
    classes: [
      {
        name: "Paladin",
        url: "/api/classes/paladin"
      }
    ],
    subclasses: [],
    url: ""
  },
  "Compelled Duel",
  "Dissonant Whispers",
  "Ensnaring Strike",
  "Hail of Thorns",
  "Hex",
  "Ray of Sickness",
  "Searing Smite",
  "Thunderous Smite",
  "Witch Bolt",
  "Wrathful Smite",
  "Beast Sense",
  "Cloud of Daggers",
  "Cordon of Arrows",
  "Crown of Madness",
  "Melf's Acid Arrow",
  "Nystul's Magic Aura",
  "Phantasmal Force",
  "Aura of Vitality",
  "Blinding Smite",
  "Conjure Barrage",
  "Crusader's Mantle",
  "Elemental Weapon",
  "Feign Death",
  "Hunger of Hadar",
  "Lightning Arrow",
  "Spirit Guardian",
  "Aura of Life",
  "Aura of Purity",
  "Evard's Black Tentacles",
  "Grasping Vine",
  "Staggering Smite",
  "Banishing Smite",
  "Bigby's Hand",
  "Circle of Power",
  "Conjure Volley",
  "Destructive Wave",
  "Rary's Telepathic Bond",
  "Swift Quiver",
  "Arcane Gate",
  "Drawmij's Instant Summons",
  "Otiluke's Freezing Sphere",
  "Otto's Irresistable Dance",
  "Mordenkainen's Magnificent Mansion",
  "Mordenkainen's Sword",
  "Telepathy",
  "Tsunami",
  "Power Word Heal"
];