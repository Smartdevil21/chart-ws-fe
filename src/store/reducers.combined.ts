import { combineReducers } from "redux";
import { orderReducer } from "./reducers/order.reducer";

const combinedReducers = combineReducers({
  orders: orderReducer,
});

export { combinedReducers };
