import React, {useState, useEffect} from 'react';
// import { robots } from './robots';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
    


function App() {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {return response.json(); })
        .then(users => {this.setState({robots: users}); })
    }

    onSearchChange = (event) => {
       this.setState({ searchfield: event.target.value });      
    }
    
    render() {
        const {robots, searchfield} = this.state;
        const filteredRobots = robots.filter(robot =>{
            return robot.name.toLowerCase().includes(searchfield.toLowerCase()); //"includes = if includes, its a condition"
       }) ;
       if (robots.length === 0){ // or if(!robots.length), 0 = false, so if not 0 = if true
        return <h1 className='tc f1'>Loading</h1>
       }else{
        return(
            <div className='tc'>
                <h1 className='f1'>RoboFriends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <CardList robots={filteredRobots}/>
                </Scroll>
            </div>
            
        );
       }
        
    }
}

export default App;