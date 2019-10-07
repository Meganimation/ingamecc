import React, { Component } from 'react'
import Game from './Game'


export default class Sidebar extends Component {    
    constructor(props) {
        super(props)

        this.state = {

            name: [],
            location: '',
            currency: [],
            game: [],
            store: []

        }}

testy() {

    return console.log('it worked!')
}


        componentDidMount() {
            fetch('http://localhost:3000/games/')
            .then(res => res.json())
            .then(data => {
              this.setState({ 
                game: data })
                 console.log(this.state.game)
            })
            }


            componentDidUpdate() {
                fetch('http://localhost:3000/stores/')
                .then(res => res.json())
                .then(dataa => {
                  this.setState({ 
                    store: dataa })
                })
        
                }

        // componentDidMount() {
        //     fetch('http://localhost:3000/stores/')
        //     .then(res => res.json())
        //     .then(data => {
        //       this.setState({ 
        //         currency: data })
        //          console.log(this.state.game)
        //     })
        //     }


render() {
  const gameItems = this.state.game.map( (game, index) => <Game key={index} game={game} store={this.state.store} />)


    // const gamesearchResults = this.props.gamesearchResults.map( curr => <li key={curr.id} className="currency-list-item" data-id={curr.id} onClick={this.props.handleSelect}><a href="#hello" className="currency"><span>{curr.name}</span><span>{curr.currency_symbol}</span></a>  </li>)

  return (
    <aside id="sidebar">
    <div className="sidebar">
        {gameItems}

          </div>
          </aside>
  )

}

}


  

    




