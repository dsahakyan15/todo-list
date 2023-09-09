import { Component } from "react";

import './alert.css'

class Alert extends Component {

    render() {
        const { type, text } = this.props

        const style = {
            color: 'normal',
            backgroundColor: 'normal',
            borderColor: 'normal'
        }
        switch (type) {
            case "error":
                style.color = '#721c24'
                style.backgroundColor = '#f8d7da'
                style.borderColor = '#f5c6cb'
                break;
            case "info":
                style.color = '#0c5460'
                style.backgroundColor = '#d1ecf1'
                style.borderColor = '#bee5eb'
                break;
            default:
                style.color = '#000'
                style.backgroundColor = '#eee'
                style.borderColor = 'normal'
                break
        }

        return <div style={style} className="alertBlock">{text}</div>
    }
}

export default Alert