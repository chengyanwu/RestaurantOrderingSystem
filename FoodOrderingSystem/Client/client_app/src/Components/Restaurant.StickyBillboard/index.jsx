import React,{Component} from 'react'
import PropTypes from 'prop-types'
import './index.css'


export default class RestaurantStickyBillboard extends Component{
    static propTypes = {
        Restaurant_name:PropTypes.string.isRequired,
    }

    static defaultProps = {
        Restaurant_name: '點餐系統',
    }
    
    render(){
        const {Restaurant_name}=this.props
        return (
            <div className="StickyBillboard">
                <p>
                    {Restaurant_name}
                </p>
                <hr />
            </div>
        )
    }
}