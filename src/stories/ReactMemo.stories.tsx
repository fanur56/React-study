import React, {useState} from "react";

export default {
    title: "react memo demo"
}

const NewMessageCounter = (props: { count: number }) => {
    return (
        <div>{props.count}</div>
    )
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log("render usersSecret component")
    return (
        <div>{props.users.map((u, index) => <div key={index}>{u}</div>)}</div>
    )
}

const Users = React.memo(UsersSecret)

export const ExampleMemo = () => {
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(["Igor", "Victor", "Dima"])
    const addUser = ()=>{
        setUsers([...users, "Sveta " + Math.random()])
    }

    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        <button onClick={addUser}>Add user</button>
        <NewMessageCounter count={count}/>
        <Users users={users}/>
    </>
}
