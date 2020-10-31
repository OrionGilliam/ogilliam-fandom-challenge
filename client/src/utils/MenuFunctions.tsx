import { MenuItem, TableCell, TableRow } from "@material-ui/core";
import * as React from "react";
import { CharacterInstance } from "../../../server/src/types/interfaces";
import { defenseTypes } from "./Constants";

export function professions(activeCharacter: CharacterInstance) {
  if (activeCharacter) {
    return (
      <TableRow>
        <TableCell>Classes:</TableCell>
        {activeCharacter.classes.map((prof, index) => {
          return (
            <TableCell key={index}>
              Level {prof.classLevel} {prof.name} HD: {prof.hitDiceValue}
            </TableCell>
          );
        })}
      </TableRow>
    );
  }
}

export function equipment(activeCharacter: CharacterInstance) {
  if (activeCharacter) {
    return (
      <TableRow>
        <TableCell>Equipment:</TableCell>
        {activeCharacter.items.map((equip, index) => {
          return (
            <TableCell key={index} colSpan={2}>
              {equip.name}: {equip.modifier.affectedObject}: {equip.modifier.affectedValue}: {equip.modifier.value}
            </TableCell>
          );
        })}
      </TableRow>
    );
  }
}

export function defenses(activeCharacter: CharacterInstance) {
  if (activeCharacter) {
    return (
      <TableRow>
        <TableCell>Defenses:</TableCell>
        {activeCharacter.defenses.map((def, index) => {
          return (
            <TableCell key={index}>
              {def.defense} to {def.type}
            </TableCell>
          );
        })}
      </TableRow>
    );
  }
}

export function elementals() {
  return defenseTypes.map((type, index) => {
    return (
      <MenuItem key={index} value={type}>
        {type}
      </MenuItem>
    );
  });
}
