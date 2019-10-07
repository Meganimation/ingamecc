import React, { Component } from 'react'

class Search extends Component {
    constructor(props) {
        super(props)
    }



render(){
    const searchResults = this.props.searchResults.map( curr => <li key={curr.id} className="currency-list-item" data-id={curr.id} onClick={this.props.handleSelect}><a href="#hello" className="currency"><span>{curr.name}</span><span>{curr.currency_symbol}</span></a>  </li>)

    return(
        <div className="form-group">
<h1 className="header-one">Videogame Currency Calculator</h1>
< br/>
<form> 
    <div className="form-group">
        <label> Search for a Video Game Currency: </label> <br/>
        <input onChange={this.props.handleChange} autoComplete='off' type='text' name='name' placeholder="Eg. Simoleans, Pokecoins, etc." value={this.props.name} className="field" />
    </div>
    <div className="currency-list">{searchResults}</div>
</form>
</div>
    )
}
}

export default Search