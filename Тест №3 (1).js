1)
//как называется функция 
function showMessage(параметры) {
    //код
}
function declaration
2)
//как называется функция 
let showMessage = function (параметры) {
    //код
}
function definition
3)
//как называется функция 
let showMessage = (параметры) => {
    //код
}
стрелочная
4)
//создайте функцию которая выводит в консоли текст 'Запуск' и вызовите функцию
function name(params) {
    console.log('запуск');
}
5)
//создайте функцию которая в качестве пареметров принимает 'a' и 'b' и возвращает сумму полученных параметров
function name(a, b) {
    return a + b
}
6)
//конвертируйте функцию ниже в функциональное вырожение
function sum(text = 'text', age = 24) {
    return `${text} ${age}`;
}

7)
//создайте функцию с помощбю конструктора которая в качестве параметра принимает 'a', 'b' и возвращает сумму полученных параметров 

8)
//можно ли вызвать функцию до ее обьявления?
da
9)
//создайте самовызывающуюся функцию которая выводит в консоли слово 'Запуск'
(function () {
    console.log('запуск');
}());
10)
//что такое arguments в функциях?
function sum(text, age/* eto*/) {
    console.log(arguments);
}

sum('text', 24);

11)
//выведите в консоли обьект с параметрами из функции
function sum(text, age) {
    let obj = {
        text=text
age=age
    }
}

sum('text', 24);

12)
//задайте параметру text значение 'some text' по умолчанию
function sum(text, age) {
    text = 'sometext'
}

sum('text', 24);

13)
//вызовите функцию ниже
function sum(text, age, job) {
    //код
}
sum()
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
person.call(person1)
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
person.apply(person1)
16)
//какой из методов может принять массив параметров
call()
apply()

17)
//с помощью какого метода можно вывести максимально большое число из списка
//1, 2, 3

18)
//с помощью какого метода можно вывести максимально большое число из массива
//[1, 2, 4]

19)
//с помощью какого метода можно вывести самое маленькое число из списка
//1, 2, 3

20)
//с помощью какого метода можно вывести маленькое число из массива
//[1, 2, 4]