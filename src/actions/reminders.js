export const ADD_REMINDER = 'ADD_REMINDER';
export const DELETE_REMINDER = 'DELETE_REMINDER';

export const addReminder = (text, dueDate) => ({
  type: ADD_REMINDER,
  text,
  dueDate,
});

export const deleteReminder = (id) => ({
  type: DELETE_REMINDER,
  id
});
