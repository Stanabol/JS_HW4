// Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.

function num(a = +prompt("Введите первое число"), b = +prompt("Введите второе число")) {
    if (a < b) {
        return -1
    }
    else if (a > b) {
        return 1
    } else {
        return 0
    }
}

let n = num();
alert(n);