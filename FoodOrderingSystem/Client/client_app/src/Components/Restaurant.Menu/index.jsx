import React,{Component} from 'react'
import RestaurantMenuBlock from '../Restaurant.MenuBlock'
import PropTypes from 'prop-types'
import './index.css'


export default class RestaurantMenu extends Component{
    static propTypes = {
        Menu: PropTypes.array.isRequired
    }
    static defaultProps = {
        Menu: [
            {
            MenuBlock_name: '好喝鮮奶茶系列',
            MenuBlock_item: [
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
            ]},
            {
            MenuBlock_name: '好喝鮮奶茶系列',
            MenuBlock_item: [
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
            ]},
            {
            MenuBlock_name: '好喝鮮奶茶系列',
            MenuBlock_item: [
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
            ]}   
        ]
    }
    render(){
        const {Menu} = this.props
        var key = 1
        return (<div>
            {
                Menu.map((Block) => (
                    <RestaurantMenuBlock key={key++} {...Block}/>
                ))
            }
        </div>)
    }
}