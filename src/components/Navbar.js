import React from 'react'
import './Navbar.css'
import PropTypes from 'prop-types'

export default function Navbar(props) {
  return (
    <>
     {/* Pending : Active Tab Based on Activitiy */}
    <nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <a className="navbar-brand flarge" href="/">{props.title}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active flarge" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link flarge" href="/about">{props.aboutText}</a>
        </li>
        </ul>
    </div>
  </div>
</nav>
    </>
  )
}
Navbar.propTypes ={
  title : PropTypes.string.isRequired,
  aboutText: PropTypes.string
}

Navbar.defaultProps ={
  title : 'Set title here',
  aboutText : 'Set about'
}