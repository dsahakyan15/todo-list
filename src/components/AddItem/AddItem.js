import './add-item.css'


const AddItem = () => {
  return (
    <div className="addItem">
      <input type="text" placeholder="Item text..." />
      <button>Add item</button>
    </div>
  )
}

export default AddItem;