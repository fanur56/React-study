import React, {useState} from "react";

export const OnOff = () => {
    console.log("OnOff rendering")

    let [on, setOn] = useState(false)

    const OnStyle = {
        display: "inline-block",
        width: "40px",
        height: "30px",
        border: "1px solid ,black",
        backgroundColor: on ? "green" : "white",
        marginLeft: "3px",
    }

    const OffStyle = {
        display: "inline-block",
        width: "40px",
        height: "30px",
        border: "1px solid ,black",
        backgroundColor: on ? "white" : "red",
        marginLeft: "3px"
    }

    const IndicatorStyle = {
        display: "inline-block",
        width: "10px",
        height: "10px",
        borderRadius: "50%",
        border: "1px solid black",
        backgroundColor: on ? "green" : "red",
        marginLeft: "3px"
    }
    return (
        <div>
            <hr/>
            <div style={OnStyle} onClick={()=>{setOn(true)}}>On</div>
            <div style={OffStyle} onClick={()=>{setOn(false)}}>Off</div>
            <div style={IndicatorStyle}></div>
        </div>
    )
}