// src/MyButton.jsx
import React from "react";
import PropTypes from "prop-types";

/**
 * A reusable button component.
 * @param {string} label - The text to display on the button.
 * @param {function} onClick - The click handler function.
 * @param {string} type - The button type (default: "button").
 */
export default function MyButton({ label, onClick, type = "button" }) {
  // Validate that label is not empty
  if (!label || typeof label !== "string") {
    console.error("MyButton: 'label' prop must be a non-empty string.");
    return null;
  }

  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        padding: "10px 20px",
        backgroundColor: "#007bff",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
}

MyButton.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.string,
};