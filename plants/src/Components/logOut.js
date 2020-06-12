import React from 'react';
import { Link } from 'react-router-dom';

const logOut = () => {
  return (
    <Link className='titleNav' to='/' onClick={() => localStorage.clear()}>
      <h1>Log Out</h1>
    </Link>
  );
};

export default logOut;
