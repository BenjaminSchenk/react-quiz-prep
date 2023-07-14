const UserItem = ({user}) => {
    console.log(user)
    const handleClick = (e) => {
        console.log(e.currentTarget.id)
    }
    return (
        <div onClick={handleClick}>
            <h1>{user.name}</h1>
            <p>{user.email}</p>
        </div>
    )
}

export default UserItem