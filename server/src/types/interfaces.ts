export const defenseTypes: string[] = ["fire", "cold", "lightning", "slashing", "piercing", "bludgeoning", "radiant", "necrotic", "psychic", "thunder", "acid", "force"];
export const defenseValues: string[] = ["resistance", "immunity", "vulnerable"];
export const statTypes: string[] = ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"];

export interface CharacterBase {
    name: string,
    level: number,
    classes: Class[],
    stats: StatBlock,
    items: Item[],
    defenses: Defense[],
}

export interface CharacterInstance extends CharacterBase {
    calculatedStats: StatBlock,
    maxHP: number,
    remainingHP: number,
    tempHP: number,
}

export interface Class {
    name: string,
    hitDiceValue: number
    classLevel: number
}

export interface StatBlock {
    strength: number,
    dexterity: number,
    constitution: number,
    intelligence: number,
    wisdom: number,
    charisma: number
}

export interface Item {
    name: string
    modifier: ItemMod
}

export interface ItemMod {
    affectedObject: string,
    affectedValue: string,
    value: string | number
}

export interface Defense {
    type: "fire" | "cold" | "lightning" | "slashing" | "piercing" | "bludgeoning" | "radiant" | "necrotic" | "psychic" | "thunder" | "acid" | "force"
    defense: "resistance" | "immunity" | "vulnerable"
}

export interface CharacterAction {
    action: "attack" | "healing" | "tempHP"
    source: "fire" | "cold" | "lightning" | "slashing" | "piercing" | "bludgeoning" | "radiant" | "necrotic" | "psychic" | "thunder" | "acid" | "force"
    value: number
}

export interface CharacterReport {
    name: string,
    maxHP: number,
    remainingHP: number,
    tempHP: number
}