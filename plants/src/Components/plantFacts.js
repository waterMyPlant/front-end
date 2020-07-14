// import React from 'react';
// import '../App.css';
// import Header from '../Components/header';

// function plantFacts() {
// 	return (
// 		<div className='plantFactsCont'>
// 			<Header />
// 			<div className='factsCont'>
// 				<h1 className='factsTitle'>Plant Facts</h1>
// 				<div className='prghFacts'>
// 					<p>
// 						<span>OVERWATERING KILLS YOUR PLANTS</span>Stick your finger about an inch deep into any plant, when you
// 						take your finger out if a lot of dirt sticks to your finger DO NOT WATER YOUR PLANT... BUT if you stick your
// 						finger in and there's not much dirt sticking to your finger and it feels dry then it's time to water your
// 						plant.
// 					</p>
// 					<p>
// 						Do not put new plants with your existing plants for 14 days. The nursery that you bought it from can have
// 						pests and if you surround that new plant with your older plants you can end up giving your healthy plants
// 						pests.
// 					</p>
// 					<p>
// 						Spring is the best time to repot your plants because with more sunlight they are going to grow faster, but
// 						only go up a pot size 1-2 inches bigger, the bigger the pot the more possibility of root rot.
// 					</p>
// 					<p>If your plants roots are coiling around themselves that means it's time to repot!</p>
// 				</div>
// 			</div>
// 		</div>
// 	);
// }

// export default plantFacts;
import React from 'react';

import {
	Accordion,
	AccordionItem,
	AccordionItemHeading,
	AccordionItemButton,
	AccordionItemPanel,
} from 'react-accessible-accordion';
import Header from '../Components/header';
// Demo styles, see 'Styles' section below for some notes on use.
import 'react-accessible-accordion/dist/fancy-example.css';

export default function plantFacts() {
	return (
		<div className='plantFactsCont'>
			<Header />
			<div className='factsCont'>
				<h1 className='factsTitle'>Frequently Asked Plant Questions</h1>
				<div className='prghFacts'>
					<Accordion>
						<AccordionItem>
							<AccordionItemHeading>
								<AccordionItemButton>OVERWATERING KILLS YOUR PLANTS, when should I water my plant?</AccordionItemButton>
							</AccordionItemHeading>
							<AccordionItemPanel>
								<p>
									Stick your finger about an inch deep into any plant, when you take your finger out if a lot of dirt
									sticks to your finger DO NOT WATER YOUR PLANT... BUT if you stick your finger in and there's not much
									dirt sticking to your finger and it feels dry then it is time to water your plant.
								</p>
							</AccordionItemPanel>
						</AccordionItem>
						<AccordionItem>
							<AccordionItemHeading>
								<AccordionItemButton>How do I keep my old plants pest free from my new plants?</AccordionItemButton>
							</AccordionItemHeading>
							<AccordionItemPanel>
								<p>
									Do not put new plants with your existing plants for 14 days. The nursery that you bought it from can
									have pests and if you surround that new plant with your older plants you can end up giving your
									healthy plants pests.
								</p>
							</AccordionItemPanel>
						</AccordionItem>
						<AccordionItem>
							<AccordionItemHeading>
								<AccordionItemButton>When is the best time to repot my plants?</AccordionItemButton>
							</AccordionItemHeading>
							<AccordionItemPanel>
								<p>
									Spring is the best time to repot your plants because with more sunlight they are going to grow faster,
									but only go up a pot size 1-2 inches bigger, the bigger the pot the more possibility of root rot.
								</p>
							</AccordionItemPanel>
						</AccordionItem>
						<AccordionItem>
							<AccordionItemHeading>
								<AccordionItemButton>How do I know my plant needs to be repotted?</AccordionItemButton>
							</AccordionItemHeading>
							<AccordionItemPanel>
								<p>
									If your plants roots are coiling around themselves that means it's time to repot. When repotting make
									sure not to use moist soil, you can end up overwatering your plant by accident!
								</p>
							</AccordionItemPanel>
						</AccordionItem>
					</Accordion>
				</div>
			</div>
		</div>
	);
}
