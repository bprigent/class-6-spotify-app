

import { useState } from "react";




export function AddToPlaylist(element) {

    
    const [playList, setPlayList] = useState([
        {
            id:"3sl4dcqSwxHVnLfqwF2jly"
        },
        {
            id:"1Yk0cQdMLx5RzzFTYwmuld"
        }
    ]);
    
    const songID = element.currentTarget.id;
    const newSongID = 
        {
            id: songID
        };
    

    setPlayList([...playList + newSongID])

    return playList.map(track => (
        <div>
            <p>{track.id}</p>
        </div>
    ));
    
};





/*export function RenderUserPlaylist () {

    return playList.map(track => (
        <div>
            <p>{track.id}</p>
        </div>
    ))
};*/