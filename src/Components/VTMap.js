import React from 'react'
import {Map, TileLayer, Polygon, Polyline} from 'react-leaflet'
import borderData from './border.js'



function VTMap(props) {
 

    let vtBorder = borderData.geometry.coordinates[0].map(coordSet => {
        return [coordSet[1], coordSet[0]]
    })

    return (
        
        <Map center={[props.currentLat, props.currentLng]} zoom={props.zoomFactor} style={{height: '600px', width: '600px'}} zoomControl={false} dragging={false} scrollWheelZoom={false} doubleClickZoom={false} keyboard={false} boxZoom={false}>
            <TileLayer 
                url='https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'/>

            <Polygon positions={vtBorder} />
            <Polyline color="red" positions={props.moveArr} />
        </Map>

    )
}



export default VTMap