import React, { Component } from 'react'



class Userr extends Component {
    
    constructor(props) {
        super(props)
    }

    doSomething = () =>  {
        console.log('I need updating!')
    }

render(){

    return (
        <div>
        <div className="headerr">                 
        <br /> 
        <small onClick={this.doSomething}></small>
        </div></div>
    )
  }
}


export default Userr;
