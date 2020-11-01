import { Request, Response } from "express";
import { CharacterAction, CharacterBase } from "../../types/interfaces";
import { actionTime, setCharacter } from "../../repositories/character";

export const registerCharacter = async (req: Request, res: Response): Promise<void> => {
  try {
    const returnChar = setCharacter(req.body as CharacterBase);
    res.status(201).json(returnChar);
  } catch (error) {
    const resp = {
      success: false,
      message: "Reformat your json and try again",
    };
    res.status(400).json(resp);
  }
};

export const takeAction = async (req: Request, res: Response): Promise<void> => {
  try {
    const ret = actionTime(req.body as CharacterAction);
    res.status(201).json(ret);
  } catch (error) {
    const resp = {
      success: false,
      message: "Reformat your json and try again",
    };
    res.status(400).json(resp);
  }
};
