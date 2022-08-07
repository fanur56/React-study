import React, {useReducer} from "react";
import {reducer, TOGGLE_COLLAPSED} from "./reducer";

type AccordionType = {
    titleValue: string
}

export const UncontrolledAccordion = (props: AccordionType) => {

    let [state, dispatch] = useReducer(reducer, {collapsed: false})

    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onClick={() => {
                                dispatch({type: TOGGLE_COLLAPSED})
                            }}/>
            {!state.collapsed && <AccordionBody/>}
        </div>
    );
}

type AccordionTitleType = {
    title: string
    onClick: () => void
}

function AccordionTitle(props: AccordionTitleType) {

    return (
        <h3 onClick={() => {
            props.onClick()
        }}>{props.title}</h3>
    );
}


function AccordionBody() {
    return (
        <ul>
            <li>one</li>
            <li>two</li>
            <li>three</li>
        </ul>
    );
}

