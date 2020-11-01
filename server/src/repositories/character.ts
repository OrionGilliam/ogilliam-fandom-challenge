import { CharacterAction, CharacterBase, CharacterInstance } from "../types/interfaces";
import { checkAbsorption, checkImmunity, checkResistance, checkVulnerable } from "../util/utils";
import { calculateHP, establishItemBonuses } from "./calculations/calculations";

export let activeCharacter: CharacterInstance | null = null;

export function setCharacter(character: CharacterBase) {
  let completedCharacter: CharacterInstance = {
    name: character.name,
    level: character.level,
    classes: character.classes,
    stats: character.stats,
    items: character.items,
    defenses: character.defenses,
    calculatedStats: character.stats,
    maxHP: 0,
    remainingHP: 0,
    tempHP: 0,
  };

  completedCharacter = establishItemBonuses(completedCharacter);
  completedCharacter = calculateHP(completedCharacter);
  activeCharacter = completedCharacter;
  return activeCharacter;
}

export function actionTime(action: CharacterAction): CharacterInstance {
  if (activeCharacter) {
    switch (action.action) {
      case "attack":
        //if character is immune to the damage type, nothing happens
        if (checkAbsorption(activeCharacter.defenses, action)) {
          activeCharacter.remainingHP += action.value;
        } else if (checkImmunity(activeCharacter.defenses, action)) {
          break;
        } else {
          //checks if character is vulnerable or resistant to the damage type, if both they cancel out
          const vul = checkVulnerable(activeCharacter.defenses, action);
          const res = checkResistance(activeCharacter.defenses, action);
          let damageTaken = 0;
          if (res && !vul) {
            damageTaken += Math.trunc(action.value / 2);
          } else if (vul && !res) {
            damageTaken += Math.trunc(action.value * 2);
          } else {
            damageTaken += Math.trunc(action.value);
          }
          activeCharacter.tempHP -= damageTaken;

          //if the tempHP is depleted, add the remaining negative number to damage main HP, then resets tempHP
          if (activeCharacter.tempHP < 0) {
            activeCharacter.remainingHP += activeCharacter.tempHP;
            activeCharacter.tempHP = 0;
          }
        }
        break;
      case "healing":
        activeCharacter.remainingHP += action.value;
        break;
      case "tempHP":
        if (action.value > activeCharacter.tempHP) activeCharacter.tempHP = action.value;
        break;
    }
  } else {
    throw new Error("Create a character before interacting with it");
  }

  //assures remaining HP does not go over max
  if (activeCharacter.remainingHP > activeCharacter.maxHP) activeCharacter.remainingHP = activeCharacter.maxHP;
  //maintains 0 as lowest HP, as per 5e rules set
  if (activeCharacter.remainingHP < 0) activeCharacter.remainingHP = 0;

  return activeCharacter;
}
