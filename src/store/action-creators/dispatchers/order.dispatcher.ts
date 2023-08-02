import { IOrder } from "@/typings/interfaces/order.interface";
import { OrderActiontypes } from "../actions/order.action";
import { AnyAction, Dispatch } from "redux";

const createOrderDispatch = (payload: IOrder) => {
  return (dispatch: Dispatch<AnyAction>) => {
    dispatch({
      type: OrderActiontypes.CREATE,
      payload,
    });
  };
};

const setOrdersDispatch = (payload: IOrder[]) => {
  return (dispatch: Dispatch<AnyAction>) => {
    dispatch({
      type: OrderActiontypes.SET,
      payload,
    });
  };
};

export { createOrderDispatch, setOrdersDispatch };
