import React from 'react';
import PropTypes from 'prop-types';

const ReminderTextInput = (props) => {
  return (
    <input
      className='form-control'
      placeholder='I have to...'
      onChange={props.handleTextUpdate}
    />
  )
}

ReminderTextInput.propTypes = {
  handleTextUpdate: PropTypes.func,
}

export default ReminderTextInput;
