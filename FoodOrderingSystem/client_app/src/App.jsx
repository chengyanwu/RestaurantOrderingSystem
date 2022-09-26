import React,{Component} from 'react'
import './App.css';
//import RestaurantPhoto from './Components/Restaurant.photo';
import RestaurantStatus from './Components/Restaurant.Status';
import RestaurantDiscription from './Components/Restaurant.Discription';
import RestaurantStickyBillboard from './Components/Restaurant.StickyBillboard';
import RestaurantMenu from './Components/Restaurant.Menu';
import CopyRightNotice from './Components/CopyRight.Notice';
export default class App extends Component{

  

  render(){
    
    return(
      <div id="App">
        <RestaurantStickyBillboard />
        <RestaurantStatus/>
        <RestaurantDiscription />
        <RestaurantMenu />
        <CopyRightNotice />
      </div>
    )
  }
}



