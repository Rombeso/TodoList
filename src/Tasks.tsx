import React, {ChangeEvent} from "react";
import {TaskType} from "./Todolist";

type propsType = {
  tasks: TaskType
  removeTask: (todoListID: string, taskId: string) => void
  todoListID: string
  changeTaskStatus: (todoListID: string, taskId: string, isDone: boolean) => void
}


export const Tasks = (props: propsType) => {


  const onClickHandler = () => props.removeTask(props.todoListID, props.tasks.id)
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    props.changeTaskStatus(props.todoListID, props.tasks.id, e.currentTarget.checked);
  }

  return (
      <li key={props.tasks.id} className={props.tasks.isDone ? "is-done" : ""}>
    <input type="checkbox"
           onChange={onChangeHandler}
           checked={props.tasks.isDone}/>
    <span>{props.tasks.title}</span>
    <button onClick={onClickHandler}>x</button>
  </li>
  )
}