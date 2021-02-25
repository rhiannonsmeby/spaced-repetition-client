import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import './DashboardRoute.css';
import WordList from '../../components/WordList/WordList';
import LanguageService from '../../services/language-service';

class DashboardRoute extends Component {
  state = {
    words: [],
    language: '',
    totalCorrect: 0,
  }

  componentDidMount() {
    LanguageService.getAllWords()
      .then(res => {
        console.log(res);
        this.setState({
          words: res.words,
          language: res.language.name,
          totalCorrect: res.language.total_score
        })
      })
  }

  render() {
    const wordsToLearn = this.state.words.map((word) => {
      return (
        <li key={word.id} className='display-words'>
          <WordList
            original={word.original}
            correct_count={word.correct_count}
            incorrect_count={word.incorrect_count} />
        </li>
      )

    })

    return (
      <section>
        <p>Continue learning the French words you need for an easy trip to the boulongerie</p>
        <div className='sign-up'>
          <h2>Dashboard</h2>
          <div className='details'>
            <h2>{`Language: ${this.state.language}`}</h2>
            <p>{`Total correct answers: ${this.state.totalCorrect}`}</p>
          </div>
          <Link to='/learn'>
            <button>
              Start practicing
            </button>
          </Link>
        </div>

        <h3>Words to practice</h3>
        
        <ul className='grid-rows'>
          {wordsToLearn}
        </ul>


      </section>
    );
  }
}

export default DashboardRoute