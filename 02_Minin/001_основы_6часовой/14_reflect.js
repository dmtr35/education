// reflect

class Student {
    constructor(name) {
        this.name = name
    }

    greet() {
        console.log(`Hi! My name is ${this.name}`);
    }
}

class ProtoStudent {
    university = 'Oxford'
}


const student = Reflect.construct(Student, ['Igor'])

console.log(student);                         // student { name: 'Igor' }


Reflect.apply(student.greet, {name: 'Tester'}, [])
console.log(Reflect.ownKeys(student))                   // какие ключи у обьектов // ['name']


Reflect.preventExtensions(student)                     // заблокировать модификацию student
console.log(Reflect.isExtensible(student))             // узнать заблокирован ли обьект  // false (заблокирован)


student.age = 25
console.log(student)                                   // Student { name: 'Igor', age: 25 }











