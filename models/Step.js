class Step {
    constructor(sourceStation, destStation, price, dist, type, name = "") {
        this.from = {
            name = sourceStation.name,
            coords: {
                lat: sourceStation.coords[0],
                lon: sourceStation.coords[1]
            }
        }

        this.to = {
            name = destStation.name,
            coords: {
                lat: destStation.coords[0],
                lon: destStation.coords[1]
            }
        }

        this.price = price
        this.dist = dist
        this.type = type
        this.name = name
    }
   
}