import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import UserContext from '../../contexts/UserContext'
import './Header.css'

class Header extends Component {
  static contextType = UserContext

  handleLogoutClick = () => {
    this.context.processLogout()
  }

  renderLogoutLink() {
    return (
      <div>
        <span>
          {this.context.user.name}
        </span>
        <nav>
          <Link
            onClick={this.handleLogoutClick}
            to='/login'>
            Logout
          </Link>
        </nav>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <nav className='top-nav'>
        <ul>
          <li><Link to='/login'>Login</Link></li>
          {' '}
          <li><Link to='/register'>Sign up</Link></li>
        </ul>
      </nav>
    )
  }

  render() {
    return (
      <header>
        <h1 className='title'>
          <Link to='/'>
            Spaced Repetition French
          </Link>
        </h1>
        <nav>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
        </nav>
      </header>
    );
  }
}

export default Header
