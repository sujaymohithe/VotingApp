import * as actionTypes from '../../actions/actionTypes';

export function QuestionListReducer(state = { isFetching: true, questions: [] }, action) {
    switch (action.type) {
        case actionTypes.REQUEST_QUESTIONS:
            return {
                ...state,
                isFetching: true
            };
        case actionTypes.GET_QUESTIONS:
            return {
                ...state,
                isFetching: false,
                questions: action.list
            };
        default:
            return state;
    }
}