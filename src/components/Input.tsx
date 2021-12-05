import React, {ChangeEvent, KeyboardEvent} from "react";

type PropsType = {
    value:string
    setError:(error:string | null)=>void
    // error:string | null
    setTitle:(title:string)=>void
    addTask:() => void
}

export const Input = (props: PropsType) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.setTitle(e.currentTarget.value)
    }
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        props.setError(null);
        if (e.charCode === 13) {
            props.addTask();
        }
    }
    return (
      <input
          onKeyPress={onKeyPressHandler}
          onChange={onChangeHandler}
      />
  )
}