import {OnOff} from "./OnOff";
import {useState} from "react";

export default {
    title: "OnOff",
    component: OnOff
}

export const OnMode = ()=> <OnOff value={true} setOn={x=>x}/>
export const OffMode = ()=> <OnOff value={false} setOn={x=>x}/>
export const ModeChanging = ()=> {
    const [value, setValue] = useState(true)
    return <OnOff value={value} setOn={setValue}/>
}




