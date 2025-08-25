import React from 'react';

function Callback() {

    // this is the callback page for spotify auth
    // via be acting as the redirect URI
    // will get the access token and refresh token
    // cannot use localhost as the redirect URI address, need to use IPv4/v6 with port 3000
    

    return(
        <div>
            <h2>Logging in...</h2>
            {/* prolly might add a spinner here */}
        </div>
    );
}

export default Callback;