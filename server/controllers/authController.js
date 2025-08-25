import querystring from "querystring";
import crypto from "crypto";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";

dotenv.config();

// Loading clientId, clientSecret and redirectUri from env
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const redirectUri = process.env.REDIRECT_URI;

console.log(clientId, clientSecret, redirectUri);

// Generating a random string of length 16 which will be used as state for the auth process
const generateRandomString = (length) => {
    return crypto.randomBytes(60).toString('hex').slice(0, length);
}

// State key for the auth process
const stateKey = 'spotify_auth_state';

export const redirectToAuth = (req,res) =>{
    console.log("Redirecting to auth page");
    console.log(clientId, clientSecret, redirectUri);
    const state = generateRandomString(16);
    res.cookie(stateKey, state);

    var scope = 'user-read-private user-read-email';
    const authUrl = 'https://accounts.spotify.com/authorize?' +
        querystring.stringify({
        response_type: 'code',
        client_id: clientId,
        scope: scope,
        redirect_uri: redirectUri,
        state: state
        });
    
    console.log(authUrl);
    res.redirect(authUrl);
}