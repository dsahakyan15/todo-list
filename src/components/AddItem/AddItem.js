import './add-item.css'
import Alert from '../Alert';
import { validateInput } from '../../utils/validator';
import { Component } from 'react'

class AddItem extends Component {
  state = {
    inputValue: '',
    isError: false
  }

  onInputChange = (event) => {
    this.setState(() => {



      return {
        inputValue: event.target.value
      }
    })
  }

  onBtnClick = () => {

    this.setState(({ inputValue }) => {

      if (!validateInput(inputValue)) {
        console.log('Error')
        return
      }
      
      return {
        inputValue: ''
      }
    })

    this.props.onAddItem(this.state.inputValue);
  }

  render() {
    return (
      <div className="addItem">
        <Alert type="error" text="Error text" />


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