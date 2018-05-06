import React from 'react';
import PropTypes from 'prop-types';

const ClearButton = (props) => {

  return (
    <div
      className='btn btn-danger'
      onClick={() => props.clearReminders()}
    >
      Clear Reminders
    </div>
  )
}

ClearButton.propTypes = {
  clearReminders: PropTypes.func,
}

export default ClearButton;
