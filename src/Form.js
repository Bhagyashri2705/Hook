import React, { Component } from 'react'

export class Form extends Component {
 constructor(props) {
   super(props)
 
   this.state = {
      username:'',
      Comment:'',
      Topic:'',
      
   }

   this.handleUsernameChange =(event) =>{
    this.setState({
        username:event.target.value
    })
    }

    this.handleCommentChange =(event) =>{
        this.setState({
            Comment:event.target.value
        })
        }
        
   this.handleTopicChange =(event) =>{
        this.setState({
            Topic:event.target.value
        })
        }
   this.handleSubmitChange =(event) =>{
       alert(`${this.state.username}${this.state.Comment}${this.state.Topic}`)
       event.preventDefault()
    }        
 }

  render() {
    const {username,Comment,Topic}=this.state
    return (
        <form onSubmit={this.handleSubmitChange}>
          <div>
    <label>Username:</label>
    <input type='text' value={username} onChange={this.handleUsernameChange}/>
    </div>
    <div>
    <label>Comment:</label>
    <textarea value={Comment} onChange={this.handleCommentChange}/>
    </div>
    <div>
    <label>Topic</label>
    <select value={Topic} onChange={this.handleTopicChange}>
        <option value='react'>React</option>
        <option value='anular'>Angular</option>
        <option value='python'>Python</option>
    </select>
    </div>
    <div>
        <button type='Submit'>Submit</button>
    </div>



      
      </form>
    )
  }
}

export default Form;