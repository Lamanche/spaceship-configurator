import "./App.scss";
import { useState } from "react";
import { data } from "./inputData";
import Color from "./components/Color";
import Power from "./components/Power";
import Warp from "./components/Warp";
import Option from "./components/Option";
import CostOutput from "./components/CostOutput";

function App() {
  const [selected, setSelected] = useState({
    base: 1000,
    color: { index: 0, cost: 0 },
    power: { index: 0, cost: 0 },
    warp: { index: 0, cost: 0 },
    options: { index: 0, cost: 0 },
  });

  return (
    <main className='main-container'>
      <h1 className='headline'>Spaceship configurator</h1>
      <div className='main-wrapper'>
        <div className='main-left'>
          <section className='section-container'>
            <h1 className='section-name'>Select color:</h1>
            {data.colors.map((color, index) => {
              return (
                <Color
                  key={index}
                  index={index}
                  color={color.color}
                  cost={color.cost}
                  name={color.name}
                  selectedIndex={selected.color.index}
                  setSelected={setSelected}
                />
              );
            })}
          </section>
          <section className='section-container'>
            <h1 className='section-name'>Select power:</h1>
            {data.powers.map((power, index) => {
              return (
                <Power
                  key={index}
                  index={index}
                  value={power.value}
                  cost={power.cost}
                  selectedIndex={selected.power.index}
                  setSelected={setSelected}
                />
              );
            })}
          </section>
          <section className='section-container'>
            <h1 className='section-name'>Warp drive:</h1>
            {data.warps.map((warp, index) => {
              return (
                <Warp
                  key={index}
                  index={index}
                  value={warp.value}
                  cost={warp.cost}
                  selectedIndex={selected.warp.index}
                  setSelected={setSelected}
                />
              );
            })}
          </section>
          <section className='section-container'>
            <h1 className='section-name'>Select option package:</h1>
            {data.options.map((option, index) => {
              return (
                <Option
                  key={index}
                  index={index}
                  name={option.name}
                  cost={option.cost}
                  includes={option.includes}
                  selectedIndex={selected.options.index}
                  setSelected={setSelected}
                />
              );
            })}
          </section>
        </div>
        <div className='main-right'>
          <CostOutput selected={selected} />
        </div>
      </div>
    </main>
  );
}

export default App;
