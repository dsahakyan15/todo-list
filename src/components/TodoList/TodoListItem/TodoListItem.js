import { Component } from 'react'

import './todo-list-item.css';
import { FaTrash, FaInfo, FaCheck, FaPenToSquare } from 'react-icons/fa6'

class TodoListItem extends Component {
  state = {
    isDone: false,
    isImpo: this.props.important,
    isReady: true,
    inputValue: ''
  }

  onDone = () => {
    this.setState({
      isDone: !this.state.isDone
    });
    console.log("----Done", this.props.text)
  }
  onImpo = () => {
    this.setState({
      isImpo: !this.state.isImpo
    })
    console.log(this.props.text, '---Now is Important')
  }
  onInputChange = (event) => {
    this.setState({
      inputValue: event.target.value
    })
  }
  onDelete = () => {
    this.props.deleteItem(this.props.id)
  }

  onEdit = () => {
    this.setState({
      isReady: !this.state.isReady,
      inputValue: this.props.text
    })

    this.props.editItem(this.props.id, this.state.inputValue);

  }

  render() {
    const { text } = this.props
    const { isDone, isImpo, isReady } = this.state


    const textStyle = {
      textDecoration: isDone ? 'line-through' : 'none',
      color: isDone ? "#aaa" : isImpo ? "red" : "black",
      fontWeight: isDone ? "normal" : isImpo ? "bold" : 'normal'
    }
    const inputStyle = {
      display: isReady ? 'none' : 'inline-block'
    }
    return (
      <li className='list-item'>

        <span className='item-text' style={textStyle}>
          {text}
        </span>
        <input
          className='edit-line'
          style={inputStyle}
          value={this.state.inputValue}
          onChange={this.onInputChange} ></input>

        <span className='item-btns'>
          <button>
            <FaPenToSquare onClick={this.onEdit} />
          </button>
          <button className='item-btn-done' onClick={this.onDone}>
            <FaCheck />
          </button>
          <button className='item-btn-important' onClick={this.onImpo}>
            <FaInfo />
          </button>
          <button className='item-btn-remove' onClick={this.onDelete}>
            <FaTrash />
          </button>
        </span>
      </li>
    );
  }
}

export default TodoListItem;