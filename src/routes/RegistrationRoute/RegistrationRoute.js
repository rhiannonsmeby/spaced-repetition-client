import React, { Component } from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm'
import './RegistrationRoute.css';

class RegistrationRoute extends Component {
  static defaultProps = {
    location: {},
    history: {
      push: () => {},
    },
  }

  handleRegistrationSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/'
    history.push(destination)
  }

  render() {
    return (
      <section>
        <p>
        Practice learning a new language with the spaced reptition revision technique
        </p>
        <div className='boxed'>
        <h2>Sign up</h2>
        <RegistrationForm
          onRegistrationSuccess={this.handleRegistrationSuccess}
        />
        </div>
      </section>
    );
  }
}

export default RegistrationRoute
