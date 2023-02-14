1)
//поменяйте значение border-radius в элементе с помощью метода DOM
<div id="block1"></div>
let a = document.querySelector('.block1').style.border - radius =
2)
//что делает обработчик событий?
// Вы можете добавить несколько обработчиков событий одного типа к одному элементу, то есть к двум событиям щелчка.Вы
3)
//наложите обработчик события клик на 'button' который поменяет цвет текста в теге 'p' на крассный
//<p id='txt'>Some Text</p>
//<button onclick="document.querySelector('#text')">Click</button>

4)
//как удалить обработчик событий?
// backspace
5)
//создайте обработчик события который запускает функцию showMessage при клике на элемент ниже
<div id='btn'>Block</div>
document.querySelector('#btn').addEventListener('click', 'showMessage')
function showMessage() {
    console.log('Запуск');
}

6)
//создайте 2 обработчика события которые запускают функцию showMessage и hideBlock при клике на элемент ниже
<div id='btn'>Block</div>
document.querySelector('#btn').addEventListener('click', 'showMessage')
document.querySelector('#btn').addEventListener('click', 'hideBlock`')
function showMessage() {
    console.log('Запуск');
}

function hideBlock() {
    console.log('Спрятать');
}

7)
//измените значение 'useCapture' так чтобы при нахатии на 'p' запускался сначала обработчик тега 'p' и лишь затем
обработчик его родителя
    < div id = 'block' >
        <p id='txt'></p>
</ >

    document.querySelector('#block').addEventListener('click', myFunction, useCapture);
document.querySelector('#txt').addEventListener('click', myFunction, useCapture);


8)
//измените значение 'useCapture' так чтобы при нахатии на 'p' запускался сначала обработчик тега 'div' и лишь затем
обработчик тега 'p'
    < div id = 'block' >
        <p id='txt'></p>
</ >

    document.querySelector('#block').addEventListener('click', myFunction, useCapture);
document.querySelector('#txt').addEventListener('click', myFunction, useCapture);


9)
//получите родителя элемента с идентификатором 'block' с помощью нодов и выведите в консоли
<ul>
    <li id='block'></li>
</ul>

console.log();

10)
//получите первый дочерний элемент с классом 'block' с помощью нодов и выведите в консоли
<ul>
    <li class='block'></li>
    <li class='block'></li>
    <li class='block'></li>
    <li class='block'></li>
    <li class='block'></li>
</ul>

console.log(/*твой код*/);

11)
//получите последний дочерний элемент с классом 'block' с помощью нодов и выведите в консоли
<ul>
    <li class='block'></li>
    <li class='block'></li>
    <li class='block'></li>
    <li class='block'></li>
    <li class='block'></li>
</ul>

console.log(/*твой код*/);

12)
//получите следующий дочерний элемент после класса 'block1' с помощью нодов и выведите в консоли
<ul>
    <li class='block1'></li>
    <li class='block2'></li>
    <li class='block3'></li>
    <li class='block4'></li>
    <li class='block5'></li>
</ul>

console.log(/*твой код*/);

13)
//получите предыдущий дочерний элемент до класса 'block3' с помощью нодов и выведите в консоли
<ul>
    <li class='block1'></li>
    <li class='block2'></li>
    <li class='block3'></li>
    <li class='block4'></li>
    <li class='block5'></li>
</ul>

console.log(/*твой код*/);

14)
//получите определенный дочерний элемент с помощью нода childNode[index] и выведите в консоли
<ul>
    <li class='block1'></li>
    <li class='block2'></li>
    <li class='block3'></li>
    <li class='block4'></li>
    <li class='block5'></li>
</ul>

console.log(/*твой код*/);