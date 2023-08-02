import { IOrder } from "@/typings/interfaces/order.interface";
import { OrderActiontypes } from "../action-creators/actions/order.action";
import { IAction } from "@/typings/interfaces/action.interface";

function orderReducer(orders: IOrder[] = [], action: IAction) {
  switch (action.type) {
    case OrderActiontypes.CREATE:
      return [...orders, action.payload];
    case OrderActiontypes.SET:
      return action.payload;
    default:
      return orders;
  }
}

export { orderReducer };
