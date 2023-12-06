import React from "react";
import Page from "../../components/Page";
import ProductItem from "../../components/ProductItem";
import Title from "../../components/Title";
import OrderForm from "./OrderForm";
import PaymentButton from "./PaymentButton";
import OrderApi from "shared/api/OrderApi";
import ProductApi from "shared/api/ProductApi";

const CartPage = () => {
  const [product, setProduct] = React.useState();

  const handleSubmit = async (values) => {
    try {
      await OrderApi.createOrder(values);
    } catch (e) {
      return;
    }
  };

  const fetch = async (productId) => {
    try {
      const product = await ProductApi.fetchProduct(productId);
      setProduct(product);
    } catch (e) {
      return;
    }
  };

  React.useEffect(() => {
    fetch("CACDA423");
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
