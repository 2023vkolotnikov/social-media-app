import React, {Component} from 'react'
import './CSS/login.css'
import fire from'../fire'
import firebase from 'firebase'



class Login extends Component{
  constructor(props){
    super(props)
    this.state = {firstName: null, lastName: null, email: null, password: null, age:null, education:null, quote:null,}
  }
  handleChange(e) {
    if (e.target.id == 'firstName') {
      this.setState({firstName: e.target.value})
    } else if (e.target.id == 'lastName') {
      this.setState({lastName: e.target.value})
    } else if (e.target.id == 'email') {
      this.setState({email: e.target.value})
    } else if (e.target.id == 'password') {
      this.setState({password: e.target.value})
    } else if (e.target.id =='age') {
      this.setState({age: e.target.value})
    } else if (e.target.id =='education') {
      this.setState({education: e.target.value})
    } else if (e.target.id =='quote') {
      this.setState({quote: e.target.value})
      console.log('hi');
    }
  }
  signUp() {
  let email=this.state.email
  let password=this.state.password
  let firstName = this.state.firstName
  let lastName = this.state.lastName
  let age = this.state.age
  let education = this.state.education
  let quote = this.state.quote

  firebase.auth().createUserWithEmailAndPassword(email, password)
  .then(function() {
    let profile={
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
      age: age,
      education: education,
      quote: quote
    }
    console.log('hello');
    console.log(profile);
  firebase.database().ref('/users').push(profile)
  .catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
  });
})
  .catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage);
});
  }

  render(){
    console.log(this.state)

    return(
      <div>
      
        <div className="container">
          <div className='row'>
            <div className='col-5 offset-7'>
              <h1>Create New Account</h1>
              <p>It is absolutely free</p>
              <div className='row'>
                <div className='col-6'>
                  <input placeholder = 'First Name' id='firstName' className='form-control' type='text' value={this.state.firstName} required onChange = {this.handleChange.bind(this)}/>
                </div>
                <div className='col-6'>
                  <input placeholder = 'Last Name' id='lastName' className='form-control' type='text'  value = {this.state.lastName} required onChange = {this.handleChange.bind(this)}/>
                </div>
                <div className ='col-12'>
                  <input placeholder = 'Phone Number or Email' id='email' className='form-control' type='text' value = {this.state.email}required onChange = {this.handleChange.bind(this)}/>
                </div>
                <div className ='col-12'>
                  <input placeholder = 'Password' id='password' className='form-control' type='password' value = {this.state.password}required onChange = {this.handleChange.bind(this)}/>
                </div>
                <div className ='col-12'>
                  <input placeholder = 'Age' id='age' className='form-control' type='text' value = {this.state.age}required onChange = {this.handleChange.bind(this)}/>
                </div>
                <div className ='col-12'>
                  <input placeholder = 'Education' id='education' className='form-control' type='text' value = {this.state.education}required onChange = {this.handleChange.bind(this)}/>
                </div>
                <div className ='col-12'>
                  <input placeholder = 'Quote or Favourite Expression' id='quote' className='form-control' type='text' value = {this.state.quote} required onChange = {this.handleChange.bind(this)}/>
                </div>
                <div className='col-12'>
                <button className="btn btn-sm btn-success" id='signUp' type="button" onClick = {this.signUp.bind(this)}>Sign Up</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default Login
