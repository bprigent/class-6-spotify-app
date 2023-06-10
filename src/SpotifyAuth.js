//useEffect helps check the token after the user is logedin successfully, useState is used to store the value found in the URL in variables
import {useEffect, useState} from 'react';
import {BtnLinkGreen, BtnGrey} from "./Buttons";

// spotify data 
const CLIENT_ID = "955dcd7386bd4ce4970a2944f45e356e";
const REDIRECT_URI = "http://localhost:3000";
const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
const RESPONSE_TYPE = "token";

function SpotifyAuth () {

    //creating empty state variable for the spotify token
    const [token, setToken] = useState("")

    //this function finds the token in the URL and saves the token using setToken
    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")

        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }
        setToken(token)
    }, [])

    //logout function
    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    };

    // return JSX element depending on presence of token
    return (
        <>
        {!token 
            ? <BtnLinkGreen copy="Login" href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}/>
            : <BtnGrey handleClick={logout} copy="Logout"/>}
        </>
    );

};


export default SpotifyAuth;