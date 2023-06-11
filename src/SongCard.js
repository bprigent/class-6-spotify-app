import "./SongCard.css";
import {BtnGreySmall} from "./Buttons"
import {AddToPlaylist} from "./AddToPlaylist"

function SongCard({object}) {
    return (
        <div className="SongCardWrapper" key={object.id}>
            <img className="SongCardImage" src={object.album.images[0].url} alt={object.name} width="64" height="64" />
            <div className="SongCardTextWrapper">
                <p className="SongCardTitle" >{object.name}</p>
                <p className="SongCardArtist" >{object.artists[0].name}</p>
            </div>
            <BtnGreySmall id={object.id} handleClick={AddToPlaylist} copy="Add"/>
        </div>
    );
};

export default SongCard;