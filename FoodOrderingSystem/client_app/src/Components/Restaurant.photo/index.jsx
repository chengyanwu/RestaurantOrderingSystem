import React,{Component} from "react"
import './index.css'

export default class RestaurantPhoto extends Component{
    render(){
        return (<div className="BillboardWrap">
                    <img src={process.env.PUBLIC_URL + '英姐.jpeg'} className="BillboardImage" alt=""/>
                </div>)
    }
}

