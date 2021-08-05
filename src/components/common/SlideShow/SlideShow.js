import React, { useEffect, useState } from "react";
import "./SlideShow.css";

const SlideShow = ({
	slideData,
	initialActiveSlide,
	setUserFormation,
}) => {
	// DO NOT PUSH CODE UNTIL ASSIGNMENT IS COMPLETED
	const [activeSlide, setActiveSlide] = useState(initialActiveSlide);

	const handleActiveSlide = () => {
		const lastActiveSlide = slideData.length - 1;
		setActiveSlide(prev => (prev === lastActiveSlide ? 0 : prev + 1));
	};

	useEffect(() => {
		setUserFormation(slideData[activeSlide]);
	}, [activeSlide, slideData, setUserFormation]);

	return (
		<section className="slideshow">
			<article className="slideshow__image-column">
				<img
					className="formation-image"
					src={slideData[activeSlide].image}
					alt={slideData[activeSlide].image}
				/>
			</article>
			<article className="slideshow__info-column">
				<h2 className="title">{slideData[activeSlide].title}</h2>
				<button className="change-formation" onClick={handleActiveSlide}>
					Change Formation
				</button>
				<div className="slideshow-dots">
					{slideData.map(({ id }) =>
						slideData[activeSlide].id === id ? (
							<span key={id} className="material-icons checked">
								check_circle
							</span>
						) : (
							<span key={id} className="material-icons unchecked">
								radio_button_unchecked
							</span>
						)
					)}
				</div>
			</article>
		</section>
	);
};

export default SlideShow;
