import React from "react";

export type RatingType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value: RatingType
    onClick: (value: RatingType) => void
}

function Rating(props: RatingPropsType) {
    console.log("AccordionBody rendering");
    {
        return (
            <div>
                <Stars selected={props.value > 0} onClick={props.onClick} value={1}/>
                <Stars selected={props.value > 1} onClick={props.onClick} value={2}/>
                <Stars selected={props.value > 2} onClick={props.onClick} value={3}/>
                <Stars selected={props.value > 3} onClick={props.onClick} value={4}/>
                <Stars selected={props.value > 4} onClick={props.onClick} value={5}/>
            </div>
        );
    }
}

type StarsType = {
    selected: boolean
    onClick: (value: RatingType) => void
    value: RatingType
}

function Stars(props: StarsType) {
    console.log("Stars rendering");
    return <span onClick={()=>{props.onClick(props.value)}}>
        {props.selected ? <b>Star </b> : "Star "}
    </span>
}

export default Rating;