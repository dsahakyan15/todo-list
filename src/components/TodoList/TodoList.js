import ToDoItem from "./TodoListItem/ToDoItem.js"
import AddItem from "../AddItem/AddItem.js"
import './todo-list.css'

const TodoList = () => {

    const items = [
        { text: "Learn JS", important: true },
        { text: "Learn JSX", important: false },
        { text: "Learn React", important: false }
    ]

    const data = items.map(({ text, important }) => {
        return <ToDoItem text={text} important={important} />
    })

    return (
        <div>
            <ul>
                {data}
            </ul>
            <AddItem />
        </div>

    )
}
export default TodoList;