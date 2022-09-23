import React,{Component} from 'react'
import PropTypes from 'prop-types'
import './index.css'


{/* props = {
    Restaurant_name: '英姐黑糖珍珠',
    Restaurants_tatus: true,
    Restaurant_opentime: '06:00',
    Restaurant_closetime: '20:00',
    Restaurant_ordering: true,
}*/}

export default class RestaurantStatus extends Component{
    static propTypes = {
        Restaurant_name:PropTypes.string.isRequired,
        Restaurant_opentime:PropTypes.string.isRequired,
        Restaurant_closetime:PropTypes.string.isRequired,
    }

    static defaultProps = {
        Restaurant_name: '點餐系統',
        Restaurant_opentime: '00:00',
        Restaurant_closetime: '00:00'
    }


    render(){
        const {Restaurant_name,Restaurant_opentime,Restaurant_closetime}=this.props

        return (<div>
                    <div className="restaurant-name">
                        <h2>{Restaurant_name}</h2>
                    </div>
                    <div className="restaurant-status">
                        <p>
                            <svg 
                            xmlns="http://www.w3.org/2000/svg"
                            style={{width:"20px",height:"20px",enableBackground:"new 0 0 492.804 492.804"}}
                            className="RestaurantStatusIcon_Yellow RestaurantStatusIcon_NoService" 
                            x="0px" y="0px"
                            viewBox="0 0 492.804 492.804"
                            fill="currentcolor">
                                <path d="M482.592,381.614L288.863,69.966c-11.22-18.044-26.348-27.96-42.656-27.96c-16.32,0-31.456,9.924-42.672,27.976
                                L10.267,381.142c-11.216,18.04-13.316,35.268-5.94,48.564c7.432,13.38,23.36,20.728,44.864,20.752l394.608,0.3h-0.336v0.04
                                c19.272,0,37.56-7.316,44.984-20.652C495.824,416.89,493.808,399.666,482.592,381.614z M256.96,388.59
                                c-2.868,2.86-6.736,4.484-10.792,4.484c-4.048,0-7.988-1.64-10.868-4.5c-2.856-2.86-4.476-6.852-4.472-10.932
                                c0.008-4.056,0.956-8.024,3.82-10.86c2.924-2.888,5.404-4.54,9.26-4.54l0.72-0.008c4.04,0,8.84,1.66,11.744,4.564
                                c2.872,2.856,4.932,6.812,4.924,10.876C261.292,381.762,259.852,385.742,256.96,388.59z M246.216,331.398
                                c-4.12,0-7.94-1.6-10.852-4.512c-2.912-2.916-4.488-6.792-4.484-10.92l-1.616-139.068c0.016-8.512,5.972-15.416,13.684-15.416
                                h1.772c4.124,0,8.88,1.604,11.788,4.52c2.916,2.92,4.932,6.788,4.928,10.916l0.1,139.068
                                C261.528,324.482,254.724,331.398,246.216,331.398z"/>
                            </svg>
                            <span>{Restaurant_opentime}</span>
                            <span>明天 {Restaurant_closetime} 開始營業</span>
                        </p>
                        <p>
                            <svg
                                style={{width:"20px", height:"20px",enableBackground:"new 0 0 45.352 45.352"}}
                                viewBox="0 0 45.352 45.352"
                                xmlns="http://www.w3.org/2000/svg"
                                className="RestaurantStatusIcon_Dark RestaurantStatusIcon_OrderStatus"
                                x="0px" y="0px"
                                fill="currentcolor">
                                <path d="M32.459,0c-2.737,0-5.019,2.117-5.213,4.847l-1.396,19.492c-0.062,0.85,0.231,1.692,0.813,2.315
                                    c0.58,0.623,1.393,0.984,2.244,0.984h0.082L28.512,42.9c-0.021,0.653,0.225,1.268,0.68,1.735c0.454,0.47,1.079,0.715,1.732,0.715
                                    h2.002c1.332,0,2.443-1.049,2.443-2.383V2.894C35.369,1.296,34.058,0,32.459,0z"></path>
                                <path d="M20.945,0.032h-0.204c-0.487,0-0.861,0.365-0.861,0.854v8.59c0,0.762-0.639,1.385-1.4,1.385h-0.205
                                    c-0.761,0-1.406-0.623-1.406-1.385v-8.59c0-0.488-0.367-0.854-0.855-0.854h-0.207c-0.488,0-0.876,0.365-0.876,0.854v8.59
                                    c0,0.762-0.624,1.385-1.386,1.385h-0.204c-0.761,0-1.351-0.623-1.351-1.385v-8.59c0-0.488-0.423-0.854-0.911-0.854h-0.205
                                    c-0.487,0-0.892,0.365-0.892,0.854v12.993c0,1.598,1.303,2.862,2.901,2.862h0.386l-0.816,26.153
                                    c-0.021,0.653,0.224,1.271,0.679,1.74c0.454,0.469,1.08,0.718,1.734,0.718h1.924c0.652,0,1.278-0.249,1.733-0.718
                                    c0.455-0.47,0.699-1.095,0.68-1.748L18.387,16.74h0.55c1.599,0,2.88-1.265,2.88-2.862V0.885
                                    C21.815,0.396,21.435,0.032,20.945,0.032z"></path>
                            </svg>
                            <span>
                                不接受訂餐
                            </span>
                        </p>
                        <hr />
                    </div>
                </div>)
    }
}

