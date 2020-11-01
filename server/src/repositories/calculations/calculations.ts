import { CharacterInstance, Defense } from "../../types/interfaces";
import { hasKey } from "../../util/utils";

// Well played on giving inconsistent capitalization for the hitdicevalue field

export function calculateHP(character: CharacterInstance): CharacterInstance {
  let returnCharacter: CharacterInstance = character;
  for (const prof of returnCharacter.classes) {
    //using half hitdie + 1 for calculation, as is proper for all D&D games
    const hitDie = Math.trunc(prof.hitDiceValue / 2 + 1);
    returnCharacter.maxHP += hitDie * prof.classLevel;
  }

  const conMod = Math.trunc((returnCharacter.calculatedStats.constitution - 10) / 2);
  returnCharacter.maxHP += conMod * returnCharacter.level;
  returnCharacter.remainingHP = Math.trunc(returnCharacter.maxHP);
  return returnCharacter;
}

export function establishItemBonuses(character: CharacterInstance): CharacterInstance {
  const returnCharacter: CharacterInstance = character;
  for (const equip of character.items) {
    switch (equip.modifier.affectedObject) {
      case "stats":
        if (hasKey(returnCharacter.calculatedStats, equip.modifier.affectedValue) && typeof equip.modifier.value == "number") {
          returnCharacter.calculatedStats[equip.modifier.affectedValue] += equip.modifier.value;
        }
        break;
      case "maxHP":
        if (typeof equip.modifier.value == "number") returnCharacter.maxHP += equip.modifier.value;
        break;
      case "tempHP":
        if (typeof equip.modifier.value == "number" && equip.modifier.value > returnCharacter.tempHP)
          returnCharacter.tempHP = equip.modifier.value;
        break;
      case "defenses":
        returnCharacter.defenses.push(<Defense>(<unknown>{
          type: equip.modifier.affectedValue,
          defense: equip.modifier.value,
        }));
        break;
    }
  }

  return returnCharacter;
}
