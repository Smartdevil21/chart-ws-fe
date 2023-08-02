export type OrderItemType = "ChickenPuff" | "PaneerPuff";

export type Weekday = "SUN" | "MON" | "TUE" | "WED" | "THU" | "FRI" | "SAT";

export interface IOrder {
  id: string;
  username: string;
  item: OrderItemType;
  qnty: number;
  day: Weekday;
}
