class Item {
    #modal
    constructor(nama) {
        this.nama = nama
    }
    setModal(modal) {
        this.#modal = modal
        this.harga = modal + (modal * 20 / 100)
    }

    #showModal() {
        return "modal item : " + this.#modal
    }

    showHargaJual() {
        return `harga jual ${this.nama} : ${this.harga}`
    }
}

let topi = new Item("topi")
topi.setModal(15000)
console.log(topi.showHargaJual())


//testing