import React from 'react';
import '../App.css';
import Header from '../Components/header';

function plantFacts() {
	return (
		<div className='plantFactsCont'>
			<Header />
			<div className='factsCont'>
				<h1 className='factsTitle'>Plant Facts</h1>
				<div className='prghFacts'>
					<p>
						<span>OVERWATERING KILLS YOUR PLANTS</span>Stick your finger about an inch deep into any plant, when you
						take your finger out if a lot of dirt sticks to your finger DO NOT WATER YOUR PLANT... BUT if you stick your
						finger in and there's not much dirt sticking to your finger and it feels dry then it's time to water your
						plant.
					</p>
					<p>
						Do not put new plants with your existing plants for 14 days. The nursery that you bought it from can have
						pests and if you surround that new plant with your older plants you can end up giving your healthy plants
						pests.
					</p>
					<p>
						Spring is the best time to repot your plants because with more sunlight they are going to grow faster, but
						only go up a pot size 1-2 inches bigger, the bigger the pot the more possibility of root rot.
					</p>
					<p>If your plants roots are coiling around themselves that means it's time to repot!</p>
				</div>
			</div>
		</div>
	);
}

export default plantFacts;
