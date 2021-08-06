import React from "react";
import "./SlideShow.css";

const SlideShow = ({ slideData, activeSlide, setUserFormation }) => {
	// Transition to the next active slide
	const handleFormationChange = () => {
		const lastSlide = slideData.length - 1;
		const nextSlide = activeSlide === lastSlide ? 0 : activeSlide + 1;
		setUserFormation(slideData[nextSlide]);
	};

	return (
		<section className="slideshow">
			<figure className="slideshow__image-column">
				<img
					className="formation-image"
					src={slideData[activeSlide].image}
					alt={slideData[activeSlide].image}
				/>
			</figure>
			<article className="slideshow__info-column">
				<h2 className="title">{slideData[activeSlide].title}</h2>
				<button
					className="change-formation"
					onClick={handleFormationChange}
				>
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
