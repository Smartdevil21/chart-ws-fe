"use client";
import React, { useMemo, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "@faker-js/faker";
import { Weekday } from "@/typings/interfaces/order.interface";
import { generateChartData } from "@/util/generateChartData";
import { useSelector } from "react-redux";
import { IStore } from "@/typings/interfaces/store.interface";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Chart.js Line Chart",
    },
  },
};

const labels: Weekday[] = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function Test() {
  const orders = useSelector((store: IStore) => store.orders);
  const { cpd, ppd } = useMemo(() => {
    return generateChartData(orders);
  }, [orders]);

  const data = {
    labels,
    datasets: [
      {
        label: "ChickenPuff",
        data: cpd,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
      {
        label: "PaneerPuff",
        data: ppd,
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };
  return (
    <div>
      <Line options={options} data={data} />
    </div>
  );
}

export default Test;
