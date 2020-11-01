import { CharacterAction, Defense } from "../types/interfaces";

export function hasKey<O>(obj: O, key: keyof any): key is keyof O {
  return key in obj;
}

export const checkAbsorption = (defense: Defense[], action: CharacterAction): boolean => {
  return defense.some((def) => {
    return def.type === action.source && def.defense === "absorption";
  });
};

export const checkImmunity = (defense: Defense[], action: CharacterAction): boolean => {
  return defense.some((def) => {
    return def.type === action.source && def.defense === "immunity";
  });
};

export const checkResistance = (defense: Defense[], action: CharacterAction): boolean => {
  return defense.some((def) => {
    return def.type === action.source && def.defense === "resistance";
  });
};

export const checkVulnerable = (defense: Defense[], action: CharacterAction): boolean => {
  return defense.some((def) => {
    return def.type === action.source && def.defense === "vulnerable";
  });
};
