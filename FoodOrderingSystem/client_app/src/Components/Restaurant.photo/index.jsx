import React,{Component} from "react"
import './index.css'

export default class RestaurantPhoto extends Component{
    render(){
        return (<div className="BillboardWrap">
                    <img src={process.env.PUBLIC_URL + 'IMG_2042.JPG'} className="BillboardImage" alt=""/>
                </div>)
    }
}

