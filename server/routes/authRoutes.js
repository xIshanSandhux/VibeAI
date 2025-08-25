import { Router } from "express";
import { redirectToAuth } from "../controllers/authController.js";

const router = Router();

// Redirecting endpoint to the spotify auth page
router.get("/login", redirectToAuth);

export default router;