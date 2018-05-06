import React from 'react';
import { connect } from 'react-redux';

import { addReminder } from '../../actions/reminders';

import AddReminderButton from '../buttons/AddReminderButton';
import ReminderTextInput from './inputs/ReminderTextInput';
import ReminderDateInput from './inputs/ReminderDateInput';

class ReminderForm extends React.Component {

  state = {
    text: '',
    dueDate: '',
  }

  handleTextUpdate = (event) => {
    this.setState({
      text: event.target.value,
    })
  }

  handleDateUpdate = (event) => {
    this.setState({
      dueDate: event.target.value,
    })
  }

  handleAddingReminder = () => {
		this.props.addReminder(this.state.text, this.state.dueDate);
		console.log('adding reminder');
	}

  render(){
    return(
      <div className='form-inline reminder-form'>

        <div className='form-group'>
          <ReminderTextInput
            handleTextUpdate={this.handleTextUpdate}
          />

          <ReminderDateInput
            handleDateUpdate={this.handleDateUpdate}
          />
        </div>

        <AddReminderButton
          addReminder={this.handleAddingReminder}
        />
      </div>
    )
  }
}

export default connect(null, { addReminder })(ReminderForm);
