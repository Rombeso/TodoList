import React from "react";
import {TaskType} from "../Todolist";
import {v1} from "uuid";

let initialState: Array<TaskType> = [
    { id: v1(), title: "HTML&CSS", isDone: true },
    { id: v1(), title: "JS", isDone: true },
    { id: v1(), title: "ReactJS", isDone: false },
    { id: v1(), title: "Rest API", isDone: false },
    { id: v1(), title: "GraphQL", isDone: false },
]
export const TaskReducer = (state=initialState, action:AllACType)=> {
    switch (action.type){
        case 'REMOVE_TASK': {
            let newState = [...state]
            return newState.filter(t => t.id != action.id);
        }
        case 'ADD_TASK': {
            let newState = [...state]
            return [{ id: v1(), title: action.payload.title, isDone: false }, ...newState]
        }
        default: return state
    }
}

type AllACType = RemoveTaskACType | addTaskACType

type RemoveTaskACType=ReturnType<typeof removeTaskAC>
export const removeTaskAC=(id: string)=> {
    return {
        type: 'REMOVE_TASK',
        id: id
    } as const
}

type addTaskACType=ReturnType<typeof addTaskAC>
export const addTaskAC=(title: string)=> {
    return {
        type: 'ADD_TASK',
        payload: {
           title: title
        }
    } as const
}