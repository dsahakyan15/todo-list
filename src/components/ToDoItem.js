const ToDoItem = (props) => {
    const style = {
        color: props.important ? "red" : "black"
    }


    return <li style = {style}>{props.text}</li>
};

export default ToDoItem;