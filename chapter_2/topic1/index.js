
let r = window.prompt("masukkan jari jari lingkaran")
let phi = 3.14
let hasil
if (!isNaN(parseInt(r))){
    hasil = 2 * phi * r
    alert("Hasil keliling lingkarang dengan jari jari "+ r + " = " + hasil)
}else{
    alert("input jari jari bukan angka")
}