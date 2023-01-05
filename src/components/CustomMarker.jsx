import { Popup, Marker } from 'react-leaflet'
 
const CustomMarker = (props) => {
    const location = props.location.trim()
    const splits = location.split(',');
    let lat = 0.00
    let long = 0.00
    if(splits.length >1)
    {
      lat = parseFloat(parseFloat(splits[0]).toFixed(4));
      long = parseFloat(parseFloat(splits[1]).toFixed(4));
    }
    else
    {
      lat = 40.7128
      long =  -74.0060
    }
    return(
    <Marker position={[lat, long]}>
          <Popup>
            {props.text}
          </Popup>
        </Marker>
    );
}

export default CustomMarker;