import React, { useEffect, useRef } from "react";

const MouseShadow = () => {
  const shadowRef = useRef(null);

  useEffect(() => {
    const shadow = shadowRef.current;

    const handleMouseMove = (event) => {
      shadow.style.left = `${event.clientX - shadow.offsetWidth / 2}px`;
      shadow.style.top = `${event.clientY - shadow.offsetHeight / 2}px`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div
        ref={shadowRef}
        style={{
          position: "fixed",
          width: "40px",
          height: "40px",
          backgroundColor: "transparent",
          borderRadius: "50%",
          pointerEvents: "none",
          boxShadow: "0 0 60px white, " + "inset 0 0 30px white",
          zIndex: 9999,
        }}
      />
    </>
  );
};

export default MouseShadow;
