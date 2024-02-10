'use client'
import { useState, useEffect } from "react";

function Cursor() {
    // Create state variables to track mouse position and custom cursor position
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [previousMouse, setPreviousMouse] = useState({ x: 0, y: 0 });
  const [circle, setCircle] = useState({ x: 0, y: 0 });

  // Create state variables to track scaling and rotation
  const [currentScale, setCurrentScale] = useState(0);
  const [currentAngle, setCurrentAngle] = useState(0);

  // Update mouse position on the 'mousemove' event
  useEffect(() => {
    const handleMouseMove = (e : any) => {
        console.log(e);
        
      setMouse({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Animation loop
  useEffect(() => {
    const tick = () => {
      // MOVE
      // Calculate circle movement based on mouse position and smoothing
      setCircle((prevCircle) => ({
        x: prevCircle.x + (mouse.x - prevCircle.x) * 0.17,
        y: prevCircle.y + (mouse.y - prevCircle.y) * 0.17,
      }));

      // SQUEEZE
      // 1. Calculate the change in mouse position (deltaMouse)
      const deltaMouseX = mouse.x - previousMouse.x;
      const deltaMouseY = mouse.y - previousMouse.y;
      // Update previous mouse position for the next frame
      setPreviousMouse({ x: mouse.x, y: mouse.y });
      // 2. Calculate mouse velocity using Pythagorean theorem and adjust speed
      const mouseVelocity = Math.min(
        Math.sqrt(deltaMouseX ** 2 + deltaMouseY ** 2) * 4,
        150
      );
      // 3. Convert mouse velocity to a value in the range [0, 0.5]
      const scaleValue = (mouseVelocity / 150) * 0.5;
      // 4. Smoothly update the current scale
      setCurrentScale((prevScale) => prevScale + (scaleValue - prevScale) * 0.17);

      // ROTATE
      // 1. Calculate the angle using the atan2 function
      const angle = Math.atan2(deltaMouseY, deltaMouseX) * (180 / Math.PI);
      // 2. Check for a threshold to reduce shakiness at low mouse velocity
      if (mouseVelocity > 20) {
        setCurrentAngle(angle);
      }

      // Request the next frame to continue the animation
      requestAnimationFrame(tick);
    };

    // Start the animation loop
    tick();

    // Clean up function
    return () => cancelAnimationFrame(tick);
  }, [mouse, previousMouse]);

  // Apply transformations to the circle element
  const circleStyle = {
    transform: `translate(${circle.x}px, ${circle.y}px) rotate(${currentAngle}deg) scale(${1 + currentScale}, ${1 - currentScale})`,
  };
  return (
    <div className="absolute h-[40px] w-[40px] border border-orange-950 shadow-lg rounded-full pointer-events-none z-[1000]" style={circleStyle}>
      
    </div>
  );
}

export default Cursor;
