import Button from '../../Button/Button'

const ToDoItem = (props) => {
    const style = {
        color: props.important ? "red" : "black"
    }  


    return <li style={style}>{props.text}<Button color="red" /><Button color="blue" /><Button color="grey" /></li>
};

export default ToDoItem;