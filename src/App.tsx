import React from 'react';
import './App.css';
import {Accordion} from "./Accordion/Accordion";
import Rating from "./Accordion/Rating";
import {OnOff} from "./OnOff";
import {UncontrolledAccordion} from "./Accordion/UncontrolledAccordion";

function App() {
    console.log("App rendering");
    return (
        <div>
            <PageTitle title = {"This is APP"}/>
            <PageTitle title = {"My friends"}/>
            <Accordion titleValue = {"Menu1"} collapsed = {true}/>
            <Accordion titleValue = {"Menu2"} collapsed = {false}/>
            <Rating value = {0} />
            <Rating value = {1} />
            <Rating value = {2} />
            <Rating value = {3} />
            <Rating value = {4} />
            <Rating value = {5} />
            <UncontrolledAccordion titleValue = {"Menu1"}/>
            <OnOff />
            <OnOff />
            <OnOff />
            <OnOff />
        </div>
    );
}

type PageTitleType = {
    title: string
}

function PageTitle(props: PageTitleType) {
    console.log("Title rendering");
    return (
        <div>{props.title}</div>
    );
}


export default App;
