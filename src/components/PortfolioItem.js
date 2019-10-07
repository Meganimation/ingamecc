import React, { Component } from 'react'

class PortfolioItem extends Component {
    constructor(props){
    super (props)

    this.state = {

      name: [],
      amount: [],
      portfolio: []
     
}
}

// handleClicko = () => {

// const id = this.props.item.currency.id
// //const amount = this.props.item.amount

// fetch(`http://localhost:3000/currencies/${id}`, {
// method: 'PATCH',
// // body:  JSON.stringify({
// //   name: [],
// //   amount: this.props.item.amount
// // })
// })
// .then(resp => resp.json())
// .then(data => {
//   debugger
//   this.setState({ 
//     name: data.name
//   }
//   )
//   //add delete to the same place the state is?
//   console.log(this.state.name)})}




handleClicko = () => {

  const id = this.props.item.currency.id
  //const amount = this.props.item.amount
  
  fetch(`http://localhost:3000/currencies/${id}`, {
  method: 'DELETE',
  // body:  JSON.stringify({
  //   name: [],
  //   amount: this.props.item.amount
  // })
  })
  .then(resp => resp.json)
  .then(data => {
    this.setState({ 
      portfolio: []
      //global array set state?
    }
    )
    //add delete to the same place the state is?
    console.log(this.state.name)})}


render()


 {

   return (
      
  <div> 
      <div className="row"> 
      <div className="col">
      <div className="header">Currency:</div>
      <div className="text">{this.props.item.currency.name}</div>
      </div>

      <div className="col">
      <div className="header">Current Price:</div>
      <div className="text">${this.props.item.current_price}</div>
      </div>

      <div className="col">
      <div className="header">Amount In Your Portfolio:</div>
      <div className="text">{this.props.item.amount}</div>
      </div>

      <div className="col">
      <div className="header">Current Value:</div>
      <div className="text">${this.props.item.value}</div>
      </div>
      {/* <button onClick={() => { this.handleClicko(this.props.item.currency.id) }}>Delete</button> */}

      </div>
      </div>   
    )
  }
}

export default PortfolioItem