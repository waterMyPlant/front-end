import React from 'react';

const Plant = (props) => {
	return (
		<div>
			<h1>Name: {props.plant.name}</h1>
			<img src={props.plant.image_url} />
			<p>Height: {props.plant.water_frequency}</p>
			<p>Light: {props.plant.light}</p>
			<p>Pet Friendly: {props.plant.pet_friendly}</p>
		</div>
	);
};
export default Plant;
