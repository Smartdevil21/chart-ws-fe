import React from "react";
import styles from "@/components/orders/orderitem.module.scss";
import { IOrder } from "@/typings/interfaces/order.interface";

interface IProps {
  order: IOrder;
}

function OrderItem({ order }: IProps) {
  return (
    <div className={styles.order_item}>
      <strong>{order.username}</strong>
      <span>{order.item}</span>
      <strong>{order.qnty}</strong>
      <span>{order.day}</span>
      <button>Delete</button>
    </div>
  );
}

export default OrderItem;
