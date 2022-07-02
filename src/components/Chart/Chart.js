import React from "react";
import ChartBar from "./ChartBar";

import './Chart.css';

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value); // transform object to just an array of values
  const totalMaximum = Math.max(...dataPointValues); // use the spread operator to pull out the individual data points and pass them into the max method.
  console.log('Outputting the chart');
  
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
