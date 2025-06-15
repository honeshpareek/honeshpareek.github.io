import React, { useEffect, useRef } from "react";
import "./style.css"; // Ensure you have the correct path to your CSS file

export const Eyes = () => {
  const pupilsRef = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      pupilsRef.current.forEach((pupil) => {
        const eye = pupil.parentElement;
        const rect = eye.getBoundingClientRect();

        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const deltaX = e.clientX - eyeCenterX;
        const deltaY = e.clientY - eyeCenterY;

        const maxMovement = 15;
        const angle = Math.atan2(deltaY, deltaX);
        const distance = Math.min(maxMovement, Math.hypot(deltaX, deltaY));

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        pupil.style.transform = `translate(${x}px, ${y}px)`;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div>
      <div className="eyes">
        {[0, 1].map((i) => (
          <div className="eye" key={i}>
            <div
              className="pupil"
              ref={(el) => (pupilsRef.current[i] = el)}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};
