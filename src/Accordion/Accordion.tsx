import React from "react";

type AccordionType = {
    titleValue: string
    collapsed: boolean
    setAccordionCollapsed: (value:boolean) => void
}

export function Accordion(props: AccordionType) {
    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                setAccordionCollapsed={props.setAccordionCollapsed}
            collapsed={props.collapsed}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    );
}

type AccordionTitleType = {
    title: string
    setAccordionCollapsed: (value:boolean) => void
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitleType) {
    console.log("AccordionTitle rendering");
    return (
        <h3 onClick={()=>{props.setAccordionCollapsed(!props.collapsed)}}>{props.title}</h3>
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

