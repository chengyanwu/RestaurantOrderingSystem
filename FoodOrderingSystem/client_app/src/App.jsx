import React,{Component} from 'react'
import './App.css';
import RestaurantPhoto from './Components/Restaurant.photo';
import RestaurantStatus from './Components/Restaurant.Status';

export default class App extends Component{

  static RestaurantDiscription={
    Restaurant_name: '英姐黑糖珍珠',
    Restaurant_opentime: '06:00',
    Restaurant_closetime: '24:00'
  }

  render(){
    return(
      <div id="App">
        <RestaurantPhoto />
        <RestaurantStatus {...RestaurantDiscription}/>
      </div>
    )
  }
}



