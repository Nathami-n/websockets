import { Router } from "express";
import {firstController} from '../controllers/firstController.js'

const router = Router();

router.route("/").get(firstController);
export default router;