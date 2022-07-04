import React from "react";
import { Wrapper } from "./Home.styles";
import Banner from "../../components/Banner";
import ListProduct from "../../components/ListProduct";
import Footer from "../../components/Footer";
import ListBrand from "../../components/ListBrand";
import ListNewProduct from "../../components/ListNewProduct";
const Home = () => {
  return (
    <Wrapper>
      <Banner />
      <ListNewProduct />
      <ListProduct title="Sản phẩm nổi bật" />
      <ListProduct title="Sản phẩm bán chạy" />
      <ListBrand />
    </Wrapper>
  );
};
export default Home;
