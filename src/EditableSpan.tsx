import React, {ChangeEvent, useState} from "react";

type EditableSpanPropsType = {
    title: string
    callBack: (newTitle: string)=>void
}
export const EditableSpan = (props: EditableSpanPropsType) => {
    let [editmode, setEditMode] = useState(false)
    let [title, setTitle] = useState('')
    const trueEditMode = () => {
        setEditMode(true)
        setTitle(props.title)
    }
    const falseEditMode = () => {
        setEditMode(false)
        props.callBack(title)
    }

    const onChangeCurrentValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }


    return editmode
        ? <input value={title} onChange={onChangeCurrentValueHandler} onBlur={falseEditMode} autoFocus/>
        : <span onDoubleClick={trueEditMode}>{props.title}</span>

}