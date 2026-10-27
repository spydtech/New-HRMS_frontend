import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const originalData = [
  [400, 500, 300],
  [600, 700, 400],
  [800, 600, 500],
  [1200, 800, 700],
  [900, 1000, 600],
  [1100, 900, 800],
  [1400, 1200, 1000],
  [1300, 1100, 900],
  [1200, 1300, 1100],
  [1500, 1400, 1200],
  [1600, 1500, 1300],
  [1800, 1600, 1400],
];

// Normalize the data
const normalizedData = originalData.map((monthData) => {
  const total = monthData.reduce((acc, value) => acc + value, 0);
  return monthData.map((value) => (value / total) * 2500); // scale to max height 2500
});

const data = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "LinkedIn",
      data: normalizedData.map((monthData) => monthData[0]),
      backgroundColor: "rgba(0, 123, 255, 0.8)",
      stack: "Stack 0",
      borderRadius: 10,
      barThickness: 17,
    },
    {
      label: "Facebook",
      data: normalizedData.map((monthData) => monthData[1]),
      backgroundColor: "rgba(0, 123, 255, 0.6)",
      stack: "Stack 0",
      borderRadius: 10,
      barThickness: 17,
    },
    {
      label: "Instagram",
      data: normalizedData.map((monthData) => monthData[2]),
      backgroundColor: "rgba(0, 123, 255, 0.4)",
      stack: "Stack 0",
      borderRadius: 10,
      barThickness: 17,
    },
  ],
};

const options = {
  responsive: true,
  maintainAspectRatio: false, // allows the chart to take up the entire container's space
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        font: { size: 12 },
        padding: 14,
        boxWidth: 20,
        boxHeight: 20,
        usePointStyle: false,
        pointStyle: "rectRounded",
        generateLabels: (chart) => {
          const datasets = chart.data.datasets;
          return datasets.map((dataset, i) => ({
            text: dataset.label,
            fillStyle: dataset.backgroundColor,
            strokeStyle: dataset.backgroundColor,
            index: i,
          }));
        },
      },
    },
    title: {
      display: false,
      text: "Social Statistics",
    },
  },
  scales: {
    x: {
      stacked: true,
      grid: {
        display: false,
      },
    },
    y: {
      stacked: true,
      grid: {
        display: false,
      },
      max: 2500,
    },
  },
};

const SocialStatistics = () => {
  return (
    <div className="bg-white py-5 w-full p-2 md:p-4 lg:p-6">
      <h1 className="text-[#0098F1] text-[16px] md:text-[20px] lg:text-[24px] font-bold">
        Social Statistics
      </h1>
      <div className="py-4 w-full " style={{ height: "300px", width: "100%" }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default SocialStatistics;
