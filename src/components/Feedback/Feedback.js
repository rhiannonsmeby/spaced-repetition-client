import React from 'react';
import Button from '../Button/Button';

export default class Feedback extends React.Component {
    renderMessage = () => {
        if (this.props.isCorrect === true) {
            return <h2>You were correct! :D</h2>
        }
        else {
            return <h2>Good try, but not quite right :(</h2>
        }
    }

    render() {
        return (
            <div className='feedback boxed'>
                {this.renderMessage()}
                <div className='DisplayScore'>
                    <p>Your total score is: {this.props.total}</p>
                </div>
                <div className='DisplayFeedback'>
                    <p>The correct translation for <span lang='fr' dir='ltr'>{this.props.lastWord}</span> was {this.props.answer} and you chose {this.props.guess}!</p>
                </div>
                <Button onClick={this.props.tryAnotherClick}>
                    Try another word!
                </Button>
            </div>
        )
    }
}