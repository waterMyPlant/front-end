import React from 'react';
import Header from '../Components/header';

const Plant = (props) => {
	return (
		<div className='plantCards'>
			<h1 className='titlePlant'>{props.plant.name}</h1>
			<img className='img' src={props.plant.image_url} />
			<p className='plantInformation'>Water Frequency: {props.plant.water_frequency}</p>
			<p className='plantInformation'>Light: {props.plant.light}</p>
			<p className='plantInformation'>Pet Friendly: {props.plant.pet_friendly}</p>
		</div>
	);
};
export default Plant;
