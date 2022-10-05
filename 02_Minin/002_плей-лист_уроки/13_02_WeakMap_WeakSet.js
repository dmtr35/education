//с помощью weakmap можем изберать утечек данных в javaScript  
//

let obj = {name: 'weakmap'}

// const arr = [obj]

// obj = null

// console.log(arr);
// console.log(arr[0]);
// console.log(obj);


const map = new WeakMap([            // в WeakMap ключами могут быть только обьекты
    [obj, 'obj data']
])

// get set delete has  только такие методы есть

obj = null

console.log(map.has(obj));             // есть ли такой обьект
console.log(map.get(obj));             // посмотреть обьект

//=============================================

const cache = new WeakMap()

function cacheUser(user) {          // если в кеше есть пользователь то возвращаем его значение, если нету то добавляем в кеш пользователя, добавляем ему значение и потом возвращать
    if (!cache.has(user)) {              // если нет user в cache...
        cache.set(user, Date.now())      //...то создаем...
    }
    return cache.get(user)               //... и возвращаем уже созданого user
}

let lena = {name: 'Elena'}
let alex = {name: 'Alex'}

cacheUser(lena)
cacheUser(alex)

lena = null

console.log(cache.has(lena));                 // false
console.log(cache.has(alex));                  // true


//===================================================================
// weakSet
// значениями могут являться только обьект
// если обьект удаляется сборщиком мусора, он так же удаляется из weakSet


const users = [
    {name: 'Anton'},
    {name: 'Marina'},
    {name: 'Igor'},
]


const visits = new WeakSet()

visits.add(users[0].add(users[1]))

users.splice(1, 1)


console.log(visits.has(users[0]));
console.log(visits.has(users[1]));


































