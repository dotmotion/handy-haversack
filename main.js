// Variables & Event Listeners
const skillList = document.querySelector(".skills");
const skills = [...skillList.querySelectorAll(`[type="text"]`)];
const saveList = document.querySelector(".saves");
const saves = [...saveList.querySelectorAll(`[type="text"]`)];

const abilityScores = [...document.querySelectorAll(".stat")];
abilityScores.forEach(stat => stat.addEventListener("input", modUpdate));

const profCheckboxes = [
  ...document.querySelectorAll(`[type="checkbox"]`)
].filter(item => item.name.includes("prof"));
profCheckboxes.forEach(prof => prof.addEventListener("change", profUpdate));

// Update modifiers when Ability Score is entered (or updated)
function modUpdate() {
  let profBonus = document.querySelector(`[name="proficiencybonus"]`).value;
  let inputName = this.name;
  let mod = parseInt(this.value - 10);

  if (mod % 2 == 0) {
    mod = mod / 2;
  } else {
    mod = (mod - 1) / 2;
  }

  if (isNaN(mod)) {
    mod = "";
  } else if (mod >= 0) {
    mod = "+" + mod;
  }

  let scoreName = inputName.slice(0, inputName.indexOf("score"));
  let modName = scoreName + "mod";

  document.querySelector(`[name="${modName}"]`).value = mod;

  skills.forEach(skill => {
    let prof = document.querySelector(`[name="${skill.name}-prof"]`).checked;
    let bonus = profBonus === "" ? 0 : parseInt(profBonus);
    let modifier = 0;
    if (skill.attributes["data-mod"].value == modName) {
      if (prof) {
        modifier += bonus;
      }
      modifier += parseInt(mod);
      skill.value = modifier >= 0 ? `+${modifier}` : `${modifier}`;
    }
  });
  saves.forEach(save => {
    let prof = document.querySelector(`[name="${save.name}-prof"]`).checked;
    let bonus = profBonus === "" ? 0 : parseInt(profBonus);
    let modifier = 0;
    if (save.name.split("-")[0] == scoreName) {
      if (prof) {
        modifier += bonus;
      }
      modifier += parseInt(mod);
      save.value = modifier >= 0 ? `+${modifier}` : `${modifier}`;
    }
  });
}

//Update Skill & Saving throw values when checking proficiency
function profUpdate() {
  const name = this.name.split("-")[0];
  const profBonus = document.querySelector(`[name="proficiencybonus"]`).value;
  let bonus = profBonus === "" ? 0 : parseInt(profBonus);
  let mod = 0;
  if (this.checked) {
    mod += bonus;
  }
  skills.forEach(skill => {
    if (skill.name === name) {
      mod += parseInt(
        document.querySelector(`[name="${skill.attributes["data-mod"].value}"]`)
          .value
      );
      skill.value = mod >= 0 ? `+${mod}` : `${mod}`;
    }
  });
  saves.forEach(save => {
    if (save.name.split("-")[0] === name) {
      abilityScores.filter(ability => {
        if (ability.name.includes(name)) {
          mod += parseInt(document.querySelector(`[name="${name}mod"]`).value);
        }
      });
      save.value = mod >= 0 ? `+${mod}` : `${mod}`;
    }
  });
}
