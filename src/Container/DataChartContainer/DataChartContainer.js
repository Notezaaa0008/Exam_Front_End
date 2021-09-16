import React, { useEffect, useState } from "react";
import axios from "../../config/axios";
import "./DataChartContainer.css";
import DataChartComponent from "../../Component/DataChartComponent/DataChartComponent";

const ChartContainer = () => {
  const [intentData, setIntentData] = useState([]);
  const [subIntentData, setSubIntentData] = useState([]);
  const [pointData, setPointData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const res = await axios.get("/chart");
      const intent = [];
      const subIntent = [];
      const point = [];
      for (let i = 0; i < res.data.chartData.length; i++) {
        intent.push(res.data.chartData[i].intent);
        subIntent.push(res.data.chartData[i].subIntent);
        point.push(res.data.chartData[i].point);
      }
      setIntentData(intent);
      setSubIntentData(subIntent);
      setPointData(point);
    };
    fetch();
  }, []);

  const data = {
    labels: intentData,
    datasets: [
      {
        label: "# of Votes",
        data: pointData,
        backgroundColor: [
          "rgba(137, 231, 240, 1)",
          "rgba(123, 216, 240, 1)",
          "rgba(108, 200, 241, 1)",
          "rgba(94, 185, 241, 1)",
          "rgba(79, 169, 242, 1)",
          "rgba(65, 154, 242, 1)"
        ],
        borderColor: [
          "rgba(255, 255, 255, 1)",
          "rgba(255, 255, 255, 1)",
          "rgba(255, 255, 255, 1)",
          "rgba(255, 255, 255, 1)",
          "rgba(255, 255, 255, 1)",
          "rgba(255, 255, 255, 1)"
        ],
        borderWidth: 1
      }
    ]
  };

  const options = {
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          usePointStyle: true
        }
      },
      datalabels: {
        display: true,
        color: "white",
        formatter: (value, context) => {
          const sum = context.dataset.data.reduce((acc, item) => acc + item, 0);
          const percentage = Math.round((value / sum) * 100) + "%";
          return percentage;
        },
        font: {
          size: 18,
          weight: "bold"
        }
      },
      tooltip: {
        enabled: false
      }
    }
  };
  return (
    <div className="chart-container">
      <div className="chart-header">
        <h1>Pie chart</h1>
      </div>

      <div className="pie-chart">
        <DataChartComponent data={data} options={options} />
      </div>
    </div>
  );
};

export default ChartContainer;
