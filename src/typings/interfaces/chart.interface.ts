import { Weekday } from "./order.interface";

export interface IChartEntry {
  name: Weekday;
  ChickenPuff: number;
  PaneerPuff: number;
}

export interface IGenerateChartDataResponse {
  cpd: number[];
  ppd: number[];
}
