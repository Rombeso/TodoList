import React, {ChangeEvent, useState} from 'react';

type EditableSpanPropsType = {
    title: string
    addEtidableSpanTitle: (newTitle: string)=>void
}


const EditableSpan = (props: EditableSpanPropsType) => {
    let [edit, setEdit] = useState(false)
let [localTitle, setLocalTitle] = useState(props.title)

    const editSpanHandler = () => {
        setEdit(true)
        setLocalTitle(props.title)
    }

    const onBlurHandlerFalse = () => {
        setEdit(false)
        props.addEtidableSpanTitle(localTitle)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setLocalTitle(e.currentTarget.value)
    }

    return (
        edit
        ? <input value={localTitle} onChange={onChangeHandler} onBlur={onBlurHandlerFalse} autoFocus/>
        : <span onDoubleClick={editSpanHandler}>{props.title}</span>
    );
};

export default EditableSpan;