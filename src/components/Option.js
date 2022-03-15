import React from "react";
import polygon from "../Polygon.png";
import polygonInactive from "../PolygonInactive.png";

const Option = ({
  index,
  name,
  cost,
  includes,
  selectedIndex,
  setSelected,
}) => {
  const active = index === selectedIndex ? true : false;

  return (
    <div
      className={`options-container ${active && "active"}`}
      onClick={(e) => {
        setSelected((prevState) => ({
          ...prevState,
          options: { index: index, cost: cost },
        }));
      }}
    >
      <p>{name}</p>
      <p>{index === 0 ? " " : `+${cost}€`}</p>
      <div className='includes'>
        {includes.map((xtra, index) => {
          return (
            <p key={index} className='item'>
              <img src={active ? polygon : polygonInactive} alt='' />
              {xtra}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Option;
