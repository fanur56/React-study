import {ChangeEvent, useState} from "react";

export const ControlledCheckBox = () => {

    const [parentValue, setParentValue] = useState(true)
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setParentValue(event.currentTarget.checked)
    }
    return (
        <div>
            <hr/>
            <span>ControlledCheckBox:  </span>
            <input type={"checkbox"} checked={parentValue} onChange={onChangeHandler}/>
            <hr/>
        </div>
    )
}