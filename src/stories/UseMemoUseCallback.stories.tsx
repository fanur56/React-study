import React, {useCallback, useMemo, useState} from "react";

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
    console.log("render HelpsToReactMemo")
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(["Igor", "Victor", "Dima"])

    const usersNewArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf("a") > -1);
    }, [users])

    const addUser = () => {
        setUsers([...users, "Sveta" + new Date().getTime()])
    }

    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        {count}
        <Users users={usersNewArray}/>
    </>
}


const BooksSecret = (props: { books: Array<string>; addBook: () => void }) => {
    console.log("render booksSecret component")
    return (
        <>
            <button onClick={props.addBook}>Add book</button>
            <div>{props.books.map((u, index) => <div key={index}>{u}</div>)}</div>
        </>
    )
}

const Books = React.memo(BooksSecret)

export const ReactMemoLikeUseCallback = () => {
    console.log("render LikeUseCallback")
    const [count, setCount] = useState(0)
    const [books, setBooks] = useState(["React", "JS", "CSS"])

    const booksNewArray = useMemo(() => {
        return books.filter(u => u.toLowerCase().indexOf("a") > -1);
    }, [books])


    const memoizedAddBook = useMemo(() => {
        return () => setBooks([...books, "Angular " + Math.random()])
    }, [books]);

    const memoizedAddBook2 = useCallback(() => {
        setBooks([...books, "Angular " + Math.random()])
    }, [books]);

    return <>
        <button onClick={() => setCount(count + 1)}>+</button>
        {count}
        <Books books={booksNewArray} addBook={memoizedAddBook2}/>
    </>
}


