import './Nav.css';
import SpotifyAuth from "./SpotifyAuth";


function Nav() {
    return (
      <div className="Nav">
        <p className="p-logo">Sooong</p>
        <div className='LoginSystemWrapper'>
          <SpotifyAuth />
        </div>
      </div>
    );
  }

export default Nav;