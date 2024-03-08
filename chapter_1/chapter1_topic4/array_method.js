let students = [
    { "name": "joko", "age": 20, "city": "magelang" },
    { "name": "budi", "age": 22, "city": "jakarta" },
    { "name": "sabrina", "age": 19, "city": "tangerang" },
    { "name": "nayla", "age": 19, "city": "batam" },
    { "name": "gede", "age": 21, "city": "bali" },
]



let under20th = students.filter(function (s) {
    return s.age < 20
})

console.log(under20th)


let studentInTangerang = students.filter(function (value){
    return value.city == "tangerang"
})

console.log(studentInTangerang)