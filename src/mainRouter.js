import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import QuestionList from './components/questionList/QuestionListContainer';

class mainRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={QuestionList} />                                       
                </Switch>
            </BrowserRouter>
        )
    }
}

export default mainRouter;