import Button from "../Button/Button"
import './additem.css'


const AddItem = (props) => {
    return (<div>
        <input type="text" placeholder="Name Item" />
        <Button text="Add" />
    </div>)
}

export default AddItem