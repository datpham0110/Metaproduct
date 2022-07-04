import React from 'react'
import PropTypes from 'prop-types'

const Title = props => {
  return (
    <>
        <div className="title">
            <h2>{props.title}</h2>
            <span>{props.des}</span>
        </div>
    </>
  )
}

Title.propTypes = {}

export default Title