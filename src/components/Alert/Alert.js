import { Component } from "react";

import './alert.css'

class Alert extends Component {

    render() {
        const {type,text} = this.props

        const style = {
            color: type === 'alert' ? '#721c24' : 
            type === 'info' ? '#0c5460' : 'normal',
            backgroundColor: type === 'alert' ? '#f8d7da' : type === 'info' ? '#d1ecf1' : 'normal',
            borderColor: type === 'alert' ? '#f5c6cb' : 
            type === 'info' ? '#bee5eb' : 'normal'
        }

        return <div style={style} className="alertBlock">{text}</div>
    }
}

export default Alert