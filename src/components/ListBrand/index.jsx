import React from "react";
import PropTypes from "prop-types";
import { Wrapper, Content, Card, ImgCard } from "./ListBrand.styles";
import brand1 from "../../images/brand1.png";
import brand2 from "../../images/brand2.png";
import brand3 from "../../images/brand3.png";
import brand4 from "../../images/brand4.png";
import brand5 from "../../images/brand5.png";

ListBrand.propTypes = {};

function ListBrand(props) {
  return (
    <Wrapper>
      <Content>
        <Card>
          <ImgCard src={brand1} />
        </Card>
        <Card>
          <ImgCard src={brand2} />
        </Card>
        <Card>
          <ImgCard src={brand3} />
        </Card>
        <Card>
          <ImgCard src={brand4} />
        </Card>
        <Card>
          <ImgCard src={brand5} />
        </Card>
      </Content>
    </Wrapper>
  );
}

export default ListBrand;
