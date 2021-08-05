import React, { useState } from "react";
import "./SlideShow.css";

const SlideShow = ({ slideData, activeSlide, setUserFormation }) => {
	// DO NOT PUSH CODE UNTIL ASSIGNMENT IS COMPLETED
	console.log(slideData);
	console.log(activeSlide);

	return (
		<div className="slideshow">
			<img src={slideData[activeSlide].image} />
			<h3 className="title">{slideData[activeSlide].title}</h3>
			<button className="change-formation">Change Formation</button>
			<div className="slide-options">options</div>
		</div>
	);
};

export default SlideShow;
