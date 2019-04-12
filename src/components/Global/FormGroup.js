import React from 'react'
import PropTypes from 'prop-types'

export default function FormGroup({fieldType, fieldName, name,  
  fieldPlaceholder, fieldId, classNames, onChageEvent}) {
  return (
    <div className="form-group">
      <label htmlFor={fieldId}>
        {fieldName}
      </label>
      <input 
        type={fieldType}
        className={classNames}
        name={name}
        id={fieldId}
        placeholder={fieldPlaceholder}
        onChange={onChageEvent()}
      />
    </div>
  )
}

FormGroup.defaultProps = {
  fieldType: 'text',
  classNames: 'form-control'
}

FormGroup.propTypes = {
  fieldType: PropTypes.string,
  fieldName: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  fieldPlaceholder: PropTypes.string.isRequired,
  fieldId: PropTypes.string.isRequired,
  classNames: PropTypes.string,
  onChageEvent: PropTypes.func.isRequired
}


