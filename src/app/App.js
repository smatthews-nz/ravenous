import React from 'react';
import './App.css';

//import components
import BusinessList from '../components/BusinessList';
import SearchBar from '../components/SearchBar';

//import our Yelp API config
import { Yelp } from '../util/Yelp';

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      businesses: []
    }
    this.searchYelp = this.searchYelp.bind(this);
  }


  searchYelp(term, location, sortBy) {
    Yelp.search(term, location, sortBy).then(businesses => {
      this.setState({businesses: businesses});
    });
  }

  render(){
    console.log(this.state.businesses)
    return (
      <div className="App">
        <h1>ravenous</h1>
        <SearchBar searchYelp={this.searchYelp}/>
        <BusinessList businesses={this.state.businesses}/>
      </div>
    );
  }

}

export default App;
