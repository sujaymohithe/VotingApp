import React from 'react';
import './CreateQuestion.css';
import TextArea from '../common/TextArea';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { saveQA } from '../../actions/createQuestion/CreateQuestionActions';
import toastr from 'toastr';

class CreateQuestionContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            question: "",
            answers: "",
            saving: false
        }
    }

    handleChange(e, fieldName) {
        if (fieldName === "question") {
            this.setState({ question: e.currentTarget.value })
        }
        else {
            this.setState({ answers: e.currentTarget.value })
        }
    }

    SaveQAClicked() {
        this.setState({saving : true});
        if (this.state.question.trim() === "" || this.state.answers.trim() === "") {
            toastr.warning("Please enter values");
            this.setState({saving : false});
        }
        else {
            this.props.saveQA(this.state)
                .then((result) => this.redirect(result))
                .catch(error => {
                    toastr.error("Error while saving, please contact admin.");
                });
        }
    }

    redirect(response) {
        this.setState({saving : false});
        if (response) {
            this.setState({ question: "", answers: "" });
            toastr.success("Question is submitted successfully");
        }
        else {
            toastr.error("Error while saving, please try later.");
        }
    }

    render() {
        return (
            <div className="WidgetBox" data-test="BoxWidget">
                <div className="Box">
                    <div className="Cardheader">Create New Question</div>
                    <div className="Cardblock">
                        <p>Question </p>
                        <TextArea name="question" cols="45" rows="3" onChange={(e) => this.handleChange(e, "question")} value={this.state.question} placeholder="Type your question here" />
                    </div>
                    <div className="Cardblock">
                        <p>Answers</p>
                        <TextArea name="answers" cols="45" rows="5" onChange={(e) => this.handleChange(e, "answers")} value={this.state.answers} placeholder="Enter answers using ; separated to have multiple answers. For example Question Favorite Fruit & answers to be entered here is - Mango fruit;Apple fruit;Watermelon fruit;Banana fruit" />
                    </div>
                    <div className="CardFooter">
                        <a href="/" className="ButtonPrimary">Back To Home</a>
                        <button type="button" id="CreateQA" className="ButtonPrimary" onClick={this.SaveQAClicked.bind(this)}>{this.state.saving === true ? "Please Wait ..." : "Create"}</button>
                    </div>
                </div>
            </div >
        )
    }
}

//method that copies part of the state to the props of this component.
function mapStateToProps(state) {
    return {}
}

//these functions will be accessible via props in other child components
function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        saveQA: saveQA
    }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateQuestionContainer);