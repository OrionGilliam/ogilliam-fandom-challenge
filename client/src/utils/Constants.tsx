import { CharacterBase } from "../types/Interfaces";

export const defaultCharacter: CharacterBase = {
  name: "Item Guy",
  level: 8,
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
    {
      name: "rogue",
      hitDiceValue: 8,
      classLevel: 3,
    },
  ],
  stats: {
    strength: 15,
    dexterity: 12,
    constitution: 6,
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
      name: "Manual of Dexterity",
      modifier: {
        affectedObject: "stats",
        affectedValue: "dexterity",
        value: 4,
      },
    },
    {
      name: "Ring of Club Resistance",
      modifier: {
        affectedObject: "defenses",
        affectedValue: "bludgeoning",
        value: "resistance",
      },
    },
    {
      name: "Curse Boots of Lava Walking",
      modifier: {
        affectedObject: "defenses",
        affectedValue: "fire",
        value: "vulnerable",
      },
    },
    {
      name: "Headband of Death Drinking",
      modifier: {
        affectedObject: "defenses",
        affectedValue: "necrotic",
        value: "absorption",
      },
    },
    {
      name: "Cloak of slight amounts of fake HP",
      modifier: {
        affectedObject: "tempHP",
        affectedValue: "",
        value: 3,
      },
    },
  ],
  defenses: [],
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
