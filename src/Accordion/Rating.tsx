import React from "react";

type RatingType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

function Rating(props: RatingType) {
    console.log("AccordionBody rendering");
    {
        return (
            <div>
                <Stars selected={props.value > 0}/>
                <Stars selected={props.value > 1}/>
                <Stars selected={props.value > 2}/>
                <Stars selected={props.value > 3}/>
                <Stars selected={props.value > 4}/>
            </div>
        );
    }
}

type StarsType = {
    selected: boolean
}

function Stars(props: StarsType) {
    console.log("Stars rendering");
    if (props.selected) {
        return <span><b>Star</b> </span>
    } else {
        return <span>Star </span>
    }
}

export default Rating;