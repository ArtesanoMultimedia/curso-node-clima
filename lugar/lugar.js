const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodedUrl = encodeURI(direccion);
    let urlApi = `https://maps.googleapis.com/maps/api/geocode/json?address=${ encodedUrl }&key=AIzaSyCLIpZksIcOm6VrU8ShLWvHKOy3TDrza6k`;

    let resp = await axios.get(urlApi);

    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad ${direccion}.`);
    }

    let location = resp.data.results[0];
    let coords = location.geometry.location;

    return {
        direccion: location.formatted_address,
        lat: coords.lat,
        lng: coords.lng
    }
}

module.exports = {
    getLugarLatLng
}