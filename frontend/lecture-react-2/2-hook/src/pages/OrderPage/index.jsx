import React from "react";
import Navbar from "../../components/Navbar";
import Page from "../../components/Page";
import Title from "../../components/Title";
import OrderDeliveryCard from "./OrderDeliveryCard";
import OrderPaymentCard from "./OrderPaymentCard";
import OrderStatusCard from "./OrderStatusCard";
import OrderApi from "shared/api/OrderApi";
import * as MyLayout from "../../lib/MyLayout";
import ErrorDialog from "../../components/ErrorDialog";

const OrderPage = () => {
  const [order, setOrder] = React.useState();
  const { openDialog } = MyLayout.useDialog();
  const { startLoading, finishLoading } = MyLayout.useLoading();

  const fetch = async (order) => {
    startLoading("주문 정보 로딩중...");
    try {
      const order = await OrderApi.fetchMyOrder();
      setOrder(order);
    } catch (e) {
      openDialog(<ErrorDialog />);
      return;
    }
    finishLoading();
  };

  React.useEffect(() => {
    fetch();
  }, []);

  React.useEffect(() => {
    const timer = setInterval(async () => {
      const order = await OrderApi.fetchMyOrder();
      setOrder(order);
    }, 5000);
    return () => {
      clearInterval(timer);
    };
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
