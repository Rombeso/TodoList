import React from "react";
import {TaskType} from "../Todolist";
import {v1} from "uuid";

export const TaskReducer = (state:Array<TaskType>, action:AllACType)=> {
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