import React from 'react';
import PropTypes from 'prop-types';

import moment from 'moment';

const Reminder = (props) => {

  const { id, text, deleteReminder, dueDate } = props

  return (
    <li className='list-group-item'>
      <div key={id} className='list-item'>
        <div>{text}</div>
      <div><em>{moment(new Date(dueDate)).fromNow()}</em></div>
      </div>
      <div
        className='list-item delete-button'
        onClick={() => deleteReminder(id)}
      >
        &#x2715;
      </div>
    </li>
  )
};

Reminder.propTypes = {
  id: PropTypes.float,
  text: PropTypes.string,
  deleteReminder: PropTypes.func,
  dueDate: PropTypes.obj,
}


export default Reminder;
