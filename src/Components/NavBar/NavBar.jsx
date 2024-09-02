import React from 'react';
import Logo from '../../assets/img/ArtVision(2).png';
import SearchIcon from '../../assets/svg/search.svg';
import HomeIcon from '../../assets/svg/home_fill.svg';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="nav-bar">
        <div className="logo">
            <img src={Logo} alt="ArtVision Logo" />
        </div>
        <div className="search">
            <img src={SearchIcon} alt="Search" />
            {/* <svg fill="#767676" aria-label="Search icon" height="16" role="img" viewBox="0 0 24 24" width="16"><path d="M10 16a6 6 0 1 1 .01-12.01A6 6 0 0 1 10 16m13.12 2.88-4.26-4.26a10 10 0 1 0-4.24 4.24l4.26 4.26a3 3 0 1 0 4.24-4.24"></path></svg> */}
            <input type="text" placeholder="Search" />
        </div>
        <div className="navigation">
            <a><img src={HomeIcon} alt="Home" /></a>
            <a><img src={HomeIcon} alt="Explore" /></a>
            <a><img src={HomeIcon} alt="Create" /></a>
        </div>
    </nav>
  );
};

export default NavBar;
