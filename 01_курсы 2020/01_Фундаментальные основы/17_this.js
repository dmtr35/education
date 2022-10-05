// this




function getThis() {
	console.log(this)
}
// ?getThis()                         // this ссылается на объект window
// window.getThis()
// console.log(window.getThis())

function getPrice(currency = '$') {
	console.log(currency + this.price)             // вызов функции в глобальном контексте
}
function getInfo() {
	console.log(this.information)
}
function getName() {
	console.log(this.name);
	return this	
}
function age1() {
	console.log(this.age)
}

const prod1 = {
	name: 'Intel',
	price: 100,
	getPrice,
	getName,
	info: {
		information: ['2.3ghz'],
		getInfo
		}
}
// prod1.getPrice()
// prod1.info.getInfo()
// prod1.getName()

const prod2 = {
	name: 'AMD',
	price: 50,
	getPrice,
	info: {
		information: ['3.2ghz'],
		getInfo
	}
}
// prod2.getPrice()
// prod2.info.getInfo()
// prod2.getName = prod1.getName
// prod2.getName()



const prod3 = {
	name: 'ARM',
	price: 200,
	getPrice,
	getName,
}

prod3
	.getName()
	.getPrice()              // цепочка вызовов сработает только если у функции getName указан return this


	const prod4 = {
		name: 'iphone',
		price: 800,
		// getPrice,
	    // getName
}

// getPrice.call(prod4, '*')          // метод call принимает первым аргументом this в контексте которого должна быть вызвана эта функция
// getPrice.apply(prod4, ['*'])          // метод apply сработает также, второй аргумент передаем в массиве

const prod5 = {
	name: 'rayzer',
	price: 1100,
	getPrice,
	// getName
}

const getPriceBind = prod5.getPrice.bind(prod5, '*')   // контекст нельзя изменить, если привязали с помощью .bind
console.log(getPriceBind)
setTimeout(getPriceBind, 1000)                         // задержка появления на 1сек(не работает без .bind()(строка выше))





	const user1 = {
	_id: "hdfhdfj2478dcjhbcjfvjh7837",
	index: 0,
	isActive: false,
	balance: 2397.64,
	age: 39,
	age1,
	name: "Lucile",
	name1() {
		console.log(this.name);
	},
	gender: "female",
	company: "ZQXY",
	email: "Lucile@zoxy.com",
	phone: "+1 (842) 566-3328",
	registered: "2015-07-12T09:39:03 -53:00"
	}
	const user2 = {
	_id: "dfvfdbgdhgfhbgnhdhgbfgfgft45t45",
	index: 1,
	isActive: true,
	balance: 965.32,
	age: 14,
	age1,
	name: "Den",
	gender: "male",
	company: "ddx",
	email: "Den@ddx.com",
	phone: "+3 (842) 333-4545",
	registered: "2020-07-12T09:39:03 -65:00"
	}
	const user3 = {
	_id: "fgbgbfgbtjrrdr4tgbffbgbg hnhn",
	index: 2,
	isActive: false,
	balance: 4428.26,
	age: 25,
	age1,
	name: "Vasya",
	gender: "male",
	company: "sony",
	email: "Vasya@sony.com",
	phone: "+5 (842) 566-1111",
	registered: "2009-07-12T09:39:03 -06:00"
	}
	const user4 = {
	_id: "54455545gfbgf45gttb454grg",
	index: 3,
	isActive: true,
	balance: 886.36,
	age: 36,
	age1,
	name: "Ira",
	gender: "female",
	company: "loll",
	email: "Ira@loll.com",
	phone: "+8 (842) 566-5888",
	registered: "2011-07-12T09:39:03 -11:00"
	}
	const user5 = {
	_id: "fgbb3455343454556644gfd",
	index: 4,
	isActive: false,
	balance: 1020.88,
	age: 18,
	age1,
	name: "Kik",
	gender: "male",
	company: "samsung",
	email: "Kik@samsung.com",
	phone: "+0 (842) 685-8899",
	registered: "2005-07-12T09:39:03 -08:00"
	}
	const user6 = {
	_id: "dgbfgb23434344tfr45f4545gfrfrg",
	index: 5,
	isActive: false,
	balance: 2658.32,
	age: 56,
	age1,
	name: "Fox",
	gender: "male",
	company: "lg",
	email: "Fox@lg.com",
	phone: "+9 (842) 555-8696",
	registered: "2018-07-12T09:39:03 -05:00"
	}

// user1.age1()
// user1.name1()
// user2.age1()
// user3.age1()
// user4.age1()
// user5.age1()
// user6.age1()

// user2.name1 = user1.name1            //  передаем функцию другому обьекту
// user2.name1()
// user6.name1 = user2.name1
// user6.name1()
// user5.name1 = user6.name1
// user5.name1()

























