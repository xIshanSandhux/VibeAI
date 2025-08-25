import express from "express";
import {Router} from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

// Loading PORT from env  and if not found then using the default fall back options.
const port = process.env.PORT || 5000;

// CORS OPTIONS
const corsOptions = {
    origin: "http://localhost:5173/",
    methods: 'GET,POST',
}

// Creeating the express app and adding cors options and json middleware
const app  = express();
app.use(cors(corsOptions));
app.use(express.json());


// Starting the server, will be listening on port 5000
app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});