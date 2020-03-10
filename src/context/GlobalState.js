import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

import { spells } from "../assets/db/spells";
import { traits } from "../assets/db/traits";
import { feats } from "../assets/db/feats";
import { beasts } from "../assets/db/beasts";
import { sortByClass, sortByLevel, sortBySchool } from "../utils/lib";

const book = window.localStorage.getItem("favs");
const char = window.localStorage.getItem("char");

// Initial state
const initialState = {
  character: char
    ? JSON.parse(char)
    : {
        general: {
          name: "Toryc",
          race: "Gnoll",
          class: ["Rogue"],
          level: [4],
          prof: 3,
          xp: 6400,
          hp: {
            max: 45,
            current: 45,
            temp: 0
          },
          speed: 30,
          hit: "4d8",
          ac: 20,
          stats: {
            strength: {
              label: "Strength",
              value: 14,
              prof: true,
              misc: 0
            },
            dexterity: {
              label: "Dexterity",
              value: 18,
              prof: true,
              misc: 0
            },
            constitution: {
              label: "Constitution",
              value: 16,
              prof: true,
              misc: 0
            },
            intelligence: {
              label: "Intelligence",
              value: 14,
              prof: true,
              misc: 0
            },
            wisdom: {
              label: "Wisdom",
              value: 12,
              prof: false,
              misc: 0
            },
            charisma: {
              label: "Charisma",
              value: 14,
              prof: false,
              misc: 0
            }
          },
          skills: {
            acrobatics: {
              label: "Acrobatics",
              score: "Dexterity",
              prof: true,
              exp: false
            },
            "animal-handling": {
              label: "Animal Handling",
              score: "Wisdom",
              prof: false,
              exp: false
            },
            arcana: {
              label: "Arcana",
              score: "Intelligence",
              prof: false,
              exp: false
            },
            athletics: {
              label: "Athletics",
              score: "Strength",
              prof: false,
              exp: false
            },
            deception: {
              label: "Deception",
              score: "Charisma",
              prof: true,
              exp: false
            },
            history: {
              label: "History",
              score: "Intelligence",
              prof: false,
              exp: false
            },
            insight: {
              label: "Insight",
              score: "Wisdom",
              prof: false,
              exp: false
            },
            intimidation: {
              label: "Intimidation",
              score: "Charisma",
              prof: true,
              exp: true
            },
            investigation: {
              label: "Investigation",
              score: "Intelligence",
              prof: true,
              exp: false
            },
            medicine: {
              label: "Medicine",
              score: "Wisdom",
              prof: false,
              exp: false
            },
            nature: {
              label: "Nature",
              score: "Intelligence",
              prof: false,
              exp: false
            },
            perception: {
              label: "Perception",
              score: "Wisdom",
              prof: true,
              exp: false
            },
            performance: {
              label: "Performance",
              score: "Charisma",
              prof: false,
              exp: false
            },
            persuasion: {
              label: "Persuasion",
              score: "Charisma",
              prof: false,
              exp: false
            },
            religion: {
              label: "Religion",
              score: "Intelligence",
              prof: false,
              exp: false
            },
            "sleight-of-hand": {
              label: "Sleight of Hand",
              score: "Dexterity",
              prof: false,
              exp: false
            },
            stealth: {
              label: "Stealth",
              score: "Dexterity",
              prof: true,
              exp: true
            },
            survival: {
              label: "Survival",
              score: "Wisdom",
              prof: false,
              exp: false
            }
          }
        },
        combat: {
          weapons: [
            {
              name: "Dagger",
              bonus: 4,
              dice: "1d4",
              damage: "piercing"
            },
            {
              name: "Short Sword",
              bonus: 4,
              dice: "1d6",
              damage: "slash"
            },
            {
              name: "Scimitar",
              bonus: 4,
              dice: "1d6",
              damage: "slash"
            },
            {
              name: "Short Bow",
              bonus: 4,
              dice: "1d6",
              damage: "piercing"
            }
          ],
          "combat-spells": [],
          spellcasting: {
            level: 2,
            slots: 2,
            ability: "intelligence",
            save: 12,
            bonus: 4,
            "level-0": {
              total: 3,
              spells: [
                {
                  name: "Dancing Lights",
                  desc: [
                    "You create up to four torch-sized lights within range, making them appear as torches, lanterns, or glowing orbs that hover in the air for the duration. You can also combine the four lights into one glowing vaguely humanoid form of Medium size. Whichever form you choose, each light sheds dim light in a 10-foot radius.",
                    "As a bonus action on your turn, you can move the lights up to 60 feet to a new spot within range. A light must be within 20 feet of another light created by this spell, and a light winks out if it exceeds the spell's range."
                  ],
                  page: "phb 230",
                  range: "120 feet",
                  components: ["V", "S", "M"],
                  material: "A bit of phosphorus or wychwood, or a glowworm.",
                  ritual: "no",
                  duration: "Up to 1 minute",
                  concentration: "yes",
                  casting_time: "1 action",
                  level: 0,
                  school: "Evocation"
                },
                {
                  name: "Mage Hand",
                  desc: [
                    "A spectral, floating hand appears at a point you choose within range. The hand lasts for the duration or until you dismiss it as an action. The hand vanishes if it is ever more than 30 feet away from you or if you cast this spell again.",
                    "You can use your action to control the hand. You can use the hand to manipulate an object, open an unlocked door or container, stow or retrieve an item from an open container, or pour the contents out of a vial. You can move the hand up to 30 feet each time you use it.",
                    "The hand can't attack, activate magic items, or carry more than 10 pounds."
                  ],
                  page: "phb 256",
                  range: "30 feet",
                  components: ["V", "S"],
                  ritual: "no",
                  duration: "1 minute",
                  concentration: "no",
                  casting_time: "1 action",
                  level: 0,
                  school: "Conjuration"
                },
                {
                  name: "Eldritch Blast",
                  desc: [
                    "A beam of crackling energy streaks toward a creature within range. Make a ranged spell attack against the target. On a hit, the target takes 1d10 force damage."
                  ],
                  page: "phb 236",
                  range: "120 feet",
                  components: ["V", "S"],
                  ritual: "no",
                  duration: "Instantaneous",
                  concentration: "no",
                  casting_time: "1 action",
                  level: 0,
                  school: "Evocation"
                }
              ]
            },
            "level-1": {
              total: 3,
              spells: [
                {
                  name: "Charm Person",
                  desc: [
                    "You attempt to charm a humanoid you can see within range. It must make a wisdom saving throw, and does so with advantage if you or your companions are fighting it. If it fails the saving throw, it is charmed by you until the spell ends or until you or your companions do anything harmful to it. The charmed creature regards you as a friendly acquaintance. When the spell ends, the creature knows it was charmed by you.",
                    "When you cast this spell using a spell slot of 2nd level or higher, you can target one additional creature for each slot level above 1st. The creatures must be within 30 feet of each other when you target them."
                  ],
                  page: "phb 221",
                  range: "30 feet",
                  components: ["V", "S"],
                  ritual: "no",
                  duration: "1 hour",
                  concentration: "no",
                  casting_time: "1 action",
                  level: 1,
                  school: "Enchantment"
                },
                {
                  name: "Armor of Agathys",
                  desc: [],
                  page: "",
                  range: "",
                  components: [],
                  ritual: "",
                  duration: "",
                  concentration: "",
                  casting_time: "",
                  level: 1,
                  school: ""
                },
                {
                  name: "Witch Bolt",
                  desc: [],
                  page: "",
                  range: "",
                  components: [],
                  ritual: "",
                  duration: "",
                  concentration: "",
                  casting_time: "",
                  level: 1,
                  school: ""
                }
              ]
            }
          }
        },
        other: {
          inventory: [
            {
              name: "Dark Common Clothes",
              ammount: 1,
              "single-use": false
            },
            {
              name: "Leather Armor",
              ammount: 1,
              "single-use": false
            },
            {
              name: "Ring of protection (+1 AC)",
              ammount: 1,
              "single-use": false
            },
            {
              name: "Burglar's Pack",
              ammount: 1,
              "single-use": false
            }
          ],
          coins: {
            cp: 5,
            sp: 7,
            ep: 0,
            gp: 36,
            pp: 0
          },
          background: "Criminal",
          alignment: "Chaotic Neutral",
          feats: ["Darkvision", "Rampage"],
          proficiencies: {
            "saving-throws": ["dexterity", "intelligence"],
            "skill-throws": [
              "deception",
              "history",
              "intimidation",
              "perception",
              "persuasion"
            ],
            other: {
              languages: ["gnoll", "common", "abyssal"],
              prof: [
                "Dice",
                "Light Armor",
                "Simple Weapons",
                "Rapier",
                "Short Sword"
              ]
            }
          }
        }
      },
  spellbook: book ? JSON.parse(book) : [],
  spells,
  feats,
  traits,
  beasts,
  spellsByClass: sortByClass(spells),
  spellsByLevel: sortByLevel(spells),
  spellsBySchool: sortBySchool(spells)
};

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  // - update character
  function updateChar(char) {
    dispatch({
      type: "UPDATE_CHARACTER",
      payload: char
    });
  }
  // - update spellbook
  function spellbookUpdate(book) {
    dispatch({
      type: "SPELLBOOK_UPDATE",
      payload: book
    });
  }
  function spellbookAdd(spell) {
    dispatch({
      type: "SPELLBOOK_ADD",
      payload: spell
    });
  }
  function spellbookDel(spell) {
    dispatch({
      type: "SPELLBOOK_DEL",
      payload: spell
    });
  }
  // - new character
  // - delete character

  return (
    <GlobalContext.Provider
      value={{
        character: state.character,
        spellbook: state.spellbook,
        spells: state.spells,
        feats: state.feats,
        traits: state.traits,
        beasts: state.beasts,
        lists: {
          classList: state.spellsByClass,
          levelList: state.spellsByLevel,
          schoolList: state.spellsBySchool
        },
        updateChar,
        spellbookUpdate,
        spellbookAdd,
        spellbookDel
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
