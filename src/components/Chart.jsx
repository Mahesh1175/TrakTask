import React, { useState, useEffect } from "react";
import { Doughnut, Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, ArcElement, Title, Tooltip, Legend } from "chart.js";

// Registering necessary components for ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ cards }) => {
  // State to hold status and priority counts
  const [chartData, setChartData] = useState({
    statusCounts: {
      completed: 0,
      todo: 0,
      inProgress: 0,
      onHold: 0,
    },
    priorityCounts: {
      low: 0,
      medium: 0,
      high: 0,
    },
  });

  useEffect(() => {
    // Calculate task status counts
    const statusCounts = {
      completed: cards.filter((card) => card.status === "Completed").length,
      todo: cards.filter((card) => card.status === "To Do").length,
      inProgress: cards.filter((card) => card.status === "In Progress").length,
      onHold: cards.filter((card) => card.status === "On Hold").length,
    };

    // Calculate task priority counts
    const priorityCounts = {
      low: cards.filter((card) => card.priority === "Low").length,
      medium: cards.filter((card) => card.priority === "Medium").length,
      high: cards.filter((card) => card.priority === "High").length,
    };

    // Update state with computed counts
    setChartData({ statusCounts, priorityCounts });
  }, [cards]); // Re-render when cards data changes

  const { statusCounts, priorityCounts } = chartData;

  // Doughnut chart data
  const doughnutData = {
    labels: ["Completed", "To Do", "In Progress", "On Hold"],
    datasets: [
      {
        data: [
          statusCounts.completed,
          statusCounts.todo,
          statusCounts.inProgress,
          statusCounts.onHold,
        ],
        backgroundColor: [
          "rgba(34, 139, 34, 0.7)",
          "rgba(0, 191, 255, 0.7)",
          "rgba(255, 165, 0, 0.7)",
          "rgba(128, 128, 128, 0.7)",
        ],
        hoverBackgroundColor: [
          "rgba(50, 205, 50, 0.7)", 
          "rgba(135, 206, 250, 0.7)",
          "rgba(255, 193, 37, 0.7)",
          "rgba(169, 169, 169, 0.7)",
        ],
        borderColor: [
          "rgba(34, 139, 34, 1)", 
          "rgba(0, 191, 255, 1)", 
          "rgba(255, 165, 0, 1)", 
          "rgba(128, 128, 128, 1)", 
        ],
      },
    ],
  };

  // Doughnut chart options
  const doughnutOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "right",
      },
    },
  };

  // Bar chart data
  const barData = {
    labels: ["Low Priority", "Medium Priority", "High Priority"],
    datasets: [
      {
        label: "Number of Tasks",
        data: [priorityCounts.low, priorityCounts.medium, priorityCounts.high],
        backgroundColor: [
          "rgba(16, 185, 129, 0.6)",
          "rgba(245, 158, 11, 0.6)",
          "rgba(239, 68, 68, 0.6)",
        ],
        borderColor: [
          "#10B981",
          "#F59E0B",
          "#EF4444",
        ],
        borderWidth: 2,
      },
    ],
  };

  // Bar chart options
  const barOptions = {
    indexAxis: "y",
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Task Priority Counts",
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 m-2 p-3 bg-[#1E201E] gap-2 mx-auto w-full max-w-[1200px]">
      {/* Doughnut chart for task status */}
      <div className="bg-[#ECDFCC] p-4 rounded-lg mx-auto w-full max-w-[600px] my-1">
        <h2 className="text-xl font-semibold text-[#3C3D37]">Status of Tasks</h2>
        <div className="h-60 pl-10">
          <Doughnut data={doughnutData} options={doughnutOptions} />
        </div>
      </div>

      {/* Bar chart for task priorities */}
      <div className="bg-[#ECDFCC] p-4 rounded-lg mx-auto w-full max-w-[600px] my-1">
        <h2 className="text-xl font-semibold text-[#3C3D37]">Task Priorities</h2>
        <div className="h-60">
          <Bar data={barData} options={barOptions} />
        </div>
      </div>
    </div>
  );
};

export default Chart;
