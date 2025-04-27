import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const CardLineChart = () => {
  const chartRef = useRef(null); // Reference for the canvas element
  const chartInstance = useRef(null); // Reference for the Chart.js instance
  const CHART_COLORS = {
    red: 'rgb(255, 99, 132)',
    orange: 'rgb(255, 159, 64)',
    yellow: 'rgb(255, 205, 86)',
    green: 'rgb(75, 192, 192)',
    blue: 'rgb(54, 162, 235)',
    purple: 'rgb(153, 102, 255)',
    grey: 'rgb(201, 203, 207)'
  };
  const DATA_COUNT = 7;
  const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };



  useEffect(() => {
    const config = {
      type: 'line',
      data: {
        labels: ['January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [65, 78, 66, 44, 56, 67, 75],
            borderColor: CHART_COLORS.red,
            backgroundColor: 'rgba(255, 99, 132,0.5)',
          },
          {
            label: 'Dataset 2',
            data: [20, 12, 6, 40, 3, 13, 75],
            borderColor: CHART_COLORS.blue,
            backgroundColor: 'rgba(255, 99, 132,0.5),'
          }
        ]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Chart.js Line Chart'
          }
        }
      },
    };


    // Check if a chart instance already exists and destroy it
    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    // Create the new chart
    chartInstance.current = new Chart(chartRef.current, config);


    // Cleanup function to destroy the chart instance on unmount
    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, []); // Empty dependency array to run only once

  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-blueGray-700">
        <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className="relative w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
                Overview
              </h6>
              <h2 className="text-white text-xl font-semibold">Sales value</h2>
            </div>
          </div>
        </div>
        <div className="p-4 flex-auto">
          {/* Chart */}
          <div className="relative h-350-px">
            <canvas ref={chartRef} id="line-chart"></canvas>;
          </div>
        </div>
      </div>
    </>
  );


};

export default CardLineChart;
