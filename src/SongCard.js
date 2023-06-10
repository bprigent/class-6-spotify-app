import "./SongCard.css";

function SongCard({object}) {
    return (
        <div className="SongCardParentWrapper" key={object.id}>
            <p className="SongCardTitle" >{object.name}</p>
            <p className="SongCardArtist" >{object.artists[0].name}</p>
        </div>
    );
};

export default SongCard;