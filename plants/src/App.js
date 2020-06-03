import React from 'react';
import './App.css';
import SignIn from './Components/signIn';
import SignUp from './Components/signUp';
import Header from './Components/header';
import { Route } from 'react-router-dom';

function App() {
	return (
		<div className='container'>
			<Header />
			<Route exact path='/signIn' component={SignIn} />
			<Route exact path='/' component={SignUp} />
		</div>
	);
}

export default App;
