import React from 'react'
import LeftSlidebar from './LeftSlidebar'
import ListProductContent from './ListProductContent'

const ListProduct = () => {
  return (
    <div className="listproduct">
        <LeftSlidebar />
        <ListProductContent />
    </div>
  )
}

export default ListProduct