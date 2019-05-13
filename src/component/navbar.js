import React, { Component } from 'react'
import '../App.css'
import fire from'../fire'
import firebase from 'firebase'

class navbar extends Component{
  signOutUser() {
    firebase.auth().signOut().then(function() {
      console.log('Signed Out');
  // Sign-out successful.
}).catch(function(error) {
  console.log('There is a problem somewhere...');
  // An error happened.
});

  }
  signInUser(){
    let provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
  // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
  // The signed-in user info.
    var user = result.user;
  // ...
  }).catch(function(error) {
  // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
  // The email of the user's account used.
    var email = error.email;
  // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
  // ...
});
  }
  render(){
    console.log(this.props)
    return(
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
    <img src={ this.props.image} width="30" height="30" className="d-inline-block align-top logo" alt=""/>

  </a>
  <a className="navbar-brand" href="#">VBook</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Profile</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Create</a>
      </li>
      <li className='nav-item'>
        <a className="nav-link">{ this.props.userName }</a>
      </li>
    </ul>
    <form>
    {this.props.user ? <button className="btn btn-outline-success my-2 my-sm-0" type="submit"
    onClick={() =>{this.signOutUser()}} >Log Out</button> : <button className="btn btn-outline-success" type="button"
    onClick={() =>{this.signInUser()}}>Log In</button>}

    </form>
  </div>
</nav>
    )
  }
  }


export default navbar
