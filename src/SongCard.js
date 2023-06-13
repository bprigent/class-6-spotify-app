import "./SongCard.css";
import {BtnGreySmall} from "./Buttons"
//import {updatePlaylist} from "./AddToPlaylist";


//passing object and updatePlaylist
export function SongCard({addSongToPlaylist, object}) {
    return (
        <div className="SongCardWrapper" key={object.id}>
            <img className="SongCardImage" src={object.album.images[0].url} alt={object.name} width="64" height="64" />
            <div className="SongCardTextWrapper">
                <p className="SongCardTitle" >{object.name}</p>
                <p className="SongCardArtist" >{object.artists[0].name}</p>
            </div>
            
            <BtnGreySmall id={object.id} handleClick={() => addSongToPlaylist(object.id)} copy="Add"/>
        </div>
    );
};

export function PlaylistSongCard({object}) {
    return (
        <div className="SongCardWrapper" key={object.id}>
            <img className="SongCardImage" src={object.url} alt={object.name} width="64" height="64" />
            <div className="SongCardTextWrapper">
                <p className="SongCardTitle" >{object.name}</p>
                <p className="SongCardArtist" >{object.artist}</p>
            </div>
        </div>
    );
};