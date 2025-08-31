import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Cookie from 'js-cookie';


function Callback() {
    let navigate = useNavigate();

    // get access token and refresh token from url params
    const urlParams  = new URLSearchParams(window.location.search);
    
    // setting access token cookies
    const accessToken = urlParams.get('access_token');
    Cookie.set('accessToken', accessToken);
   
    // setting refresh token cookies
    const refreshToken = urlParams.get('refresh_token');
    Cookie.set('refreshToken', refreshToken);

    // navigate to chat page
    useEffect(()=>{
        navigate('/chat');
    }, [navigate]);

    return(
        <div>
            <h2>Logging in...</h2>
        </div>
    );
}

export default Callback;