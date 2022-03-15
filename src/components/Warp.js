import React from "react";

const Warp = ({ index, value, cost, selectedIndex, setSelected }) => {
  return (
    <div
      className={`power-container ${index === selectedIndex && "active"}`}
      onClick={(e) => {
        setSelected((prevState) => ({
          ...prevState,
          warp: { index: index, cost: cost },
        }));
      }}
    >
      <p>{value}</p>
      <p>+{cost}€</p>
    </div>
  );
};

export default Warp;
