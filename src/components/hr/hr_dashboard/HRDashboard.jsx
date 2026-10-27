/* eslint-disable no-unused-vars */
import React from "react";
import { BsPersonFillCheck } from "react-icons/bs";
import { MdGroups } from "react-icons/md";
import { RiMoneyRupeeCircleLine } from "react-icons/ri";
import { TbReportMoney } from "react-icons/tb";
import EmpolyeeData from "./data/EmployeeData.json";
import { Doughnut } from "react-chartjs-2";
import { Chart } from "chart.js/auto";
import DonutChartData from "./data/DonutChartData.json";
import { Bar } from "react-chartjs-2";
import BarChartData from "./data/BarChartData.json";
import { Line } from "react-chartjs-2";
import LineChartData from "./data/LineChartData.json";
import EmployeePerformanceData from "./data/EmployeePerformaceData.json";
import EmployeeStructureData from "./data/EmployeeStructureData.json";

const HRDashboard = () => {
  const { data } = BarChartData;
  const { data1 } = DonutChartData;
  const { data2 } = LineChartData;
  const { data3 } = EmployeeStructureData;

  const performanceButtons = (performance) => {
    switch (performance) {
      case "Good":
        return (
          <button className="bg-[#2A8F4C] hover:bg-green-600 text-white px-4 md:px-12 py-2 rounded-xl">
            Good
          </button>
        );
      case "Average":
        return (
          <button className="bg-[#F78822] hover:bg-orange-600 text-white px-4 md:px-10 py-2 rounded-xl">
            Average
          </button>
        );
      case "Bad":
        return (
          <button className="bg-[#F20B0B] hover:bg-red-700 text-white px-4 md:px-14 py-2 rounded-xl">
            Bad
          </button>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-auto overflow-y-hidden p-4 mt-4">
      <div className="pb-6">
        <h2 className="text-[#0098f1] lg:text-lg  text-sm font-bold mb-4">
          Hr / Hr Dashboard
        </h2>
        <div className="space-y-6">
          <div className="flex flex-col lg:flex-row w-full lg:w-full gap-4 mb-6">
            <div className="flex flex-col justify-center items-center  w-full lg:w-1/4">
              {EmpolyeeData.map((data, index) => (
                <div key={index} className="w-full">
                  <div className="flex flex-col sm:flex-row justify-around items-center gap-2 bg-[#0098f1] p-4 py-6 rounded-lg mb-1">
                    <BsPersonFillCheck className="text-xl rounded-full bg-white w-12 h-12 p-2 text-[#0098f1]" />
                    <div className="text-white text-center sm:text-left font-semibold">
                      New Employee
                      <div className="text-center">{data.new_Employee}</div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-around items-center gap-2 bg-[#0098f1] p-4 py-6 rounded-lg mb-1">
                    <MdGroups className="text-xl rounded-full bg-white w-12 h-12 p-2 text-[#0098f1]" />
                    <div className="text-white text-center sm:text-left font-semibold">
                      Total Employee
                      <div className="text-center">{data.Total_Employee}</div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-around items-center gap-2 bg-[#0098f1] p-4 py-6 rounded-lg mb-1">
                    <RiMoneyRupeeCircleLine className="text-xl rounded-full bg-white w-12 h-12 p-2 text-[#0098f1]" />
                    <div className="text-white text-center sm:text-left font-semibold">
                      Total Salary
                      <div className="text-center">{data.Total_Salary}</div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row justify-around items-center gap-2 bg-[#0098f1] p-4 py-6 rounded-lg">
                    <TbReportMoney className="text-xl rounded-full bg-white w-12 h-12 p-2 text-[#0098f1]" />
                    <div className="text-white text-center sm:text-left font-semibold">
                      Avg Salary
                      <div className="text-center">{data.Avg_Salary}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col justify-start bg-[#0098F1] p-6 md:p-4 mx-auto rounded-lg shadow w-full lg:w-1/4">
              <div className="text-white text-center mb-3">
                <div className="text-[20px]">Income Analysis</div>
                <div className="text-[12px] mb-3 ">
                  8% Higher than last month
                </div>
              </div>
              <Doughnut
                data={data1}
                options={{
                  plugins: {
                    legend: {
                      position: "bottom",
                      labels: {
                        font: {
                          size: 15,
                        },
                        boxWidth: 20,
                        boxHeight: 12,
                        color: "#FFFFFF",
                      },
                    },
                  },
                  elements: {
                    arc: {
                      borderWidth: 0,
                    },
                  },
                }}
              />
            </div>
            <div className="flex flex-col bg-[#0098F1] rounded-lg p-6 shadow w-full lg:w-2/4">
              <div className="text-white text-center mb-8">
                <div className="md:text-2xl text-lg">Salary Statistics</div>
              </div>
              <Bar
                data={data}
                options={{
                  plugins: {
                    legend: {
                      position: "bottom",
                      labels: {
                        font: {
                          size: 13,
                        },
                        boxWidth: 20,
                        boxHeight: 12,
                        color: "#FFFFFF",
                      },
                    },
                  },
                  scales: {
                    x: {
                      grid: {
                        display: false,
                      },
                      ticks: {
                        font: {
                          weight: "bold",
                        },
                        color: "#000000",
                      },
                      border: {
                        display: false,
                      },
                    },
                    y: {
                      grid: {
                        display: false,
                      },
                      ticks: {
                        font: {
                          weight: "bold",
                        },
                        color: "#000000",
                      },
                      border: {
                        display: false,
                      },
                    },
                  },
                }}
              />
            </div>
          </div>
          <div className="bg-[#0098F1] w-full mb-6 p-6 rounded-lg shadow">
            <div className="text-white text-center text-2xl mb-4">
              Total Salary By Unit
            </div>
            <Line
              data={data2}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                scales: {
                  x: {
                    grid: {
                      display: false,
                    },
                    ticks: {
                      color: "#FFFFFF",
                    },
                    border: {
                      display: false,
                    },
                  },
                  y: {
                    grid: {
                      display: false,
                    },
                    ticks: {
                      color: "#FFFFFF",
                    },
                    border: {
                      display: false,
                    },
                  },
                },
              }}
            />
          </div>
          <div className="flex flex-col lg:flex-row gap-6 w-full lg:w-full overflow-hidden">
            <div className="flex flex-col bg-white p-5 rounded-lg shadow-2xl w-full lg:w-2/3">
              <div className="text-[#0098F1] text-2xl mb-1 md:px-4">
                Employee Performance
              </div>
              <div className="overflow-x-auto">
                <table className="w-full md:mt-4 md:mb-5">
                  <thead className="bg-[#0098F1] text-white">
                    <tr className="border border-[#0098F1]">
                      <th className="py-3 px-4 border-r border-white text-center text-sm font-medium">Avatar</th>
                      <th className="py-3 px-4 border-r border-white text-center text-sm font-medium">Name</th>
                      <th className="py-3 px-4 border-r border-white text-center text-sm font-medium">Destination</th>
                      <th className="py-3 px-4  text-center text-sm font-medium">Performance</th>
                    </tr>
                  </thead>
                  <tbody className="font-semibold text-center">
                    {EmployeePerformanceData.map((data, index) => (
                      <tr key={index} className="border border-[#0098F1]">
                        <td className="p-2 border-r border-[#0098F1]">
                          <img
                            className="inline-block h-8"
                            src={data.pic}
                            alt="avatar"
                          />
                        </td>
                        <td className="border-r border-[#0098F1]">{data.Name}</td>
                        <td className="border-r border-[#0098F1]">{data.Destination}</td>
                        <td className="p-1">
                          {performanceButtons(data.Performance)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="flex flex-col bg-[#0098f1] items-center justify-center rounded-lg shadow w-full lg:w-1/3 p-8">
              <div className="text-white text-center text-2xl mb-6">
                Employee Structure
              </div>
              <Doughnut
                data={data3}
                options={{
                  plugins: {
                    legend: {
                      position: "bottom",
                      labels: {
                        font: {
                          size: 13,
                        },
                        boxWidth: 20,
                        boxHeight: 12,
                        color: "#FFFFFF",
                      },
                    },
                  },
                  elements: {
                    arc: {
                      borderWidth: 0,
                    },
                  },
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRDashboard;
