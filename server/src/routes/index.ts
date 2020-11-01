import { Router } from "express";
import { registerCharacter, takeAction } from "../controllers/characters/characters";

const router: Router = Router();

router.post("/actions", takeAction);
router.post("/characterRegistration", registerCharacter);

export default router;
