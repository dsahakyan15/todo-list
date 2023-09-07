import './add-item.css'
import Alert from '../Alert';
import { Component } from 'react'

class AddItem extends Component {
  state = {
    inputValue: ''
  }

  onInputChange = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }

  onBtnClick = ()=>{
    this.props.onAddItem(this.state.inputValue);
    this.setState({inputValue:''})
  }

  render() {
    return (
      <div className="addItem">
        <input 
        type="text" 
        value={this.state.inputValue} 
        onChange={this.onInputChange} 
        placeholder="Item text..." />
        <button 
        onClick={this.onBtnClick}>Add item</button>
      </div>
    )
  }
}



export default AddItem;