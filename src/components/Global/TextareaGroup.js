import React from 'react'
import PropTypes from 'prop-types'

export default function TextareaGroup({fieldId, fieldName, name, 
  fieldPlaceholder, onChangeEvent, }) {
  return (
    <div className="form-group">
      <label htmlFor={fieldId}>
        {fieldName}
      </label>
      <textarea 
        id={fieldId} 
        name={name} 
        className="form-control"
        placeholder={fieldPlaceholder}
        onChange={onChangeEvent()}
      ></textarea>
    </div>
  )
}

TextareaGroup.propTypes = {
  fieldId: PropTypes.string.isRequired,
  fieldName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  fieldPlaceholder: PropTypes.string.isRequired,
  onChangeEvent: PropTypes.func.isRequired
}
