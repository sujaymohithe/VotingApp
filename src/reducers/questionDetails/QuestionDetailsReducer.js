import * as actionTypes from '../../actions/actionTypes';

export function QuestionDetailsReducer(state = { isFetching: true, questionDetails: [] }, action) {
    switch (action.type) {
        case actionTypes.REQUEST_QUESTION_DETAILS:
            return {
                ...state,
                isFetching: true
            };
        case actionTypes.GET_QUESTION_DETAILS:
            return {
                ...state,
                isFetching: false,
                questionDetails: action.data
            };
        default:
            return state;
    }
}