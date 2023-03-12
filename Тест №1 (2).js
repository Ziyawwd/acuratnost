1)
//для чего нужен AJAX?
AJAX - мечта разработчика, потому что вы можете:

Считывать данные с веб - сервера - после загрузки страницы
Обновить веб - страницу без перезагрузки страницы
Отправка данных на веб - сервер - в фоновом режиме

2)
//для чего нужен веб API?
// для использоваия данных от туда
3)
//создайте обработчик события для кнопки ниже, которая будет перекидывать на предыдущую страницу в браузере при нажатии
<button id='back'>Open</button>
document.addEventListener('#back', back)
function back() {
    return window.back
}
4)
//создайте обработчик события для кнопки ниже, которая будет перекидывать на следующую страницу в браузере при нажатии
<button id='next'>Open</button>
document.addEventListener('#next', next)
function next() {
    return window.back
}
5)
//создайте обработчик события для кнопки ниже, которая будет перекидывать на 3 страницы вперед в браузере при нажатии
<button id='next'>Open</button>
document.addEventListener('#back', next3)
function next3(params) {
    for (let array = 3 let index = 0; index < array.length; index++) {
        return window.next
    }

}
6)
//создайте обработчик события для кнопки ниже, которая будет перекидывать на 3 страницы назад в браузере при нажатии
<button id='next'>Open</button>
document.addEventListener('#back', back3)
function back3(params) {
    for (let array = 3 let index = 0; index < array.length; index++) {
        return window.back
    }

}
7)
//выведите в консоли локальное хранилище


8)
//добавьте обьект ниже в локальное хранилище под ключем 'user'
let newUser = { name: 'Alex', age: 24 };

9)
//получите из локального хранилища ранее добавленные данные и выведите в консоли

10)
//для чего нужен localStorage?
для сохрнения данных
11)
//для чего нужен sessionStorage?
sessionStorage хранит данные для одного сеанса.
12)
//добавьте обьект ниже в sessionStorage под ключем 'user'
let newUser = { name: 'Alex', age: 24 };
sessionStorage.setItem(user, newUser)
13)
//получите из sessionStorage ранее добавленные данные и выведите в консоли
sessionStorage.getItem(user, newUser)
14)
//выведите в консоли все ключи из локального хранилища

15)
//выведите в консоли длину локального хранилища

16)
//удалите ранее добавленный ключ 'user' из локального хранилища
removeItem(user)
17)
//очистите локальное хранилище
clear(user)