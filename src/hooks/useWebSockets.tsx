import { orderService } from "@/services/order.service";
import React, { useEffect } from "react";
import useDispatchers from "./useDispatchers";

function useWebSockets() {
  const socket = orderService.getSocket();
  const { createOrderDispatch, setOrdersDispatch } = useDispatchers();

  useEffect(() => {
    socket.on("connect", () => {
      console.log("Connecting to server!");
      socket.emit("order:list", (data) => {
        setOrdersDispatch(data.data);
      });
    });
    socket.on("order:created", (order) => {
      createOrderDispatch(order);
    });
  }, []);
}

export default useWebSockets;
