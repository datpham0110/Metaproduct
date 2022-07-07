import React from "react";
import { TbSortDescending } from "react-icons/tb";
import { BiSearchAlt2 } from "react-icons/bi";
import img from '../../images/rank.jpg'

const TrendingCard = () => {
  
  const dataTrending = [
    {
      img: img,
      name: 'Tân lực miền Bắc',
      sale: '100,000',
      price: '9,000,000'
    },
    {
      img: img,
      name: 'Tân lực miền Trung',
      sale: '100,000',
      price: '9,000,000'
    },
    {
      img: img,
      name: 'Tân lực miền Nam',
      sale: '100,000',
      price: '9,000,000'
    }

  ]

  return (
    <div className="trendingcard">
      <div className="trendingcard__bar">
        <h2>Top Trending</h2>
        <div className="trendingcard__bar__icons">
          <BiSearchAlt2 />
          <TbSortDescending />
        </div>
      </div>
      <div className="trendingcard__content">
          {
            dataTrending.map((item, index) => (
              <div className="trendingcard__content__item">
                <div className="trendingcard__content__item__name">
                  <img src={item.img} alt={item.name} />
                  {item.name}
                </div>
                <div className="trendingcard__content__item__sale">
                  {item.sale} SP
                </div>
                <div className="trendingcard__content__item__price">
                  {item.price} VND
                </div>
              </div>
            ))
          }
      </div>
    </div>
  );
};

export default TrendingCard;
