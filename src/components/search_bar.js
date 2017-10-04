import React, { Component } from 'react';

class SearchBar extends Component{
	
	constructor(props){
		super(props);		
	}
	
	render(){		
		return (
			<div className="search-bar">
				<input onChange={event => this.onInputChange(event.target.value)} />			
			</div>
		)
	}
	
	onInputChange(term){		
		this.props.onSearch(term);
	}
	
}

export default SearchBar;