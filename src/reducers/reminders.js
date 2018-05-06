import { ADD_REMINDER, DELETE_REMINDER, CLEAR_REMINDERS } from '../actions/reminders';
import { bake_cookie, read_cookie } from 'sfcookies';

const addReminder = (action) => {
  let { text, dueDate } = action;
  return {
    id: Math.random(),
    text,
    dueDate,
  }
}

const removeById = (state = [], id) => {
  const reminders = state.filter(reminder => reminder.id !== id);
  return reminders
}

const reducer = (state = [], action) => {
  let reminders = null;
  state = read_cookie('reminders');

  switch(action.type){
    case ADD_REMINDER:
      reminders = [...state, addReminder(action)]
      bake_cookie('reminders', reminders);
      return reminders;
    case DELETE_REMINDER:
      reminders = removeById(state, action.id);
      bake_cookie('reminders', reminders);
      return reminders
    case CLEAR_REMINDERS:
      reminders = [];
      bake_cookie('reminders', reminders);
      return reminders
    default:
      return state;
  }
}

export default reducer
