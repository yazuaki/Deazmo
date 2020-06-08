import {createStore, combineReducers} from 'redux'
import activityReducer from './reducers/activityReducer'

const rootReducer = combineReducers({
    activities: activityReducer
})

const configureStore = () => createStore(rootReducer);

export default configureStore;