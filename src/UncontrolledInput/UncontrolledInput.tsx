import React, {ChangeEvent, useRef, useState} from "react";


export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState("")

    const onChange=(event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }
    return (
        <>
            <hr/>
            <input value={value}
                   onChange={onChange}/> - {value}
            <hr/>
        </>
    )
}

export const GetValueFromUncontrolledInputByButtonPress = ()=>{
    const [value, setValue] = useState("")
    const inputRef = useRef<HTMLInputElement>(null)

    const save = ()=>{
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return  (
        <>
            <input ref={inputRef} />
            <button onClick={save}> Get </button> - actual value: {value}
        </>
    )
}

