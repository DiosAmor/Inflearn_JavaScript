import React from "react";
import Navbar from "../../components/Navbar";
import Page from "../../components/Page";
import Title from "../../components/Title";
import OrderDeliveryCard from "./OrderDeliveryCard";
import OrderPaymentCard from "./OrderPaymentCard";
import OrderStatusCard from "./OrderStatusCard";
import OrderApi from "shared/api/OrderApi";

const OrderPage = () => {
  const [order, setOrder] = React.useState();

  const fetch = async (order) => {
    try {
      const order = await OrderApi.fetchMyOrder();
      setOrder(order);
    } catch (e) {
      return;
    }
  };

  React.useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="OrderPage">
      <Page header={<Title>주문내역</Title>} footer={<Navbar />}>
        {order && (
          <>
            <OrderStatusCard order={order} />
            <OrderPaymentCard order={order} />
            <OrderDeliveryCard order={order} />
          </>
        )}
      </Page>
    </div>
  );
};

export default OrderPage;
