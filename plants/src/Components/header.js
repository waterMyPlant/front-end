import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logOut from './logOut';

const Header = () => {
	return (
		<nav className='nav_bar'>
			<a className='titlenav'>Plants</a>
			{/* <NavLink className='styledLink contact' to='/'>
				Sign Up
			</NavLink>
			<NavLink className='styledLink contact' to='/signIn'>
				Sign In
			</NavLink> */}
			<logOut />
		</nav>
	);
};

export default Header;
