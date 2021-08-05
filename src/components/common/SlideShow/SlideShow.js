import React, { useState } from "react";
import "./SlideShow.css";

const SlideShow = ({ slideData, activeSlide, setUserFormation }) => {
	// DO NOT PUSH CODE UNTIL ASSIGNMENT IS COMPLETED
	console.log(slideData);
	console.log(activeSlide);

	return (
		<section className="slideshow">
			<article className="image-column">
				<img src={slideData[activeSlide].image} />
			</article>
			<article className="slideshow-column info">
				<h3 className="title">{slideData[activeSlide].title}</h3>
				<button className="change-formation">Change Formation</button>
				<div className="slide-options">options</div>
			</article>
		</section>
	);
};

export default SlideShow;
