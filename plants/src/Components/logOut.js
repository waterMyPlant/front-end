import React from 'react';
import { Link } from 'react-router-dom';

const logOut = () => {
	return (
		<Link className='titleNav' to='/' onClick={() => localStorage.clear()}>
			Logout
		</Link>
	);
};

export default logOut;
