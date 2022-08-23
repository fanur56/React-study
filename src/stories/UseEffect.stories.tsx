import React, {useEffect, useState} from "react";

export default {
    title: "useEffect demo"
}

export const SimpleExample = () => {
    console.log("SimpleExample");

    const [count, setCount] = useState(1);

    useEffect(() => {
        console.log("useEffect every time render");
        document.title = count.toString();
        // api.getUsers().then("")
        // setInterval
        // indexedDB
        // document.getElementByID
        // document.title="User"
    })

    useEffect(() => {
        console.log("useEffect one time (first) render");
        document.title = count.toString();
    }, [])

    useEffect(() => {
        console.log("useEffect one time (first) render and render on dependency change");
        document.title = count.toString();
    }, [count])

    return <>
        Hello, {count}
        <button onClick={() => setCount(count + 1)}>+</button>
    </>
}

export const SimpleSetTimeoutExample = () => {
    console.log("SimpleSetTimeoutExample");

    const [count, setCount] = useState(1);

    useEffect(() => {
        setTimeout(() => {
            console.log("setTimeout")
            document.title = count.toString();
        }, 1000)
    }, [count])

    return <>
        Hello, {count}
        <button onClick={() => setCount(count + 1)}>+</button>
    </>
}
