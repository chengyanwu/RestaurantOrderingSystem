import React,{Component} from 'react'
import PropTypes from 'prop-types'
import RestaurantMenuBar from '../Restaurant.MenuBar'
import './index.css'


export default class RestaurantMenuBlock extends Component{
    static propTypes = {
        MenuBlock_name: PropTypes.string.isRequired,
        MenuBlock_item: PropTypes.array.isRequired
    }
    render(){
        const {MenuBlock_name,MenuBlock_item} = this.props
        var key = 1
        return (
        <div>
            <h2>
                {MenuBlock_name}
            </h2>
            {
                MenuBlock_item.map((Item_name) => (
                    <RestaurantMenuBar key={key++} {...Item_name}/>
                ))
            }
            <div>
                <br />
            </div>
        </div>)
    }
}