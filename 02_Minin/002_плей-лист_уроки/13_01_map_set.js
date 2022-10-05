//map и set

const map = new Map(
    [ ['a', 1] ]
)

console.log(map);                            // Map(1) { 'a' => 1 }
console.log(map.get('a'));                   // 1

map.set('b', 2)                              // задаем новое значение ('b', 2) с помощью метода .set
console.log(map);                            // Map(2) { 'a' => 1, 'b' => 2 }

map.set('b', 2).set(42, 'demo')              // можем чейнить задание новых значений, set возвращает сам map
console.log(map);                            // Map(3) { 'a' => 1, 'b' => 2, undefined => undefined }

// map.clear()                               // очистить map
// console.log(map);                         // Map(0) {}

console.log(map.has(42))                     // присутствует ли тут ключ 42?  // true

console.log(map.delete('b'))                  // удалить ключ, возвращает булиан-значение  // true

console.log(map.size)                         // смотреть количество элементов внутри map

console.log(map.keys())                       // [Map Iterator] { 'a', 42 }
console.log(map.values())                     // [Map Iterator] { 1, 'demo' }
console.log(typeof map.entries())             // [Map Entries] { [ 'a', 1 ], [ 42, 'demo' ] }

// =========================================================

// set  удаляет дубликаты

const set = new Set([1, 1, 2, 3, 5, 8, 13, 13, 13, 5, 8])
console.log(set);                          // Set(6) { 1, 2, 3, 5, 8, 13 }
console.log(typeof set);                   // object
console.log(set.size);                     // размер set // 6
console.log(set.add(7));                   // добавляем // Set(7) { 1, 2, 3, 5, 8, 13, 21 }
// set.clear()                             // очищать set 
// console.log(set);                       // Set(0) {}
set.delete(1)                              // удалять элемент
console.log(set)


console.log(set.keys())                    // [Set Iterator] { 2, 3, 5, 8, 13, 7 }
console.log(set.values())                  // [Set Iterator] { 2, 3, 5, 8, 13, 7 }
console.log(set.entries())                 // SetIterator {2 => 2, 3 => 3, 5 => 5, 8 => 8, 13 => 13, …}

//----------------------------------------------------------

for (let key of set) {
    console.log(key);
    
}

//==============================================

function uniqValues(array) {
    // return Array.from(new Set(array))
    return [...new Set(array)]
}

console.log(uniqValues([1, 2, 3, 3, 3, 4, 5, 6]));














