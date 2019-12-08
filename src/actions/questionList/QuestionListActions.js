import commonApi from '../../api/commonApi';
import * as actionTypes from '../actionTypes';

//dispatch action of getQuestionList while in progress to show loading symbol by using property isFetching=true
function requestQuestionListData() {
    return {
      type: actionTypes.REQUEST_QUESTIONS
    }
  }

//dispatch action of getQuestionList after receiving all questions list
function receiveQuestionListData(questionList) {
    return {
        type: actionTypes.GET_QUESTIONS,
        list: questionList
    }
}

//currying the dispatch method of the store to get all questions on page load
export function getQuestionList() {
    return function (dispatch) {
        dispatch(requestQuestionListData())
        return commonApi.getQuestions().then(data => {
            dispatch(receiveQuestionListData(data));
        }).catch(error => {
            throw (error);
        });
    }
}