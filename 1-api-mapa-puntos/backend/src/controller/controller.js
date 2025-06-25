

export const getPuntos = (req, res) => {
    const puntos = [
        {   "lat": 10.935, 
            "lng": -85.091 ,
            "tiempo" : new Date("6 aug 2020")
        
        },
        {   "lat": 10.015, 
            "lng": -83.105,
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