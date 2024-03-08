class Person {
    static isWalking = true

    constructor(name, address) {
        this.name = name
        this.address = address
    }

    static minum() {
        return "i will drink"
    }

    introduce() {
        return "hello, my name is " + this.name
    }

}


let person = new Person("akhdan ", "nganjuk")

console.log(person.introduce())
console.log(Person.minum())