"use client";
import useDispatchers from "@/hooks/useDispatchers";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { chartData } from "@/data/chart.data";
import styles from "./page.module.scss";
import { useSelector } from "react-redux";
import { IStore } from "@/typings/interfaces/store.interface";
import OrderItem from "@/components/orders/OrderItem";
import { FormEvent, useState } from "react";
import { IOrder, Weekday } from "@/typings/interfaces/order.interface";
import { OrderItemType } from "@/typings/interfaces/order.interface";
import useWebSockets from "@/hooks/useWebSockets";
import { orderService } from "@/services/order.service";
import { generateChartData } from "@/util/generateChartData";

function Orders() {
  useWebSockets();
  const [order, setOrder] = useState<Omit<IOrder, "id">>({
    day: "SUN",
    item: "ChickenPuff",
    qnty: 0,
    username: "",
  });

  const orders = useSelector((store: IStore) => store.orders);
  console.log(generateChartData(orders));

  const clearForm = () => {
    setOrder({
      day: "SUN",
      item: "ChickenPuff",
      qnty: 0,
      username: "",
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    orderService.createOrder(order);
    // createOrderDispatch();
  };

  return (
    <div className={styles.orders}>
      <div className={styles.upper_half}>
        <form onSubmit={handleSubmit}>
          <h1>Place New Order:</h1>
          <div className={styles.upper_half}>
            <input
              type="text"
              placeholder="Customer Name"
              value={order.username}
              onChange={(e) => {
                setOrder((prev) => ({ ...prev, username: e.target.value }));
              }}
            />
            <input
              type="number"
              value={order.qnty}
              onChange={(e) => {
                setOrder((prev) => ({ ...prev, qnty: Number(e.target.value) }));
              }}
            />
            <select
              value={order.item}
              onChange={(e) => {
                setOrder((prev) => ({
                  ...prev,
                  item: e.target.value as OrderItemType,
                }));
              }}
            >
              <option value={"ChickenPuff"}>Chicken Puff</option>
              <option value={"PaneerPuff"}>Paneer Puff</option>
            </select>
            <div className={styles.fomr_input_grps}>
              <select
                value={order.day}
                onChange={(e) => {
                  setOrder((prev) => ({
                    ...prev,
                    day: e.target.value as Weekday,
                  }));
                }}
              >
                <option value={"SUN"}>SUNDAY</option>
                <option value={"MON"}>MONDAY</option>
                <option value={"TUE"}>TUESDAY</option>
                <option value={"WED"}>WEDNESDAY</option>
                <option value={"THU"}>THURSDAY</option>
                <option value={"FRI"}>FRIDAY</option>
                <option value={"SAT"}>SATURDAY</option>
              </select>
            </div>
          </div>
          <div className={styles.btns}>
            <button type="submit">Place Order</button>
            <button onClick={clearForm}>Cancel</button>
          </div>
        </form>
        <ResponsiveContainer
          width="100%"
          height="100%"
          className={styles.chart}
        >
          <LineChart
            width={500}
            height={300}
            data={generateChartData(orders)}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="PaneerPuff"
              stroke="#8884d8"
              // activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="ChickenPuff" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <div className={styles.lower_half}>
        <h1>Order history:</h1>
        {orders.map((ele, index) => {
          return <OrderItem key={index} order={ele} />;
        })}
      </div>
    </div>
  );
}

export default Orders;
