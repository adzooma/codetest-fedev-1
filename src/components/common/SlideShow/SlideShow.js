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

	const handleActiveSlide = () => {
		// TODO: Set the new active slide index to the next array element
		const lastActiveSlide = slideData.length - 1;
		setActiveSlide(prev => (prev === lastActiveSlide ? 0 : prev + 1));
	};

	return (
		<section className="slideshow">
			<article className="slideshow__image-column">
				<img
					src={slideData[activeSlide].image}
					alt={slideData[activeSlide].image}
				/>
			</article>
			<article className="slideshow__info-column">
				<h2 className="title">{slideData[activeSlide].title}</h2>
				<button className="change-formation" onClick={handleActiveSlide}>
					Change Formation
				</button>
				<div className="slideshow-options">
					{slideData.map(({ id }) => (
						<div key={id} className="box" />
					))}
				</div>
			</article>
		</section>
	);
};

export default SlideShow;
