import React, {Component} from 'react'
import './CSS/signup.css'
import fire from'../fire'
import firebase from 'firebase'

class SignUp extends Component {

  render(){
    return(
      <div>
      <nav>
        <div className="nav-wrapper">
          <ul id="nav-mobile" className="right hide-on-med-and-down">

            <a className="waves-effect waves-light btn" id="signInButton" onClick = {()=> this.signInUser()}>Sign In</a>
            <a className="waves-effect waves-light btn" id="signUpButton">Sign Up</a>
          </ul>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col s1"></div>
          <div className="col s10">
            <h1 className='nameQ'>What is your Name?</h1>
            <input className='name'/>
            <h1 className='quoteQ'> What is you favourite quote</h1>
            <input className='quoute'/>
            <h1 className='educationQ'>Where did you recieve your education</h1>
            <input className = education />
            <h1 className='thanks'>Thank You!</h1>
          </div>
        </div>
        <div className="row">
          <div className="col s12">

          </div>
          </div>
        </div>

      </div>
    )
  }
}
