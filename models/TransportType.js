class TransportType {

    constructor() {
        this.Bus =  {label: "Bus", db_label:"BusSegment"}
        this.Tramway = {label: "Tramway", db_label:"TramSegment"}
        this.Walk = {label: "Marche", db_label:"WalkSegment"}
        
        Object.freeze(this.Bus);
        Object.freeze(this.Tramway);
        Object.freeze(this.Walk);
    }
    
    getTransportType(str) {
        if(str === this.Bus.db_label)
            return this.Bus
        else if(str === this.Tramway.db_label)
            return this.Tramway
        else if(str === this.Walk.db_label)
            return this.Walk
        else 
            return null
    } 
}

module.exports = new TransportType()