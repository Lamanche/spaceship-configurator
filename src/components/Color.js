import React from "react";

const Color = ({ index, color, cost, name, selectedIndex, handleSelect }) => {
  return (
    <div
      className={`color-container ${index === selectedIndex && "active"}`}
      onClick={() => {
        handleSelect("color", index, cost);
      }}
    >
      <div style={{ backgroundColor: `${color}` }}></div>
      <p>+{cost}€</p>
      <p>{name}</p>
    </div>
  );
};

export default Color;
