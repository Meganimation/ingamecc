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
        }
      }


render(){



    return(

  <div className="flip-card">
      <div className="flip-card-inner">
      <div className="flip-card-front">    
        <img className="test-img" src={this.props.game.img_url} alt={this.props.game.name} ></img>
      </div>
        <div className="flip-card-back">
      <br />
      <br />
      <br />
      <br />
           Name: <h2>{this.props.game.name}</h2>
           <br />
           Available Currency: <p>{this.props.game.currencies[0].name}</p>
           <br />
        <div className="scrollmenu">
        </div>    
</div>
</div>
</div>   

    )
  }
}

export default Game




