import commonApi from '../../api/commonApi';
import * as actionTypes from '../actionTypes';

//dispatch action of getQuestionDetails while in progress to show loading symbol by using property isFetching=true
function requestQuestionDetailsData() {
    return {
        type: actionTypes.REQUEST_QUESTION_DETAILS
    }
}

//dispatch action of getQuestionDetails after receiving question details
function receiveQuestionDetailsData(questionDetails) {
    return {
        type: actionTypes.GET_QUESTION_DETAILS,
        data: questionDetails
    }
}

//currying the dispatch method of the store to get particular question details by passing question id
export function getQuestionDetails(id) {
    return function (dispatch) {
        dispatch(requestQuestionDetailsData())
        return commonApi.getQuestionDetails(id).then(data => {
            dispatch(receiveQuestionDetailsData(data));
        }).catch(error => {
            throw (error);
        });
    }
}


//Save vote method from question detail page for a particular question
export function saveVote(input) {
    return function (dispatch) {
        return commonApi.saveVote(input).then(data => {
            return data;
        }).catch(error => {
            throw (error);
        });
    }
}