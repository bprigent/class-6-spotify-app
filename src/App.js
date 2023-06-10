//import css
import './App.css';

//import JSX components
import Nav from './Nav';
import {FontH1, FontH2} from './Fonts';
import Search from "./Search";
import SpotifyAuth from "./SpotifyAuth";

// app function
function App() {

  return (
    <div className="App">
      <Nav />
      <div className='appBody'>
        <div className='AppCol1'>
          <div className='AppCol1-inner_wrapper'>
            <SpotifyAuth />
            <FontH1 copy="Search a song" />
            <Search />
          </div>
        </div>
        <div className='AppCol2'>
          <FontH2 copy="Your playlist" />
        </div>
      </div>
    </div>
  );
};

export default App;
