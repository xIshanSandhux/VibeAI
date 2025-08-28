import querystring from "querystring";
import crypto from "crypto";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import axios from "axios";

dotenv.config();

// Loading clientId, clientSecret and redirectUri from env
const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const redirectUri = process.env.REDIRECT_URI;
console.log(redirectUri);

console.log(clientId, clientSecret, redirectUri);

// Generating a random string of length 16 which will be used as state for the auth process
const generateRandomString = (length) => {
    return crypto.randomBytes(60).toString('hex').slice(0, length);
}

// State key for the auth process
const stateKey = 'spotify_auth_state';
// var state;

// Function: Redirect to spotify login page
export const redirectToAuth = (req,res) =>{
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

    console.log(clientId, clientSecret, redirectUri);
    console.log(state);
    
    console.log(`Redirect to spotify login page: ${authUrl}`);
    res.redirect(authUrl);
}


// Function: Callback from spotify login page
export const callbackSpotify = async(req, res) =>{
    console.log("Callback function called");

    const code = req.query.code || null;
    const queryState = req.query.state || null;
    const storedState = req.cookies ? req.cookies[stateKey] : null;

    if(queryState === null || queryState !== storedState){
        console.log(`Query State: ${queryState}`);
        console.log(`State: ${state}`);
        res.redirect('/' +
            querystring.stringify({
                error: 'state_mismatch'
            })
        );
    }else{
        res.clearCookie(stateKey);
        const response = await axios.post(
            'https://accounts.spotify.com/api/token',
            {
                code: code,
                redirect_uri: redirectUri,
                grant_type: 'authorization_code'
            },
            {
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': 'Basic ' + Buffer.from(clientId + ':' + clientSecret).toString('base64')
              }
            }
          )
          .then((response) =>{
            console.log(response.data);
            console.log('http://localhost:5173/auth-success?'+
                querystring.stringify({
                    access_token: response.data.access_token,
                    refresh_token: response.data.refresh_token
                })
            );
            // res.cookie('access_token', response.data.access_token);
            // res.cookie('refresh_token', response.data.refresh_token);
            res.redirect('http://localhost:5173/auth-success?'+
                querystring.stringify({
                    access_token: response.data.access_token,
                    refresh_token: response.data.refresh_token
                })
            );
          })
          .catch((error) =>{
            console.log(error);
            res.status(500).json({ error: 'Authentication failed' });
          });
    }
}