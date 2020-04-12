// Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.
function area(a = +prompt("Введите диапазон от"), b = +prompt("Введите диапазон до")) {
    let min = a > b ? b : a;
    let max = a < b ? b : a;
    let mem = "";
    for (let i = min; i <= max; i++) {
        if (perfectnum(i)) {
            mem += i + " ";
        }
    }
    return mem;
}
function perfectnum(a = +prompt("Введите число")) {
    let buf = 0;
    for (let i = 1; i < a; i++) {
        if (a % i == 0) {
            buf += i;
        }
    }
    return a == buf;
}

alert(area());
