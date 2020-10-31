import { Router } from "express";
import {
  checkForCharacter,
  registerCharacter,
  takeAction,
} from "../controllers/characters/characters";

const router: Router = Router();

router.post("/actions", takeAction);
router.post("/characterRegistration", registerCharacter);
router.get("/checkCharacter", checkForCharacter);

export default router;
