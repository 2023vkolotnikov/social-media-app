import React, {Component} from 'react'

class UserPost extends Component {
  render(){
    let currentDate = new Date();
    console.log(currentDate)
    let month1 = currentDate.getMonth()
    let date2 = new Date(currentDate.getFullYear(), month1, currentDate.getDate())
    let year = currentDate.getFullYear()
    let date = currentDate.getDate()
    const month = date2.toLocaleString('en-us', { month: 'long' });
    let hour = currentDate.getHours()
    let minute = currentDate.getMinutes()
    let time
    if (hour >= 12) {
      time = 'PM'
    } else {
      time = 'AM'
    }
    let completeDate = month + ' ' +date + ' at ' + hour + ':' + minute + ' ' + time
    console.log(month);


    console.log(date)
    return(
      <li> <div className='userName'>{this.props.userName} </div>
           <div className='date'> {completeDate}</div>
           <div className='message'>{this.props.message }</div></li>
    )
  }
}


export default UserPost
