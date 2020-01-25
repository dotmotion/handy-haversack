import axios from "axios";

export const request = async url => {
  const api = "https://www.dnd5eapi.co";
  let data;
  await axios
    .get(`${api}${url}`)
    .then(res => {
      data = res.data;
    })
    .catch(e => console.error(e));
  return data;
};

export const sortByClass = spells => {
  let spellsByClass = {
    // Barbarian: [],
    Bard: [],
    Cleric: [],
    Druid: [],
    // Fighter: [],
    // Monk: [],
    Paladin: [],
    Ranger: [],
    // Rogue: [],
    Sorcerer: [],
    Warlock: [],
    Wizard: []
  };
  const classList = Object.keys(spellsByClass);

  spells.map(spell => {
    const classes = spell.classes.map(c => c.name);
    classes.map(c => {
      spellsByClass[c].push(spell);
      return null;
    });
    return null;
  });

  classList.map(c => {
    spellsByClass[c] = sortByLevel(spellsByClass[c]);
    return null;
  });

  return spellsByClass;
};

export const sortBySchool = spells => {
  let spellsBySchool = {
    Abjuration: [],
    Conjuration: [],
    Divination: [],
    Enchantment: [],
    Evocation: [],
    Illusion: [],
    Necromancy: [],
    Transmutation: []
  };
  spells.map(spell => {
    spellsBySchool[spell.school.name].push(spell);
    return null;
  });

  return spellsBySchool;
};

export const sortByLevel = spells => {
  let spellsByLevel = {
    0: [],
    1: [],
    2: [],
    3: [],
    4: [],
    5: [],
    6: [],
    7: [],
    8: [],
    9: []
  };

  spells.map(spell => {
    spellsByLevel[spell.level].push(spell);
    return null;
  });

  return spellsByLevel;
};
