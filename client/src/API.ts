import axios, { AxiosResponse } from "axios";
import { CharacterAction, CharacterBase, CharacterInstance } from "./types/Interfaces";

const baseUrl: string = "http://localhost:4000";

export const postMakeCharacter = async (character: CharacterBase): Promise<AxiosResponse<CharacterInstance>> => {
  try {
    const res: AxiosResponse<CharacterInstance> = await axios.post(baseUrl + "/characterRegistration", character);
    return res;
  } catch (error) {
    window.location.reload();
    throw new Error(error);
  }
};

export const postAction = async (act: CharacterAction): Promise<AxiosResponse<CharacterInstance>> => {
  try {
    const res: AxiosResponse<CharacterInstance> = await axios.post(baseUrl + "/actions", act);
    return res;
  } catch (error) {
    throw new Error(error);
  }
};
