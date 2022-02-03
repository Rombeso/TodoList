import React, {useEffect, useState} from 'react'
import axios from "axios";
import {todolistApi} from "../api/todolist-api";

export default {
    title: 'API'
}

export const GetTodolists = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistApi.getTodos().then((res) => {
            setState(res)
        })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const title = 'My toDoList 1'
        todolistApi.createTodo(title).then((res) => {
            setState(res)
        })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoListId = "376fa907-7145-408e-83ff-bce5d6ebbfc5"
        todolistApi.deleteTodo(todoListId).then((res) => {
            setState(res)
        })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        const todoListId = "376fa907-7145-408e-83ff-bce5d6ebbfc5"
        const title = 'React>>>>>>>>>>>>'
todolistApi.updateTodo(todoListId, title).then((res) => {
            setState(res)
        })
    }, [])

    return <div> {JSON.stringify(state)}</div>
}
