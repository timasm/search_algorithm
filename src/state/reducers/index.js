import { combineReducers } from 'redux';
import reducerNodes from './reducerNodes'

const reducers = combineReducers({
    nodes: reducerNodes
});

export default reducers;