import { IOrder } from "@/typings/interfaces/order.interface";

export interface ClientEvents {
  "order:create": (order: Omit<IOrder, "id">) => void;
  "order:delete": (id: string) => void;
  "order:list": (callback: ({ data }: { data: IOrder[] }) => void) => void;
}

export interface ServerEvents {
  "order:created": (order: IOrder) => void;
  "order:deleted": (id: string) => void;
}
