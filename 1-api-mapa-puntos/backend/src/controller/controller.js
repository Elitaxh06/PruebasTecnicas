

export const getPuntos = (req, res) => {
    const puntos = [
        {   "lat": 9.935, 
            "lng": -84.091 ,
            "tiempo" : new Date("6 aug 2020")
        
        },
        {   "lat": 10.015, 
            "lng": -84.105,
            "tiempo" : new Date("2 aug 2017")
        }
    ]

    try{
        res.status(200).json({
            "status" : "success",
            "puntos" : puntos,
            "message" : "Puntos obtenidos correctamente"
        })
    }catch(e) {
        res.status(500).jsson({ error: e.message })
    }

}