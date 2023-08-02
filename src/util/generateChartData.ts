import { IChartEntry } from "@/typings/interfaces/chart.interface";
import { IOrder } from "@/typings/interfaces/order.interface";
import { OrderItemType } from "@/typings/interfaces/order.interface";

// Filtered array according to day
function salesExtractorPerDay(data: IOrder[]) {
  let cps = 0;
  let pps = 0;
  data.map((ele) => {
    if (ele.item === "ChickenPuff") {
      cps += ele.qnty;
    } else {
      pps += ele.qnty;
    }
  });
  return {
    ChickenPuff: cps,
    PaneerPuff: pps,
  };
}

export function generateChartData(data: IOrder[]): IChartEntry[] {
  return [
    {
      name: "SUN",
      ...salesExtractorPerDay(data.filter((ele) => ele.day === "SUN")),
    },
    {
      name: "MON",
      ...salesExtractorPerDay(data.filter((ele) => ele.day === "MON")),
    },
    {
      name: "TUE",
      ...salesExtractorPerDay(data.filter((ele) => ele.day === "TUE")),
    },
    {
      name: "WED",
      ...salesExtractorPerDay(data.filter((ele) => ele.day === "WED")),
    },
    {
      name: "THU",
      ...salesExtractorPerDay(data.filter((ele) => ele.day === "THU")),
    },
    {
      name: "FRI",
      ...salesExtractorPerDay(data.filter((ele) => ele.day === "FRI")),
    },
    {
      name: "SAT",
      ...salesExtractorPerDay(data.filter((ele) => ele.day === "SAT")),
    },
  ];
}
