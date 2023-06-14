import "./SongCard.css";
import {BtnGreySmall, BtnIconClose} from "./Buttons"
//import {updatePlaylist} from "./AddToPlaylist";


//passing object and updatePlaylist
export function SongCard({addSongToPlaylist, IsSongAlreadyInPlayList, object}) {
    return (
        <div className="SongCardWrapper" id={object.id} key={object.id}>
            <img className="SongCardImage" src={object.album.images[0].url} alt={object.name} width="64" height="64" />
            <div className="SongCardTextWrapper">
                <p className="SongCardTitle" >{object.name}</p>
                <p className="SongCardArtist" >{object.artists[0].name}</p>
            </div>
            {/* if this song is already added*/}
            {IsSongAlreadyInPlayList(object.id) ? <p className="SongCardAddedTag">Added</p> : <BtnGreySmall handleClick={() => addSongToPlaylist(object.id)} copy="Add"/>}
        </div>
    );
};

export function PlaylistSongCard({deleteSongFromPlaylist, object}) {
    return (
        <div className="SongCardWrapper" id={object.id} key={object.id}>
            <img className="SongCardImage" src={object.url} alt={object.name} width="64" height="64" />
            <div className="SongCardTextWrapper">
                <p className="SongCardTitle" >{object.name}</p>
                <p className="SongCardArtist" >{object.artist}</p>
            </div>
            <BtnIconClose handleClick={() => deleteSongFromPlaylist(object.id)} />
        </div>
    );
};