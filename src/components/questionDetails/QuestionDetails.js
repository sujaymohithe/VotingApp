import React from 'react';
import toastr from 'toastr';

class QuestionDetails extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedVote: "",
            isSaving : false
        }
    }

    ChoicesList(choiceItem, index) {
        let totalVotes = this.props.questionDetails.choices && this.props.questionDetails.choices.reduce((a, b) => a + b.votes, 0);
        let percentage = totalVotes === 0 ? 0 : (choiceItem.votes * 100) / totalVotes;
        return (<tr key={index}>
            <td className="sw"><input type="radio" name="answer_name" value={choiceItem.url} onChange={this.onAnswerChanged.bind(this)} /></td>
            <td className="lw">{choiceItem.choice}</td>
            <td className="mw">{choiceItem.votes} votes</td>
            <td className="mw">{percentage.toFixed(2)} %</td>
        </tr>)
    }

    onAnswerChanged(e) {
        this.setState({ selectedVote: e.currentTarget.value });
    }

    btnSaveClicked() {
        this.setState({isSaving : true});   
        if (this.state.selectedVote === "") {
            toastr.warning("Please select an answer before submitting");
        }
        else {
            this.props.saveVote(this.state.selectedVote)
                .then((result) => this.redirect(result))
                .catch(error => {
                    toastr.error("Error while saving, please contact admin.");
                });
        }
    }

    redirect(response) {
        if (response) {
            this.props.getQuestionDetails(this.props.questionId);
            this.forceUpdate();
            this.setState({selectedVote : "", isSaving : false});            
            toastr.success("Vote is submitted successfully");
        }
        else {
            toastr.error("Error while saving, please try later.");
        }
    }

    render() {
        const { isFetching, questionDetails } = this.props;

        return (
            <div>
                {questionDetails.question && !isFetching &&
                    <div>
                        <h2>Question Detail</h2>
                        <div>
                            <h2>Question : {questionDetails.question}</h2>
                            <div>
                                {questionDetails.choices && questionDetails.choices.length > 0 &&
                                    <table>
                                        <tbody>
                                            {questionDetails.choices.map(this.ChoicesList, this)}
                                        </tbody>
                                    </table>
                                }
                            </div>
                            <div className="Svbtn">
                                <button type="button" className="ButtonPrimary" onClick={this.btnSaveClicked.bind(this)}>{this.state.isSaving === true ? "Saving ..." : "Save Vote"}</button>
                            </div>
                        </div >
                    </div>}
            </div>
        );
    }
}

export default QuestionDetails;