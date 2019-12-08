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
}

export default CommonApi;