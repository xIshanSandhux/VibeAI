import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Callback() {
    let navigate = useNavigate();

    const urlParams  = new URLSearchParams(window.location.search);
    console.log("urlParams: "+urlParams);
    const accessToken = urlParams.get('access_token');
    console.log("access token callback: "+accessToken);
    const refreshToken = urlParams.get('refresh_token');
    console.log("refresh token callback: "+refreshToken);


    useEffect(()=>{
        navigate('/chat',{state:{accessToken, refreshToken}});
    }, [navigate]);

    return(
        <div>
            <h2>Logging in...</h2>
        </div>
    );
}

export default Callback;