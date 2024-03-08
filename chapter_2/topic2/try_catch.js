try {
    console.log("awal kode")
    sayHello("welcome student")
    //di dalam try setelah kode di eksekusi maka dan mengalami error maka kode selanjutnya akan tidak di eksekusi
    console.log("end of try")
} catch (error) {
    console.log(error.name)
    console.log(error.message)

}


//jika langusng dipanggil kode selanjutnya akan berhenti
// sayHello()
console.log("masih berjalan")


function terbang(ketinggian){
    if (ketinggian  > 10000) throw new Error("Ketinggian terlalu tinggi")
    return "Pesawat berada di ketinggian yang aman."
}


