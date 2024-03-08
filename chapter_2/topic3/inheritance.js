class Human {
    
    constructor(name, address) {
        this.name = name
        this.address = address
    }

    introduce() {
        return "Hi, my name is " + this.name
    }

    work() {
        return "Work!"
    }
}

let person1 = new Human("Akeon", "Nganjuk")

console.log(person1.name)
console.log(person1.address)
console.log(person1.introduce())
console.log(person1.work())




class Programmer extends Human {
    constructor(name, address, programmingLanguage) {
        super(name, address)
        this._programmingLanguage = programmingLanguage
    }

    introduce(person){
        if(!person ){
            return super.introduce()
        }

        let response = super.introduce()
        return response += `\nNama kamu ${person} ya`
    }

    work(){
        return "sedang bekerja"
    }

    code() {
        return "Code some " + this._programmingLanguage[Math.floor(Math.random() * this._programmingLanguage.length)]
    }
}

let akhdan = new Programmer("akhdan", "Nganjuk", ["python", "dart", "java", "go"])
console.log(akhdan.name)
console.log(akhdan.address)
// console.log(akhdan.)
console.log(akhdan.introduce("Ouken"))
console.log(akhdan.work())
console.log(akhdan.code())