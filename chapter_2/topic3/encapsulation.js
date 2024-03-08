class Account {
    #username
    #password

    #passValidation(pass, passVal) {
        return pass === passVal
    }

    register(username, password, passvalidation) {
        if (this.#passValidation(password, passvalidation)) {
            this.#username = username
            this.#password = password
            return "Registrasi berhasil"
        }
        return "Registrasi gagal"
    }
}


let user1 = new Account()
console.log(user1.register("Akhdan Robbani", "testing", "testing"))
