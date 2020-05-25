

const axios = require('axios')

const getClima =  async(lat, lon) => {
    let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d7b977b949a94680e5c6e5b6f6f1c7d2`) 
       return response.data.main.temp
}

module.exports = {
    getClima
}