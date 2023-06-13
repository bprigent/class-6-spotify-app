import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {PlaylistSongCard} from './SongCard';



//this function takes the array of song IDs stored in APP.js and finds the relevant info from the spotify database. then show that info.
function RenderPlayList ({arr}) {

    //get token from local storage
    const token = window.localStorage.getItem("token");
    //create empty array for receiving proper data
    const [finalArray, setfinalArray] = useState([]);

    //useEffect hook is here to prevent infinite loop
    useEffect(() => {
        //get details of one single song
        async function getSingleTrackDetail(trackID) {
            //get the data from spotify about this song
            const {data} = await axios.get(`https://api.spotify.com/v1/tracks/${trackID}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            //store specific data from song
            const songName = data.name;
            const artistName = data.artists[0].name;
            const albumUrl = data.album.images[0].url;

            //create song object
            const obj = {
                name: songName,
                artist: artistName,
                url: albumUrl,
                id: trackID
            }
            //return song object
            return obj;
        };

        //get all track details
        async function getAllTrackDetails(array) {
            const newArray = await Promise.all(array.map(track => getSingleTrackDetail(track.id)));
            setfinalArray(newArray);
        };

        //call function with the correct array
        getAllTrackDetails(arr);

    }, [arr, token]);

    // Render
    if (!finalArray.length) {
        return <div>Loading...</div>
    }

    return (
        <div>
            {finalArray.map((obj) => (
                <PlaylistSongCard object={obj}/>
            ))}
        </div>
    );

};

export default RenderPlayList;