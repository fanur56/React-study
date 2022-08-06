import {OnOff} from "./OnOff";
import {useState} from "react";
import {action} from "@storybook/addon-actions";

export default {
    title: "OnOff",
    component: OnOff
}

const callback = action("on or off clicked")

export const OnMode = ()=> <OnOff value={true} setOn={callback}/>
export const OffMode = ()=> <OnOff value={false} setOn={callback}/>
export const ModeChanging = ()=> {
    const [value, setValue] = useState(true)
    return <OnOff value={value} setOn={setValue}/>
}




