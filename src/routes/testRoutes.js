import { Router } from "express";
import { testFirebase } from "../controllers/testController.js";

const router = Router();

router.get("/test-firebase", testFirebase);

export default router;
