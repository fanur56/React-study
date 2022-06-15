import React from 'react';
import './App.css';
import {Accordion} from "./Accordion/Accordion";
import Rating from "./Rating/Rating";
import {OnOff} from "./OnOff/OnOff";
import {UncontrolledAccordion} from "./UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./UncontrolledRating/UncontrolledRating";

function App() {
    console.log("App rendering");
    return (
        <div className="App">
            <PageTitle title = {"This is APP"}/>
            <PageTitle title = {"My friends"}/>
            <Accordion titleValue = {"Menu1"} collapsed = {true}/>
            <Accordion titleValue = {"Menu2"} collapsed = {false}/>
            <UncontrolledRating />
            <UncontrolledAccordion titleValue = {"Menu1"}/>
            <UncontrolledAccordion titleValue = {"Menu2"}/>
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
