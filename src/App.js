//import css
import './App.css';
import React, { createContext, useContext, useState } from 'react';

import RenderPlayList from "./RenderPlayList";


//import JSX components
import Nav from './Nav';
import {FontH1, FontH2} from './Fonts';
import Search from "./Search";

// app function
function App() {

  // here is the list of song id of my playlist
  const [playList, setPlayList] = useState([
      {
          id:"3sl4dcqSwxHVnLfqwF2jly"
      }
  ]);

  // here is a function to add a song to a playlist, it is now available in search
  const addSongToPlaylist = (passedID) => {
    
    //create a new ID object, formated so that 
    const newID = {
      id: passedID
    };

    // update the playlist with the ID.
    setPlayList([newID, ...playList])
  };

  return (
    <div className="App">
      <Nav />
      <div className='appBody'>
        <div id="AppCol1" className='AppCol1'>
          <FontH1 copy="Search a song" />
          <Search addSongToPlaylist={addSongToPlaylist}/>
        </div>
        <div className='AppCol2'>
          <FontH2 copy="Your playlist" />
          <RenderPlayList arr={playList}/>
        </div>
      </div>
    </div>
  );
};

export default App;


