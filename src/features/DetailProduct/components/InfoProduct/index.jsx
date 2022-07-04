import React from "react";
import PropTypes from "prop-types";
import { Wrapper, Content, CoverTwoLineTxt } from "./InfoProduct.styles";
InfoProduct.propTypes = {};

function InfoProduct(props) {
  return (
    <Wrapper>
      <Content>
        <h4>BIZNER</h4>
        <h1>Bút lông dầu Thiên Long PM-09</h1>
        <CoverTwoLineTxt>
          <h4 style={{ marginRight: 12 }}>{`Mã sản phẩm:`}</h4>
          <h4 style={{ color: "var(--orange)" }}>50004982</h4>
        </CoverTwoLineTxt>
        <CoverTwoLineTxt>
          <h4 style={{ marginRight: 12 }}>{`SKU:`}</h4>
          <h4 style={{ color: "var(--orange)" }}>
            Bút lông dầu Thiên Long PM-09
          </h4>
        </CoverTwoLineTxt>
        <p>
          Bút lông dầu Thiên Long PM-09 là sản phẩm mới thuộc nhóm dụng cụ văn
          phòng, do Tập đoàn Thiên Long sản xuất. Sản phẩm được sản xuất theo
          công nghệ hiện đại, đạt tiêu chuẩn chất lượng quốc tế, kiểu dáng được
          cải tiến ấn tượng, thân bút cầm chắc tay, dễ cầm nắm, không gây mỏi
          tay khi sử dụng.
        </p>
      </Content>
    </Wrapper>
  );
}

export default InfoProduct;
