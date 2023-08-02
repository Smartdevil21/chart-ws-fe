import {
  IChartEntry,
  IGenerateChartDataResponse,
} from "@/typings/interfaces/chart.interface";
import { IOrder, Weekday } from "@/typings/interfaces/order.interface";
import { OrderItemType } from "@/typings/interfaces/order.interface";

// Filtered array according to day
// function getNumOfItemsSoldByDay(
//   orders: IOrder[],
//   item: OrderItemType,
//   day: Weekday
// ): number {
//   let num = 0;
//   orders.map((order) => {
//     if (order.day === day && order.item === item) num += order.qnty;
//   });
//   return num;
// }

export function generateChartData(data: IOrder[]): IGenerateChartDataResponse {
  console.log("Generated chart data");
  const cpd = [0, 0, 0, 0, 0, 0, 0];
  const ppd = [0, 0, 0, 0, 0, 0, 0];
  data.map((order) => {
    if (order.item === "ChickenPuff") {
      switch (order.day) {
        case "SUN":
          cpd[0] += order.qnty;
          break;
        case "MON":
          cpd[1] += order.qnty;
          break;
        case "TUE":
          cpd[2] += order.qnty;
          break;
        case "WED":
          cpd[3] += order.qnty;
          break;
        case "THU":
          cpd[4] += order.qnty;
          break;
        case "FRI":
          cpd[5] += order.qnty;
          break;
        case "SAT":
          cpd[6] += order.qnty;
          break;
        default:
          break;
      }
    } else {
      switch (order.day) {
        case "SUN":
          ppd[0] += order.qnty;
          break;
        case "MON":
          ppd[1] += order.qnty;
          break;
        case "TUE":
          ppd[2] += order.qnty;
          break;
        case "WED":
          ppd[3] += order.qnty;
          break;
        case "THU":
          ppd[4] += order.qnty;
          break;
        case "FRI":
          ppd[5] += order.qnty;
          break;
        case "SAT":
          ppd[6] += order.qnty;
          break;
        default:
          break;
      }
    }
  });
  // console.log(cpd, ppd, data);
  return { cpd, ppd };
}
