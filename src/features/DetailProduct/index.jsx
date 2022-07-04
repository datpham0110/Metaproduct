import React from "react";
import PropTypes from "prop-types";
import ImgDetailProduct from "./components/ImgDetailProduct";
import SpecificationsProduct from "./components/SpecificationsProduct";
import InfoProduct from "./components/InfoProduct";
import { Wrapper, Content, CoverInfoProduct } from "./DetailProduct.styles";
import ListProduct from "../../components/ListProduct";
import ListBrand from "../../components/ListBrand";
DetailProduct.propTypes = {};

function DetailProduct(props) {
  return (
    <Wrapper>
      <Content>
        <CoverInfoProduct>
          <SpecificationsProduct />
          <ImgDetailProduct />
          <InfoProduct />
        </CoverInfoProduct>
        <div>
          <ListProduct title="Sản phẩm cùng loại" />
        </div>
      </Content>
      <ListBrand />
    </Wrapper>
  );
}

export default DetailProduct;
