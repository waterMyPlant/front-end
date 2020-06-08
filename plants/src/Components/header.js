import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header = () => {
	return (
		<nav className='nav_bar'>
			<Link className='titleNav' to='/'>
				<h1>Plants</h1>
			</Link>
			<Link className='titleNav' to='/facts'>
				<h1>List of Facts</h1>
			</Link>
			<Link className='titleNav' to='/plants'>
				<h1>List of Plants</h1>
			</Link>
		</nav>
	);
};

export default Header;
