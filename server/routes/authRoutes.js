import { Router } from "express";
import { redirectToAuth, callbackSpotify } from "../controllers/authController.js";

const router = Router();

// Redirecting endpoint to the spotify auth page
router.get("/login", redirectToAuth);
router.get("/callback", callbackSpotify);
export default router;