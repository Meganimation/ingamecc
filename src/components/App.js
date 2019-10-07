import React from 'react'
import PortfolioContainer from './PortfolioContainer'
import UserContainer from './UserContainer'
import Sidebar from './Sidebar'



// import axios from 'axios'


// const csrfToken = document.querySelector('[name="csrf-token"]').content
// axios.defaults.headers.common['X-CSRF-TOKEN'] = csrfToken






class App extends React.Component {

    constructor() {
        super()

        this.state = {

            user: []

        }}















    
render() {


    return( 

<div>

         <PortfolioContainer user={this.state.user}/>
            <Sidebar/>

        </div>

    )
}}

export default App;
