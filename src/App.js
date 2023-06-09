//import css
import './App.css';

//import JSX components
import Nav from './Nav';
import {FontH1, FontH2} from './Fonts';
import Form from "./Form";
import SearchResultsList from "./SearchResultsList";
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
            <Form />
          </div>
          <div className='resultWrapper'>
            <FontH2 copy="Results" />
            <SearchResultsList />
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
