import React from "react";

type AccordionType = {
    titleValue: string
    collapsed: boolean
    setAccordionCollapsed: (value: boolean) => void
    items: string[]
}

export function Accordion(props: AccordionType) {
    return (
        <div>
            <AccordionTitle
                title={props.titleValue}
                setAccordionCollapsed={props.setAccordionCollapsed}
                collapsed={props.collapsed}/>
            {!props.collapsed && <AccordionBody items={props.items}/>}
        </div>
    );
}

type AccordionTitleType = {
    title: string
    setAccordionCollapsed: (value: boolean) => void
    collapsed: boolean
}

function AccordionTitle(props: AccordionTitleType) {
    console.log("AccordionTitle rendering");
    return (
        <h3 onClick={() => {
            props.setAccordionCollapsed(!props.collapsed)
        }}>{props.title}</h3>
    );
}

type AccordionBodyPropsType = {
    items: string[]
}

function AccordionBody(props: AccordionBodyPropsType) {
    return (
        <ul>
            {
                props.items.map((i, index) => <li key={index}>{i}</li>)
            }
        </ul>
    );
}

