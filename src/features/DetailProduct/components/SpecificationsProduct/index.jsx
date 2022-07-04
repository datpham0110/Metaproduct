import React from "react";
import PropTypes from "prop-types";
import { Wrapper, Content, CoverTextSub } from "./SpecificationsProduct.styles";
SpecificationsProduct.propTypes = {};

function SpecificationsProduct(props) {
  return (
    <Wrapper>
      <Content>
        <h3 style={{ textAlign: "center" }}>Thông số kỹ thuật</h3>
        <CoverTextSub>
          <h4>Tên danh mục:</h4>
          <p>Bút lông dầu</p>
        </CoverTextSub>
        <CoverTextSub>
          <h4>Thương hiệu:</h4>
          <p>Thiên Long</p>
        </CoverTextSub>
        <CoverTextSub>
          <h4>Bề rộng nét viết:</h4>
          <p>0.8mm & 6mm</p>
        </CoverTextSub>
        <CoverTextSub>
          <h4>Số đầu bút:</h4>
          <p>2</p>
        </CoverTextSub>
        <CoverTextSub>
          <h4>Đóng gói:</h4>
          <p>10 cây/hộp</p>
        </CoverTextSub>
        <CoverTextSub>
          <h4>Trọng lượng:</h4>
          <p>24 gram</p>
        </CoverTextSub>
        <CoverTextSub>
          <h4>Màu mực:</h4>
          <p>Xanh/Đỏ/Đen</p>
        </CoverTextSub>
      </Content>
    </Wrapper>
  );
}

export default SpecificationsProduct;
