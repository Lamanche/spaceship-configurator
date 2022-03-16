import "./App.scss";
import { useState } from "react";
import { data } from "./data/inputData";
import Color from "./components/Color";
import Power from "./components/Power";
import Warp from "./components/Warp";
import Option from "./components/Option";
import CostTotal from "./components/CostTotal";

function App() {
  const [selected, setSelected] = useState({
    base: 1000,
    color: { index: 0, cost: 0 },
    power: { index: 0, cost: 0 },
    warp: { index: 0, cost: 0 },
    options: { index: 0, cost: 0 },
  });

  const handleSelect = (name, index, cost) => {
    setSelected((prevState) => ({
      ...prevState,
      [name]: { index: index, cost: cost },
    }));
  };

  return (
    <main className='main-container'>
      <h1 className='main-container__headline'>Spaceship configurator</h1>
      <div className='main-wrapper'>
        <div className='main-wrapper__left'>
          <section className='section-container'>
            <h1 className='section-container__name'>Select color:</h1>
            {data.colors.map((color, index) => {
              return (
                <Color
                  key={index}
                  index={index}
                  color={color.color}
                  cost={color.cost}
                  name={color.name}
                  selectedIndex={selected.color.index}
                  handleSelect={handleSelect}
                />
              );
            })}
          </section>
          <section className='section-container'>
            <h1 className='section-container__name'>Select power:</h1>
            {data.powers.map((power, index) => {
              return (
                <Power
                  key={index}
                  index={index}
                  value={power.value}
                  cost={power.cost}
                  selectedIndex={selected.power.index}
                  handleSelect={handleSelect}
                />
              );
            })}
          </section>
          <section className='section-container'>
            <h1 className='section-container__name'>Warp drive:</h1>
            {data.warps.map((warp, index) => {
              return (
                <Warp
                  key={index}
                  index={index}
                  value={warp.value}
                  cost={warp.cost}
                  selectedIndex={selected.warp.index}
                  handleSelect={handleSelect}
                />
              );
            })}
          </section>
          <section className='section-container'>
            <h1 className='section-container__name'>Select option package:</h1>
            {data.options.map((option, index) => {
              return (
                <Option
                  key={index}
                  index={index}
                  name={option.name}
                  cost={option.cost}
                  includes={option.includes}
                  selectedIndex={selected.options.index}
                  handleSelect={handleSelect}
                />
              );
            })}
          </section>
        </div>
        <div className='main-wrapper__right'>
          <CostTotal selected={selected} />
        </div>
      </div>
    </main>
  );
}

export default App;
