//import css
import './App.css';
import React, { createContext, useContext, useState } from 'react';
import RenderPlayList from "./RenderPlayList";

//import JSX components
import Nav from './Nav';
import {FontH1, FontH2} from './Fonts';
import Search from "./Search";
import { LoginModal } from './LoginModal';

// app function
function App() {

  // Variable for showing the login modale
  const [showLogin, setShowLogin] = useState(false);

  // The showLoginModal function would simply set this state to true
  function showLoginModal() {
    setShowLogin(true);
  }

  // here is the list of song id of my playlist, starts empty
  const [playList, setPlayList] = useState([]);
  
  //check if id is already added, we use this function is the search song card to not add the same song twice
  function IsSongAlreadyInPlayList (passedID) {
    return playList.some(item => item.id === passedID);
  };

  // function to add a song to a playlist state array, function used in search
  function addSongToPlaylist (passedID) {

    //check if id is already added
    if (!IsSongAlreadyInPlayList(passedID)) {

      //create a new ID object in the right format
      const newID = {
        id: passedID
      };

      // update the playlist with the ID.
      setPlayList([newID, ...playList])
    }
  };

  function deleteSongFromPlaylist (idToDelete) {
    console.log("hello")
    const newPlayList = playList.filter(item => item.id !== idToDelete);
    setPlayList(newPlayList);
  }

  return (
    <div className="App">
      <Nav />
      <div className='appBody'>
        <div id="AppCol1" className='AppCol1'>
          <FontH1 copy="Search a song" />
          <Search showLoginModal={showLoginModal} IsSongAlreadyInPlayList={IsSongAlreadyInPlayList} addSongToPlaylist={addSongToPlaylist}/>
        </div>
        <div className='AppCol2'>
          <FontH2 copy="Your playlist" />
          <RenderPlayList arr={playList} deleteSongFromPlaylist={deleteSongFromPlaylist} />
        </div>
      </div>
      {showLogin && <LoginModal onClose={() => setShowLogin(false)}/>}
    </div>
  );
};

export default App;


