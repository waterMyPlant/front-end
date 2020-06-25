import React from 'react';
import '../App.css';
import Header from '../Components/header';

function plantFacts() {
	return (
		<div className='plantFactsCont'>
			<Header />
			<h1>Plant Facts</h1>
			<p>Some facts about plants</p>
		</div>
	);
}

export default plantFacts;
