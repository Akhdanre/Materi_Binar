var nama = "Mikael"
var peran = "Penyihir"


if (nama !== "") {
    if (peran !== "") {
        if (peran === "Ksatria") {
            console.log("Selamat datang di Dunia Proxytia," + nama)
            console.log(`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu`)
        } else if (peran === "Tabib") {
            console.log("Selamat datang di Dunia Proxytia," + nama)
            console.log(`Halo Tabib ${nama}, kamu akan membantu temanmu yang terlukan`)
        } else if (peran === "Penyihir") {
            console.log("Selamat datang di Dunia Proxytia," + nama)
            console.log(`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu`)
        } else {
            console.log("kamu NPC")
        }

        //menggunakan switch case 
        // switch (peran) {
        //     case "Ksatria":
        //         console.log("Selamat datang di Dunia Proxytia," + nama)
        //         console.log(`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu`)
        //         break
        //     case "Tabib":
        //         console.log("Selamat datang di Dunia Proxytia," + nama)
        //         console.log(`Halo Tabib ${nama}, kamu akan membantu temanmu yang terlukan`)
        //         break
        //     case "Penyihir":
        //         console.log("Selamat datang di Dunia Proxytia," + nama)
        //         console.log(`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu`)
        //         break
        //     default:
        //         console.log("kamu NPC")
        //         break
        // }

    } else {
        console.log(`Hallo ${nama}, Pilih peranmu untuk memulai game`)
    }
} else {
    console.log("nama atau peran harus di isi")
}