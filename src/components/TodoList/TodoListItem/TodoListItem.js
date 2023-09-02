import { Component } from 'react'

import './todo-list-item.css';
import { FaTrash, FaInfo, FaCheck } from 'react-icons/fa6'

class TodoListItem extends Component {
  state={
    isDone:false,
    isImpo: this.props.important
  }

  onDone = () => {
    this.setState({
      isDone:!this.state.isDone
    });
    console.log("----Done", this.props.text)
  }
  onImpo = () => {
    this.setState({
      isImpo:!this.state.isImpo
    })
    console.log(this.props.text,'---Now is Important')
  }

  render() {
    const { text } = this.props
    const { isDone,isImpo } = this.state


    const textStyle = {
      textDecoration:isDone ? 'line-through' : 'none',
      color: isDone ? "#aaa" : isImpo ? "red" : "black",
      fontWeight:isDone ? "normal" : isImpo ? "bold" : 'normal'
    }

    return (
      <li className='list-item'>

        <span className='item-text' style={textStyle}>
          {text}
        </span>

        <span className='item-btns'>
          <button className='item-btn-done' onClick={this.onDone}><FaCheck /></button>
          <button className='item-btn-important' onClick={this.onImpo}><FaInfo /></button>
          <button className='item-btn-remove'>
            <FaTrash />
          </button>
        </span>
      </li>
    );
  }
}

export default TodoListItem;