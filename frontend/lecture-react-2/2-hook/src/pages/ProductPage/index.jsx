import React from "react";
import ProductApi from "shared/api/ProductApi";
import OrderableProductItem from "./OrderableProductItem";
import Title from "../../components/Title";
import Page from "../../components/Page";
import Navbar from "../../components/Navbar";
import * as MyLayout from "../../lib/MyLayout";
import ErrorDialog from "../../components/ErrorDialog";

const ProductPage = () => {
  const [productList, setProductList] = React.useState([]);
  const { openDialog } = MyLayout.useDialog();
  const { startLoading, finishLoading } = MyLayout.useLoading();

  const fetch = async () => {
    startLoading("메뉴 목록 로딩중");
    try {
      const productList = await ProductApi.fetchProductList();
      setProductList(productList);
    } catch (e) {
      finishLoading();
      openDialog(<ErrorDialog />);
      return;
    }
    finishLoading();
  };

  React.useEffect(() => {
    fetch();
  }, []);

  return (
    <div className="ProductPage">
      <Page header={<Title>메뉴목록</Title>} footer={<Navbar />}>
        <ul>
          {productList.map((product) => (
            <li key={product.id}>
              <OrderableProductItem product={product} />
            </li>
          ))}
        </ul>
      </Page>
    </div>
  );
};

export default ProductPage;
