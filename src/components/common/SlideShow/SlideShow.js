import React, { useState } from "react";
import "./SlideShow.css";

const SlideShow = ({
	slideData,
	initialActiveSlide,
	setUserFormation,
}) => {
	// DO NOT PUSH CODE UNTIL ASSIGNMENT IS COMPLETED
	const [activeSlide, setActiveSlide] = useState(initialActiveSlide);

	console.log(slideData);
	console.log(activeSlide);

	const handleActiveSlide = activeSlide => {
		// TODO: Set the new active slide index to the next array element
		const lastActiveSlide = slideData.length - 1;
		setActiveSlide(prev => (prev === lastActiveSlide ? 0 : prev + 1));
	};

	return (
		<section className="slideshow">
			<article className="image-column">
				<img
					src={slideData[activeSlide].image}
					alt={slideData[activeSlide].image}
				/>
			</article>
			<article className="slideshow-column info">
				<h3 className="title">{slideData[activeSlide].title}</h3>
				<button
					className="change-formation"
					onClick={() => handleActiveSlide(activeSlide)}
				>
					Change Formation
				</button>
				<div className="slide-options">options</div>
			</article>
		</section>
	);
};

export default SlideShow;
