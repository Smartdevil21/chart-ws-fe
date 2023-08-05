"use client";
import ReactECharts from "echarts-for-react";
import * as echarts from "echarts/core";
import { BarChart } from "echarts/charts";
import {
  TooltipComponent,
  GridComponent,
  TitleComponent,
} from "echarts/components";
import { CanvasRenderer } from "echarts/renderers";
import { useEffect, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { IStore } from "@/typings/interfaces/store.interface";
import { generateChartData } from "@/util/generateChartData";

echarts.use([
  TitleComponent,
  TooltipComponent,
  GridComponent,
  BarChart,
  CanvasRenderer,
]);

export default function EchartExample() {
  const orders = useSelector((store: IStore) => store.orders);
  const { cpd, ppd } = useMemo(() => {
    return generateChartData(orders);
  }, [orders]);

  const option = {
    color: ["#80FFA5", "#FFBF00", "#00DDFF", "#37A2FF", "#FF0087"],
    title: {
      text: "Gradient Stacked Area Chart",
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "cross",
        label: {
          backgroundColor: "#6a7985",
        },
      },
    },
    legend: {
      data: ["Chicken Puff", "Paneer Puff"],
    },
    toolbox: {
      feature: {
        saveAsImage: {},
      },
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: [
      {
        type: "category",
        boundaryGap: false,
        data: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      },
    ],
    yAxis: [
      {
        type: "value",
      },
    ],
    series: [
      {
        name: "Chicken Puff",
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(128, 255, 165)",
            },
            {
              offset: 1,
              color: "rgb(1, 191, 236)",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        data: cpd,
      },
      {
        name: "Paneer Puff",
        type: "line",
        stack: "Total",
        smooth: true,
        lineStyle: {
          width: 0,
        },
        showSymbol: false,
        areaStyle: {
          opacity: 0.8,
          color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
            {
              offset: 0,
              color: "rgb(255, 191, 0)",
            },
            {
              offset: 1,
              color: "rgb(224, 62, 76)",
            },
          ]),
        },
        emphasis: {
          focus: "series",
        },
        data: ppd,
      },
      //   {
      //     name: "Line 3",
      //     type: "line",
      //     stack: "Total",
      //     smooth: true,
      //     lineStyle: {
      //       width: 0,
      //     },
      //     showSymbol: false,
      //     areaStyle: {
      //       opacity: 0.8,
      //       color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      //         {
      //           offset: 0,
      //           color: "rgb(55, 162, 255)",
      //         },
      //         {
      //           offset: 1,
      //           color: "rgb(116, 21, 219)",
      //         },
      //       ]),
      //     },
      //     emphasis: {
      //       focus: "series",
      //     },
      //     data: [320, 132, 201, 334, 190, 130, 220],
      //   },
      //   {
      //     name: "Line 4",
      //     type: "line",
      //     stack: "Total",
      //     smooth: true,
      //     lineStyle: {
      //       width: 0,
      //     },
      //     showSymbol: false,
      //     areaStyle: {
      //       opacity: 0.8,
      //       color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      //         {
      //           offset: 0,
      //           color: "rgb(255, 0, 135)",
      //         },
      //         {
      //           offset: 1,
      //           color: "rgb(135, 0, 157)",
      //         },
      //       ]),
      //     },
      //     emphasis: {
      //       focus: "series",
      //     },
      //     data: [220, 402, 231, 134, 190, 230, 120],
      //   },
      //   {
      //     name: "Line 5",
      //     type: "line",
      //     stack: "Total",
      //     smooth: true,
      //     lineStyle: {
      //       width: 0,
      //     },
      //     showSymbol: false,
      //     label: {
      //       show: true,
      //       position: "top",
      //     },
      //   areaStyle: {
      //     opacity: 0.8,
      //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
      //       {
      //         offset: 0,
      //         color: "rgb(255, 191, 0)",
      //       },
      //       {
      //         offset: 1,
      //         color: "rgb(224, 62, 76)",
      //       },
      //     ]),
      //   },
      //     emphasis: {
      //       focus: "series",
      //     },
      //     data: values,
      //   },
    ],
  };

  //   const option = {
  //     xAxis: {
  //       type: "category",
  //       boundaryGap: false,
  //       data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  //     },
  //     yAxis: {
  //       type: "value",
  //     },
  //     series: [
  //       {
  //         data: [820, 932, 901, 934, 1290, 1330, 1320],
  //         type: "line",
  //         areaStyle: {},
  //       },
  //     ],
  //   };
  return (
    <div>
      <ReactECharts option={option} />
    </div>
  );
}
