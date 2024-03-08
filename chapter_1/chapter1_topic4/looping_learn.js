
// //for loop increment
// for (let i = 1; i <= 10; i++) {
//     console.log("iteraasi ke" + i)
// }

// //space
// console.log("\n\n")

// //for loop decrement
// for (let i = 10; i >= 1; i--) {
//     console.log("iteraasi ke" + i)
// }


// let students = [
//     {
//         name: "akhdan",
//         age: 20
//     },
//     {
//         name: "Robbani",
//         age: 20
//     },
//     {
//         name: "oukenze",
//         age: 20
//     }
// ]


// for (let i = 0; i < students.length; i++) {
//     console.log(`nama ${students[i].name} umur ${students[i].age}`)
// }



// for (let i = 1; i <= 5; i++) {
//     let stars = ""
//     for (let j = 1; j <= i; j++) {
//         stars += "*"
//     }
//     console.log(stars)
// }

// console.log("\n")

// for (let i = 5; i >= 1; i--) {
//     let stars = ""
//     for (let j = 1; j <= i; j++) {
//         stars += "*"
//     }
//     console.log(stars)
// }

// console.log("\n")

for (let i = 1; i <= 5; i++) {
    let stars = ""
    for (let j = 5; j >= 1; j--) {
        if(j <= i){
            stars += "*"
        }else{
            stars += " "
        }
    }
    console.log(stars)
}



