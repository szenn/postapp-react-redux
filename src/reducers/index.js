import { combineReducers } from 'redux';
import postReducer from './postReducer'

const Reducers = combineReducers({
  posts: postReducer
});

export default Reducers;