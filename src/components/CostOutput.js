import React from "react";

const CostOutput = ({ selected }) => {
  const total =
    selected.base +
    selected.color.cost +
    selected.power.cost +
    selected.warp.cost +
    selected.options.cost;

  return (
    <div className='cost-container'>
      <div className='cost-wrapper'>
        <div className='cost-left'>
          <p>Base price:</p>
          <p>Color:</p>
          <p>Power:</p>
          <p>Warp drive:</p>
          <p>Option package:</p>
        </div>
        <div className='cost-right'>
          <p>{selected.base}€</p>
          <p>+{selected.color.cost}€</p>
          <p>+{selected.power.cost}€</p>
          <p>+{selected.warp.cost}€</p>
          <p>+{selected.options.cost}€</p>
        </div>
      </div>
      <div className='total'>
        <div className='total-left'>
          <p className='cost-total'>Total:</p>
        </div>
        <div className='cost-right'>
          <p className='cost-total'>{total}€</p>
        </div>
      </div>
    </div>
  );
};

export default CostOutput;
