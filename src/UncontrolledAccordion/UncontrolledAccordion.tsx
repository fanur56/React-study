import React, {useReducer} from "react";

type AccordionType = {
    titleValue: string
}

type ActionType = {
    type: string
}

const reducer = (state: boolean, action: ActionType) => {
    if (action.type === "TOGGLE-COLLAPSED") {
        return !state;
    }
    return state;
}

export const UncontrolledAccordion = (props: AccordionType) => {

    let [collapsed, dispatch] = useReducer(reducer, false)

    return (
        <div>
            <AccordionTitle title={props.titleValue}
                            onClick={() => {dispatch({type: "TOGGLE-COLLAPSED"})}}/>
            {!collapsed && <AccordionBody/>}
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

