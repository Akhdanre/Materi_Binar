const { rejects } = require("assert");
const fs = require("fs");
const { clearInterval } = require("timers");


//asyncronus

// console.log("mulai eksekusi")

// fs.readFile('./naskah.txt', {
//     encoding: 'utf-8',

// },
//     (err, data) => {
//         if (err) return console.log("Error : ", err.message)

//         return console.log(data)
//     }
// )


// console.log("terakhir eksekusi")


//syncronous

// console.log("mulai eksekusi")

// const naskah = fs.readFileSync("./naskah.txt", { encoding: 'utf-8' })
// console.log(naskah)

// console.log("terahkir eksekusi")


// let count = 0
// let newInterval = setInterval(() => {
//     console.log("count : ", count)
//     if(count >= 10) clearInterval(newInterval)
//     count++
// }, 1000);



// let count = 0
// let newInterval = setInterval(() => {
//     console.log("count : ", count)
//     count++
// }, 1000);


// setTimeout(() => {
//     clearInterval(newInterval)
// }, 5000);



let yesOrNo = true

let malamMingguan = new Promise((resolve, rejects) => {
    if (yesOrNo) return resolve('yey kita ketemuan!!')
    rejects('maaf aku gak bisa!!')
})

malamMingguan
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log("error :", err)
    })