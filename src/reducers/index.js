import { combineReducers } from 'redux';
import { addUser } from './reducers';

const rootReducers = combineReducers({
    users: addUser
});  

export default rootReducers;