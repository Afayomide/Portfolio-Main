import React, { useEffect, useState } from 'react';
import './rippleButton.css';

const RippleButton = ({ children }) => {
  const [ripples, setRipples] = useState([]); // State to hold ripple elements

  useEffect(() => {
    // Function to add a new ripple effect
    const addRipple = () => {
      setRipples((prevRipples) => [
        ...prevRipples,
        { id: Date.now() }, // Unique id for each ripple
      ]);
    };

    const intervalId = setInterval(addRipple, 2000); // Add ripple every 2 seconds

    return () => clearInterval(intervalId); // Clear interval on unmount
  }, []);

  return (
    <div className="ripple-container">
        <span  className="ripple ripple1" />
        <span  className="ripple ripple2" />
        <span  className="ripple ripple3" />
        <span  className="rippleripple4" />
      <div className='ripple-button-container'>
         <button className="ripple-button">
        {children}
      </button>
      </div>
     
    </div>
  );
};

export default RippleButton;
