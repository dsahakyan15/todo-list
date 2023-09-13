import TodoListItem from "./TodoListItem";
import "./todo-list.css";
import { Component } from "react";

class TodoList extends Component {
  render() {
    const { items, deleteItem, editItem, onImportant,onDone } = this.props

    const data = items.map(({ text, important, id }) => {
      return (<TodoListItem
        text={text}
        important={important}
        key={id}
        id={id}
        deleteItem={deleteItem}
        editItem={editItem}
        onImportant={onImportant}
        onDone={onDone}
      />);
    });
    return (
      <ul className="todolist">{data}</ul>
    )
  }
}


export default TodoList;
