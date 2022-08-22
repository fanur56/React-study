import React, {useMemo, useState} from "react";

export default {
    title: "use state demo"
}

const generateData = () => {
    console.log("generateData")
    return 1;
}

export const UseStateExample = () => {
    console.log("UseStateExample");


    const [count, setCount] = useState(generateData);

    const inc = (someNum: number) => someNum + 1;

    return <>
        <button onClick={() => setCount(inc(count))}>+</button>
        {count}
    </>
}
