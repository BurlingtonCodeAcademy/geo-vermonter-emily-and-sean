import React from 'react'
import {Map, TileLayer, Polygon} from 'react-leaflet'
import leafletPip from 'leaflet-pip'
import L from 'leaflet'
import borderData from './border.js'



class VTMap extends React.Component {
 

render() {
    let vtBorder = borderData.geometry.coordinates[0].map(coordSet => {
        return [coordSet[1], coordSet[0]]
    })

    return (
        
        <Map center={[this.props.currentLat, this.props.currentLng]} zoom={this.props.zoomFactor} style={{height: '600px', width: '600px'}} zoomControl={false} dragging={false} scrollWheelZoom={false}>
            <TileLayer 
                url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'/>

            <Polygon positions={vtBorder} />
        </Map>

    )
}

}

export default VTMap