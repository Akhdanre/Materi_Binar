let userName = window.prompt("hello, whats your name ")

/*
    Deklarasikan variabel "saldo" dengan nilai awal
    (misalnya, 0) di dalam file tersebut.
*/

var saldo = 0

/*
    Implementasikan fungsi "tambahSaldo()" yang
    akan menggunakan window.prompt() untuk
    meminta pengguna memasukkan jumlah saldo
    yang ingin ditambahkan.
*/
function tambahSaldo() {
    let value = window.prompt("insert your saldo value to increase")
    saldo += parseInt(value)
}

/*
    Implementasikan fungsi "kurangiSaldo()" yang
    akan menggunakan window.prompt() untuk
    meminta pengguna memasukkan jumlah saldo
    yang ingin dikurangi.
*/
function kurangiSaldo() {
    let value = window.prompt("insert your saldo value to decrease")
    saldo -= parseInt(value)
}

function showMessage(username, category, saldo){
    alert(` balance done`)
}

if (userName != "" && userName != null) {
    while (true) {
        let option = window.prompt(`${userName} you have Rp.${saldo} balance on your wallet \nchoose your option 
        \ntype 1 if you want to increase saldo \ntype 2 if your want to decrease`)

        switch (parseInt(option)) {
            case 1:
                tambahSaldo()
                break
            case 2:
                kurangiSaldo()
                break
            default:
                alert("option not found")
        }

        let isContinue = window.prompt(`${userName} you have Rp.${saldo} balance on your wallet 
        \n want to continue \n type y to continue \n type n to stop`)

        if (isContinue == "y") {
            continue
        } else {
            alert(`thank you ${userName}, your account will reset`)
            break
        }
    }
} else {
    alert("you dont register yet")
}






