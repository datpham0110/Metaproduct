import React from 'react'
import img from '../../images/1.jpg'
import logo from '../../images/logo.png'

const InfoCard = () => {

  // Create data for detail product
  const dataInfo = [
    {
      cate: "Tên danh mục:",
      info: "Bút bi"
    },
    {
      cate: "Thương hiệu:",
      info: "Thiên Long"
    },
    {
      cate: "Đầu bi:",
      info: "0.5 mm"
    },
    {
      cate: "Quy cách:",
      info: "1 bút/kiện"
    },
    {
      cate: "Chất liệu đầu bút:",
      info: "Tungsten Carbide (TC)"
    },
    {
      cate: "Tiêu chuẩn mực:",
      info: "Mực hệ đầu. Tiêu chuẩn Mỹ ASTM"
    }
  ]

  return (
    <div className="infocard">
        <div className="infocard__content">
          <div className="infocard__content__box-img">
            <img src={logo} alt="" />
            <img src={img} alt="" />
          </div>
          <div className="infocard__content__info">
            <h2>Bút xoá Thiên Long TL - 031 - Tẩy siêu sạch - Đạt chuẩn châu Âu</h2>
            <div className="infocard__content__info__item">
              <span>Thương hiệu:</span> <a href="#">Thiên Long</a>
            </div>
            <div className="infocard__content__info__item">
              <span>Mã sản phẩm:</span> <a href="#">33293</a>           
            </div>
          </div>
          
        </div>
        <div className="infocard__paramater">
            <div className="infocard__paramater__title">
              Thông số kỹ thuật
            </div>
            <div className="infocard__paramater__content">
              {
                dataInfo.map((item, index) => (
                  <div className="infocard__paramater__content__item" key={index}>
                    <div className="infocard__paramater__content__item__category">
                      {item.cate}
                    </div>
                    <div className="infocard__paramater__content__item__info">
                      {item.info}
                    </div>
                  </div>
                ))
              }
            </div>
        </div>
    </div>
  )
}

export default InfoCard