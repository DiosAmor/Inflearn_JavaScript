import React from "react";
import Page from "../../components/Page";
import ProductItem from "../../components/ProductItem";
import Title from "../../components/Title";
import OrderForm from "./OrderForm";
import PaymentButton from "./PaymentButton";
import OrderApi from "shared/api/OrderApi";
import ProductApi from "shared/api/ProductApi";
import * as MyRouter from "../../lib/MyRouter";
import * as MyLayout from "../../lib/MyLayout";
import ErrorDialog from "../../components/ErrorDialog";
import PaymentSuccessDialog from "./PaymentSuccessDialog";

const CartPage = () => {
  const [product, setProduct] = React.useState();
  const { productId } = MyRouter.useParams();
  const { startLoading, finishLoading } = MyLayout.useLoading();
  const { openDialog } = MyLayout.useDialog();

  const handleSubmit = async (values) => {
    try {
      await OrderApi.createOrder(values);
    } catch (e) {
      finishLoading();
      openDialog(<ErrorDialog />);
      return;
    }
    finishLoading();
    openDialog(<PaymentSuccessDialog />);
  };

  const fetch = async (productId) => {
    startLoading("장바구니에 담는중...");
    try {
      const product = await ProductApi.fetchProduct(productId);
      setProduct(product);
    } catch (e) {
      openDialog(<ErrorDialog />);
      return;
    }
    finishLoading();
  };

  React.useEffect(() => {
    if (productId) fetch(productId);
  }, []);

  return (
    <div className="CartPage">
      <Page
        header={<Title backUrl={"/"}>장바구니</Title>}
        footer={<PaymentButton form="order-form" />}
      >
        {product && <ProductItem product={product} />}
        <OrderForm onSubmit={handleSubmit} />
      </Page>
    </div>
  );
};

export default CartPage;
