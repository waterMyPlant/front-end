import React from 'react';

const Plant = (props) => {
	console.log(props.plant.image_url);
	return (
		<div>
			<h1>{props.plant.name}</h1>
			<img src={props.plant.image_url} />
			<p>Water Frequency: {props.plant.water_frequency}</p>
			<p>Light: {props.plant.light}</p>
			<p>Pet Friendly: {props.plant.pet_friendly}</p>
		</div>
	);
};
export default Plant;
