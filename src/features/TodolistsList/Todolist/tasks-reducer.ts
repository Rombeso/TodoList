import {
    addTodolistAC,
    AddTodolistActionType, ClearTodosDataActionType,
    FilterValuesType, removeTodolistAC,
    RemoveTodolistActionType, setTodolistsAC,
    SetTodolistsActionType
} from './todolists-reducer'
import {Dispatch} from 'redux'
import {AppRootStateType} from "../../../app/store";
import {TaskPriorities, TaskStatuses, TaskType, todolistsAPI, UpdateTaskModelType} from "../../../api/todolists-api";
import {RequestStatusType, setAppStatusAC, SetAppStatusType} from "../../../app/app-reducer";
import {AxiosError} from "axios";
import {handleServerAppError, handleServerNetworkError} from "../../../utils/error-utils";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState: TasksStateType = {}

const slice = createSlice({
    name: 'tasks',
    initialState,
    reducers: {
        removeTaskAC(state, action: PayloadAction<{ taskId: string, todolistId: string }>) {
            const task = state[action.payload.todolistId]
            const index = task.findIndex(t => t.id === action.payload.taskId)
            if (index > -1) {
                task.splice(index, 1)
            }
        },
        addTaskAC(state, action: PayloadAction<{ task: TaskType }>) {
            state[action.payload.task.todoListId].unshift(action.payload.task)
        },
        updateTaskAC(state, action: PayloadAction<{ taskId: string, model: UpdateDomainTaskModelType, todolistId: string }>) {
            const task = state[action.payload.todolistId]
            const index = task.findIndex(t => t.id === action.payload.taskId)
            if (index > -1) {
                task[index] = {...task[index], ...action.payload.model}
            }
        },
        setTasksAC(state, action: PayloadAction<{ tasks: Array<TaskType>, todolistId: string }>) {
            state[action.payload.todolistId] = action.payload.tasks
        },
        changeTaskEntityStatusAC(state, action: PayloadAction<{ taskId: string, entityStatus: RequestStatusType, todolistId: string }>) {
            const task = state[action.payload.todolistId]
            const index = task.findIndex(t => t.id !== action.payload.taskId)
            if (index > -1) {
                task[index].entityStatus = action.payload.entityStatus
            }
        },
    },
    extraReducers: (builder) => {
        builder.addCase(addTodolistAC, (state, action) => {
            state[action.payload.todolist.id] = []
        })
        builder.addCase(removeTodolistAC, (state, action) => {
            delete state[action.payload.id]
        })
        builder.addCase(setTodolistsAC, (state, action) => {
            action.payload.todolists.forEach((tl:any) => {
                state[tl.id] = []
            })
        })
    }
})

export const {removeTaskAC, addTaskAC, updateTaskAC, setTasksAC, changeTaskEntityStatusAC} = slice.actions

export const tasksReducer = slice.reducer


// export const tasksReducer = (state: TasksStateType = initialState, action: any): TasksStateType => {
//     switch (action.type) {
//         case 'REMOVE-TASK':
//             return {...state, [action.todolistId]: state[action.todolistId].filter(t => t.id !== action.taskId)}
//         case 'ADD-TASK':
//             return {
//                 ...state,
//                 [action.task.todoListId]: [{...action.task, entityStatus: "idle"}, ...state[action.task.todoListId]]
//             }
//         case 'UPDATE-TASK':
//             return {
//                 ...state,
//                 [action.todolistId]: state[action.todolistId]
//                     .map(t => t.id === action.taskId ? {...t, ...action.model} : t)
//             }
//         case addTodolistAC.type:
//             return {...state, [action.payload.todolist.id]: []}
//         case removeTodolistAC.type:
//             const copyState = {...state}
//             delete copyState[action.payload.id]
//             return copyState
//         case setTodolistsAC.type: {
//             const copyState = {...state}
//             action.payload.todolists.forEach((tl:any) => {
//                 copyState[tl.id] = []
//             })
//             return copyState
//         }
//         case 'SET-TASKS':
//             return {...state, [action.todolistId]: action.tasks}
//         case "CHANGE-TASK-ENTITY-STATUS":
//             return {
//                 ...state,
//                 [action.todolistId]: state[action.todolistId]
//                     .map(t => t.id === action.taskId ? {...t, entityStatus: action.entityStatus} : t)
//             }
//         case "CLEAR-DATA": {
//             return {}
//         }
//
//         default:
//             return state
//     }
// }

// actions

enum ResponseStatusCode {
    success = 0,
    error = 1,
    captcha = 10,
}

// export const removeTaskAC = (taskId: string, todolistId: string) =>
//     ({type: 'REMOVE-TASK', taskId, todolistId} as const)
// export const addTaskAC = (task: TaskType) =>
//     ({type: 'ADD-TASK', task} as const)
// export const updateTaskAC = (taskId: string, model: UpdateDomainTaskModelType, todolistId: string) =>
//     ({type: 'UPDATE-TASK', model, todolistId, taskId} as const)
// export const setTasksAC = (tasks: Array<TaskType>, todolistId: string) =>
//     ({type: 'SET-TASKS', tasks, todolistId} as const)
// export const changeTaskEntityStatusAC = (taskId: string, entityStatus: RequestStatusType, todolistId: string) => ({
//     type: 'CHANGE-TASK-ENTITY-STATUS',
//     taskId,
//     entityStatus,
//     todolistId
// } as const)

