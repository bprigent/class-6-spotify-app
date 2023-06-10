import {useEffect, useState} from 'react';
import Form from './Form';

import React from 'react';
import axios from 'axios';



function Search(){

    //set state variables
    const [searchKey, setSearchKey] = useState("");
    const [songs, setSongs] = useState([]);
    //get tokent from local storage
    const token = window.localStorage.getItem("token");

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
        setSongs(data.tracks.items)
    };


    const renderSongs = () => {
        return songs.map(track => (
            <div key={track.id}>
                {track.name} <br/>
                {track.artists[0].name}
                <br/>
                <br/>
            </div>
        ))
    };
    
    //Get text value inside input
    const getInputValue = (e) => setSearchKey(e.target.value);

    return (
        <div>
            <Form handleTypeInInput={getInputValue} handleSubmit={SearchSongs} />
            <div>{renderSongs()}</div>
        </div> 
    );
};

export default Search;