import {BtnLinkGreenLarge, BtnIconClose} from "./Buttons"
import "./LoginModal.css"
import {FontH2} from "./Fonts"

export function LoginModal({onClose}) {
    //data needed for login button
    const CLIENT_ID = "955dcd7386bd4ce4970a2944f45e356e";
    const REDIRECT_URI = "https://prige-spotify-app.netlify.app/";
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
    const RESPONSE_TYPE = "token";

    //return statement
    return (
        <div className="LoginModal">
            <div className="H2Padding"><FontH2 copy="Oooops... Please login before searching" /></div>
            <BtnLinkGreenLarge copy="Login" href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}/>
            <div class="LoginModal_CloseBtnWrapper"><BtnIconClose handleClick={onClose} /></div>
        </div>
    );
};