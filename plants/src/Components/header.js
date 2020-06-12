import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import logOut from '../Components/LogOut';

const Header = () => {
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
				<logOut />
			</nav>
		</div>
	);
};

export default Header;
