import {ChangeEvent, useState} from "react";

export const ControlledSelect = () => {


    const [parentValue, setParentValue] = useState<string | undefined>("1")
    const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
        setParentValue(event.currentTarget.value)
    }
    return (
        <div>
            <span>ControlledSelect:  </span>
            <select value={parentValue} onChange={onChangeHandler}>
                <option>none</option>
                <option value="1">Moscow</option>
                <option value="2">Minsk</option>
                <option value="3">Kiev</option>
            </select>
            <hr/>
        </div>
    )
}