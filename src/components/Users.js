import UsersItem from "./UsersItem"

const Users = ({ usersArr }) => {

    return (
        <ul>
            {
                usersArr.map((user) => {
                    return <UsersItem user={user} />
                })
            }
        </ul>
    )
}

export default Users