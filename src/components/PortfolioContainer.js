import React, {Component} from 'react'
import Search from './Search'
import Calculate from './Calculate'
import Portfolio from './Portfolio'
import UserContainer from './UserContainer'

// import axios from 'axios'

class PortfolioContainer extends Component {


    constructor(props) {
        super(props)

        this.state = {

            portfolio: [],
            search_results: [],
            search_currency: null,
            amount: '',
            user: []

        } 
        this.handleChange = this.handleChange.bind(this) 
        this.handleSelect = this.handleSelect.bind(this) 
        this.handleSubmit = this.handleSubmit.bind(this) 
        this.handleAmount = this.handleAmount.bind(this) 
        this.handleClicko = this.handleClicko.bind(this) 

        
    }

    componentDidMount() {
        fetch('http://localhost:3000/')
        .then(res => res.json())
        .then(fetchedStuff => {

          console.log(fetchedStuff)
  
    
        })
        }

    componentDidUpdate() {
        fetch('http://localhost:3000/users/')
        .then(res => res.json())
        .then(data => {
          this.setState({ 
            user: data })
        })
        }

        handleSelect(e){

            e.preventDefault()
            const id = e.target.getAttribute('data-id')
            const activeCurrency = this.state.search_results.filter( item => item.id  == parseInt(id))
    
            fetch('http://localhost:3000/users/1', {
        
                method: 'PATCH',
                headers: {
                  'Content-Type': 'application/json',
                    'Accept': 'application/json'
                  },
                body: JSON.stringify({
                 name: 'test'
                    
                })
              })
              .then(res => res.json())
              .then( (data) => {
                 
                    this.setState({
                        
                        active_currency: activeCurrency[0],
                        search_results: []
    
                    })
    
        })}

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
              debugger
              this.setState({ 
                portfolio: []
              }
              )
              //add delete to the same place the state is?
              console.log(this.state.name)})}



    handleChange(e) {
        fetch('http://localhost:3000/search', {
    
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
         
            },
            
            body: JSON.stringify({
                search: e.target.value 
                
            })
          })
          .then(res => res.json())
            .then( (data) => {
             
                this.setState({
                    
                    search_results: [...data.currencies]

                })
     
    
    })}

    // handleGameChange(e) {
    //     fetch('http://localhost:3000/searchz', {
    
    //         method: 'POST',
    //         headers: {
    //           'Content-Type': 'application/json'
         
    //         },
            
    //         body: JSON.stringify({
    //             search: e.target.value 
                
    //         })
    //       })
    //       .then(res => res.json())
    //         .then( (data) => {
             
    //             this.setState({
                    
    //                 game_results: [...data.games]

    //             })
     
    
    // })}


   

    handleSelect(e){
        e.preventDefault()
        const id = e.target.getAttribute('data-id')
        const activeCurrency = this.state.search_results.filter( item => item.id  == parseInt(id))
        this.setState({
            active_currency: activeCurrency[0],
            search_results: []
        })
       
    }


    handleSubmit(e){
        e.preventDefault()
        let currency = this.state.active_currency
        let amount = this.state.amount
       

        fetch('http://localhost:3000/calculate', {
    
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
             
                },
                
        body: JSON.stringify({
            id: currency.id,
            amount: amount
        })
    })
        
        .then(res => res.json())
        .then( (data) => {
     
            console.log(data)
            this.setState({
            amount: amount,
            active_currency: null,
            portfolio: [...this.state.portfolio, data]

            })
        })}



handleAmount(e){
    this.setState({
        [e.target.name]: e.target.value
    })
}
    



  render(){

    const searchOrCalculate = this.state.active_currency ? 
    <Calculate
    handleChange={this.handleAmount}
    handleSubmit={this.handleSubmit}
    active_currency={this.state.active_currency}
    amount={this.state.amount}/> :
    <Search 
    handleSelect={this.handleSelect} 
    searchResults={this.state.search_results}
    handleChange={this.handleChange}/>



    return(
        <div className="grid">
          
             <div className="left">
        
           
           {searchOrCalculate}
           </div>
          
           <div className="right">
           <UserContainer user={this.state.user} />
           <Portfolio portfolio={this.state.portfolio} />
      
           
        </div>
        </div>
    )
  }
}



export default PortfolioContainer