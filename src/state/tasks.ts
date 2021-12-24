export function sum(state: number, num: number) {
    return state + num
}

export function sub(state: number, num: number) {
    return state - num
}

export function mult(state: number, num: number) {
    return state * num
}

export function div(state: number, num: number) {
    return state / num
}

// 1. Что на старте
// 2. Тип действия
// 3. Дополнительное значение

export type ActionType = {
    type: 'sum' | 'sub' | 'mult' | 'div'
    payload: number
}

export const sumAC = (payload: number) => {

    return {
        type: 'sum' as const,
        payload
    }
}

export const salaryReducer = (state: number, action: ActionType): number => {
    switch (action.type){
        case "sum":
            return state + action.payload
        case "sub":
            return state - action.payload
        case "mult":
            return state * action.payload
        case "div":
            return state / action.payload
        default:
            return state
    }
}