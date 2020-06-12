import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import LogOut from './logOut';

const Header = () => {
  let token = localStorage.getItem('token');
  return (
    <div className='header'>
      <nav className='nav_bar'>
        <Link className='titleNav' to='/'>
          <h1>Home</h1>
        </Link>
        <Link className='titleNav' to='/facts'>
          <h1>List of Facts</h1>
        </Link>
        <Link className='titleNav' to='/plants'>
          <h1>List of Plants</h1>
        </Link>
        {token ? (
          <LogOut />
        ) : (
          <Link className='titleNav' to='/signIn'>
            <h1>Sign In</h1>
          </Link>
        )}
      </nav>
    </div>
  );
};

export default Header;
