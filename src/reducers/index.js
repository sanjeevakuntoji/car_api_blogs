import { combineReducers } from 'redux';
import postRedures from './postRedures';
import usersReducer from './usersReducer';


export default  combineReducers({
    posts: postRedures,
    users: usersReducer
})