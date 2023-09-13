import { Component } from 'react'
import { FaTrash, FaInfo, FaCheck, FaPenToSquare } from 'react-icons/fa6'

import { validateInput } from '../../../utils/validator';
import './todo-list-item.css';

class TodoListItem extends Component {
  state = {
    isEdit: false,
    text: this.props.text,
    isError: false
  }

  onDone = () => {
    this.props.onDone(this.props.id)
  }
  onImportant = () => {
    this.props.onImportant(this.props.id)
  }
  onInputChange = (event) => {

    this.setState({
      text: event.target.value
    })
  }
  onDelete = () => {
    this.props.deleteItem(this.props.id)
  }

  onEdit = () => {
    this.setState(({ isEdit, text }) => {
      if (isEdit && !validateInput(text)) {
        console.log("errorr")
        return {
          isError: true
        }
      }
      return {
        isEdit: !isEdit,
        isError: false
      }
    })

    this.props.editItem(this.props.id, this.state.text);

  }

  render() {
    const {  isEdit, isError, text } = this.state
    const { important,done } = this.props


    const textStyle = {
      textDecoration: done ? 'line-through' : 'none',
      color: done ? "#aaa" : important ? "red" : "black",
      fontWeight: done ? "normal" : important ? "bold" : 'normal'
    }

    const inputStyle = {
      borderColor: isError ? 'red' : '#ccc'
    }
    return (
      <li className='list-item'>

        {
          isEdit ?

            (
              <div className='item-input-wrapper'>
                <input
                  type="text"
                  style={inputStyle}
                  className='list-item-edit-input'
                  value={text}
                  onChange={this.onInputChange} >
                </input>

                {
                  isError ? <span className='input-error-message'> Input error</span> : null
                }
              </div>

            )
            :
            (
              <span
                className='item-text'
                style={textStyle}>
                {text}
              </span>
            )
        }

        <span className='item-btns'>
          <button onClick={this.onEdit} >
            <FaPenToSquare />
          </button>
          <button className='item-btn-done' onClick={this.onDone}>
            <FaCheck />
          </button>
          <button className='item-btn-important' onClick={this.onImportant}>
            <FaInfo />
          </button>
          <button className='item-btn-remove' onClick={this.onDelete}>
            <FaTrash />
          </button>
        </span>
      </li >
    );
  }
}

export default TodoListItem;