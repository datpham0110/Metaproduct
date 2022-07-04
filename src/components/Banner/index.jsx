import React, { useState, useEffect } from "react";
import { Wrapper, CoverBtn } from "./Banner.styles";
import { dataBanner } from "../../constants/dataTest";
import BtnBanner from "./components/BtnBanner";
import "./Banner.css";
const Banner = () => {
  const [bannerIndex, setBannerIndex] = useState(1);

  const nextBanner = () => {
    if (bannerIndex !== dataBanner.length) {
      setBannerIndex(bannerIndex + 1);
    } else if (bannerIndex === dataBanner.length) {
      setBannerIndex(1);
    }
  };

  useEffect(() => {
    let timer1 = setTimeout(() => nextBanner(), 3000);
    return () => {
      clearTimeout(timer1);
    };
  }, [bannerIndex]);
  const prevBanner = () => {
    if (bannerIndex !== 1) {
      setBannerIndex(bannerIndex - 1);
    } else if (bannerIndex === 1) {
      setBannerIndex(dataBanner.length);
    }
  };
  return (
    <Wrapper>
      {dataBanner.map((item, index) => {
        return (
          <div
            key={index}
            className={
              bannerIndex === index + 1 ? "slide active-anim" : "slide"
            }
          >
            <img src={item.img} />
          </div>
        );
      })}
      <CoverBtn>
        <BtnBanner moveBanner={nextBanner} direction={"next"} />
        <BtnBanner moveBanner={prevBanner} direction={"prev"} />
      </CoverBtn>
    </Wrapper>
  );
};

export default Banner;
