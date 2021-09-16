import React from "react";
import "./DataChartComponent.css";
import { Pie } from "react-chartjs-2";

import { Chart } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
Chart.register(ChartDataLabels);

const ChartComponent = ({ data, options }) => {
  return (
    <div className="pie-container">
      <Pie data={data} options={options} />
    </div>
  );
};
export default ChartComponent;
