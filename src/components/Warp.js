import React from "react";

const Warp = ({ index, value, cost, selectedIndex, handleSelect }) => {
  return (
    <div
      className={`power-container ${index === selectedIndex && "active"}`}
      onClick={() => {
        handleSelect("warp", index, cost);
      }}
    >
      <p>{value}</p>
      <p>+{cost}€</p>
    </div>
  );
};

export default Warp;
