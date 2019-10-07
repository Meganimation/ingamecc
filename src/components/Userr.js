import React, { Component } from 'react'



class Userr extends Component {
    
    constructor(props) {
        super(props)

    }


    

    // componentDidMount() {
    //     fetch('http://localhost:3000/stores')
    //     .then(res => res.json())
    //     .then(fetchedStuffs => {
    
    //  console.log(fetchedStuffs)
          

    
    //     })
    //     }

    doSomething = () =>  {
        console.log('I need updating!')
    }

render(){
 
    // const searchResults = this.props.searchResults.map( curr => <li key={curr.id} className="currency-list-item" data-id={curr.id} onClick={this.props.handleSelect}><a href="#hello" className="currency"><span>{curr.name}</span><span>{curr.currency_symbol}</span></a>  </li>)


   
    return (
        <div>
        <div className="headerr"> Hello  {this.props.name.name}!                   
        <br /> 
        <small onClick={this.doSomething}>Not you?</small>
        </div></div>
        // <div>tf {this.props.name}</div>


    )
}

}


export default Userr;
