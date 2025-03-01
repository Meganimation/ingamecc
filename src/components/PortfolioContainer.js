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
    }

  componentDidMount() {
        fetch('https://crypto-calculator-copy.herokuapp.com')
        .then(res => res.json())
        .then(fetchedStuff => {
          console.log(fetchedStuff)
        })
        }
        

  componentDidUpdate() {
        fetch('https://crypto-calculator-copy.herokuapp.com/users')
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
    
            fetch('https://crypto-calculator-copy.herokuapp.com/users/1', {
        
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
        })
      }



  handleChange(e) {
        fetch('https://crypto-calculator-copy.herokuapp.com/search', {  
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
            }
       )
  }
   

  handleSelect(e){
        e.preventDefault()
        const id = e.target.getAttribute('data-id')
        const activeCurrency = this.state.search_results.filter( item => item.id  == parseInt(id))
        this.setState({
            active_currency: activeCurrency[0],
            search_results: []
        }
      )    
    }


  handleSubmit(e){
        e.preventDefault()
        let currency = this.state.active_currency
        let amount = this.state.amount
        fetch('https://crypto-calculator-copy.herokuapp.com/calculate', {
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
        })
      }



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
           <Portfolio portfolio={this.state.portfolio} />     
        </div>
        </div>
    )
  }
}



export default PortfolioContainer