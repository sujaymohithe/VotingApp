import React from 'react';
import { getQuestionList } from '../../actions/questionList/QuestionListActions';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Question from './Question';

class QuestionListContainer extends React.Component {
    componentDidMount() {
        this.props.getQuestionList();
    }

    //this is to populate all questions as a box widget from list
    populateList(eachQuestion, index) {
        return (
            <Question data={eachQuestion} key={index} />
        );
    }

    render() {
        return (
            <>
                <div className="RowBtn">
                    <a href="/Create" className="ButtonPrimary">Create New Question</a>
                </div>
                <div className="Row">
                    {this.props.isFetching && this.props.questions.length === 0 && <h2 className="Notify">Loading... Please wait</h2>}
                    {!this.props.isFetching && this.props.questions.length === 0 && <h2 className="Notify">Empty.</h2>}
                    {this.props.questions && this.props.questions.map(this.populateList, this)}
                </div>
            </>
        );
    }
}

//method that copies part of the state to the props of this component.
function mapStateToProps(state) {
    return {
        isFetching: state.QuestionListReducer.isFetching,
        questions: state.QuestionListReducer.questions,
    }
}

//these functions will be accessible via props in other child components
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getQuestionList: getQuestionList,
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionListContainer);
