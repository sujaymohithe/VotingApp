import commonApi from '../../api/commonApi';
import * as actionTypes from '../actionTypes';

function requestQuestionDetailsData() {
    return {
        type: actionTypes.REQUEST_QUESTION_DETAILS
    }
}

function receiveQuestionDetailsData(questionDetails) {
    return {
        type: actionTypes.GET_QUESTION_DETAILS,
        data: questionDetails
    }
}

//currying the dispatch method of the store to get particular question details
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


//Save vote method 
export function saveVote(input) {
    return function (dispatch) {
        return commonApi.saveVote(input).then(data => {
            return data;
        }).catch(error => {
            throw (error);
        });
    }
}