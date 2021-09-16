import react from "react";
import "./DataContainer.css";
import DataComponent from "../../Component/DataComponent/DataComponent";

const DataContainer = () => {
  return (
    <div className="data-container">
      <div className="data-text-box">
        <h1>Phrase</h1>
      </div>

      <div>
        <DataComponent />
      </div>
    </div>
  );
};

export default DataContainer;
