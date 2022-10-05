class SimpleMembership {
    constructor(name) {
        this.name = name
        this.cont = 50
    }
}

class StandartMembership {
    constructor(name) {
        this.name = name
        this.cont = 150
    }
}

class PremiumMembership {
    constructor(name) {
        this.name = name
        this.cont = 500
    }
}
// мы можем создать класс который будет обьединять все эти классы, так как у них отличается только cost

class MemberFactory {
    static list = {                          // переменная list, это будет обьект где будут хранится ссылки на все обьекты выше
        simple: SimpleMembership,
        standart: StandartMembership,
        premium: PremiumMembership
    }

    create(name, type = 'simple') {
        const Membership = MemberFactory.list[type] || MemberFactory.list.simple  // если type ненашолся, то по умолчанию SimpleMembership
        const member = new Membership(name)
        member.type = type                                                        // расширили функционал обьекта member
        member.define = function() {
            console.log(`${this.name} (${this.type}): ${this.cont}`);
            
        }
        return member
    }
}

const factory = new MemberFactory()

const members = [
    factory.create('Vlad', 'simple'),
    factory.create('Elena', 'premium'),
    factory.create('Vasya', 'standard'),
    factory.create('Ivan', 'premium'),
    factory.create('Petr'),
]

members.forEach(m => {
    m.define()
})














