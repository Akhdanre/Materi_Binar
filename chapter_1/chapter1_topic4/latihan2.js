// function angkaPrima(angka) {
//     let pembagi = [2, 3, 5]
//     for (let i = 0; i < pembagi.length; i++) {
//         if (angka % pembagi[i] == 0 && angka / angka == 1) {
//             return false

//         }
//     }
//     return true
// }



// console.log(angkaPrima(2))




// function cariMedian(data = []) {
//     let n = data.length
//     let x
//     if (n % 2 != 0) {
//         x = (n + 1) / 2
//         return data[x - 1]
//     }
//     return (data[n / 2] + data[n / 2 + 1]) / 2

// }


// console.log(cariMedian([7, 7, 8, 8]))




function ubahHurufKata(kata) {
    const huruf = 'abcdefghijklmnopqrstuvwxyz'
    let arrKata = kata.toCharArray()
    let kataBaru = ''
    for (i = 0; i < arrKata.length; i++) {
        huruf.every((v, i) => {
            if (v == arrKata[i]) {
                kataBaru += huruf[i + 1]
                return false
            }
        })
    }
}