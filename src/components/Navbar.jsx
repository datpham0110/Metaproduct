import React from "react";
import logoTL from "../asset/logoThienLongOne.png";
import { AiOutlineRight } from "react-icons/ai";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar__title">
        <img src={logoTL} alt="" />
        Thiên Long
      </div>
      <div className="navbar__content">
        <div className="navbar__content__item active">
          Overview
          <AiOutlineRight />
        </div>
        <div className="navbar__content__item">
          Doanh thu sản phẩm
          <AiOutlineRight />
        </div>
        <div className="navbar__content__item">
          Doanh thu nhóm ngành
          <AiOutlineRight />
        </div>
        <div className="navbar__content__item">
          Danh mục sản phẩm
          <AiOutlineRight />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
