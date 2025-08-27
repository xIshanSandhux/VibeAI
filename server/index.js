import express from "express";
import {Router} from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js";
dotenv.config();

// Loading PORT from env  and if not found then using the default fall back options.
const port = process.env.PORT || 5000;

// CORS OPTIONS
const corsOptions = {
    origin: "*",
    methods: 'GET,POST',
}

// Creeating the express app and adding cors options and json middleware
const app  = express();
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

// auth routes
app.use("/auth", authRoutes);

// Starting the server, will be listening on port 5000
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});