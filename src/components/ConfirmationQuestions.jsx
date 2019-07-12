import React from 'react'
import PropTypes from 'prop-types'

function ConfirmationQuestions(props) {
  return (
    <div>
      <p>Are you sure this keg doesn't already exist in our system?</p>
      <button onClick={props.onInventoryConfirmation}>Yes</button>
    </div>
  )
}

ConfirmationQuestions.propTypes = {
  onInventoryConfirmation: PropTypes.func
}

export default ConfirmationQuestions
