import { createStore } from 'redux';
import reducer from '../reducers/reminders';

const store = createStore(reducer);

export default store;
