let kendaraan = []


kendaraan.push({
    "tipe": "Motor",
    "roda": 2
})
kendaraan.push({
    "tipe": "Mobil",
    "roda": 4
})
kendaraan.push({
    "tipe": "Becak",
    "roda": 3
})
kendaraan.push({
    "tipe": "Bus",
    "roda": 6
})
kendaraan.push({
    "tipe": "Bus",
    "roda": 6
})
kendaraan.push({
    "tipe": "Sepedah",
    "roda": 2
})

kendaraan.forEach(function (v) {
    console.log(`kendaraan ${v.tipe} memiliki ${v.roda} roda`)
})