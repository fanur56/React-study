import React, {useMemo, useState} from "react";

export default {
    title: "UseMemo"
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(() => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++) {
            let someValue = 0;
            while (someValue < 100000000) {
                someValue++;
                const someRandomValue = Math.random();
            }
            tempResultA = tempResultA * i;
        }
        return tempResultA;
    }, [a])


    for (let i = 1; i <= b; i++) {
        resultB = resultB * i;
    }

    return <>
        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for a: {resultB}
        </div>
    </>
}


const UsersSecret = (props: { users: Array<string> }) => {
    console.log("render usersSecret component")
    return (
        <div>{props.users.map((u, index) => <div key={index}>{u}</div>)}</div>
    )
}

const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log("render component")
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(["Igor", "Victor", "Dima"])

    const usersNewArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf("a") > -1);
    }, [users])

    const addUser = ()=>{
        setUsers([...users, "Sveta" + new Date().getTime()])
    }

    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        {count}
        <Users users={usersNewArray}/>
    </>
}