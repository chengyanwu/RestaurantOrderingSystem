import React,{Component} from 'react'
import PropTypes from 'prop-types'
import './index.css'


export default class RestaurantMenuBar extends Component{
    static propTypes = {
        Item_name: PropTypes.string.isRequired,
        Item_prices: PropTypes.number.isRequired,
        //Item_photo: PropTypes   相片如何設定proptype???
    }
    static defaultProps = {
        Block_name: '鮮奶茶系列',
        Item_name: '黑糖珍珠鮮奶',
        Item_prices: 25
    }
    render(){
        const {Item_name,Item_prices} = this.props
        return (<div>
            
            <div>
                <h5>{Item_name}</h5><span>{Item_prices}</span>
                <div class="slide-segmentation-thin"></div>
            </div>
        </div>)
    }
}