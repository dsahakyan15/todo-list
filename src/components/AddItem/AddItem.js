import './add-item.css'
import Alert from '../Alert';
import { Component } from 'react'

class AddItem extends Component {
  render() {
    return (
      <div className="addItem">
        <Alert type="alert" text="Info"/>
        <input type="text" placeholder="Item text..." />
        <button>Add item</button>
      </div>
    )
  }
}



export default AddItem;