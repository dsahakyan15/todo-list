import './add-item.css'
import { Component } from 'react'

class AddItem extends Component {
  render() {
    return (
      <div className="addItem">
        <input type="text" placeholder="Item text..." />
        <button>Add item</button>
      </div>
    )
  }
}


// const AddItem = () => {

// }

export default AddItem;