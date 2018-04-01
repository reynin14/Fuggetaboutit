import { ADD_REMINDER } from '../actions/reminders';

const reminder = (action) => {
  return {
    text: action.text,
    id: Math.random(),
  }
}

const reducer = (state = [], action) => {
  let reminders = null;
  switch(action.type){
    case ADD_REMINDER:
      reminders = [...state, reminder(action)]
      return reminders;
    default:
      return state;
  }
}

export default reducer
