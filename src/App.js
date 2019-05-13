import React, { Component } from 'react';
import './App.css';
import Navbar from './component/navbar'
import UserProfile from'./component/user-profile'
import Login from './component/login'
import fire from './fire.js'

class App extends Component {
  constructor(props){
    super(props)
    this.state = { user:  null}
  }

  componentDidMount(){
    fire.auth().onAuthStateChanged((user)=> {
  if (user) {
    // User is signed in.
    console.log(user);
    this.setState({user})
    // ...
  } else {
    // User is signed out.
    // ...
    console.log('signed out')
  }
});
  }
  render() {
    console.log(this.state.user);
    return (
      <div>
      <Navbar user={this.state.user}/>
        {this.state.user ? <UserProfile userEmail = {this.state.user.email}/> : <Login/>}
      </div>
  )
  }
}
export default App;
