"use client";

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from "chart.js";
import { Radar } from "react-chartjs-2";

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
);

export function SkillChart() {
  const data = {
    labels: ["Figma", "React", "Next.js", "Postman", "Tauri", "TailwindCSS"],
    datasets: [
      {
        label: "Nivel de Habilidad",
        data: [80, 75, 65, 50, 50, 70], // Example values
        backgroundColor: "rgba(162, 89, 255, 0.2)",
        borderColor: "rgba(162, 89, 255, 1)",
        borderWidth: 2,
        pointBackgroundColor: "rgba(162, 89, 255, 1)",
        pointBorderColor: "#fff",
        pointHoverBackgroundColor: "#fff",
        pointHoverBorderColor: "rgba(162, 89, 255, 1)",
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          color: "rgba(0, 0, 0, 0.1)",
        },
        grid: {
          color: "rgba(0, 0, 0, 0.1)",
        },
        pointLabels: {
          font: {
            family: '"Sofia Sans", sans-serif',
            size: 14,
          },
          color: "#171717",
        },
        ticks: {
          display: false, // Hide the numbers on the scale for a cleaner look
          stepSize: 20,
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
    plugins: {
      legend: {
        display: false, // Hide legend if not needed, or style it
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="w-full h-100 flex justify-center items-center">
      <Radar data={data} options={options} />
    </div>
  );
}
