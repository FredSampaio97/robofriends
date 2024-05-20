import React, {useState, useEffect} from 'react';
// import { robots } from './robots';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
    


function App() {
   
    const [robots, setRobots] = useState([]); // Hook, "robots" is the state and "setRobots" is the function that changes said state. In the "useState" we place the inicial value of state
    const [searchfield, setSearchfield] = useState(""); // Hook, "robots" is the state and "setRobots" is the function that changes said state. In the "useState" we place the inicial value of state

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => {return response.json(); })
        .then(users => {setRobots(users); })
    },[]) //This "[]" makes it so the useEffect does not get run in an infinite loop, and makes it so it only runs once
    const onSearchChange = (event) => {
        setSearchfield(event.target.value);      
    }  

    
    const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase()); //"includes = if includes, its a condition"
    }) ;
    if (robots.length === 0){ // or if(!robots.length), 0 = false, so if not 0 = if true
    return <h1 className='tc f1'>Loading</h1>
    }else{
    return(
        <div className='tc'>
            <h1 className='f1'>RoboFriends</h1>
            <SearchBox searchChange={onSearchChange}/>
            <Scroll>
                <CardList robots={filteredRobots}/>
            </Scroll>
        </div>
        
    );
    }   
}

export default App;