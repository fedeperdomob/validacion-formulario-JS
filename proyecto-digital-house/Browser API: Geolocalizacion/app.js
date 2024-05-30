
const geolocation = document.getElementById('ubicacion')

const showPosition = position => {
    geolocation.innerHTML = 'La latitud es: ' + position.coord.latitude + '<br>La longitud es: ' + position.coord.longitude;
}

const getLocation = () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
    }else{
        geolocation.innerHTML = 'La geolocalozación está apagada o no es soportada por este navegador'
    }
}