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
    this.setState({
      inputValue: event.target.value
    })
  }

  onBtnClick = () => {
    console.log(this.state.isError)
    if (!validateInput(this.state.inputValue)) {
      this.setState({ isError: true })
      return
    }
    console.log(this.state.isError)

    this.setState({ isError: false })
    this.props.onAddItem(this.state.inputValue);
    this.setState({ inputValue: '' })
    console.log(this.state.isError)

  }

  render() {
    const { isError } = this.state

    return (
      <div className="addItem">

        {
          isError ? <Alert type="error" text="Error text" /> : null
        }

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