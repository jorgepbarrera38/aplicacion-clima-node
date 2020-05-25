const { getLugarLatLng } = require('./lugar/lugar')
const { getClima } = require('./clima/clima')

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv

let direccion = argv.direccion

/*
getLugarLatLng(direccion).then( response => {
    console.log(response)
})

getClima("2.570000", "-72.650002").then( response => console.log(response))
.catch(err => console.log(err.response))


*/

const getInfo = async (direccion) => {
    let lugar = await getLugarLatLng(direccion)
    console.log(lugar)
    let clima = await getClima(lugar.lat, lugar.lon)

    return `El clima de ${ lugar.direccion } es de ${ clima } grados centígrados`
}

getInfo(direccion).then(response => {
    console.log(response)
}).catch( err => {
    console.log(err)
})