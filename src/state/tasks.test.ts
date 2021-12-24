import {ActionType, div, mult, salaryReducer, sub, sum, sumAC} from "./tasks"

test("sum", ()=>{
    // 1. Тестовые данные
    const a: number = 570
    const b: number = 330
    //2. Выполнение тестируемого кода
    const result = sum(a, b)
    //3. Проверка ожидаемого результата
    expect(result).toBe(900)
})

test("sub", ()=>{
    // 1. Тестовые данные
    const a: number = 570
    const b: number = 330
    //2. Выполнение тестируемого кода
    const result = sub(a, b)
    //3. Проверка ожидаемого результата
    expect(result).toBe(240)
})


test("mult", ()=>{
    // 1. Тестовые данные
    //2. Выполнение тестируемого кода
    //3. Проверка ожидаемого результата
    expect(mult(570, 330)).toBe(188100)
})

test("div", ()=>{
    // 1. Тестовые данные
    const a: number = 570
    const b: number = 285
    //2. Выполнение тестируемого кода
    const result = div(a, b)
    //3. Проверка ожидаемого результата
    expect(result).toBe(2)
})

test("salaryReducer", ()=>{
    const sumAction: ActionType = {type: "sum", payload: 330}
    expect(salaryReducer(570, sumAction)).toBe(900)
})

test("salaryReducer1", ()=>{
    const subAction: ActionType = {type: "sub", payload: 330}
    expect(salaryReducer(570, subAction)).toBe(240)
})

test("salaryReducer2", ()=>{
    const multAction: ActionType = {type: "mult", payload: 330}
    expect(salaryReducer(570, multAction)).toBe(188100)
})

test("salaryReducer3", ()=>{
    const divAction: ActionType = {type: "div", payload: 330}
    expect(salaryReducer(570, divAction)).toBe(900)
})

test("salaryReducer4", ()=>{
    const sumAction = sumAC(330)
    expect(salaryReducer(570, sumAction)).toBe(900)
})