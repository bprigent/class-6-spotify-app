import {useState} from 'react';
import Form from './Form';
import SongCard from './SongCard';
import {FontH2} from './Fonts';

import React from 'react';
import axios from 'axios';



function Search(){

    //set state variables
    const [searchKey, setSearchKey] = useState("");
    const [songs, setSongs] = useState([]);

    //get token from local storage
    const token = window.localStorage.getItem("token");

    //Search song in Spotify database
    async function SearchSongs (e) {
        e.preventDefault()
        const {data} = await axios.get("https://api.spotify.com/v1/search", {
            headers: {
                Authorization: `Bearer ${token}`
            },
            params: {
                q: searchKey,
                type: "track",
                limit: "30"
            }
        })
        //add data to song object
        setSongs(data.tracks.items)

        //change css class of container to show search on top
        document.getElementById("AppCol1").style.justifyContent = "flex-start";

    };

    //Create song result list
    const renderSongs = () => {
        return songs.map(track => (
            <SongCard object={track}/>
        ))
    };
    
    //Get text value inside input
    const getInputValue = (element) => {
        //clear songs array of the input is cleared
        if (!element.target.value) {
            setSongs([])
            //change css to center div element
            document.getElementById("AppCol1").style.justifyContent = "center";
        }
        //set text value to enable search
        setSearchKey(element.target.value)
    };

    return (
        <>
            <Form handleTypeInInput={getInputValue} handleSubmit={SearchSongs} />
            {!searchKey ? <p>No results</p> : <div>{renderSongs()}</div>}
        </>
            
    );
};

export default Search;

