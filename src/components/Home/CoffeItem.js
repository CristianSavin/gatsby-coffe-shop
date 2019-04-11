import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'

export default function CoffeItem({image, title, price, description}) {
  return (
    <div 
      className="col-11 col-md-6 my-3 d-flex mx-auto"  
    >
      <div>
        <Img fixed={image.fixed} />
      </div>
      {/* item text */}
      <div className="flex-grow-1 px-3">
        <div className="d-flex justify-content-between">
          <h6 className="mb-0">
            <small>
              {title}
            </small>
          </h6>
          <h6 className="mb-0 text-yellow">
            <small>
              ${price}
            </small>
          </h6>
        </div>
        <p className="text-muted">
          <small>
            {description}
          </small>
        </p>
      </div>
    </div>
  )
}

CoffeItem.propTypes = {
  image: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string.isRequired
}


