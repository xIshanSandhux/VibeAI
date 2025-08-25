import React from 'react';
import { SiSpotify } from "react-icons/si";
import './login.css';

function Login() {

    return(
        <div className='login-container'>
            <h1>Welcome to VibeAI !</h1>
            <p style={{marginTop: 0, fontSize: 20}}>Need to login via spotify to use the app.</p>
            <button className='login-button'>
                Login with Spotify 
                <SiSpotify color="black" size={30}/>
            </button>
        </div>
    );

}

export default Login;