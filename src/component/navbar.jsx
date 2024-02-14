import './navbar.css';
import Fav from '../Img/FavImg.png';
import Profile from '../Img/Profile.jpg';
import ASong from '../Img/Plus_Song.png';

function Navbar() {
    return (
        <div>
            <header className="Navbar">
                <div className='FavImgs'>
                    <button> 
                        <img src={Fav} alt='favourted img' />
                    </button>
                </div>
                <div className='Profile'>
                    <button> 
                        <img src={Profile} alt='Profile img' />
                    </button>
                </div>
                <div className='AddSong'>
                    <button> 
                        <img src={ASong} alt='Profile img' />
                    </button>
                </div>
            </header>
        </div>
    );
}

export default Navbar;
