import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./Accordion/Accordion";
import Rating, {RatingType} from "./Rating/Rating";
import {UncontrolledOnOff} from "./OnOff/UncontrolledOnOff";
import {UncontrolledAccordion} from "./UncontrolledAccordion/UncontrolledAccordion";
import UncontrolledRating from "./UncontrolledRating/UncontrolledRating";
import {OnOff} from "./OnOff/OnOff";
import {
    GetValueFromUncontrolledInputByButtonPress,
    TrackValueOfUncontrolledInput
} from "./UncontrolledInput/UncontrolledInput";

function App() {
    console.log("App rendering");
    const [ratingValue, setRatingValue] = useState<RatingType>(2)
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false)
    const [on, setOn] = useState(false)
    return (
        <div className="App">
            <PageTitle title={"This is APP"}/>
            <PageTitle title={"My friends"}/>
            <Accordion titleValue={"Menu1"}
                       collapsed={accordionCollapsed}
                       setAccordionCollapsed={setAccordionCollapsed}/>
            <UncontrolledRating/>
            <UncontrolledAccordion titleValue={"Menu1"}/>
            <UncontrolledAccordion titleValue={"Menu2"}/>
            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledOnOff/>
            <OnOff value={on} setOn={setOn}/>
            <TrackValueOfUncontrolledInput/>
            <GetValueFromUncontrolledInputByButtonPress/>
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
