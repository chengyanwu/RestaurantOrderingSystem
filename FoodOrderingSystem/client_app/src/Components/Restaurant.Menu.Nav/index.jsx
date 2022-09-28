import React,{Component} from 'react'
import PropTypes from 'prop-types'
import RestaurantMenuNavBtn from '../Restaurant.Menu.Nav.Btn'
import './index.css'


export default class RestaurantMenuNav extends Component{
    static propTypes = {
        MenuBlock_names: PropTypes.array.isRequired,
    }
    static defaultProps = {
        MenuBlock_names: [{MenuBlock_name: "ads"},{MenuBlock_name: "adfsdfs"},{MenuBlock_name: "adsfsds"}]
    }
    render(){
        const {MenuBlock_names} = this.props
        return (<div className='RestaurantMenuNav'>
                    {MenuBlock_names.map((MenuBlock_name)=>(<RestaurantMenuNavBtn {...MenuBlock_name}/>)   )}
                </div>)
    }
}