import React,{Component} from 'react'
import PropTypes from 'prop-types'
import './index.css'


export default class RestaurantMenuBar extends Component{
    static propTypes = {
        Item_name: PropTypes.string.isRequired,
        Item_prices: PropTypes.number.isRequired,
        //Item_photo: PropTypes   相片如何設定proptype???
    }
    render(){
        const {Item_name,Item_prices} = this.props
        return (
            <div className='MenuBarWrap'>
                <button className='MenuBar'>
                    <div className='MenuBarContent'>
                        <h5>{Item_name}</h5>
                        <span>{Item_prices}</span>
                    </div>
                    <hr />
                </button>
            </div>)
    }
}