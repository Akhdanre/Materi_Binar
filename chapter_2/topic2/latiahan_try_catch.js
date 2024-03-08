function takeOff(altitude) {
    if (altitude > 10000) throw new Error("Ketinggian terlalu tinggi")

    if (altitude < 0) throw new Error("Ketinggian tidak valid")

    return "Pesawat lepas landas menuju ketinggian " + altitude + " meter"
}

function flightSimulation(altitude) {
    try {
        console.log(takeOff(altitude))
    } catch (err) {
        console.log("Error Name :", err.name)
        console.log("Error Message : ", err.message)
        console.log("\n")
    }
}



flightSimulation(12000)
flightSimulation(-500)
flightSimulation(8000)
