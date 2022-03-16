import React from "react";
import polygon from "../images/polygon.png";
import polygonInactive from "../images/polygonInactive.png";

const Option = ({
  index,
  name,
  cost,
  includes,
  selectedIndex,
  handleSelect,
}) => {
  const active = index === selectedIndex ? true : false;

  return (
    <div
      className={`options-container ${index === selectedIndex && "active"}`}
      onClick={() => {
        handleSelect("options", index, cost);
      }}
    >
      <p>{name}</p>
      {index !== 0 && <p>+{cost}€</p>}
      <div className='options-container__includes'>
        {includes.map((xtra, index) => {
          return (
            <p key={index} className='includes__item'>
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
