import React from "react";

export type OnOffPropsType = {
    value: boolean
    setOn: (value:boolean)=>void
}

export const OnOff = (props:OnOffPropsType) => {
    console.log("OnOff rendering")



    const OnStyle = {
        display: "inline-block",
        width: "40px",
        height: "30px",
        border: "1px solid ,black",
        backgroundColor: props.value ? "green" : "white",
        marginLeft: "3px",
    }

    const OffStyle = {
        display: "inline-block",
        width: "40px",
        height: "30px",
        border: "1px solid ,black",
        backgroundColor: props.value ? "white" : "red",
        marginLeft: "3px"
    }

    const IndicatorStyle = {
        display: "inline-block",
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        border: "1px solid black",
        backgroundColor: props.value ? "green" : "red",
        marginLeft: "3px"
    }
    return (
        <div>
            <hr/>
            <div style={OnStyle} onClick={()=>{props.setOn(true)}}>On</div>
            <div style={OffStyle} onClick={()=>{props.setOn(false)}}>Off</div>
            <div style={IndicatorStyle}></div>
        </div>
    )
}