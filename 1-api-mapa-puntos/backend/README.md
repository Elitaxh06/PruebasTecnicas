# Prueba Técnica 1 – API y Mapa Interactivo Full Stack

## Descripción del problema

En este proyecto debes crear dos partes que trabajen juntas:

1. **Backend:** Crear una **API REST** usando **Node.js** y **Express** que devuelva un listado de puntos geográficos en formato JSON.  
   Cada punto debe tener estas propiedades:  
   - `lat`: número decimal con la latitud.  
   - `lng`: número decimal con la longitud.  
   - `tiempo`: fecha asociada al punto (puede ser un string o formato ISO).  

   El endpoint de la API debe ser algo así como:  
   GET http://localhost:3000/api/puntos


2. **Frontend:** Crear una aplicación simple con **HTML**, **CSS** y **JavaScript Vanilla** que:  
- Consuma la API que creaste usando `fetch()`.  
- Muestre en pantalla una lista con los puntos recibidos.  
- Muestre un mapa interactivo usando **Leaflet.js**.  
- Marque en el mapa cada punto recibido desde la API con un marcador.  
- Al hacer clic en cada marcador, mostrar información relevante del punto (latitud y longitud, por ejemplo).

---

## Formato esperado de la respuesta JSON de la API

La API debe devolver un array con objetos así:

```js
  [
    {
      lat: 10.84,
      lng: -24.23,
      tiempo: new Date("6 aug 2020")
    },
    // otros puntos...
  ]
```

Opcionalmente, pero recomendado, la API puede devolver un objeto con un status, un mensaje y el array dentro de una propiedad puntos, por ejemplo:
```js
{
  "status": "success",
  "puntos": [
    {
      "lat": 9.935,
      "lng": -84.091,
      "tiempo": "2020-08-06T06:00:00.000Z"
    }
  ],
  "message": "Puntos obtenidos correctamente"
}
```
## Cómo ejecutar el proyecto

### Ejecutar el backend:

Asegúrate de tener instalado Node.js.

Instala las dependencias con:

```bash
npm install express cors dotenv
```

Ejecuta el servidor con:
```bash
npm start
``` 

Verifica que la API esté funcionando visitando:

http://localhost:3000/api/puntos

## Tecnologías usadas

- **Backend:** Node.js, Express  
- **Frontend:** HTML5, CSS3, JavaScript Vanilla  
- **Mapa interactivo:** Leaflet.js (CDN)