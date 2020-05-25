const axios = require('axios')

const getLugarLatLng = async (direccion) => {
    
    const encodedURL = encodeURI(direccion)

    const response = await axios.get(`https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ encodedURL }`,
        { headers: { 'x-rapidapi-key': '354ea9b5d9mshd39a8720e36152ap161a6cjsn83a95abd3a00' } }
    )

    if (response.data.Results == 0) {
        throw new Error(`No hay resultados para ${ direccion }`)
    }

    const data = response.data.Results[0]

    return {
        direccion: data.name,
        lat: data.lat,
        lon: data.lon,

    }    
}

module.exports = {
    getLugarLatLng
}


 