var name = 'name'
var age = 18
var flag = true

function sum (num1, num2) {
    return num1 + num2
}

if (flag) {
    console.log(sum(20, 30));
}

// 导出方式1
export {
    flag, sum
}

// 导出方式2
export var num1 = 1000;
export var height = 1.88

// 导出函数/类
export function mu1 (num1, num2) {
    return num1 + num2
}

export class Person {
    run () {
        console.log('run')
    }
}

// default
// const address = 'city'
// export default address

export default function (argument) {
    console.log(argument)
}