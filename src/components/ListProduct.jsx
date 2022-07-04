import React from 'react'
import LeftSlidebar from './LeftSlidebar'
import ListProductContent from './ListProductContent'
import RightSlideBar from './RightSlideBar'

const ListProduct = () => {
  return (
    <div className="listproduct">
        <LeftSlidebar />
        <ListProductContent />
        <RightSlideBar />
    </div>
  )
}

export default ListProduct