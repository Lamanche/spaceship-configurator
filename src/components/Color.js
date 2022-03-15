import React from "react";

const Color = ({ index, color, cost, name, selectedIndex, setSelected }) => {
  return (
    <div
      className={`color-container ${index === selectedIndex && "active"}`}
      onClick={(e) => {
        setSelected((prevState) => ({
          ...prevState,
          color: { index: index, cost: cost },
        }));
      }}
    >
      <div style={{ backgroundColor: `${color}` }}></div>
      <p>+{cost}€</p>
      <p>{name}</p>
    </div>
  );
};

export default Color;
