import React,{Component} from 'react'
import './App.css';
import RestaurantPhoto from './Components/Restaurant.photo';
import RestaurantStatus from './Components/Restaurant.Status';
import RestaurantDiscription from './Components/Restaurant.Discription';


export default class App extends Component{

  

  render(){
    
    return(
      <div id="App">
        <RestaurantPhoto />
        <RestaurantStatus/>
        <RestaurantDiscription />
      </div>
    )
  }
}



