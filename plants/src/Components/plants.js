import React from 'react';

const Plant = (props) => {
	console.log(props.plant.image_url);
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
