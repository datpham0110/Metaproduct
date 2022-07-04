import React from "react";
import PropTypes from "prop-types";
import {
  Wrapper,
  Content,
  ImageBig,
  LstImgSub,
  ImageSub,
} from "./ImgDetailProduct.styles";
import imgDetail1 from "../../../../images/imgDetail1.png";
import imgDetail2 from "../../../../images/imgDetail2.png";
import imgDetail3 from "../../../../images/imgDetail3.png";
import imgDetail4 from "../../../../images/imgDetail4.png";
ImgDetailProduct.propTypes = {};

function ImgDetailProduct(props) {
  return (
    <Wrapper>
      <Content>
        <div
          style={{
            background: "var(--gray)",
            width: 500,
            justifyContent: "center",
            display: "flex",
          }}
        >
          <ImageBig src={imgDetail1} />
        </div>
        <LstImgSub>
          <ImageSub src={imgDetail4} />
          <ImageSub src={imgDetail2} />
          <ImageSub src={imgDetail3} />
        </LstImgSub>
      </Content>
    </Wrapper>
  );
}

export default ImgDetailProduct;
