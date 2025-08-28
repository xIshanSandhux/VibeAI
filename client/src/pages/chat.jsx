import React from 'react';
// import { useLocation } from 'react-router-dom';
// import { getCookie } from 'react-cookie';
import { useLocation } from 'react-router-dom';


function Chat() {
    let navigate = useLocation();
    console.log("navigate: "+navigate.state.accessToken);
    console.log("navigate: "+navigate.state.refreshToken);
    // console.log("navigate: "+navigate);
    // console.log("navigate: "+navigate.state);
    // console.log("navigate.state: "+navigate.state.accessToken);
    // const {accessToken, refreshToken} = navigate.state;
    // console.log("access token: "+accessToken);
    // console.log("refresh token: "+refreshToken);

    // console.log("access token form cookie: "+getCookie('accessToken'));
    // console.log("refresh token form cookie: "+getCookie('refreshToken'));
    return(
        <div>
            <h1>Chat</h1>
        </div>
    );
}

export default Chat;