// thunks
export const fetchTasksTC = (todolistId: string) => (dispatch: Dispatch) => {
    dispatch(setAppStatusAC({status: 'loading'}))
    todolistsAPI.getTasks(todolistId)
        .then((res) => {
            if (res.data.error === null) {
                dispatch(setAppStatusAC({status: 'succeeded'}))
                const tasks = res.data.items
                // const action = setTasksAC(tasks, todolistId)
                dispatch(setTasksAC({tasks, todolistId}))
            } else {
                handleServerAppError<{ item: TaskType }>(dispatch, res.request)

            }
        })
        .catch((err: AxiosError) => {
            // dispatch(setAppErrorAC(err.message))
            handleServerNetworkError(dispatch, err.message)
        })
}
export const removeTaskTC = (todolistId: string, taskId: string) => (dispatch: Dispatch) => {
    dispatch(setAppStatusAC({status: 'loading'}))
    dispatch(changeTaskEntityStatusAC({taskId, entityStatus: "loading", todolistId}))
    todolistsAPI.deleteTask(todolistId, taskId)
        .then((res) => {
            if (res.data.resultCode === ResponseStatusCode.success) {
                dispatch(setAppStatusAC({status: 'succeeded'}))
                dispatch(removeTaskAC({taskId, todolistId}))
            } else {
                handleServerAppError<{ item: TaskType }>(dispatch, res.request)
            }
        })
        .catch((err: AxiosError) => {
            // dispatch(setAppErrorAC(err.message))
            handleServerNetworkError(dispatch, err.message)
        })
}


export const addTaskTC = (title: string, todolistId: string) => (dispatch: Dispatch) => {
    dispatch(setAppStatusAC({status: 'loading'}))
    todolistsAPI.createTask(todolistId, title)
        .then(res => {
            if (res.data.resultCode === ResponseStatusCode.success) {
                dispatch(setAppStatusAC({status: 'succeeded'}))
                dispatch(addTaskAC({task: res.data.data.item}))
            } else {
                handleServerAppError<{ item: TaskType }>(dispatch, res.data)
                // dispatch(setAppStatusAC('failed'))
                // if (res.data.messages.length) {
                //     dispatch(setAppErrorAC(res.data.messages[0]))
                // } else {
                //     dispatch(setAppErrorAC('Some error occurred'))
                // }
            }
        })
        .catch((err: AxiosError) => {
            // dispatch(setAppErrorAC(err.message))
            handleServerNetworkError(dispatch, err.message)
        })
}

export const updateTaskTC = (taskId: string, domainModel: UpdateDomainTaskModelType, todolistId: string) =>
    (dispatch: Dispatch, getState: () => AppRootStateType) => {
        const state = getState()
        const task = state.tasks[todolistId].find(t => t.id === taskId)
        if (!task) {
            //throw new Error("task not found in the state");
            console.warn('task not found in the state')
            return
        }
        const apiModel: UpdateTaskModelType = {
            deadline: task.deadline,
            description: task.description,
            priority: task.priority,
            startDate: task.startDate,
            title: task.title,
            status: task.status,
            ...domainModel
        }
        dispatch(setAppStatusAC({status: 'loading'}))
        dispatch(changeTaskEntityStatusAC({taskId,entityStatus: "loading", todolistId}))
        todolistsAPI.updateTask(todolistId, taskId, apiModel)
            .then(res => {
                dispatch(changeTaskEntityStatusAC({taskId, entityStatus:"succeeded", todolistId}))
                if (res.data.resultCode === ResponseStatusCode.success) {
                    dispatch(setAppStatusAC({status: 'succeeded'}))
                    // const action = updateTaskAC(taskId, domainModel, todolistId)
                    dispatch(updateTaskAC({taskId, model: domainModel, todolistId}))
                } else {
                    handleServerAppError<{ item: TaskType }>(dispatch, res.data)
                }
            })
            .catch((err: AxiosError) => {
                handleServerNetworkError(dispatch, err.message)
            })
    }

// types
export type UpdateDomainTaskModelType = {
    title?: string
    description?: string
    status?: TaskStatuses
    priority?: TaskPriorities
    startDate?: string
    deadline?: string
}
export type TasksStateType = {
    [key: string]: Array<TaskType>
}
type ActionsType =
    | ReturnType<typeof removeTaskAC>
    | ReturnType<typeof addTaskAC>
    | ReturnType<typeof updateTaskAC>
    | AddTodolistActionType
    | RemoveTodolistActionType
    | SetTodolistsActionType
    | ReturnType<typeof setTasksAC>
    | SetAppStatusType
    // | SetAppErrorType
    | ReturnType<typeof changeTaskEntityStatusAC>
    | ClearTodosDataActionType

export type TaskDomainType = TaskType & {
    entityStatus: RequestStatusType
}
