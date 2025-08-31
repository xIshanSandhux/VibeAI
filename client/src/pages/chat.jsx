import React from 'react';
import Cookie from 'js-cookie';


function Chat() {

    console.log("access token cookie: "+Cookie.get('accessToken'));
    console.log("refresh token cookie: "+Cookie.get('refreshToken'));
   
    return(
        <div>
            <h1>Chat</h1>
        </div>
    );
}

export default Chat;