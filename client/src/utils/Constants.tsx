import { CharacterBase } from "../../../server/src/types/interfaces";

export const defaultCharacter: CharacterBase = {
  name: "Briv",
  level: 5,
  classes: [
    {
      name: "fighter",
      hitDiceValue: 10,
      classLevel: 3,
    },
    {
      name: "wizard",
      hitDiceValue: 6,
      classLevel: 2,
    },
  ],
  stats: {
    strength: 15,
    dexterity: 12,
    constitution: 14,
    intelligence: 13,
    wisdom: 10,
    charisma: 8,
  },
  items: [
    {
      name: "Ioun Stone of Fortitude",
      modifier: {
        affectedObject: "stats",
        affectedValue: "constitution",
        value: 2,
      },
    },
    {
      name: "Ioun Stone of TempHP",
      modifier: {
        affectedObject: "tempHP",
        affectedValue: "",
        value: 9,
      },
    },
    {
      name: "Ioun Stone of Cold Vulnerability",
      modifier: {
        affectedObject: "defenses",
        affectedValue: "cold",
        value: "vulnerable",
      },
    },
  ],
  defenses: [
    {
      type: "fire",
      defense: "immunity",
    },
    {
      type: "slashing",
      defense: "resistance",
    },
  ],
};

export const defenseTypes: string[] = [
  "fire",
  "cold",
  "lightning",
  "slashing",
  "piercing",
  "bludgeoning",
  "radiant",
  "necrotic",
  "psychic",
  "thunder",
  "acid",
  "force",
];
