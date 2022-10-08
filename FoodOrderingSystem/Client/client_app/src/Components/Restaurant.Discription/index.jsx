import React,{Component} from 'react'
import PropTypes from 'prop-types'
import './index.css'


export default class RestaurantDiscription extends Component{
    constructor(props){
        super(props)
        this.state={
            isShow:false,
            isNeedShowMore:true
        
        }
        this.ChangeBtnState = this.ChangeBtnState.bind(this)
    }

    static propTypes = {
        Announcement:PropTypes.string.isRequired,
    }

    static defaultProps = {
        Announcement:'一些通知事項\n一些通知事項\n一些通知事項\n一些通知事項\n一些通知事項\n一些通知事項\n一些通知事項\n一些通知事項\n一些通知事項\n一些通知事項\n一些通知事項\n一些通知事項\n一些通知事項\n一些通知事項\n一些通知事項\n一些通知事項\n一些通知事項\n一些通知事項\n一些通知事項\n一些通知事項\n一些通知事項\n',
    }

    ChangeBtnState(){
        const isShow=this.state.isShow
        this.setState({isShow:!isShow})
    }

    render(){
        const {Announcement}=this.props
        return (
            <div className="Restaurant-Announcement-wrap">
                <p className="Restaurant-Announcement">
                    <svg
                        style={{width:"20px", height:"20px"}}
                        viewBox="0 0 36 36"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentcolor"
                        className="RestaurantStatusIcon_Dark">
                        <path className="clr-i-solid clr-i-solid-path-1" d="M18,2.5c-8.82,0-16,6.28-16,14s7.18,14,16,14a18,18,0,0,0,4.88-.68l5.53,3.52a1,1,0,0,0,1.54-.84l0-6.73a13,13,0,0,0,4-9.27C34,8.78,26.82,2.5,18,2.5ZM16.93,9.13a1.41,1.41,0,1,1,2.81,0V18.9a1.41,1.41,0,1,1-2.81,0Zm1.41,17.35a1.87,1.87,0,1,1,1.87-1.87A1.87,1.87,0,0,1,18.34,26.47Z"></path>
                        <rect x="0" y="0" width="36" height="36" fillOpacity="0"/>
                    </svg>
                    <span style={{paddingLeft:"8px"}}>提醒事項</span>
                    <button type="button" className='AnnouncementButton' onClick={this.ChangeBtnState}>
                        <svg style={{width:"24px",height:"24px"}}
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            {
                                // bug here
                                this.state.isShow === true ?
                                <path d="M17,9.17a1,1,0,0,0-1.41,0L12,12.71,8.46,9.17a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42l4.24,4.24a1,1,0,0,0,1.42,0L17,10.59A1,1,0,0,0,17,9.17Z"/>:
                                <path d="M17,13.41,12.71,9.17a1,1,0,0,0-1.42,0L7.05,13.41a1,1,0,0,0,0,1.42,1,1,0,0,0,1.41,0L12,11.29l3.54,3.54a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29A1,1,0,0,0,17,13.41Z"/>
                            }
                        </svg>
                    </button>

                </p>
                <div>
                        {
                            this.state.isShow === true ?
                            <p className="AnnouncementContent webkit2">{Announcement}</p>:
                            <p></p>
                        }
                    
                </div>
            </div>)
    }
}