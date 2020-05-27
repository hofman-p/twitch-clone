import React from 'react';
import twitchLogo from './TwitchIcon.svg';
import searchIcon from './SearchIcon.svg';
import menuIcon from './MenuIcon.svg';

function Header() {
  return (
    <div>
      <nav className="headerTop">
        <ul className="menuList">
          <li className="navLinks">
            <img src={twitchLogo} alt="Twitch Logo" className="twitchLogo"/>
          </li>
          <li className="navLinks">
            Top Games
          </li>
          <li className="navLinks">
            Top Streams
          </li>
          <li className="navLinks">
            <form className="formSubmit">
              <input type="text" className="searchInput"/>
              <button type="submit">
                <img src={searchIcon} alt="Search Icon responsive" className="searchIcon"/>
              </button>
            </form>
          </li>
        </ul>
      </nav>
      <div className="menuResBtn">
        <img src={menuIcon} alt="menu icon"/>
      </div>
    </div>
  )
}

export default Header;