import React,{Component} from 'react'
import PropTypes from 'prop-types'
import RestaurantMenuBar from '../Restaurant.MenuBar'
import './index.css'


export default class RestaurantMenuBlock extends Component{
    static propTypes = {
        Block_name: PropTypes.string.isRequired
    }
    static defaultProps = {
        Block_name: '好喝鮮奶茶系列',
    }

    render(){
        const {Block_name} = this.props
        const menu = [
            {Item_name: '黑糖珍珠鮮奶',Item_prices: 25},
            {Item_name: '黑糖珍珠鮮奶',Item_prices: 25},
            {Item_name: '黑糖珍珠鮮奶',Item_prices: 25},
            {Item_name: '黑糖珍珠鮮奶',Item_prices: 25},
            {Item_name: '黑糖珍珠鮮奶',Item_prices: 25},
            {Item_name: '黑糖珍珠鮮奶',Item_prices: 25},
            {Item_name: '黑糖珍珠鮮奶',Item_prices: 25},
            {Item_name: '黑糖珍珠鮮奶',Item_prices: 25},
            {Item_name: '黑糖珍珠鮮奶',Item_prices: 25},
            {Item_name: '黑糖珍珠鮮奶',Item_prices: 25},
            {Item_name: '黑糖珍珠鮮奶',Item_prices: 25},
            {Item_name: '黑糖珍珠鮮奶',Item_prices: 25},
            {Item_name: '黑糖珍珠鮮奶',Item_prices: 25},
            {Item_name: '黑糖珍珠鮮奶',Item_prices: 25},
            {Item_name: '黑糖珍珠鮮奶',Item_prices: 25},
            {Item_name: '黑糖',Item_prices: 25},
        ]
        return (<div>
            <div>
                {Block_name}
            </div>
            {
                menu.map((item) => (
                    <RestaurantMenuBar {...item}/>
                ))
            }
                
            
            
        </div>)
    }
}