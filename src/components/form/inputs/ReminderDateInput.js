import React from 'react';
import PropTypes from 'prop-types';


const ReminderDateInput = (props) => {
  return (
    <input
      className='form-control'
      type='datetime-local'
      onChange={props.handleDateUpdate}
    />
  )
}

ReminderDateInput.propTypes = {
  handleDateUpdate: PropTypes.func,
}

export default ReminderDateInput
