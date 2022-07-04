import React from "react";
import PropTypes from "prop-types";
import { Wrapper, Content, Card, ImgCard } from "./ListNewProduct";
import NewProduct_1 from "../../images/NewProduct_1.png";
import NewProduct_2 from "../../images/NewProduct_2.png";
import NewProduct_3 from "../../images/NewProduct_3.png";
import brand4 from "../../images/brand4.png";
import brand5 from "../../images/brand5.png";

ListNewProduct.propTypes = {};

function ListNewProduct(props) {
  return (
    <Wrapper>
      <h2 style={{ marginBottom: 0, textAlign: "center" }}>Sản phẩm mới</h2>
      <Content>
        <Card>
          <ImgCard src={NewProduct_1} />
          <h4>Bộ màu nước 230</h4>
        </Card>
        <Card>
          <ImgCard src={NewProduct_2} />
          <h4>Bộ cọ vẽ</h4>
        </Card>
        <Card>
          <ImgCard src={NewProduct_3} />
          <h4>Bộ sơn nước</h4>
        </Card>
        <Card>
          <ImgCard src={NewProduct_1} />
          <h4>Bộ màu nước 230</h4>
        </Card>
      </Content>
    </Wrapper>
  );
}

export default ListNewProduct;
