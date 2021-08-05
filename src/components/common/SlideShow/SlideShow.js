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
		console.log(slideData.indexOf(activeSlide));
	}, [activeSlide, slideData, setUserFormation]);

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
					{slideData.map(slide =>
						slideData[activeSlide].id === slide.id ? (
							<svg
								key={slide.id}
								xmlns="http://www.w3.org/2000/svg"
								width="16"
								height="16"
								fill="currentColor"
								className="box checked"
								viewBox="0 0 16 16"
							>
								<path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
								<path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
							</svg>
						) : (
							<div key={slide.id} className="box unchecked" />
						)
					)}
				</div>
			</article>
		</section>
	);
};

export default SlideShow;
