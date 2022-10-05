// class


class Animal {
    static type = 'ANIMAL'              // если переменная или метод является статической, то она доступна только у класса

    constructor(options) {
        this.name = options.name
        this.age = options.age
        this.hasTail = options.hasTail
    }

    voice() {
        console.log('I am Animal!');        
    }
}

// const animal = new Animal({
//     name: 'Animal',
//     age: 5,
//     hasTail: true, 
// })


// console.log(animal);



class Cat extends Animal {               // создаем новый класс и с помощью extends указываем название родительского класса
    static type = 'CAT'

    constructor(options) {
        super(options)                      // сначала нужно вызвать родительский конструктор  
        this.color = options.color         
    }

    voice() {                             // можем переписывать родительские методы
        super.voice()                       // если нужно вызвать метод из родительского класса
        // console.log('I am cat');
        
    }
                                    // у классов есть get и set
    get ageInfo() {                 //? можем задавать условия в виде функций
        return this.age * 7
    }

    set ageInfo(newAge) {
        this.age = newAge
    }
}      

const cat = new Cat({
    name: 'Cat',
    age: 7,
    hasTail: true,
    color: 'black',
})

// console.log(cat);
// console.log(cat.name);
// console.log(cat.voice());          // можно обратится к методу в родительском классе
// console.log(Cat.type);              // обращаться к статическому методу, через большую первую букву
// console.log(cat.voice())


// console.log(cat.ageInfo);           // 49


//==============================================

class Component {
    constructor(selector) {
        this.$el = document.querySelector(selector)
    }

    hide() {
        this.$el.style.display = 'none'
    }

    show() {
        this.$el.style.display = 'block'
    }
}

class Box extends Component {
    constructor(options) {
        super(options.selector)

        this.$el.style.width = this.$el.style.height = options.size + 'px'
        this.$el.style.background = options.color        

    }
}

const box1 = new Box({
    selector: '#box1',
    size: 100,
    color: 'red',
})
const box2 = new Box({
    selector: '#box2',
    size: 120,
    color: 'blue',
})

class Circle extends Box {
    constructor(options) {
        super(options)

        this.$el.style.borderRadius = '50%'             // чтобы сделать кругом
    }
}


const c = new Circle({
    selector: '#circle',
    size: 90,
    color: 'green',
})









