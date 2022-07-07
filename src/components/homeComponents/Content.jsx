import React from 'react'
import { AiOutlineRight } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Content = () => {
  return (
    <div className="content-txt">
        <h2>Tốc độ tăng trưởng năm 2022</h2>
        <span>Năm 2015, Thiên Long ghi nhận doanh thu thuần 1.915 tỷ đồng. LNST 188 tỷ đồng và đây cũng là những con số kỷ lục mà doanh nghiệp đạt được kể thì khi thành lập</span>
        <Link to="/blog">
            Xem thêm
            <AiOutlineRight /> 
        </Link>
    </div>
  )
}

export default Content