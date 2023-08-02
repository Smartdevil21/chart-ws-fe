import { bindActionCreators } from "@reduxjs/toolkit";
import * as dispatchers from "@/store/action-creators/dispatchers.combined";
import { useDispatch } from "react-redux";

function useDispatchers() {
  const dispatch = useDispatch();
  return bindActionCreators(dispatchers, dispatch);
}

export default useDispatchers;
