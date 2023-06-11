//import css
import './App.css';

//import JSX components
import Nav from './Nav';
import {FontH1, FontH2} from './Fonts';
import Search from "./Search";
import { AddToPlaylist } from './AddToPlaylist';

// app function
function App() {

  return (
    <div className="App">
      <Nav />
      <div className='appBody'>
        <div id="AppCol1" className='AppCol1'>
          <FontH1 copy="Search a song" />
          <Search />
        </div>
        <div className='AppCol2'>
          <FontH2 copy="Your playlist" />
          <AddToPlaylist />
        </div>
      </div>
    </div>
  );
};

export default App;


