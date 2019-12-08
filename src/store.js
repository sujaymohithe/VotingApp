// Imports
import { compose, combineReducers } from 'redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

// App Imports
import * as questionListReducerData from  './reducers/questionList/QuestionListReducer';
import * as questionDetailsReducerData from  './reducers/questionDetails/QuestionDetailsReducer';

// App Reducer
const appReducer = combineReducers({
    ...questionListReducerData,
    ...questionDetailsReducerData
})

// Root Reducer
export const rootReducer = (state, action) => {
    if (action.type === 'RESET') {
        state = undefined
    }
    return appReducer(state, action)
}

// Load initial state from server side
let initialState
if(typeof window !== 'undefined') {
    initialState = window.__INITIAL_STATE__
    delete window.__INITIAL_STATE__
}

// Store
export const store = createStore(
    rootReducer,
    initialState,

    compose(
        applyMiddleware(thunk),
    )
)
