// Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.
function time(a = +prompt("Введите часы"), b = +prompt("Введите минуты"), c = +prompt("Введите секунды")) {

    if (a == 0) {
        a = "00"
    }
    if (b == 0) {
        b = "00"
    }
    if (c == 0) {
        c = "00"
    }
    return `${a}:${b}:${c}`

}
alert(time());