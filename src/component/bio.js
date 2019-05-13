import React, { Component } from 'react'
import Image from './images/img1.png'

class Bio extends Component{
  render(){
    console.log(this.props.userInfo)
    return(
      <div className="card">
  <div className="card-body">
    <h5 className="card-title">{this.props.userInfo.firstName}</h5>
    <p className="card-text">{this.props.userInfo.email}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{this.props.userInfo.education}</li>
    <li className="list-group-item">{this.props.userInfo.age}</li>
    <li className="list-group-item">{this.props.userInfo.quote}</li>
  </ul>
  <div className="card-body">
    <a href="#" className="card-link">Card link</a>
    <a href="#" className="card-link">Another link</a>
  </div>
</div>
    )
  }
}

export default Bio
