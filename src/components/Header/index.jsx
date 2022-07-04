import React from "react";
import iconProfile from "../../images/iconProfile.svg";
import iconSearch from "../../images/iconSearch.svg";
import logo from "../../images/logo.png";
import {
  Content,
  CoverIcon,
  CoverListIcon,
  ListMenu,
  LogoImg,
  TxtMenu,
  Wrapper,
  CoverIconSearch,
} from "./Header.styles";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Wrapper>
      <Content>
        <div
          style={{
            flexDirection: "column",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "space-between",
              minWidth: 1400,
            }}
          >
            <Link to={"/"}>
              <LogoImg src={logo} alt="rmdb-logo" />
            </Link>

            <CoverListIcon>
              <CoverIconSearch>
                <p style={{ color: "#rgb(118 118 118)" }}>
                  Tìm kiếm sản phẩm...
                </p>
                <img
                  src={iconSearch}
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
              </CoverIconSearch>
              <CoverIcon>
                <img
                  src={iconProfile}
                  style={{
                    width: 20,
                    height: 20,
                  }}
                />
              </CoverIcon>
            </CoverListIcon>
          </div>
          <div
            style={{
              flexDirection: "row",
              marginTop: 12,
              justifyContent: "center",
              backgroundColor: "#005aab",
              paddingLeft: 100,
              paddingRight: 100,
            }}
          >
            <ListMenu>
              <TxtMenu>
                <h5>ACCESSORIES</h5>
              </TxtMenu>
              <TxtMenu>
                <h5>NGÀNH MÀNG NHỰA PP</h5>
              </TxtMenu>
              <TxtMenu>
                <h5>PP NEWELL</h5>
              </TxtMenu>
              <TxtMenu>
                <h5>SẢN PHẨM MUA NGOÀI</h5>
              </TxtMenu>
              <TxtMenu>
                <h5>WRITING</h5>
              </TxtMenu>
              <TxtMenu>
                <h5>Y TẾ & HOÁ MỸ PHẨM</h5>
              </TxtMenu>
              <TxtMenu>
                <h5>COLORING & DRAWING</h5>
              </TxtMenu>
              <TxtMenu>
                <h5>FILLING & STORAGE,KHÁC</h5>
              </TxtMenu>
              <TxtMenu>
                <h5>MARKING & HIGHLIGHTING</h5>
              </TxtMenu>
              <TxtMenu>
                <h5>NGÀNH MÀNG NHỰA PP</h5>
              </TxtMenu>
              <TxtMenu>
                <h5>PP NEWELL</h5>
              </TxtMenu>
              <TxtMenu>
                <h5>KHÁC</h5>
              </TxtMenu>
            </ListMenu>
            {/* <ListMenu>
              <TxtMenu>
                <h5>COLORING & DRAWING</h5>
              </TxtMenu>
              <TxtMenu>
                <h5>FILLING & STORAGE,KHÁC</h5>
              </TxtMenu>
              <TxtMenu>
                <h5>MARKING & HIGHLIGHTING</h5>
              </TxtMenu>
              <TxtMenu>
                <h5>NGÀNH MÀNG NHỰA PP</h5>
              </TxtMenu>
              <TxtMenu>
                <h5>PP NEWELL</h5>
              </TxtMenu>
              <TxtMenu>
                <h5>KHÁC</h5>
              </TxtMenu>
            </ListMenu> */}
          </div>
        </div>
      </Content>
    </Wrapper>
  );
};
export default Header;
