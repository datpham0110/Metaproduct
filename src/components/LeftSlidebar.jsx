import React from 'react'
import { AiOutlineSearch, AiOutlineRight } from "react-icons/ai"
import { FaPencilAlt } from "react-icons/fa"

const LeftSlidebar = () => {
  const data = [
    {
      icon: <AiOutlineSearch />,
      name: "Bút viết"
    },
    {
      icon: <AiOutlineSearch />,
      name: "Văn phòng phẩm"
    },
    {
      icon: <AiOutlineSearch />,
      name: "Dụng cụ học tập"
    },
    {
      icon: <AiOutlineSearch />,
      name: "Mỹ thuật"
    },
    {
      icon: <AiOutlineSearch />,
      name: "Đồ chơi"
    },
    {
      icon: <AiOutlineSearch />,
      name: "STEAM & DIY"
    },
    {
      icon: <AiOutlineSearch />,
      name: "Sản phẩm cao cấp"
    },
    {
      icon: <AiOutlineSearch />,
      name: "FlexHome"
    }
  ]
  const category = [
    {
      name: "Flexoffice"
    },
    {
      name: "Thiên Long"
    },
    {
      name: "Điểm 10"
    },
    {
      name: "Bizner"
    }
  ]
  return (
    <div className="leftbar">
        <div className="leftbar__search">
            <input type="text" placeholder="Tìm kiếm sản phẩm ..."/>
            <AiOutlineSearch />
        </div>
        <div className="leftbar__content">
          {
            data.map((item, index) => (
              <div className="leftbar__content__item" key={index}>
                <div className="leftbar__content__item__left">
                    {item.icon}
                    <span>{item.name}</span>
                </div>
                <AiOutlineRight />
              </div>
            ))
          }
        </div>
        <div className="leftbar__group">
            <div className="leftbar__group__category">
              <h3>THƯƠNG HIỆU</h3>
              {
                category.map((item, index) => (
                  <div className="leftbar__group__category__item" key={index}>
                    <input type="checkbox" />
                    {item.name}
                  </div>
                ))
              }
              
             
            </div>
            <div className="leftbar__group__colors">
              <h3>MÀU SẮC</h3>
              <div className="leftbar__group__colors__item">

              </div>
            </div>
        </div>
    </div>
  )
}

export default LeftSlidebar