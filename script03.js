// Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.

function sum(a = +prompt("Введите первое число"), b = +prompt("Введите второе число"), c = +prompt("Введите третье число")) {

    return a * 100 + b * 10 + c

}

alert(sum());