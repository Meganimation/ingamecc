import React, { Component } from 'react'
import Test from './Test'

class Game extends Component {


    constructor(props) {
        super(props)

        this.state = {

            name: '',
            location: '',
            currency: [],
            game: [],
            store: []

        }}



      //  componentDidMount() {
      //       fetch('http://localhost:3000/stores/')
      //       .then(res => res.json())
      //       .then(data => {
      //         this.setState({ 
      //           store: data })
      //       })
 
      //       }







render(){
    // const currid = this.props.game.stores[0].currency_id
    const gameCurr = this.props.store.map( (store, index) => <Test key={index} store={store} />)


    // const searchResults = this.props.searchResults.map( curr => <li key={curr.id} className="currency-list-item" data-id={curr.id} onClick={this.props.handleSelect}><a href="#hello" className="currency"><span>{curr.name}</span><span>{curr.currency_symbol}</span></a>  </li>)


    return(

<div className="flip-card">

  <div className="flip-card-inner">
    <div className="flip-card-front">
      
      <img className="test-img" src={this.props.game.img_url} alt="Avatar" ></img>
    </div>
    <div className="flip-card-back">
    <div>
    <br />
    <br />
    <br />
    <br />
           Name: <h2>{this.props.game.name}</h2>
           <br />
           Available Currency: <p>{this.props.game.currencies[0].name}</p>
           {/* Available Stores: <p>{gameCurr}</p> */}
           <br />

 
        <div className="scrollmenu">
        <div>
        </div>
        <div>
 
</div>
</div>
</div>





      
    </div>
  </div>
</div>



    )
}
}

export default Game




