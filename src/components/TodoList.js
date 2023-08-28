import ToDoItem from "./ToDoItem.js"
import AddItem from "./AddItem.js"

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
        <AddItem/>
        </div>

    )
}
export default TodoList;