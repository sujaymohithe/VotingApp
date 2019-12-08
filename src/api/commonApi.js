import axios from 'axios';
import * as appConstants from '../appConstants';

class CommonApi {
    static getQuestions() {
        return axios.get(appConstants.API_URL + "questions").then(response => {
            return response.data;
        }).catch(error => {
            return error;
        });
    }

    static getQuestionDetails(id) {
        return axios.get(appConstants.API_URL + "questions/" + id).then(response => {
            return response.data;
        }).catch(error => {
            return error.response.status === 404 ? [] : error;
        });
    }

    static saveVote(data) {
        return axios.post(appConstants.API_URL + data).then(response => {
            return response.status === 201 ? true : false;
        }).catch(error => {
            return error;
        });
    }

    static saveQA(data) {
        var jsonQAData =
        {
            "question": data.question,
            "choices": data.answers.split(";")
        };
        return axios.post(appConstants.API_URL + "questions?page=1", jsonQAData).then(response => {
            debugger;
            return response.status === 201 ? true : false;
        }).catch(error => {
            debugger;
            return error;
        });
    }
}

export default CommonApi;