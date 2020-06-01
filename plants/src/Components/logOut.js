import React from 'react';
import { Link } from 'react-router-dom';

const LogOut = () => {
	return (
		<Link className='log-out' to='/' onClick={() => localStorage.clear()}>
			Sign Out
		</Link>
	);
};

export default LogOut;
