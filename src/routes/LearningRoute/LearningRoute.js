import React, { Component } from 'react'
import Word from '../../components/Word/Word'
import LearnContext from '../../contexts/LearnContext'
import LanguageService from '../../services/language-service'

class LearningRoute extends Component {
  static contextType = LearnContext

  handleGuess = (e) => {
    e.preventDefault();
    this.setState({guess: e.target.value});
  };

  componentDidMount() {
    LanguageService.getHead()
      .then(data => {
        if(!data) {
          console.error(data);
          throw new Error('Something went wrong')
        }
        this.context.setNextWord(data.nextWord)
        this.context.setTotalScore(data.totalScore)
        this.context.setWordCorrectCount(data.wordCorrectCount)
        this.context.setWordIncorrectCount(data.wordIncorrectCount)
      })
      .catch(this.context.setError)
  }
  render() {
    return (
      <section>
        <Word
          word={this.context.nextWord}
          handleGuess= {this.handleGuess}
          total={this.context.totalScore}
          correct={this.context.wordCorrectCount}
          incorrect={this.context.wordIncorrectCount}
        />
      </section>
    );
  }
}

export default LearningRoute
