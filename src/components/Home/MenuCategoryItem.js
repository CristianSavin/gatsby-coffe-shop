import React from 'react'
import PropTypes from 'prop-types'

export default function MenuCategoryItem({clickEvent, category}) {
  return (
    <button 
      type="button" 
      className="btn btn-yellow text-capitalize m-3" 
      onClick={() => {
        clickEvent(category)
      }}  
    >
      {category}
    </button>
  )
}

MenuCategoryItem.propTypes = {
  clickEvent: PropTypes.func.isRequired
}



