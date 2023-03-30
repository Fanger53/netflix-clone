import './header.scss';

import React from 'react'

const Header = ({black}) => {
  return (
    <header className={black ? 'header--black' : ''} >
        <div className='header--netflixLogo'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/320px-Netflix_2015_logo.svg.png" alt="netflix_logo" />
        </div>
        <div className='header--userLogo'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="user_logo"/>
        </div>
    </header>
  )
}

export default Header;
