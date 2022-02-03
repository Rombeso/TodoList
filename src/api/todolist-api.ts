import axios from "axios";

const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.1/',
    withCredentials: true,
    headers: {
        'API-KEY': 'd6f0e227-87d6-4128-94b7-d0624916d5da'
    }
})


export const todolistApi = {
    getTodos() {
        let promise = instance.get<TodolistApiType[]>(`todo-lists`)
        return promise
    },
    createTodo(title: string) {
        let promise = instance.post<BaseResponseType<{item: TodolistApiType}>>('todo-lists', {
            title
        })
        return promise
    },
    deleteTodo(todoListId: string) {
        let promise = instance.delete<BaseResponseType<{}>>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todoListId}`)
        return promise
    },
    updateTodo(todoListId: string, title: string) {

        let promise = instance.put<BaseResponseType<{}>>(`todo-lists/${todoListId}`, {
            title
        })
        return promise
    },
}

type TodolistApiType = {
    addedDate: string
    id: string
    order: number
    title: string
}

type BaseResponseType<T> = {
    resultCode: number
    messages: Array<string>,
    fieldsErrors: Array<string>
    data: T
}

// type CreatTodoType = {
//     resultCode: number
//     messages: Array<string>,
//     fieldsErrors: Array<string>
//     data: {
//         item: TodolistApiType
//     }
// }
//
// type DeleteAndUpdateTodoType = {
//     resultCode: number
//     messages: Array<string>,
//     fieldsErrors: Array<string>
//     data: {}
// }

