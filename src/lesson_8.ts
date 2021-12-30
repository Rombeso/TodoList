// 1. Функция sum принимает параметром целые положительные
// числа (неопределённое кол-во) и возвращает их сумму (rest).

import {log} from "util";

export function sum(...nums: Array<any>): number {
    let result = nums.reduce((sum, elem) => sum + elem, 0)
    return result
}


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника.
// Функция должна возвращать:
//  - "10", если треугольник равносторонний,
//  - "01", если треугольник равнобедренный,
//  - "11", если треугольник обычный,
//  - "00", если такого треугольника не существует.

export function getTriangleType(a: number, b: number, c: number): string {
    if (a + b > c && b + c > a && a + c > b) {
        if (a === b && a === c) {
            return '10'
        } else if (a === b || b === c || a === c) {
            return '01'
        } else {
            return '11'
        }
    } else {
        return '00'
    }
}


// 3. Функция getSum принимает параметром целое число и возвращает
// сумму цифр этого числа

export function getSum(number: number): number {
    let str = String(number)
    let arr = str.split('')
    let result = arr.reduce((sum, elem) => sum + Number(elem), 0)
    return result
}


// 4. Функция isEvenIndexSumGreater принимает  параметром массив чисел.
// Если сумма чисел с чётными ИНДЕКСАМИ!!! (0 как чётный индекс) больше
// суммы чисел с нечётными ИНДЕКСАМИ!!!, то функция возвращает true.
// В противном случае - false.

export const isEvenIndexSumGreater = (arr: Array<number>): boolean => {
    let even = 0;
    let odd = 0;
    for (let key in arr) {
        if (+key % 2 === 0) {
            even += arr[key]
        } else {
            odd += arr[key]
        }
    }
    return even > odd;
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
}

// 5. Функция getSquarePositiveIntegers принимает параметром массив чисел и возвращает новый массив. 
// Новый массив состоит из квадратов целых положительных чисел, котрые являются элементами исходгого массива.
// Исходный массив не мутирует.


export function getSquarePositiveIntegers(array: Array<number>): Array<number> {
    let newArr = [];
    let i = 0;
    for (let key in array) {
        if (array[key] % 1 === 0 && array[key] > 0) {
           newArr[i] = array[key] * array[key]
            i++
        }
    }
    return newArr
}

// 6. Функция принимает параметром целое не отрицательное число N и возвращает сумму всех чисел от 0 до N включительно
// Попробуйте реализовать функцию без использования перебирающих методов.

export function sumFirstNumbers(N: number): any {
    // let sum = 0;
    if (N === 0){
        return 0
    }
    // sum += sumFirstNumbers(N-1)
    // console.log('O> ' + sum)
    return sumFirstNumbers(N-1)+N
}


// Д.З.:
// 7. Функция-банкомат принимает параметром целое натуральное число (сумму).
// Возвращает массив с наименьшим количеством купюр, которыми можно выдать эту
// сумму. Доступны банкноты следующих номиналов:
// const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1].
// Считаем, что количество банкнот каждого номинала не ограничено


export function getBanknoteList(amountOfMoney: number): Array<number> {
    //...здесь пишем код.
    // В return стоит "заглушка", чтоб typescript не ругался
    return [1]
}