import React from 'react';
import axios from 'axios';



function RenderPlayList ({arr}) {

    //get token from local storage
    const token = window.localStorage.getItem("token");


    //create empty array for receiving proper data
    const finalArray = [];


    //get details of one single song
    async function getSingleTrackDetail(trackID) {
        const {data} = await axios.get(`https://api.spotify.com/v1/tracks/${trackID}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });

        // use the info that we got to save them in variables.
        const songName = data.name;
        const artistName = data.artists.name;
        const url = data.album.images[0].url;

        console.log(`Song name: ${songName}. Artist name: ${artistName}`);
        
        //add data to new array
        finalArray.push({name:{songName},artist:{artistName},url:{url}})

    };


    const getAllTrackDetails = async () => {
        arr.map((track) => {
            getSingleTrackDetail(track.id)
        });
    };

    getAllTrackDetails().then((finalArray) => 

        return finalArray.map(track => (
            <div>
                <p>{track.name}</p>
            </div>
        ))

    );
};

export default RenderPlayList;