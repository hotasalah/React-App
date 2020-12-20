import React, { Component } from 'react';
import CardList from './CardList.js';
import Search from './Search.js';
import Scroll from './Scroll.js';
import './App.css';


class App extends Component {
  constructor(){
  	super()
  	this.state  = {
  	  robots: [],
  	  searchfield: ''
  	}
  }
  
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response=> response.json())
      .then(users => {this.setState({ robots: users})});
  }

  onChangeSearch = (event) => {
  	console.log(event.target.value);
  	this.setState({searchfield: event.target.value})
  }

  render(){
  	const filteredRobots = this.state.robots.filter(robot => {
  	  return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
  	})
  	if (this.state.robots.length === 0) {
      return (
      	<div className='tc'>
      	  <h1>Loading..</h1>
      	</div>
      );
  	} else {
  	  return (
  	    <div className='tc'>
  	      <h1 className='f1'>RoboFriends</h1>
  	      <Search searchChange={this.onChangeSearch} />
  	      <Scroll>  
  	        <CardList robots={filteredRobots} />
  	      </Scroll>
  	    </div>
      );
    }
  }
}
  

export default App
