1)
//как называется функция 
function showMessage(параметры) {
    //код
}
// обычная
2)
//как называется функция 
let showMessage = function (параметры) {
    //код
}
// конструктор
3)
//как называется функция 
let showMessage = (параметры) => {
    //код
}
// стрелочная

4)
//создайте функцию которая выводит в консоли текст 'Запуск' и вызовите функцию
function pusk(params) {
    console.log("запуск");
}
5)
//создайте функцию которая в качестве пареметров принимает 'a' и 'b' и возвращает сумму полученных параметров
function aa(a, b) {
    return a + b
}
6)
//конвертируйте функцию ниже в функциональное вырожение
function sum(text = 'text', age = 24) {
    return `${text} ${age}`;
}


10)
//что такое arguments в функциях?
function sum(/* это*/) {
    console.log(arguments);
}

sum('text', 24);

11)
//выведите в консоли обьект с параметрами из функции
function sum(text, age) {
    //код
}
let aasasas = new Object(sum.arguments)
sum('text', 24);

12)
//задайте параметру text значение 'some text' по умолчанию
function sum(text, age) {
    //код
}

sum(' some text', 24);

13)
//вызовите функцию ниже
function sum(text, age, job) {
    //код
}
sum(a, v, s)
14)
//вызовите и передайте параметры второго обьекта в функцию внутри первого обьекта с помощью call()
const person = {
    firstFunc: function () {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

const person1 = {
    firstName: 'Samuil',
    lastName: 'Farzaliyev'
}

15)
//вызовите и передайте параметры второго обьекта в функцию внутри первого обьекта с помощью apply()
const person = {
    firstFunc: function () {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

const person1 = {
    firstName: 'Samuil',
    lastName: 'Farzaliyev'
}

16)
//какой из методов может принять массив параметров
call() +
    apply()

17)
//с помощью какого метода можно вывести максимально большое число из списка
//1, 2, 3
function findMax(params) {
    let max
}
18)
//с помощью какого метода можно вывести максимально большое число из массива
//[1, 2, 4]

19)
//с помощью какого метода можно вывести самое маленькое число из списка
//1, 2, 3

20)
//с помощью какого метода можно вывести маленькое число из массива
//[1, 2, 4]
// ?
function naoborot(n) {
    return n.split('')
    return n.reverse()
    return
}