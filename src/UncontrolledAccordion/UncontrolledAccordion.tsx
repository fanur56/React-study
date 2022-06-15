import React, {useState} from "react";

type AccordionType = {
    titleValue: string

}

export const UncontrolledAccordion = (props: AccordionType) => {
    let [collapsed, setCollapsed] = useState(false)
    return (
        <div>
            <AccordionTitle title={props.titleValue}/>
            <button onClick={() => {setCollapsed(!collapsed)
            }}>TOGGLE</button>
            {collapsed && <AccordionBody/>}
        </div>
    );
}

type AccordionTitleType = {
    title: string
}

function AccordionTitle(props: AccordionTitleType) {

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

