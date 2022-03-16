import React from "react";

const Power = ({ index, value, cost, selectedIndex, handleSelect }) => {
  return (
    <div
      className={`power-container ${index === selectedIndex && "active"}`}
      onClick={() => {
        handleSelect("power", index, cost);
      }}
    >
      <p>{value} MW</p>
      <p>+{cost}€</p>
    </div>
  );
};

export default Power;
