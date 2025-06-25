// obtenemos el elemento ul del DOM con el id "listaPuntos"
const ul = document.getElementById("listaPuntos")

// URL del API que devuelve la informacion de los puntos
const url = "http://localhost:3000/api/puntos"

// funcion asincrona para obtener los puntos del API y mostrarlos en el mapa
async function fetchPuntos(url) {
    // obtenemos la informacion del API con fetch
    const response = await fetch(url)
    const json = await response.json()
    const data = json.puntos

    // mostramos los puntos en la lista y agregandolas al ul
    data.forEach(punto => {

        // creamos un elemento li para cada punto y lo agregamos al ul
        const li = document.createElement("li")
        li.textContent = `${punto.lat}  ${punto.lng}`
        ul.appendChild(li)
    })

    // creamos el mapa usando Leaflet

    // el setView establece la vista inicial del mapa
    var map = L.map('map').setView([data[0].lat, data[0].lng], 8);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // forEach para mostrar mas todos los puntos que devuelve el api
    data.forEach(punto => {
        L.marker([punto.lat, punto.lng]).addTo(map)
            .bindPopup(`<b>${punto.lat}</b><br>${punto.lng}`)
    })

}

fetchPuntos(url)