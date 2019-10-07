import React, { Component } from 'react'
import Userr from './Userr'



class UserContainer extends Component {

    
    constructor(props) {
        super(props)

        this.state = {

            name: [],


        }}


        componentDidMount() {
            fetch('http://localhost:3000/users/')
            .then(res => res.json())
            .then(data => {
                console.log(data) 
              this.setState({ 
                name: data})
   
            })
            }



        // componentDidMount() {
        //   fetch('http://localhost:3000/stores/')
        //   .then(res => res.json())
        //   .then(data => {
        //     this.setState({           
        //       store: data

        //   })    
        //   console.log(data)  
        //   })
        //   }


render()  {


    // const gamesearchResults = this.props.gamesearchResults.map( curr => <li key={curr.id} className="currency-list-item" data-id={curr.id} onClick={this.props.handleSelect}><a href="#hello" className="currency"><span>{curr.name}</span><span>{curr.currency_symbol}</span></a>  </li>)


    const userItems = this.state.name.map( (name, index) => <Userr key={index} name={name}  />)
  return (
    
    
 <div>
           {/* <h2>This is the container: {this.props.user[0].name} Ayyy</h2> */}
        <div>
                <div>{userItems}   <div>
    
        </div>
        )
      )
    }  
</div>
</div>
</div>

    )
}
}

export default UserContainer





