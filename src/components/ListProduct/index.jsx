import React from "react";
import PropTypes from "prop-types";
import { Wrapper, Content, BtnSeeMore, CoverBtn } from "./ListProduct.styles";
import Product from "../Product";
import Img2 from "../../images/TL-027-01.jpg";
import Img1 from "../../images/sanpham.png";
import Img3 from "../../images/Img3.png";
import Img4 from "../../images/Img4.png";
import Img5 from "../../images/Img5.png";
import Img6 from "../../images/Img6.png";
const data = [
  { img: Img1 },
  { img: Img6 },
  { img: Img3 },
  { img: Img4 },
  { img: Img5 },
];
ListProduct.propTypes = {};
function ListProduct({ title }) {
  return (
    <Wrapper>
      <h2 style={{ marginBottom: 0, textAlign: "center" }}>{title}</h2>
      <Content>
        {data.map((item, index) => (
          <Product img={item.img} />
        ))}
      </Content>
      <CoverBtn>
        <BtnSeeMore>
          <p style={{ color: "white" }}>Xem thêm</p>
        </BtnSeeMore>
      </CoverBtn>
    </Wrapper>
  );
}

export default ListProduct;
