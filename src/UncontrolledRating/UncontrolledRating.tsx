import React, {useState} from "react";

function UncontrolledRating() {
    let [value, setValue] = useState(0)

    return (
        <div>
            <Stars selected={value > 0}/>
            <button onClick={() => {
                setValue(1)
            }}>0
            </button>
            <Stars selected={value > 1}/>
            <button onClick={() => {
                setValue(2)
            }}>1
            </button>
            <Stars selected={value > 2}/>
            <button onClick={() => {
                setValue(3)
            }}>2
            </button>
            <Stars selected={value > 3}/>
            <button onClick={() => {
                setValue(4)
            }}>3
            </button>
            <Stars selected={value > 4}/>
            <button onClick={() => {
                setValue(5)
            }}>4
            </button>
        </div>
    );

}

type StarsType = {
    selected: boolean
}

function Stars(props: StarsType) {
    console.log("Stars rendering");
    return (
        <>
            {props.selected ? <span><b>Star</b> </span> : <span>Star </span>}
        </>
    )
}

export default UncontrolledRating;