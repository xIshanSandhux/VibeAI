import React from 'react';
import { SiSpotify } from "react-icons/si";
import './login.css';

function Login() {

    // redirect user to spotify login page in a popup window
    const handleLogin = async () => {
        try{
            window.location.href = 'http://127.0.0.1:5000/auth/login';
            
        }catch(error){
            console.error('Error logging in:', error);
        }
    }


    return(
        <div className='login-container'>
            <h1>Welcome to VibeAI !</h1>
            <p style={{marginTop: 0, fontSize: 20}}>Need to login via spotify to use the app.</p>
            <button className='login-button' onClick={handleLogin}>
                Login with Spotify 
                <SiSpotify color="black" size={30}/>
            </button>
        </div>
    );

}

export default Login;