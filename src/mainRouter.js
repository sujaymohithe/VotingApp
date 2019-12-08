import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import QuestionList from './components/questionList/QuestionListContainer';
import QuestionDetails from './components/questionDetails/QuestionDetailsContainer';

class mainRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={QuestionList} />
                    <Route path="/questions/:id" component={QuestionDetails} />                                
                </Switch>
            </BrowserRouter>
        )
    }
}

export default mainRouter;