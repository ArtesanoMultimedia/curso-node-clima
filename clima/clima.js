const axios = require('axios');

const getClima = async(lat, lng) => {

    let uri = `api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=6081256237d833e0bad0b68667a3ac49`;
    console.log(uri);
    let resp = await axios.get(uri)

    return resp.data.main.temp;
    //return resp main temp
}

module.exports = {
    getClima
}