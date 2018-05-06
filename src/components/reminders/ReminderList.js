import React from 'react';
import { connect } from 'react-redux';

import Reminder from './Reminder';

import { deleteReminder } from '../../actions/reminders';

class ReminderList extends React.Component {

  handleDeleteReminder = (id) => {
    this.props.dispatch(deleteReminder(id))
    console.log('deleting reminder');
  }

  render(){
    const { reminders } = this.props;

    return (
      <ul className='list-group col-sm-4'>
        {
          reminders.map(reminder => {
            return (
              <Reminder
                key={reminder.id}
                id={reminder.id}
                text={reminder.text}
                deleteReminder={this.handleDeleteReminder}
                dueDate={reminder.dueDate}
              />
            )
          })
        }
      </ul>
    )
  }
};


const mapStateToProps = (state) => {
  return {
    reminders: state
  }
};

export default connect(mapStateToProps)(ReminderList);
