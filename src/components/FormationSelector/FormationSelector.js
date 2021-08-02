import React, { useContext } from 'react';
import UserSessionContext from '../../contexts/UserSessionContext';
import formations from '../../data/formations';
import SlideShow from '../common/SlideShow';

const FormationSelector = () => {

  // ---
  // Essential variables/objects to assist implementation
  // ---
  const userSessionState = useContext(UserSessionContext); // Context object used to store user's input shared throughout the app
  const [userFormation, setUserFormation] = userSessionState.formation; // Stateful value and update function for setting the user's formation choice (make sure this function is called on slide change)
  const slideData = formations; // Array of objects, one for each slide, containing data such as the image and caption to display (ref: src/data/formations.js)
  const activeSlide = formations.map(({id}) => id).indexOf(userFormation.id); // Index of slide to show (kept in sync w/ user's formation selection)

  return (
    // ---
    // Render your SlideShow component below
    // (Ensure you utilise the above slide data, active slide index and user formation update function on slide change)
    // ---
    <>
    </>
  );

};

export default FormationSelector;