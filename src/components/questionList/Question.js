import React from 'react';
import './Question.css';

class Question extends React.Component {

    render() {
        const { data } = this.props;
        const date = new Date(data.published_at);

        return (
            <div className="Widget" data-test="BoxWidget">
                <div className="Boxwidget">
                    <div className="Cardheader">Question - {data.question}</div>
                    <div className="Cardblock">
                        <p>Published Date - {date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate()} </p>
                        <p>Number Of Choices - {data.choices.length} </p>
                    </div>
                    <div className="CardFooter">
                        <a href={data.url} className="ButtonPrimary">Vote</a>
                    </div>
                </div>
            </div >
        );
    }
}

export default Question;
