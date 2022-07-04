import React from "react";
import PropTypes from "prop-types";
import { Image, CoverImage } from "./Product.styles";
import ImgSanPham from "../../images/sanpham.png";
import { Link } from "react-router-dom";

Product.propTypes = {};

function Product({ img }) {
  return (
    <div>
      <Link to={`/detail-product`}>
        <CoverImage>
          <Image src={img} alt="movie-thumb"></Image>
        </CoverImage>
      </Link>
      <div
        style={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "space-between",
          margin: 6,
        }}
      >
        <p style={{ color: "black" }}>BIZNER</p>
        <p style={{ color: "black" }}>50000501</p>
      </div>

      <h3 style={{ color: "black", margin: 6 }}>Bút bi TL-058 đen</h3>
      <h4 style={{ color: "var(--orange)", margin: 6 }}>Bút bi TL-058</h4>
    </div>
  );
}

export default Product;
