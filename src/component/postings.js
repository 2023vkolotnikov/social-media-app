import React, { Component } from 'react'
import UserPost from './userPost'
import '../App.css';
import '../App.css';


class Postings extends Component{
  constructor(props) {
    super(props)
    this.state = {posts: [], post:''}
    this.handleChange =this.handleChange.bind(this)
    this.post =this.post.bind(this)
  }

handleChange(e){
  console.log(e.target.value)
  this.setState({post: e.target.value})
}
post(e){
  this.setState({ posts: this.state.posts.concat(this.state.post)})
}
  render(){
      console.log(this.props)
      let userName = this.props.userName
    return(
    <div className='container'>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" onChange = {this.handleChange}/>
        <div className="input-group-append">
          <button className="btn btn-outline-secondary"  id="basic-addon2" onClick ={ this.post }>Post</button>
        </div>
      </div>
      <ul id = 'postBox'>
      {
        this.state.posts.map(function(post,index){
          return <UserPost key ={index}message = { post } userName={userName}/>
        })
      }
      </ul>

    </div>
    )
  }
}

export default Postings
