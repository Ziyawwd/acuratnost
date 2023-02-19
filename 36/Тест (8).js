//1)
//создайте новый элемент и добавьте его в блок ниже с помощью append
<div id='block'></div>
let a = document.createElement('p')
let b = document.querySelector('#block').appendChild(a)
    //2)
    //создайте новый элемент и добавьте его в блок ниже с помощью insertBefore
    < div id = 'block' ></div>
        let b = document.querySelector('#block').insertBefore(a)
            //3)
            //удалите тег 'p' из скрипта ниже с помощью DOM метода
            < div id = 'block' >
                <p>Some text</p>
</div >
    b = document.querySelector('#block').remove('p')
        //4)
        //замените тег 'p' на <i>Hello World</i>
        < div id = 'block' >
            <p>Some text</p>
</div >
    adiv.replace()
5)
//выведите в консоли коллекцию всех элементов с классом .block
b = document.querySelector('.block')
console.log(b)
6)
//выведите в консоли первый элемент из ранее созданной коллекции

7)
//выведите в консоли количество элементов в ранее созданной коллекции

8)
//в чем разница между nodeList и HtmlCollection
