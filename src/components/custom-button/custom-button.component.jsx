import React from 'react'
import PropTypes from 'prop-types';

function CustomButton({ children, version, type, isDisabled}) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  )
}

CustomButton.defaultProps ={
  version: 'primary',
  type: 'button',
  isDisabled: false
}

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  version: PropTypes.string,
  type: PropTypes.string,
  isDisabled: PropTypes.bool,
}

export default CustomButton
