import React from "react";

const Power = ({ index, value, cost, selectedIndex, setSelected }) => {
  return (
    <div
      className={`power-container ${index === selectedIndex && "active"}`}
      onClick={(e) => {
        setSelected((prevState) => ({
          ...prevState,
          power: { index: index, cost: cost },
        }));
      }}
    >
      <p>{value} MW</p>
      <p>+{cost}€</p>
    </div>
  );
};

export default Power;
