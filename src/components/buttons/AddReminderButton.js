import React from 'react';
import PropTypes from 'prop-types';


const AddReminderButton = (props) => {
  return (
    <button
      type='button'
      className='btn btn-success'
      onClick={() => props.addReminder()}
    >
      Add Reminder
    </button>
  )
}

AddReminderButton.propTypes = {
  addReminder: PropTypes.func,
}

export default AddReminderButton;
