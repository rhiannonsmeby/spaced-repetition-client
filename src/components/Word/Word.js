import React from 'react'
import Button from '../Button/Button'
import {Input, Label} from '../Form/Form'

export default class Word extends React.Component {
    render() {
        return (
            <div className='word'>
                <h2>Translate the word/ phrase:</h2>
                <div className='boxed'>
                <span lang='fr' dir='ltr' className='actual_word'>{this.props.word}</span>
                <form className='guess-form' onSubmit={e => {this.props.handleGuess(e)}}>
                    <Label htmlFor='learn-guess-input'>
                        What is the translation for this word?
                    </Label>
                    <Input
                        id='learn-guess-input'
                        name='guess'
                        type='text'
                        onChange = {this.props.onChange}
                        required
                    />
                    <br />
                    <Button type='submit'>Submit your answer</Button>
                </form>
                </div>
                <main>
                    <p className='total-score'>Your total score is: {this.props.total}</p>
                    <p className='correct-score'>You have answered this word correctly {this.props.correct} times</p>
                    <p className='incorrect-score'>You have answered this word incorrectly {this.props.incorrect} times</p>
                </main>
            </div>
        )
    }
}