import React, {useState} from "react";

function UncontrolledRating() {
    let [value, setValue] = useState(0)

    return (
        <div>
            <Stars selected={value > 0}
                   setValue={()=>{setValue(1)}}/>

            <Stars selected={value > 1}
                   setValue={()=>{setValue(2)}}/>

            <Stars selected={value > 2}
                   setValue={()=>{setValue(3)}}/>

            <Stars selected={value > 3}
                   setValue={()=>{setValue(4)}}/>

            <Stars selected={value > 4}
                   setValue={()=>{setValue(5)}}/>

        </div>
    );

}

type StarsType = {
    selected: boolean
    setValue: () => void
}

function Stars(props: StarsType) {
    console.log("Stars rendering");
    return (
        <span onClick={()=>{props.setValue()}}>
            {props.selected ? <b>Star </b> : "Star "}
        </span>
    )
}

export default UncontrolledRating;