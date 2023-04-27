import React, { Component } from 'react'

class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         ParentName :'Parent'
      }

      this.greetParent=this.greetParent(this)

    }

  render() {
    return (
      <div></div>
    )
  }
}

export default ParentComponent