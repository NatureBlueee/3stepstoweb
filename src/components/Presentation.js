import React from "react";
import "./Presentation.css";

const Presentation = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="presentation-overlay">
      <button className="close-button" onClick={onClose}>
        退出演示
      </button>
      <iframe
        src="/presentation.pdf"
        width="100%"
        height="100%"
        style={{ border: "none" }}
        allowFullScreen
      />
    </div>
  );
};

export default Presentation;
