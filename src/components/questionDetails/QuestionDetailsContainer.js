import React from 'react';
import { getQuestionDetails, saveVote } from '../../actions/questionDetails/QuestionDetailsAction';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import QuestionDetails from './QuestionDetails';
import './QuestionDetails.css';

class QuestionDetailsContainer extends React.Component {
    constructor(props) {
        super(props);
        var param = this.props.match.params.id;
        this.state = {
            questionId: param
        }
    }

    componentDidMount() {
        //below method get all questions list from api
        this.props.getQuestionDetails(this.state.questionId);
    }

    render() {
        const { isFetching, questionDetails } = this.props
        return (
            <div className="section">
                <div className="SvbtnRight">
                    <a href="/" className="ButtonPrimary">Back To Home</a>
                </div>
                {isFetching && questionDetails.length === 0 && <h2 className="Notify">Loading... Please wait</h2>}
                {!isFetching && questionDetails.length === 0 && <h2 className="Notify">No Results</h2>}
                <QuestionDetails questionDetails={questionDetails} isFetching={isFetching} saveVote={this.props.saveVote} getQuestionDetails={this.props.getQuestionDetails} questionId={this.state.questionId} />
            </div >
        )
    }
}

//method that copies part of the state to the props of this component.
function mapStateToProps(state) {
    return {
        isFetching: state.QuestionDetailsReducer.isFetching,
        questionDetails: state.QuestionDetailsReducer.questionDetails,
    }
}

//these functions will be accessible via props in other child components
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getQuestionDetails: getQuestionDetails,
        saveVote: saveVote
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionDetailsContainer);