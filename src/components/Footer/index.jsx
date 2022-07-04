import React from "react";
import PropTypes from "prop-types";
import {
  Wrapper,
  Content,
  MenuPro,
  InfoCompany,
  ImgThienLongOne,
} from "./Footer.styles";
import logoThienLongOne from "../../images/logoThienLongOne.png";
Footer.propTypes = {};

function Footer(props) {
  return (
    <Wrapper>
      <Content>
        <InfoCompany>
          <ImgThienLongOne src={logoThienLongOne} />

          <h3>CÔNG TY CỔ PHẦN TẬP ĐOÀN THIÊN LONG</h3>
          <p>
            Tầng 10, Sofic Tower, Số 10 Đường Mai Chí Thọ, Phường Thủ Thiêm,
            Thành phố Thủ Đức, Thành phố Hồ Chí Minh, Việt Nam
          </p>
          <p>(+84) 28 3750 55 77</p>
          <p>info@thienlonggroup.com</p>
        </InfoCompany>
        <MenuPro>
          <h3>HỖ TRỢ NGƯỜI DÙNG</h3>
          <h4 style={{ color: "#FF0000" }}>Hotline Information Technology: 911</h4>
          <p>Hướng dẫn tìm kiếm</p>
          <p>Hướng dẫn chỉnh sửa và trao đổi góp ý</p>
        </MenuPro>
        <MenuPro>
          <h3>Văn phòng phẩm</h3>
          <p>Bút viết calligrahy</p>
          <p>Bút máy</p>
          <p>Bút vẽ</p>
          <p>Bút market</p>
          <p>Bút line</p>
          <p>Bút brush</p>
          <p>Bút màu nhũ</p>
        </MenuPro>
        <MenuPro>
          <h3>Dụng cụ học tập</h3>
          <p>Bút viết calligrahy</p>
          <p>Bút máy</p>
          <p>Bút vẽ</p>
          <p>Bút market</p>
          <p>Bút line</p>
          <p>Bút brush</p>
          <p>Bút màu nhũ</p>
        </MenuPro>

      </Content>
    </Wrapper>
  );
}

export default Footer;
