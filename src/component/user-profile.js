import React, { Component } from 'react'
import Bio from './bio'
import Postings from './postings'
import '../App.css'
import fire from'../fire'
import firebase from 'firebase'


class UserPorfile extends Component{
  constructor(props){
    super(props)
    this.state = {user: null}
  }
  componentDidMount(){
    firebase.database().ref('/users').on('value', snapshot => {
      let data = snapshot.val()
      for (var key in data) {
        if (this.props.userEmail == data[key].email) {
          this.setState({
            user: data[key]
          })
        }
      }
    })
  }
    render(){
      console.log(this.state);
      return(
        <div className='container'>
          <div className='row'>
            <div className='col-4'>
            {this.state.user ? <Bio userInfo={this.state.user}/> : <p>loading</p>}
            </div>
            <div className='col-8'>
            {this.state.user ? <Postings userName={this.state.user.firstName}/> : <p>loading</p>}
            </div>
          </div>
        </div>
    )
  }
}

export default UserPorfile
