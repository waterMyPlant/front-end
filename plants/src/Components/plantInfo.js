import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Plant from './plants.js';
import { fetchPlants } from '../actions';
import Header from '../Components/header';

const PlantInfo = (props) => {
	useEffect(() => {
		props.fetchPlants();
	}, []);
	if (props.isFetching) {
		return <h2>Loading Plants... </h2>;
	}
	return (
		<div>
			<Header />
			<div className='grid-plant'>
				{props.error && <p>{props.error}</p>}
				{props.Plants.map((plant) => <Plant key={plant.id} plant={plant} />)}
			</div>
		</div>
	);
};

const mapStateToProps = (state) => {
	return {
		Plants     : state.Plants,
		isFetching : state.isFetching,
		error      : state.error,
	};
};
export default connect(mapStateToProps, { fetchPlants })(PlantInfo);
