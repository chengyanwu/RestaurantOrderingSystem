import React,{Component} from 'react'
import './index.css'


export default class CopyRightNotice extends Component{
    render(){
        return (<div className="foot">
                    <p>
                        Copyright © 2022 [Company Name] All rights reserved
                    </p>
                    <p>
                        Powered by [Company Name]
                    </p>
            </div>)
    }
}