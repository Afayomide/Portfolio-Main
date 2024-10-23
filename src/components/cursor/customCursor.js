// CustomCursor.js
import React, { useEffect, useState } from "react";
import "./customCursor.css"; // Import the CSS file for styling

const CustomCursor = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorText, setCursorText] = useState("Hi,"); // Set your text here

  useEffect(() => {
    // Update cursor position on mouse move
    const handleMouseMove = (event) => {
      setCursorPosition({ x: event.clientX, y: event.clientY });
    };

    // Add event listener for mouse move
    window.addEventListener("mousemove", handleMouseMove);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="custom-cursor"
      style={{ left: cursorPosition.x, top: cursorPosition.y }}
    >
      <span>{cursorText}</span>
    </div>
  );
};

export default CustomCursor;
