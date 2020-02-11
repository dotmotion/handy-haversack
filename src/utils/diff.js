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
  {
    index: "dissonant-whispers",
    name: "Dissonant Whispers",
    desc: [
      "You whisper a discordant melody that only one creature of your choice within range can hear, wracking it with terrible pain. ",
      "The target must make a Wisdom saving throw. On a failed save, it takes 3d6 psychic damage and must immediately use its reaction , if available, to move as far as its speed allows away from you. The creature doesn’t move into obviously dangerous ground, such as a fire or a pit. On a successful save, the target takes half as much damage and doesn’t have to move away. A deafened creature automatically succeeds on the save. "
    ],
    higher_level: [
      "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st "
    ],
    page: "234",
    range: "60 feet",
    components: ["V"],
    material: "",
    ritual: false,
    duration: "instantaneous",
    concentration: false,
    casting_time: "1 action",
    level: 1,
    school: {
      name: "Enchantment",
      url: "/api/magic-schools/enchantment"
    },
    classes: [
      {
        name: "Bard",
        url: "/api/classes/bard"
      }
    ],
    subclasses: [],
    url: ""
  },
  {
    index: "ensnaring-strike",
    name: "Ensnaring Strike",
    desc: [
      "The next time you hit a creature with a weapon attack before this spell ends, a writhing mass of thorny vines appears at the point of impact, and the target must succeed on a Strength saving throw or be restrained by the magical vines until the spell ends. A Large or larger creature has advantage on this saving throw. If the target succeeds on the save, the vines shrivel away. ",
      "While restrained by this spell, the target takes 1d6 piercing damage at the start of each of its turns. A creature restrained by the vines or one that can touch the creature can use its action to make a Strength check against your spell save DC. On a success, the target is freed.  "
    ],
    higher_level: [
      "If you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st. "
    ],
    page: "237",
    range: "self",
    components: ["V"],
    material: "",
    ritual: false,
    duration: "Concentration, up to 1 minute",
    concentration: true,
    casting_time: "1 bonus action",
    level: 1,
    school: {
      name: "Conjuration",
      url: "/api/magic-schools/conjuration"
    },
    classes: [
      {
        name: "Ranger",
        url: "/api/classes/ranger"
      }
    ],
    subclasses: [],
    url: ""
  },
  {
    index: "hail-of-thorns",
    name: "Hail of Thorns",
    desc: [
      "The next time you hit a creature with a ranged weapon attack before the spell ends, this spell creates a rain of thorns that sprouts from your ranged weapon or ammunition. In addition to the normal effect of the attack, the target of the attack and each creature within 5 feet of it must make a Dexterity saving throw. A creature takes 1d10 piercing damage on a failed save, or half as much damage on a successful one. "
    ],
    higher_level: [
      "If you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for each slot level above 1st (to a maximum of 6d10). "
    ],
    page: "249",
    range: "self",
    components: ["V"],
    material: "",
    ritual: false,
    duration: "1 bonus action",
    concentration: true,
    casting_time: "Concentration, up to 1 minute",
    level: 1,
    school: {
      name: "Conjuration",
      url: "/api/magic-schools/conjuration"
    },
    classes: [
      {
        name: "Ranger",
        url: "/api/classes/ranger"
      }
    ],
    subclasses: [],
    url: ""
  },
  {
    index: "hex",
    name: "Hex",
    desc: [
      "You place a curse on a creature that you can see within range. Until the spell ends, you deal an extra 1d6 necrotic damage to the target whenever you hit it with an attack. Also, choose one ability when you cast the spell. The target has disadvantage on ability checks made with the chosen ability.",
      "If the target drops to 0 hit points before this spell ends, you can use a bonus action on a subsequent turn of yours to curse a new creature.",
      "A remove curse cast on the target ends this spell early."
    ],
    higher_level: [
      "When you cast this spell using a spell slot of 3rd or 4th level, you can maintain your concentration on the spell for up to 8 hours.",
      "When you use a spell slot of 5th level or higher, you can maintain your concentration on the spell for up to 24 hours. "
    ],
    page: "251",
    range: "90 feet",
    components: ["V", "S", "M"],
    material: "the petrified eye of a newt",
    ritual: false,
    duration: "Concentration, up to 1 hour",
    concentration: true,
    casting_time: "1 bonus action",
    level: 1,
    school: {
      name: "Enchantment",
      url: "/api/magic-schools/enchantment"
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
    index: "ray-of-sickness",
    name: "Ray of Sickness",
    desc: [
      "A ray of sickening greenish energy lashes out toward a creature within range.",
      "Make a ranged spell attack against the target. On a hit, the target takes 2d8 poison damage and must make a Constitution saving throw. On a failed save, it is also poisoned until the end of your next turn. "
    ],
    higher_level: [
      "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st. "
    ],
    page: "271",
    range: "60 feet",
    components: ["V", "S"],
    material: "",
    ritual: false,
    duration: "instantaneous",
    concentration: false,
    casting_time: "1 action",
    level: 1,
    school: {
      name: "Necromancy",
      url: "/api/magic-schools/necromancy"
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
    index: "searing-smite",
    name: "Searing Smite",
    desc: [
      "The next time you hit a creature with a melee weapon attack during the spell’s duration, your weapon flares with white-hot intensitity, and the attack deals an extra 1d6 fire damage to the target and causes the target to ignite in flames.",
      "At the start of each of its turns until the spell ends, the target must make a Constitution saving throw. On a failed save, it takes 1d6 fire damage. On a successful save, the spells ends. If the target or a creature within 5 feet of it uses an action to put out the flames, or if some other effect douses the flames (such as the target being submerged in water), the spell ends. "
    ],
    higher_level: [
      "When you cast this spell using a spell slot of 2nd level or higher, the initial extra damage dealt by the attack increases by 1d6 for each slot "
    ],
    page: "274",
    range: "self",
    components: ["V"],
    material: "",
    ritual: false,
    duration: "Concentration, up to 1 minute",
    concentration: true,
    casting_time: "1 bonus action",
    level: 1,
    school: {
      name: "Evocation",
      url: "/api/magic-schools/evocation"
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
  {
    index: "thunderous-smite",
    name: "Thunderous Smite",
    desc: [
      "The first time you hit with a melee weapon attack during this spell’s duration, your weapon rings with thunder that is audible within 300 feet of you, and the attack deals an extra 2d6 thunder damage to the target. Additionally, if the target is a creature, it must succeed on a Strength saving throw or be pushed 10 feet away from you and knocked prone. "
    ],
    higher_level: [""],
    page: "282",
    range: "self",
    components: ["V"],
    material: "",
    ritual: false,
    duration: "Concentration, up to 1 minute",
    concentration: true,
    casting_time: "1 bonus action",
    level: 1,
    school: {
      name: "Evocation",
      url: "/api/magic-schools/evocation"
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
  {
    index: "witch-bolt",
    name: "Witch Bolt",
    desc: [
      "A beam of crackling, blue energy lances out toward a creature within range, forming a sustained arc of lightning between you and the target.",
      "Make a ranged spell attack against that creature. On a hit, the target takes 1d12 lightning damage, and on each of your turns for the duration, you can use your action to deal 1d12 lightning damage to the target automatically. The spell ends if you use your action to do anything else. The spell also ends if the target is ever outside the spell’s range or if it has total cover from you. "
    ],
    higher_level: [
      "When you cast this spell using a spell slot of 2nd level or higher, the initial damage increases by 1d12 for each slot level above 1st. "
    ],
    page: "289",
    range: "30 feet",
    components: ["V", "S", "M"],
    material: "a twig from a tree that has been struck by lightning",
    ritual: false,
    duration: "Concentration, up to 1 minute",
    concentration: true,
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
        name: "Warlock",
        url: "/api/classes/warlock"
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
    index: "wrathful-smite",
    name: "Wrathful Smite",
    desc: [
      "The next time you hit with a melee weapon attack during this spell’s duration, your attack deals an extra 1d6 psychic damage.",
      "Additionally, if the target is a creature, it must make a Wisdom saving throw or be frightened of you until the spell ends. As an action, the creature can make a Wisdom check against your spell save DC to steel its resolve and end this spell. "
    ],
    higher_level: [""],
    page: "289",
    range: "self",
    components: ["V"],
    material: "",
    ritual: false,
    duration: "Concentration, up to 1 minute",
    concentration: true,
    casting_time: "1 bonus action",
    level: 1,
    school: {
      name: "Evocation",
      url: "/api/magic-schools/evocation"
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
  {
    index: "beast-sense",
    name: "Beast Sense",
    desc: [
      "You touch a willing beast. For the duration of the spell, you can use your action to see through the beast’s eyes and hear what it hears, and continue to do so until you use your action to return to your normal senses. "
    ],
    higher_level: [""],
    page: "217",
    range: "touch",
    components: ["S"],
    material: "",
    ritual: true,
    duration: "Concentration, up to 1 hour",
    concentration: true,
    casting_time: "1 action",
    level: 2,
    school: {
      name: "Divination",
      url: "/api/magic-schools/divination"
    },
    classes: [
      {
        name: "Druid",
        url: "/api/classes/druid"
      },
      {
        name: "Ranger",
        url: "/api/classes/ranger"
      }
    ],
    subclasses: [],
    url: ""
  },
  {
    index: "cloud-of-daggers",
    name: "Cloud of Daggers",
    desc: [
      "You fill the air with spinning daggers in a cube 5 feet on each side, centered on a point you choose within range. A creature takes 4d4 slashing damage when it enters the spell’s area for the first time on a turn or starts its turn there. "
    ],
    higher_level: [
      "When you cast this spell using a spell slot of 3rd level or higher, the damage increases by 2d4 for each slot level above 2nd. "
    ],
    page: "222",
    range: "60 feet",
    components: ["V", "S", "M"],
    material: "a sliver of glass",
    ritual: false,
    duration: "Concentration, up to 1 minute",
    concentration: true,
    casting_time: "1 action",
    level: 2,
    school: {
      name: "Conjuration",
      url: "/api/magic-schools/conjuration"
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
        name: "Warlock",
        url: "/api/classes/warlock"
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
    index: "cordon-of-arrows",
    name: "Cordon of Arrows",
    desc: [
      "You plant four pieces of nonmagical ammunition – arrows or crossbow bolts – in the ground within range and lay magic upon them to protect an area. ",
      "Until the spell ends, whenever a creature other than you comes within 30 feet of the ammunition for the first time on a turn or ends its turn there, one piece of ammunition flies up to strike it. The creature must succeed on a Dexterity saving throw or take 1d6 piercing damage. The piece of ammunition is then destroyed. The spell ends when no ammunition remains. ",
      "When you cast this spell, you can designate any creatures you choose, and the spell ignores them.  "
    ],
    higher_level: [
      "When you cast this spell using a spell slot of 3rd level or higher, the amount of ammunition that can be affected increases by two for each slot level above 2nd. "
    ],
    page: "228",
    range: "5 feet",
    components: ["V", "S", "M"],
    material: "four or more arrows or bolts",
    ritual: false,
    duration: "8 hours",
    concentration: false,
    casting_time: "1 action",
    level: 2,
    school: {
      name: "Transmutation",
      url: "/api/magic-schools/transmutation"
    },
    classes: [
      {
        name: "Ranger",
        url: "/api/classes/ranger"
      }
    ],
    subclasses: [],
    url: ""
  },
  {
    index: "crown-of-madness",
    name: "Crown of Madness",
    desc: [
      "On your subsequent turns, you must use your action to maintain control over the target, or the spell ends. Also, the target can make a Wisdom saving throw at the end of each of its turns. On a success, the spell ends. ",
      "The charmed target must use its action before moving on each of its turns to make a melee attack against a creature other than itself that you mentally choose. The target can act normally on its turn if you choose no creature or if none are within its reach. ",
      "On your subsequent turns, you must use your action to maintain control over the target, or the spell ends. Also, the target can make a Wisdom saving throw at the end of each of its turns. On a success, the spell ends. "
    ],
    higher_level: [""],
    page: "229",
    range: "120 feet",
    components: ["V", "S"],
    material: "",
    ritual: false,
    duration: "Concentration, up to 1 minute",
    concentration: true,
    casting_time: "1 action",
    level: 2,
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
        name: "Warlock",
        url: "/api/classes/warlock"
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
    index: "melfs-acid-arrow",
    name: "Melf's Acid Arrow",
    desc: [
      "A shimmering green arrow streaks toward a target within range and bursts in a spray of acid.",
      "Make a ranged spell attack against the target. On a hit, the target takes 4d4 acid damage immediately and 2d4 acid damage at the end of its next turn. On a miss, the arrow splashes the target with acid for half as much of the initial damage and no damage at the end of its next turn. "
    ],
    higher_level: [
      "When you cast this spell using a spell slot of 3rd level or higher, the damage (both initial and later) increases by 1d4 for each slot level above 2nd. "
    ],
    page: "259",
    range: "90 feet",
    components: ["V", "S", "M"],
    material: "powdered rhubarb leaf and an adder’s stomach",
    ritual: false,
    duration: "instantaneous",
    concentration: false,
    casting_time: "1 action",
    level: 2,
    school: {
      name: "Evocation",
      url: "/api/magic-schools/evocation"
    },
    classes: [
      {
        name: "Wizard",
        url: "/api/classes/wizard"
      }
    ],
    subclasses: [],
    url: ""
  },
  {
    index: "nystuls-magic-aura",
    name: "Nystul's Magic Aura",
    desc: [
      "You place an illusion on a creature or an object you touch so that divination spells reveal false information about it.",
      "The target can be a willing creature or an object that isn’t being carried or worn by another creature.",
      "When you cast the spell, choose one or both of the following effects. The effect lasts for the duration. If you cast this spell on the same creature or object every day for 30 days, placing the same effect on it each time, the illusion lasts until it is dispelled.",
      "False Aura",
      "You change the way the target appears to spells and magical effects, such as detect magic, that detect magical auras. You can make a nonmagical object appear magical, a magical object appear nonmagical, or change the object’s magical aura so that it appears to belong to a specific school of magic that you choose. When you use this effect on an object, you can make the false magic apparent to any creature that handles the item.",
      "Mask",
      "You change the way the target appears to spells and magical effects that detect creature types, such as a paladin’s Divine Sense or the trigger of a sym bol spell. You choose a creature type and other spells and magical effects treat the target as if it were a creature of that type or of that alignment."
    ],
    higher_level: [""],
    page: "263",
    range: "touch",
    components: ["V", "S", "M"],
    material: "a small square of silk",
    ritual: false,
    duration: "24 hours",
    concentration: false,
    casting_time: "1 action",
    level: 2,
    school: {
      name: "Illusion",
      url: "/api/magic-schools/illusion"
    },
    classes: [
      {
        name: "Wizard",
        url: "/api/classes/wizard"
      }
    ],
    subclasses: [],
    url: ""
  },
  {
    index: "phantasmal-force",
    name: "Phantasmal Force",
    desc: [
      "You craft an illusion that takes root in the mind of a creature that you can see within range.",
      "The target must make an Intelligence saving throw. On a failed save, you create a phantasmal object, creature, or other visible phenomenon of your choice that is no larger than a 10-foot cube and that is perceivable only to the target for the duration. This spell has no effect on undead or constructs.",
      "The phantasm includes sound, temperature, and other stimuli, also evident only to the creature.",
      "The target can use its action to examine the phantasm with an Intelligence (Investigation) check against your spell save DC. If the check succeeds, the target realizes that the phantasm is an illusion, and the spell ends.",
      "While a target is affected by the spell, the target treats the phantasm as if it were real. The target rationalizes any illogical outcomes from interacting with the phantasm. For example, a target attempting to walk across a phantasmal bridge that spans a chasm falls once it steps onto the bridge. If the target survives the fall, it still believes that the bridge exists and comes up with some other explanation for its fallit was pushed, it slipped, or a strong wind might have knocked it off.",
      "An affected target is so convinced of the phantasm’s reality that it can even take damage from the illusion. A phantasm created to appear as a creature can attack the target. Similarly, a phantasm created to appear as fire, a pool of acid, or lava can burn the target. Each round on your turn, the phantasm can deal 1d6 psychic damage to the target if it is in the phantasm’s area or within 5 feet of the phantasm, provided that the illusion is of a creature or hazard that could logically deal damage, such as by attacking. The target perceives the damage as a type appropriate to the illusion."
    ],
    higher_level: [""],
    page: "264",
    range: "60 feet",
    components: ["V", "S", "M"],
    material: "a bit of fleece",
    ritual: false,
    duration: "Concentration, up to 1 minute",
    concentration: true,
    casting_time: "1 action",
    level: 2,
    school: {
      name: "Illusion",
      url: "/api/magic-schools/illusion"
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
      }
    ],
    subclasses: [],
    url: ""
  },
  {
    index: "aura-of-vitality",
    name: "Aura of Vitality",
    desc: [
      "Healing energy radiates from you in an aura with a 30-foot radius.",
      "Until the spell ends, the aura moves with you, centered on you. You can use a bonus action to cause one creature in the aura (including you) to regain 2d6 hit points."
    ],
    higher_level: [""],
    page: "216",
    range: "Self (30-foot radius)",
    components: ["V"],
    material: "",
    ritual: false,
    duration: "Concentration, up to 1 minute",
    concentration: true,
    casting_time: "1 action",
    level: 3,
    school: {
      name: "Evocation",
      url: "/api/magic-schools/evocation"
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
  {
    index: "blinding-smite",
    name: "Blinding Smite",
    desc: [
      "The next time you hit a creature with a melee weapon attack during this spell’s duration, you weapon flares with a bright light, and the attack deals an extra 3d8 radiant damage to the target. Additionally, the target must succeed on a Constitution saving throw or be blinded until the spell ends.",
      "A creature blinded by this spell makes another Constitution saving throw at the end of each of its turns. On a successful save, it is no longer blinded."
    ],
    higher_level: [""],
    page: "219",
    range: "self",
    components: ["V"],
    material: "",
    ritual: false,
    duration: "Concentration, up to 1 minute",
    concentration: true,
    casting_time: "1 bonus action",
    level: 3,
    school: {
      name: "Evocation",
      url: "/api/magic-schools/evocation"
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
  {
    index: "conjure-barrage",
    name: "Conjure Barrage",
    desc: [
      "You throw a nonmagical weapon or fire a piece of nonmagical ammunition into the air to create a cone of identical weapons that shoot forward and then disappear. Each creature in a 60-foot cone must succeed on a Dexterity saving throw. A creature takes 3d8 damage on a failed save, or half as much damage on a successful one. The damage type is the same as that of the weapon or ammunition used as a component. "
    ],
    higher_level: [""],
    page: "225",
    range: "Self (60-foot cone)",
    components: ["V", "S", "M"],
    material: "one piece of ammunition or a thrown weapon",
    ritual: false,
    duration: "instantaneous",
    concentration: false,
    casting_time: "1 action",
    level: 3,
    school: {
      name: "Conjuration",
      url: "/api/magic-schools/conjuration"
    },
    classes: [
      {
        name: "Ranger",
        url: "/api/classes/ranger"
      }
    ],
    subclasses: [],
    url: ""
  },
  {
    index: "crusaders-mantle",
    name: "Crusader's Mantle",
    desc: [
      "Holy power radiates from you in an aura with a 30-foot radius, awakening boldness in friendly creatures. Until the spell ends, the aura moves with you, centered on you. While in the aura, each nonhostile creature in the aura (including you) deals an extra 1d4 radiant damage when it hits with a weapon attack. "
    ],
    higher_level: [""],
    page: "230",
    range: "self",
    components: ["V"],
    material: "",
    ritual: false,
    duration: "Concentration, up to 1 minute",
    concentration: true,
    casting_time: "1 action",
    level: 3,
    school: {
      name: "Evocation",
      url: "/api/magic-schools/evocation"
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
  {
    index: "elemental-weapon",
    name: "Elemental Weapon",
    desc: [
      "A nonmagical weapon you touch becomes a magic weapon.",
      "Choose one of the following damage types: acid, cold, fire, lightning, or thunder. For the duration, the weapon has a +1 bonus to attack rolls and deals an extra 1d4 damage of the chosen type when it hits."
    ],
    higher_level: [
      "When you cast this spell using a spell slot of 5th or 6th level, the bonus to attack rolls increases to +2 and the extra damage increases to 2d4.",
      "When you use a spell slot of 7th level or higher, the bonus increases to +3 and the extra damage increases to 3d4."
    ],
    page: "237",
    range: "touch",
    components: ["V", "S"],
    material: "",
    ritual: false,
    duration: "Concentration, up to 1 hour",
    concentration: true,
    casting_time: "1 action",
    level: 3,
    school: {
      name: "Evocation",
      url: "/api/magic-schools/evocation"
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
  {
    index: "feign-death",
    name: "Feign Death",
    desc: [
      "You touch a willing creature and put it into a cataleptic state that is indistinguishable from death.",
      "For the spell’s duration, or until you use an action to touch the target and dismiss the spell, the target appears dead to all outward inspection and to spells used to determine the target’s status. The target is blinded and incapacitated, and its speed drops to 0.",
      "The target has resistance to all damage except psychic damage. If the target is diseased or poisoned when you cast the spell, or becomes diseased or poisoned while under the spell’s effect, the disease and poison have no effect until the spell ends."
    ],
    higher_level: [""],
    page: "240",
    range: "touch",
    components: ["V", "S", "M"],
    material: "a pinch of graveyard dirt",
    ritual: false,
    duration: "1 hour",
    concentration: false,
    casting_time: "1 action",
    level: 3,
    school: {
      name: "Necromancy",
      url: "/api/magic-schools/necromancy"
    },
    classes: [
      {
        name: "Bard",
        url: "/api/classes/bard"
      },
      {
        name: "Cleric",
        url: "/api/classes/cleric"
      },
      {
        name: "Druid",
        url: "/api/classes/druid"
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
    index: "hunger-of-hadar",
    name: "Hunger of Hadar",
    desc: [
      "You open a gateway to the dark between the stars, a region infested with unknown horrors. A 20-foot-radius sphere of blackness and bitter cold appears, centered on a point with range and lasting for the duration. This void is filled with a cacophony of soft whispers and slurping noises that can be heard up to 30 feet away. No light, magical or otherwise, can illuminate the area, and creatures fully within the area are blinded.",
      "The void creates a warp in the fabric of space, and the area is difficult terrain. Any creature that starts its turn in the area takes 2d6 cold damage. Any creature that ends its turn in the area must succeed on a Dexterity saving throw or take 2d6 acid damage as milky, otherwordly tentacles rub against it."
    ],
    higher_level: [""],
    page: "251",
    range: "150 feet",
    components: ["V", "S", "M"],
    material: "a pickled octopus tentacle",
    ritual: false,
    duration: "Concentration, up to 1 minute",
    concentration: true,
    casting_time: "1 action",
    level: 3,
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
    index: "lightning-arrow",
    name: "Lightning Arrow",
    desc: [
      "The next time you make a ranged weapon attack during the spell’s duration, the weapon’s ammunition, or the weapon itself if it’s a thrown weapon, transforms into a bolt of lightning. Make the attack roll as normal, The target takes 4d8 lightning damage on a hit, or half as much damage on a miss, instead of the weapon’s normal damage.",
      "Whether you hit or miss, each creature within 10 feet of the target must make a Dexterity saving throw. Each of these creatures takes 2d8 lightning damage on a failed save, or half as much damage on a successful one.",
      "The piece of ammunition or weapon then returns to its normal form."
    ],
    higher_level: [
      "When you cast this spell using a spell slot of 4th level or higher, the damage for both effects of the spell increases by 1d8 for each slot level above 3rd. "
    ],
    page: "255",
    range: "self",
    components: ["V", "S"],
    material: "",
    ritual: false,
    duration: "Concentration, up to 1 minute",
    concentration: true,
    casting_time: "1 bonus action",
    level: 3,
    school: {
      name: "Transmutation",
      url: "/api/magic-schools/transmutation"
    },
    classes: [
      {
        name: "Ranger",
        url: "/api/classes/ranger"
      }
    ],
    subclasses: [],
    url: ""
  },
  {
    index: "spirit-guardian",
    name: "Spirit Guardian",
    desc: [
      "You call forth spirits to protect you.",
      "They flit around you to a distance of 15 feet for the duration. If you are good or neutral, their spectral form appears angelic or fey (your choice). If you are evil, they appear fiendish.",
      "When you cast this spell, you can designate any number of creatures you can see to be unaffected by it. An affected creature’s speed is halved in the area, and when the creature enters the area for the first time on a turn or starts its turn there, it must make a Wisdom saving throw. On a failed save, the creature takes 3d8 radiant damage (if you are good or neutral) or 3d8 necrotic damage (if you are evil). On a successful save, the creature takes half as much damage."
    ],
    higher_level: [
      "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8 for each slot level above 3rd. "
    ],
    page: "278",
    range: "Self (15-foot-radius)",
    components: ["V", "S", "M"],
    material: "a holy symbol",
    ritual: false,
    duration: "Concentration, up to 10 minutes",
    concentration: true,
    casting_time: "1 action",
    level: 3,
    school: {
      name: "Conjuration",
      url: "/api/magic-schools/conjuration"
    },
    classes: [
      {
        name: "Cleric",
        url: "/api/classes/cleric"
      }
    ],
    subclasses: [],
    url: ""
  },
  {
    index: "aura-of-life",
    name: "Aura of Life",
    desc: [
      "Life-preserving energy radiates from you in an aura with a 30-foot radius.",
      "Until the spll ends, the aura moves with you, centered on you. Each nonhostile creature in the aura (including you) has resistance to necrotic damage, and its hit point maximum can’t be reduced. In addition, a nonhostile, living creature regains 1 hit point when it starts its turn in the arua with 0 hit points."
    ],
    higher_level: [""],
    page: "216",
    range: "Self (30-foot radius)",
    components: ["V"],
    material: "",
    ritual: false,
    duration: "Concentration, up to 10 minutes",
    concentration: true,
    casting_time: "1 action",
    level: 4,
    school: {
      name: "Abjuration",
      url: "/api/magic-schools/abjuration"
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
  {
    index: "aura-of-purity",
    name: "Aura of Purity",
    desc: [
      "Purifying energy radiates from you in an aura with a 30-foot radius.",
      "Until the spell ends, the aura moves with you, centered on you. Each nonhostile creature in the aura (including you) can’t become diseased, has resistance to poison damage, and has advantage on saving throws against effects that cause any of the following conditions: blnded, charmed, deafended, frightened, paralyzed, poisoned, and stunned."
    ],
    higher_level: [""],
    page: "216",
    range: "Self (30-foot radius)",
    components: ["V"],
    material: "",
    ritual: false,
    duration: "Concentration, up to 10 minutes",
    concentration: true,
    casting_time: "1 action",
    level: 4,
    school: {
      name: "Abjuration",
      url: "/api/magic-schools/abjuration"
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
  {
    index: "evards-black-tentacles",
    name: "Evard's Black Tentacles",
    desc: [
      "Squirming, ebony tentacles fill a 20-foot square on ground that you can see within range. For the duration, these tentacles turn the ground in the area into difficult terrain.",
      "When a creature enters the affected area for the first time on a turn or starts its turn there, the creature must succeed on a Dexterity saving throw or take 3d6 bludgeoning damage and be restrained by the tentacles until the spell ends. A creature that starts its turn in the area and is already restrained by the tentacles takes 3d6 bludgeoning damage.",
      "A creature restrained by the tentacles can use its action to make a Strength or Dexterity check (its choice) against your spell save DC. On a success, it frees itself."
    ],
    higher_level: [""],
    page: "238",
    range: "90 feet",
    components: ["V", "S", "M"],
    material: "a piece of tentacle from a giant octopus or a giant squid",
    ritual: false,
    duration: "Concentration, up to 1 minute",
    concentration: true,
    casting_time: "1 action",
    level: 4,
    school: {
      name: "Conjuration",
      url: "/api/magic-schools/conjuration"
    },
    classes: [
      {
        name: "Wizard",
        url: "/api/classes/wizard"
      }
    ],
    subclasses: [],
    url: ""
  },
  {
    index: "grasping-vine",
    name: "Grasping Vine",
    desc: [
      "You conjure a vine that sprouts from the ground in an unoccupied space of your choice that you can see within range. When you cast this spell, you can direct the vine to lash out at a creature within 30 feet of it that you can see. That creature must succeed on a Dexterity saving throw or be pulled 20 feet directly toward the vine.",
      "Until the spell ends, you can direct the vine to lash out at the same creature or another one as a bonus action on each of your turns."
    ],
    higher_level: [""],
    page: "246",
    range: "30 feet",
    components: ["V", "S"],
    material: "",
    ritual: false,
    duration: "Concentration, up to 1 minute",
    concentration: true,
    casting_time: "1 bonus action",
    level: 4,
    school: {
      name: "Conjuration",
      url: "/api/magic-schools/conjuration"
    },
    classes: [
      {
        name: "Druid",
        url: "/api/classes/druid"
      },
      {
        name: "Ranger",
        url: "/api/classes/ranger"
      }
    ],
    subclasses: [],
    url: ""
  },
  {
    index: "staggering-smite",
    name: "Staggering Smite",
    desc: [
      "The next time you hit a creature with a melee weapon attack during this spell’s duration, your weapon pierces both body and mind, and the attack deals an extra 4d6 psychic damage to the target. The target must make a Wisdom saving throw. On a failed save, it has disadvantage on attack rolls and ability checks, and can’t take reactions, until the end of its next turn. "
    ],
    higher_level: [""],
    page: "278",
    range: "self",
    components: ["V"],
    material: "",
    ritual: false,
    duration: "Concentration, up to 1 minute",
    concentration: true,
    casting_time: "1 bonus action",
    level: 4,
    school: {
      name: "Evocation",
      url: "/api/magic-schools/evocation"
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
  {
    index: "banishing-smite",
    name: "Banishing Smite",
    desc: [
      "The next time you hit a creature with a weapon attack before this spell ends, your weapon crackles with force, and the attack deals an extra 5d10 force damage to the target. Additionally, if this attack reduces the target to 50 hit points of fewer, you banish it. If the target is native to a different plane of existence than the on you’re on, the target disappears, returning to its home plane. If the target is native to the plane you’re on, the creature vanishes into a harmless demiplane. While there, the target is incapacitated. It remains there until the spell ends, at which point the target reappears in the space it left or in the nearest unoccupied space if that space is occupied. "
    ],
    higher_level: [""],
    page: "216",
    range: "self",
    components: ["V"],
    material: "",
    ritual: false,
    duration: "Concentration, up to 1 minute",
    concentration: true,
    casting_time: "1 bonus action",
    level: 5,
    school: {
      name: "Abjuration",
      url: "/api/magic-schools/abjuration"
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
  {
    index: "bigbys-hand",
    name: "Bigby's Hand",
    desc: [
      "You create a Large hand of shimmering, translucent force in an unoccupied space that you can see within range. The hand lasts for the spell’s duration, and it moves at your command, mimicking the movements of your own hand.",
      "The hand is an object that has AC 20 and hit points equal to your hit point maximum. If it drops to 0 hit points, the spell ends. It has a Strength of 26 (+8) and a Dexterity of 10 (+0). The hand doesn’t fill its space.",
      "When you cast the spell and as a bonus action on your subsequent turns, you can move the hand up to 60 feet and then cause one of the following effects with it.",
      "Clenched Fist",
      "The hand strikes one creature or object within 5 feet of it. Make a melee spell attack for the hand using your game statistics. On a hit, the target takes 4d8 force damage.",
      "Forceful Hand",
      "The hand attempts to push a creature within 5 feet of it in a direction you choose. Make a check with the hand’s Strength contested by the Strength (Athletics) check of the target. If the target is Medium or smaller, you have advantage on the check. If you succeed, the hand pushes the target up to 5 feet plus a number of feet equal to five times your spellcasting ability modifier. The hand moves with the target to remain within 5 feet of it.",
      "Grasping Hand",
      "The hand attempts to grapple a Huge or smaller creature within 5 feet of it. You use the hand’s Strength score to resolve the grapple. If the target is Medium or smaller, you have advantage on the check. While the hand is grappling the target, you can use a bonus action to have the hand crush it. When you do so, the target takes bludgeoning damage equal to 2d6 + your spellcasting ability modifier.",
      "Interposing Hand",
      "The hand interposes itself between you and a creature you choose until you give the hand a different command. The hand moves to stay between you and the target, providing you with half cover against the target. The target can’t move through the hand’s space if its Strength score is less than or equal to the hand’s Strength score. If its Strength score is higher than the hand’s Strength score, the target can move toward you through the hand’s space, but that space is difficult terrain for the target."
    ],
    higher_level: [
      "When you cast this spell using a spell slot of 6th level or higher, the damage from the clenched fist option increases by 2d8 and the damage from the grasping hand increases by 2d6 for each slot level above 5th."
    ],
    page: "218",
    range: "120 feet",
    components: ["V", "S", "M"],
    material: "An eggshell and a snakeskin glove",
    ritual: false,
    duration: "Concentration, up to 1 minute",
    concentration: true,
    casting_time: "1 action",
    level: 5,
    school: {
      name: "Evocation",
      url: "/api/magic-schools/evocation"
    },
    classes: [
      {
        name: "Wizard",
        url: "/api/classes/wizard"
      }
    ],
    subclasses: [],
    url: ""
  },
  {
    index: "circle-of-power",
    name: "Circle of Power",
    desc: [
      "Divine energy radiates from you, distorting and diffusing magical energy within 30 feet of you.",
      "Until the spell ends, the sphere moves with you, centered on you. For the duration, each friendly creature in the area (including you) has advantage on saving throws against spells and other magical effects.",
      "Additionally, when an affected creature succeeds on a saving throw made against a spell or magical effect that allows it to make a saving throw to take only half damage, it instead takes no damage if it succeeds on the saving throws."
    ],
    higher_level: [""],
    page: "221",
    range: "Self (30-foot radius)",
    components: ["V"],
    material: "",
    ritual: false,
    duration: "Concentration, up to 10 minutes",
    concentration: true,
    casting_time: "1 action",
    level: 5,
    school: {
      name: "Abjuration",
      url: "/api/magic-schools/abjuration"
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
  {
    index: "conjure-volley",
    name: "Conjure Volley",
    desc: [
      "You fire a piece of nonmagical ammunition from a ranged weapon or throw a nonmagical weapon into the air and choose a point within range.",
      "Hundreds of duplicates of the ammunition or weapon fall in a volley from above and then disappear. Each creature in a 40-foot-radius. 20-foot-high cylinder centered on that point must make a Dexterity saving throw. A creature takes 8d8 damage on a failed save, or half as much damage on a successful one. The damage type is the same as that of the ammunition or weapon."
    ],
    higher_level: [""],
    page: "226",
    range: "150 feet",
    components: ["V", "S", "M"],
    material: "one piece of ammunition or one thrown weapon",
    ritual: false,
    duration: "instantaneous",
    concentration: false,
    casting_time: "1 action",
    level: 5,
    school: {
      name: "Conjuration",
      url: "/api/magic-schools/conjuration"
    },
    classes: [
      {
        name: "Ranger",
        url: "/api/classes/ranger"
      }
    ],
    subclasses: [],
    url: ""
  },
  {
    index: "destructive-wave",
    name: "Destructive Wave",
    desc: [
      "You strike the ground, creating a burst of divine energy that ripples outward from you. Each creature you choose within 30 feet of you must succeed on a Constitution saving throw or take 5d6 thunder damage, as well as 5d6 radiant or necrotic damage (your choice), and be knocked prone. A creature that succeeds on its saving throw takes half as much damage and isn’t knocked prone. "
    ],
    higher_level: [""],
    page: "231",
    range: "Self (30-foot radius)",
    components: ["V"],
    material: "",
    ritual: false,
    duration: "instantaneous",
    concentration: false,
    casting_time: "1 action",
    level: 5,
    school: {
      name: "Evocation",
      url: "/api/magic-schools/evocation"
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
  {
    index: "rarys-telepathic-bond",
    name: "Rary's Telepathic Bond",
    desc: [
      "You forge a telepathic link among up to eight willing creatures of your choice within range, psychically linking each creature to all the others for the duration. Creatures with Intelligence scores of 2 or less aren’t affected by this spell.",
      "Until the spell ends, the targets can communicated telepathically through the bond whether or not they have a common language. The communication is possible over any distance, though it can’t extend to other planes of existence."
    ],
    higher_level: [""],
    page: "270",
    range: "30 feet",
    components: ["V", "S", "M"],
    material: "pieces of eggshell from two different kinds of creatures",
    ritual: true,
    duration: "1 hour",
    concentration: false,
    casting_time: "1 action",
    level: 5,
    school: {
      name: "Divination",
      url: "/api/magic-schools/divination"
    },
    classes: [
      {
        name: "Wizard",
        url: "/api/classes/wizard"
      }
    ],
    subclasses: [],
    url: ""
  },
  {
    index: "swift-quiver",
    name: "Swift Quiver",
    desc: [
      "You transmute your quiver so it produces an endless supply of nonmagical ammunition, which seems to leap into your hand when you reach for it.",
      "On each of your turns until the spell ends, you can use a bonus action to make two attacks with a weapon that uses ammunition from the quiver. Each time you make such a ranged attack, your quiver magically replaces the piece of ammunition you used with a similar piece of nonmagical ammunition. Any pieces of ammunition created by this spell disintegrate when the spell ends. If the quiver leaves your possession, the spell ends."
    ],
    higher_level: [""],
    page: "279",
    range: "touch",
    components: ["V", "S", "M"],
    material: "a quiver containing at least one piece of ammunition",
    ritual: false,
    duration: "Concentration, up to 1 minute",
    concentration: true,
    casting_time: "1 bonus action",
    level: 5,
    school: {
      name: "Transmutation",
      url: "/api/magic-schools/transmutation"
    },
    classes: [
      {
        name: "Ranger",
        url: "/api/classes/ranger"
      }
    ],
    subclasses: [],
    url: ""
  },
  {
    index: "Arcane-gate",
    name: "Arcane Gate",
    desc: [
      "You create linked teleportation portals that remain open for the duration.",
      "Choose two points on the ground that you can see, one point within 10 feet of you and one point within 500 feet of you. A circular portal, 10 feet in diameter, opens over each point. If the portal would open in the space occupied by a creature, the spell fails, and the casting is lost.",
      "The portals are two-dimensional glowing rings filled with mist, hovering inches from the ground and perpendicular to it at the points you choose. A ring is visible only from one side (your choice), which is the side that functions as a portal.",
      "Any creature or object entering the portal exits from the other portal as if the two were adjacent to each other; passing through a portal from the nonportal side has no effect. The mist that fills each portal is opaque and blocks vision through it. On your turn, you can rotate the rings as a bonus action so that the active side faces in a different direction."
    ],
    higher_level: [""],
    page: "214",
    range: "500 feet",
    components: ["V", "S"],
    material: "",
    ritual: false,
    duration: "Concentration, up to 10 minutes",
    concentration: true,
    casting_time: "1 action",
    level: 6,
    school: {
      name: "Conjuration",
      url: "/api/magic-schools/conjuration"
    },
    classes: [
      {
        name: "Sorcerer",
        url: "/api/classes/sorcerer"
      },
      {
        name: "Warlock",
        url: "/api/classes/warlock"
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
    index: "drawmijs-instant-summons",
    name: "Drawmij's Instant Summons",
    desc: [
      "You touch an object weighing 10 pounds or less whose longest dimension is 6 feet or less.",
      "The spell leaves an invisible mark on its surface and invisibly inscribes the name of the item on the sapphire you use as the material component. Each time you cast this spell, you must use a different sapphire.",
      "At any time thereafter, you can use your action to speak the item’s name and crush the sapphire. The item instantly appears in your hand regardless of physical or planar distances, and the spell ends. If another creature is holding or carrying the item, crushing the sapphire doesn’t transport the item to you, but instead you learn who the creature possessing the object is and roughly where that creature is located at that moment.",
      "Dispel magic or a similar effect successfully applied to the sapphire ends this spell’s effect."
    ],
    higher_level: [""],
    page: "235",
    range: "touch",
    components: ["V", "S", "M"],
    material: "a sapphire worth 1,000 gp",
    ritual: true,
    duration: "until dispelled",
    concentration: false,
    casting_time: "1 minute",
    level: 6,
    school: {
      name: "Conjuration",
      url: "/api/magic-schools/conjuration"
    },
    classes: [
      {
        name: "Wizard",
        url: "/api/classes/wizard"
      }
    ],
    subclasses: [],
    url: ""
  },
  {
    index: "otilukes-freezing-sphere",
    name: "Otiluke's Freezing Sphere",
    desc: [
      "A frigid globe of cold energy streaks from your fingertips to a point of your choice within range, where it explodes in a 60-foot-radius sphere.",
      "Each creature within the area must make a Constitution saving throw. On a failed save, a creature takes 10d6 cold damage. On a successful save, it takes half as much damage.",
      "If the globe strikes a body of water or a liquid that is principally water (not including water-based creatures), it freezes the liquid to a depth of 6 inches over an area 30 feet square. This ice lasts for 1 minute. Creatures that were swimming on the surface of frozen water are trapped in the ice. A trapped creature can use an action to make a Strength check against your spell save DC to break free.",
      "You can refrain from firing the globe after completing the spell, if you wish. A small globe about the size of a sling stone, cool to the touch, appears in your hand. At any time, you or a creature you give the globe to can throw the globe (to a range of 40 feet) or hurl it with a sling (to the sling’s normal range). It shatters on impact, with the same effect as the normal casting of the spell. You can also set the globe down without shattering it. After 1 minute, if the globe hasn’t already shattered, it explodes."
    ],
    higher_level: [
      "When you cast this spell using a spell slot of 7th level or higher, the damage increases by 1d6 for each slot level above 6th "
    ],
    page: "263",
    range: "300 feet",
    components: ["V", "S", "M"],
    material: "a small crystal sphere",
    ritual: false,
    duration: "instantaneous",
    concentration: false,
    casting_time: "1 action",
    level: 6,
    school: {
      name: "Evocation",
      url: "/api/magic-schools/evocation"
    },
    classes: [
      {
        name: "Wizard",
        url: "/api/classes/wizard"
      }
    ],
    subclasses: [],
    url: ""
  },
  {
    index: "ottos-irresistable-dance",
    name: "Otto's Irresistable Dance",
    desc: [
      "Choose one creature that you can see within range. The target begins a comic dance in place: shuffling, tapping its feet, and capering for the duration. Creatures that can’t be charmed are immune to this spell.",
      "A dancing creature must use all its movement to dance without leaving its space and has disadvantage on Dexterity saving throws and attack rolls. While the target is affected by this spell, other creatures have advantage on attack rolls against it. As an action, a dancing creature makes a Wisdom saving throw to regain control of itself. On a successful save, the spell ends."
    ],
    higher_level: [""],
    page: "264",
    range: "30 feet",
    components: ["V"],
    material: "",
    ritual: false,
    duration: "Concentration, up to 1 minute",
    concentration: true,
    casting_time: "1 action",
    level: 6,
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
        name: "Wizard",
        url: "/api/classes/wizard"
      }
    ],
    subclasses: [],
    url: ""
  },
  {
    index: "mordenkainens-sword",
    name: "Mordenkainen's Sword",
    desc: [
      "You create a sword-shaped plane of force that hovers within range. It lasts for the duration.",
      "When the sword appears, you make a melee spell attack against a target of your choice within 5 feet of the sword. On a hit. the target takes 3d10 force damage. Until the spell ends, you can use a bonus action on each of your turns to move the sword up to 20 feet to a spot you can see and repeat this attack against the same target or a different one."
    ],
    higher_level: [""],
    page: "262",
    range: "60 feet",
    components: ["V", "S", "M"],
    material:
      "a miniature platinum sword with a grip and pommel of copper and zinc, worth 250 gp",
    ritual: false,
    duration: "Concentration, up to 1 minute",
    concentration: true,
    casting_time: "1 action",
    level: 7,
    school: {
      name: "Evocation",
      url: "/api/magic-schools/evocation"
    },
    classes: [
      {
        name: "Bard",
        url: "/api/classes/bard"
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
    index: "telepathy",
    name: "Telepathy",
    desc: [
      "You create a telepathic link between yourself and a willing creature with which you are familiar.",
      "The creature can be anywhere on the same plane of existence as you. The spell ends if you or the target are no longer on the same plane.",
      "Until the spell ends, you and the target can instantaneously share words, images, sounds, and other sensory messages with one another through the link, and the target recognizes you as the creature it is communicating with. The spell enables a creature with an Intelligence score of at least 1 to understand the meaning of your words and take in the scope of any sensory messages you send to it."
    ],
    higher_level: [""],
    page: "281",
    range: "unlimited",
    components: ["V", "S", "M"],
    material: "a pair of linked silver rings",
    ritual: false,
    duration: "24 hours",
    concentration: false,
    casting_time: "1 action",
    level: 8,
    school: {
      name: "Evocation",
      url: "/api/magic-schools/evocation"
    },
    classes: [
      {
        name: "Wizard",
        url: "/api/classes/wizard"
      }
    ],
    subclasses: [],
    url: ""
  },
  {
    index: "tsunami",
    name: "Tsunami",
    desc: [
      "A wall of water springs into existence at a point you choose within range. You can make the wall up to 300 feet long, 300 feet high, and 50 feet thick. The wall lasts for the duration.",
      "When the wall appears, each creature within its area must make a Strength saving throw. On a failed save, a creature takes 6d10 bludgeoning damage, or half as much damage on a successful save.",
      "At the start of each of your turns after the wall appears, the wall, along with any creatures in it, moves 50 feet away from you. Any Huge or smaller creature inside the wall or whose space the wall enters when it moves must succeed on a Strength saving throw or take 5d10 bludgeoning damage. A creature can take this damage only once per round. At the end of the turn, the wall’s height is reduced by 50 feet, and the damage creatures take from the spell on subsequent rounds is reduced by 1d10. When the wall reaches 0 feet in height, the spell ends.",
      "A creature caught in the wall can move by swimming. Because of the force of the wave, though, the creature must make a successful Strength (Athletics) check against your spell save DC in order to move at all. If it fails the check, it can’t move. A creature that moves out of the area falls to the ground."
    ],
    higher_level: [""],
    page: "284",
    range: "sight",
    components: ["V", "S"],
    material: "",
    ritual: false,
    duration: "Concentration, up to 6 rounds",
    concentration: true,
    casting_time: "1 minute",
    level: 8,
    school: {
      name: "Conjuration",
      url: "/api/magic-schools/conjuration"
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
    index: "power-word-heal",
    name: "Power Word Heal",
    desc: [
      "A wave of healing energy washes over the creature you touch. The target regains all its hit points. If the creature is charmed, frightened, paralyzed, or stunned, the condition ends. If the creature is prone, it can use its reaction to stand up. This spell has no effect on undead or constructs. "
    ],
    higher_level: [""],
    page: "266",
    range: "touch",
    components: ["V", "S"],
    material: "",
    ritual: false,
    duration: "instantaneous",
    concentration: false,
    casting_time: "1 action",
    level: 9,
    school: {
      name: "Evocation",
      url: "/api/magic-schools/evocation"
    },
    classes: [
      {
        name: "Bard",
        url: "/api/classes/bard"
      }
    ],
    subclasses: [],
    url: ""
  },
  "Power Word Heal"
];
