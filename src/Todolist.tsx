import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import { Tasks } from './Tasks';

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    todoListID: string
    title: string
    tasks: Array<TaskType>
    removeTask: (todoListID: string, taskId: string) => void
    changeFilter: (todoListID: string, value: FilterValuesType) => void
    addTask: (todoListID: string, title: string) => void
    changeTaskStatus: (todoListID: string, taskId: string, isDone: boolean) => void
    filter: FilterValuesType
    removeTodoList: (todoListID: string) => void
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

    const addTask = () => {
        if (title.trim() !== "") {
            props.addTask(props.todoListID, title.trim());
            setTitle("");
        } else {
            setError("Title is required");
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            addTask();
        }
    }

    const onAllClickHandler = () => props.changeFilter(props.todoListID, "all");
    const onActiveClickHandler = () => props.changeFilter(props.todoListID,"active");
    const onCompletedClickHandler = () => props.changeFilter(props.todoListID, "completed");
const onClickHandlerRemoveTodoList = () => props.removeTodoList(props.todoListID);
    let tasksForTodolist = props.tasks;

    if (props.filter === "active") {
        tasksForTodolist = props.tasks.filter(t => t.isDone === false);
    }
    if (props.filter === "completed") {
        tasksForTodolist = props.tasks.filter(t => t.isDone === true);
    }
    return <div>
        <h3>{props.title}</h3>
        <button onClick={onClickHandlerRemoveTodoList}>XXX</button>
        <div>
            <input value={title}
                   onChange={onChangeHandler}
                   onKeyPress={onKeyPressHandler}
                   className={error ? "error" : ""}
            />
            <button onClick={addTask}>+</button>
            {error && <div className="error-message">{error}</div>}
        </div>

        <ul>
            {
                tasksForTodolist.map(t => {
                    return (
                    <Tasks
                        tasks={t}
                        removeTask={props.removeTask}
                        todoListID={props.todoListID}
                        changeTaskStatus={props.changeTaskStatus}
                    />
                    // const onClickHandler = () => props.removeTask(props.todoListID, t.id)
                    // const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                    //     props.changeTaskStatus(props.todoListID, t.id, e.currentTarget.checked);
                    // }

                    // return <li key={t.id} className={t.isDone ? "is-done" : ""}>
                    //     <input type="checkbox"
                    //            onChange={onChangeHandler}
                    //            checked={t.isDone}/>
                    //     <span>{t.title}</span>
                    //     <button onClick={onClickHandler}>x</button>
                    // </li>
                    )
                })
            }
        </ul>
        <div>
            <button className={props.filter === 'all' ? "active-filter" : ""}
                    onClick={onAllClickHandler}>All</button>
            <button className={props.filter === 'active' ? "active-filter" : ""}
                onClick={onActiveClickHandler}>Active</button>
            <button className={props.filter === 'completed' ? "active-filter" : ""}
                onClick={onCompletedClickHandler}>Completed</button>
        </div>
    </div>
}
