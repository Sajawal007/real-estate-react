import { MapContainer, TileLayer, useMap, Popup, Marker } from 'react-leaflet'
import { Users, Properties } from '../Data/Data';
import CustomMarker from './CustomMarker'
import { useState } from 'react';





const Map = (props) => {
  let [properties,setProperty] = useState(props.properties)
    
    return(<><MapContainer center={[40.7128, -74.0060]} zoom={100} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {properties.map((property,ind)=>{
          return <CustomMarker key={ind} location={property.coordinates} text={property.listingAddress}/>
        })
        } 
        </MapContainer>
    </>);
}
export default Map;