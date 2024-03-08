class Human {
    constructor(name, address) {
        this.name = name
        this.address = address
    }

    introduce() {
        return "Hi, my name is " + this.name
    }

    work() {
        return this.constructor.name + " is working!"
    }
}

const PubicServer = Base => class extends Base {
    save() {
        return "SFX : Thank you"
    }
}

const Military = Base => class extends Base {
    shoot() {
        return "SFX : Door"
    }
}


class Doctor extends PublicServer(Human) {
    constructor(props){

    }

    // work()
}