1)
//что выведет в консоли функция call
const person = {
    name: 'Alex',
    age: 24,
    call: function () {
        console.log(`${this.name} = ${this.age}`);
    }
}
alex = 24


2)
//получите доступ к методу call и запустите его
const person = {
    name: 'Alex',
    age: 24,
    call: function () {
        console.log(`${this.name} = ${this.age}`);
    }
}
person.call()

3)
//выведите в консоли все ключи из обьекта с помощью for
const person = {
    name: 'Alex',
    age: 24,
    city: 'kiiv',
    call: function () {
        console.log(`${this.name} = ${this.age}`);
    }
}

for (let index = 0; index < array.length; index++) {
    console.log(person[index])
}
4)
//выведите в консоли все значения из обьекта с помощью for
const person = {
    name: 'Alex',
    age: 24,
    city: 'Baku',
    call: function () {
        console.log(`${this.name} = ${this.age}`);
    }
}
for (let index = 0; index < array.length; index++) {
    console.log(person[index][index])
}

5)
//преобразуйте обьект ниже в массив
const person = {
    name: 'Alex',
    age: 24,
    city: 'Baku',
    call: function () {
        console.log(`${this.name} = ${this.age}`);
    }
}
Person.entries()
6)
//преобразуйте обьект ниже в строку
const person = {
    name: 'Alex',
    age: 24,
    city: 'Baku',
    call: function () {
        console.log(`${this.name} = ${this.age}`);
    }
}
person.stringify()
7)
//преобразуйте обьект ниже в конструктор функции
let obj = {
    name: 'Alex',
    age: 24,
    isMarried: false,
    hasCar: false,
    hasJob: true,
    job: 'Programmer',
    childs: ['Hanz', 'Marry'],
    awards: {
        itMaster: 'Legend rang',
        driver: 'Fast man'
    }
}

8)
//перечисли встроенные конструкторы javascript
function class
9)
//создайте новый обьект используя конструктор ниже
function Person(name, age, job) {
    this.name = name;
    this.age = age;
    this.job = job;
}
let a = Person(Ziya, 11, programer)
