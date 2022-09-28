import React,{Component} from 'react'
import PropTypes from 'prop-types'
import './index.css'


export default class RestaurantMenuNavBtn extends Component{
    static propTypes = {
        MenuBlock_name: PropTypes.string.isRequired,
    }
    render(){
        const {MenuBlock_name} = this.props
        return (<button className='RestaurantMenuNavBtn'>{MenuBlock_name}</button>)
    }
}