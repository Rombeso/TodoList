import {
    AddTodolistActionType,
    FilterValuesType,
    RemoveTodolistActionType,
    SetTodolistsActionType
} from './todolists-reducer'
import {Dispatch} from 'redux'
import {AppRootStateType} from "../../../app/store";
import {TaskPriorities, TaskStatuses, TaskType, todolistsAPI, UpdateTaskModelType} from "../../../api/todolists-api";
import {RequestStatusType, SetAppErrorType, setAppStatusAC, SetAppStatusType} from "../../../app/app-reducer";
import {AxiosError} from "axios";
import {handleServerAppError, handleServerNetworkError} from "../../../utils/error-utils";


const initialState: TasksStateType = {}

export const tasksReducer = (state: TasksStateType = initialState, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case 'REMOVE-TASK':
            return {...state, [action.todolistId]: state[action.todolistId].filter(t => t.id !== action.taskId)}
        case 'ADD-TASK':
            return {...state, [action.task.todoListId]: [{...action.task, entityStatus: "idle"}, ...state[action.task.todoListId]]}
        case 'UPDATE-TASK':
            return {
                ...state,
                [action.todolistId]: state[action.todolistId]
                    .map(t => t.id === action.taskId ? {...t, ...action.model} : t)
            }
        case 'ADD-TODOLIST':
            return {...state, [action.todolist.id]: []}
        case 'REMOVE-TODOLIST':
            const copyState = {...state}
            delete copyState[action.id]
            return copyState
        case 'SET-TODOLISTS': {
            const copyState = {...state}
            action.todolists.forEach(tl => {
                copyState[tl.id] = []
            })
            return copyState
        }
        case 'SET-TASKS':
            return {...state, [action.todolistId]: action.tasks}
        case "CHANGE-TASK-ENTITY-STATUS":
            return {
                ...state,
                [action.todolistId]: state[action.todolistId]
                    .map(t => t.id === action.taskId ? {...t, entityStatus: action.entityStatus} : t)
            }

        default:
            return state
    }
}

// actions

enum ResponseStatusCode {
    success = 0,
    error = 1,
    captcha = 10,
}
export const removeTaskAC = (taskId: string, todolistId: string) =>
    ({type: 'REMOVE-TASK', taskId, todolistId} as const)
export const addTaskAC = (task: TaskType) =>
    ({type: 'ADD-TASK', task} as const)
export const updateTaskAC = (taskId: string, model: UpdateDomainTaskModelType, todolistId: string) =>
    ({type: 'UPDATE-TASK', model, todolistId, taskId} as const)
export const setTasksAC = (tasks: Array<TaskType>, todolistId: string) =>
    ({type: 'SET-TASKS', tasks, todolistId} as const)
export const changeTaskEntityStatusAC = (taskId: string, entityStatus: RequestStatusType, todolistId: string) => ({
    type: 'CHANGE-TASK-ENTITY-STATUS',
    taskId,
    entityStatus,
    todolistId
} as const)


// thunks
export const fetchTasksTC = (todolistId: string) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatusAC("loading"))
    todolistsAPI.getTasks(todolistId)
        .then((res) => {
            if (res.data.error === null) {
                dispatch(setAppStatusAC("succeeded"))
                const tasks = res.data.items
                // const action = setTasksAC(tasks, todolistId)
                dispatch(setTasksAC(tasks, todolistId))
            } else {
                handleServerAppError<{ item: TaskType }>(dispatch, res.request)

            }
        })
        .catch((err: AxiosError) => {
        // dispatch(setAppErrorAC(err.message))
        handleServerNetworkError(dispatch, err.message)
    })
}
export const removeTaskTC = (todolistId: string, taskId: string) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatusAC("loading"))
    dispatch(changeTaskEntityStatusAC(taskId, "loading", todolistId))
    todolistsAPI.deleteTask(todolistId, taskId)
        .then((res) => {
            if (res.data.resultCode === ResponseStatusCode.success) {
                dispatch(setAppStatusAC("succeeded"))
                dispatch(removeTaskAC(taskId, todolistId))
            } else {
                handleServerAppError<{ item: TaskType }>(dispatch, res.request)
            }
        })
        .catch((err: AxiosError) => {
            // dispatch(setAppErrorAC(err.message))
            handleServerNetworkError(dispatch, err.message)
        })
}



export const addTaskTC = (title: string, todolistId: string) => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatusAC('loading'))
    todolistsAPI.createTask(todolistId, title)
        .then(res => {
            if (res.data.resultCode === ResponseStatusCode.success) {
                dispatch(setAppStatusAC('succeeded'))
                dispatch(addTaskAC(res.data.data.item))
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
    (dispatch: Dispatch<ActionsType>, getState: () => AppRootStateType) => {
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
        dispatch(setAppStatusAC("loading"))
        dispatch(changeTaskEntityStatusAC(taskId, "loading", todolistId))
        todolistsAPI.updateTask(todolistId, taskId, apiModel)
            .then(res => {
                dispatch(changeTaskEntityStatusAC(taskId, "succeeded", todolistId))
                if (res.data.resultCode === ResponseStatusCode.success) {
                dispatch(setAppStatusAC("succeeded"))
                // const action = updateTaskAC(taskId, domainModel, todolistId)
                dispatch(updateTaskAC(taskId, domainModel, todolistId))}
                else {
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
    | SetAppErrorType
    | ReturnType<typeof changeTaskEntityStatusAC>

export type TaskDomainType = TaskType & {
    entityStatus: RequestStatusType
}
