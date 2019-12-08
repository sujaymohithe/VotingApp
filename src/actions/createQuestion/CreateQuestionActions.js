import commonApi from '../../api/commonApi';

//Create new Question with Answers method 
export function saveQA(input) {
    return function (dispatch) {
        return commonApi.saveQA(input).then(data => {
            return data;
        }).catch(error => {
            throw (error);
        });
    }
}