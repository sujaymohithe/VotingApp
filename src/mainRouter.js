import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import QuestionList from './components/questionList/QuestionListContainer';
import QuestionDetails from './components/questionDetails/QuestionDetailsContainer';
import CreateQuestionContainer from './components/createQuestion/CreateQuestionContainer';

class mainRouter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={QuestionList} />
                    <Route path="/questions/:id" component={QuestionDetails} />
                    <Route path="/create" component={CreateQuestionContainer} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default mainRouter;