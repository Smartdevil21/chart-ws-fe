import { ClientEvents, ServerEvents } from "@/socket/events";
import { Socket, io } from "socket.io-client";
import { IOrder } from "@/typings/interfaces/order.interface";

class OrderService {
  public socket: Socket<ServerEvents, ClientEvents>;

  constructor() {
    this.socket = io("http://192.168.43.17:8001");
  }

  public createOrder(order: Omit<IOrder, "id">): void {
    console.log("Create order called");
    this.socket.emit("order:create", order);
  }

  public deleteOrder(orderID: string): void {
    this.socket.emit("order:delete", orderID);
  }

  // public listOrders(): void{
  //     this.socket.emit("order:list",)
  // }

  public getSocket(): Socket<ServerEvents, ClientEvents> {
    return this.socket;
  }
}

const orderService = new OrderService();
export { orderService };
