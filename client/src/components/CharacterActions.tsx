import * as React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TextField,
  TableContainer,
  Paper,
  MenuItem,
  Select,
  Input,
  InputLabel,
  Button,
} from "@material-ui/core";
import { postAction, postMakeCharacter } from "../API";
import { defaultCharacter, defenseTypes } from "../utils/Constants";
import { defenses, elementals, equipment, professions } from "../utils/MenuFunctions";
import { CharacterAction, CharacterInstance } from "../types/Interfaces";

const CharacterActions: React.FC<{}> = () => {
  const [activeCharacter, setActiveCharacter] = React.useState<CharacterInstance>();
  const [actionType, setActionType] = React.useState<string>("attack");
  const [elemental, setElemental] = React.useState<string>(defenseTypes[0]);
  const [damage, setDamage] = React.useState<string>("0");
  //Creates a default character when page is loaded
  React.useEffect(() => {
    async function setCharacter() {
      const newChar = await postMakeCharacter(defaultCharacter);
      setActiveCharacter(newChar.data);
    }

    setCharacter();
  }, []);

  const handleChange = (field: string) => (event: React.ChangeEvent<{ value: unknown }>) => {
    switch (field) {
      case "actionType":
        setActionType(event.target.value as string);
        break;
      case "elemental":
        setElemental(event.target.value as string);
        break;
      case "damage":
        setDamage(event.target.value as string);
        break;
    }
  };

  const submitAction = async () => {
    const action: CharacterAction = {
      action: actionType,
      source: elemental,
      value: damage ? parseInt(damage) : 0,
    } as CharacterAction;

    const updateChar = await postAction(action);
    setActiveCharacter(updateChar.data);
  };

  const constructTable = (
    <div>
      {activeCharacter && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell colSpan={4}>Welcome to Killing Your Character!</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={2}>
                  <InputLabel>Action Type</InputLabel>
                  <Select value={actionType} onChange={handleChange("actionType")}>
                    <MenuItem value={"attack"}>Attack</MenuItem>
                    <MenuItem value={"healing"}>Healing</MenuItem>
                    <MenuItem value={"tempHP"}>Temp HP</MenuItem>
                  </Select>
                </TableCell>
                <TableCell colSpan={2}>
                  <InputLabel>Element</InputLabel>
                  <Select value={elemental} onChange={handleChange("elemental")}>
                    {elementals()}
                  </Select>
                </TableCell>
                <TableCell>
                  <InputLabel>Damage</InputLabel>
                  <Input type={"number"} inputProps={{ min: "0" }} value={damage} onChange={handleChange("damage")} />
                </TableCell>
                <TableCell>
                  <Button onClick={submitAction} color={"secondary"} variant={"outlined"}>
                    Submit Action
                  </Button>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>Name: {activeCharacter.name}</TableCell>
                <TableCell>Level: {activeCharacter.level}</TableCell>
                <TableCell>Current HP: {activeCharacter.remainingHP}</TableCell>
                <TableCell>Max HP: {activeCharacter.maxHP}</TableCell>
                <TableCell>Temp HP: {activeCharacter.tempHP}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>
                  <TextField label={"Strength"} value={activeCharacter.calculatedStats.strength} disabled={true} />
                </TableCell>
                <TableCell>
                  <TextField label={"Dexterity"} value={activeCharacter.calculatedStats.dexterity} disabled={true} />
                </TableCell>
                <TableCell>
                  <TextField label={"Constitution"} value={activeCharacter.calculatedStats.constitution} disabled={true} />
                </TableCell>
                <TableCell>
                  <TextField label={"Intelligence"} value={activeCharacter.calculatedStats.intelligence} disabled={true} />
                </TableCell>
                <TableCell>
                  <TextField label={"Wisdom"} value={activeCharacter.calculatedStats.wisdom} disabled={true} />
                </TableCell>
                <TableCell>
                  <TextField label={"Charisma"} value={activeCharacter.calculatedStats.charisma} disabled={true} />
                </TableCell>
              </TableRow>
              {professions(activeCharacter)}
              {equipment(activeCharacter)}
              {defenses(activeCharacter)}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );

  return <React.Fragment>{constructTable}</React.Fragment>;
};

export default CharacterActions;
