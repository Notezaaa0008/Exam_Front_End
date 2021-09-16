import { useState } from "react";
import "./App.css";
import DataChartContainer from "./Container/DataChartContainer/DataChartContainer";
import LeftMenuContainer from "./Container/LeftMenuContainer/LeftMenuContainer";
import DataContainer from "./Container/DataContainer/DataContainer";

function App() {
  const [active, setActive] = useState(0);
  return (
    <div className="page-container">
      <LeftMenuContainer active={active} setActive={setActive} />

      {active === 0 && <DataChartContainer />}
      {active === 2 && <DataContainer />}
    </div>
  );
}

export default App;
