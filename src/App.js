import React from 'react';
import { connect } from 'react-redux';

import { clearReminders } from './actions/reminders';

import Header from './components/header/Header';
import ReminderForm from './components/form/ReminderForm';
import ReminderList from './components/reminders/ReminderList';
import ClearButton from './components/buttons/ClearButton';

class App extends React.Component {

	render() {

		return (
			<div className='App'>
				<Header />
				<ReminderForm />
				<ReminderList />
				<ClearButton
					clearReminders={this.props.clearReminders}
				/>
			</div>
		);
	}
}

function mapStateToProps(state){
	return {
		reminders: state
	}
};


export default connect(mapStateToProps, { clearReminders })(App);
