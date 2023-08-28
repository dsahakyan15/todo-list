const UsersItem = (props) => {
    console.log(props)
    const { name, age, status } = props.user
    return <li style={{ color: status ? "green" : "red" }} >{name}{age}</li>
}

export default UsersItem 