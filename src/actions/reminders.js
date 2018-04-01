export const ADD_REMINDER = 'ADD_REMINDER';
export const DELETE_REMINDER = 'DELETE_REMINDER';

export const addReminder = (text) => ({
  type: ADD_REMINDER,
  text
});

export const deleteReminder = (id) => ({
  type: DELETE_REMINDER,
  id
});
