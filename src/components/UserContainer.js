import React, { Component } from 'react'
import Userr from './Userr'



class UserContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: [],
        }}

        componentDidMount() {
            fetch('https://crypto-calculator-copy.herokuapp.com/users')
            .then(res => res.json())
            .then(data => {
                console.log(data) 
              this.setState({ 
                name: data})
            })
            }



render()  {
    const userItems = this.state.name.map( (name, index) => <Userr key={index} name={name}  />)
  return (
        <div>
        <div>
        <div>{userItems}<div>
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





