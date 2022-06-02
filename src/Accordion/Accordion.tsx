import React from "react";

type AccordionType = {
    titleValue: string
    collapsed: boolean
}

export function Accordion(props: AccordionType) {
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            { !props.collapsed && <AccordionBody/>}
        </div>
    );
}

type AccordionTitleType = {
    title: string
}

function AccordionTitle(props: AccordionTitleType) {
    console.log("AccordionTitle rendering");
    return (
        <h3>{props.title}</h3>
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

