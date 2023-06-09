import {useState} from 'react';
import Form from './Form';
import {SongCard} from './SongCard';
import "./Search.css";
import {LoginModal} from "./LoginModal.js";

import React from 'react';
import axios from 'axios';



function Search({showLoginModal, addSongToPlaylist, IsSongAlreadyInPlayList}){

    //set state variables
    const [searchKey, setSearchKey] = useState("");
    const [songs, setSongs] = useState([]);

    //get token from local storage
    const token = window.localStorage.getItem("token");

    //Search song in Spotify database
    async function SearchSongs (e) {
        //lets try to search the song, we do this to catch 401 errors and ask users to login 
        try {
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
            document.getElementById("NoResults").style.display = "none";
        
        //now we are doing someting with the error
        } catch (error) {
            console.error(error);
            if (error.response && error.response.status === 401) {
                // Display your JSX login element
                showLoginModal();
            }
        }

    };

    //Create song result list
    const renderSongs = () => {
        return (
            <div className="SongCards-ParentWrapper" >
                {songs.map(track => (
                    <SongCard IsSongAlreadyInPlayList={IsSongAlreadyInPlayList} addSongToPlaylist={addSongToPlaylist} object={track}/>
                ))}
            </div>
        );
        
        
    };
    
    //Get text value inside input
    const getInputValue = (element) => {
        //clear songs array of the input is cleared
        if (!element.target.value) {
            setSongs([])
            //change css to center div element
            document.getElementById("AppCol1").style.justifyContent = "center";
            document.getElementById("NoResults").style.display = "block";
        }
        //set text value to enable search
        setSearchKey(element.target.value)
    };

    return (
        <>
            <Form handleTypeInInput={getInputValue} handleSubmit={SearchSongs} />
            <p id="NoResults">No results, search something...</p>
            {renderSongs()}
        </>
            
    );
};


export default Search;

