import UserItem from './userItem'

const Users = ({users}) => {
return users.map((user) => {
    <UserItem user={user} key={user.id}/>
})
}

export default Users