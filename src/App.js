import './App.css';
import Nav from './Nav';
import {FontH1, FontH2} from './Fonts';
import Form from "./Form";

function App() {
  return (
    <div className="App">
      <Nav />
      <div className='appContent'>
        <div className='AppCol1'>
          <div className='AppCol1-inner_wrapper'>
            <FontH1 copy="Search a song" />
            <Form />
          </div>
          <div className='resultWrapper'>
            <FontH2 copy="Results" />
          </div>
        </div>
        <div className='AppCol2'>
          <FontH2 copy="Your playlist" />
          <FontH2 copy="Your playlist" />
        </div>
      </div>
    </div>
  );
};

export default App;
