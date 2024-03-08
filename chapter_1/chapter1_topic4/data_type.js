
/* string */

let kalimat1 = "Akhdan"
let kalimat2 = "javascript"
let kalimat3 = `${kalimat1} sedang belajar ${kalimat2}`


console.log(kalimat3)


console.log(typeof kalimat1)
console.log(typeof kalimat2)
console.log(typeof kalimat3)

/* number */
//integer
let number1 = 1000
console.log(typeof number1)

//float 
let float1 = 20.5
console.log(typeof float1)


//special nnumeric value
console.log(1/0)
console.log("kosong dua" / 2)


/* boolean */
let isFree = true
let ispay = false

console.log(typeof isFree)
console.log(typeof ispay)


let undefinedData

console.log(undefinedData)

let undefinedData2 = undefined

console.log(undefinedData2)

/* object */
let student = {
    name : "akhdan",
    age : 20,
    isMarriage : false,
    favouriteActivity : ["code", "game"]
}

console.log(typeof student)
console.log(student)
console.log(student.name)
console.log(student.favouriteActivity)

student.address = "jl xxxx, Nganjuk"

console.log(student)
console.log(student.address)


/* array */

let randoms = [
    "Akhdan",
    {
        name: "Rogbbani"
    }
]
console.log(randoms)

//menambah data di array
randoms.push("terakhir")
console.log(randoms)

randoms.unshift("pertama")
console.log(randoms)

//mengurangi data

randoms.pop()
console.log(randoms)

randoms.shift()
console.log(randoms)

//perulangan singkat
randoms.forEach(function (v, i){
    console.log(`index ${i} value : ${v}`)
})