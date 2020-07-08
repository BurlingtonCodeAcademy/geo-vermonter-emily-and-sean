import React from 'react'
import {Map, TileLayer, Polygon} from 'react-leaflet'
import borderData from './border.js'



class VTMap extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            
        }
    }


render() {
    let vtBorder = borderData.geometry.coordinates[0].map(coordSet => {
        return [coordSet[1], coordSet[0]]
    })

    return (

        <Map center={[44.0886, -72.7317]} zoom={8} style={{height: '600px', width: '600px'}}>
            <TileLayer 
                url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'/>

            <Polygon positions={vtBorder} />
        </Map>

    )
}

}

export default VTMap