import { useEffect, useState } from "react";
import ReactMapGL, {Marker} from 'react-map-gl';
import {RiUserLocationFill} from 'react-icons/ri';

const API_KEY = "pk.eyJ1IjoibWFubm51dXV1IiwiYSI6ImNseXlubGhnajFpbWoya3NseXdheW0zOWYifQ.hMT-zDF8quOCMWkpaxxRCQ";
const Map = ({lat, lon}) => {
    //setting up the initial viewport of the map
    const [viewport, setViewport] = useState({
        latitude: lat,
        longitude: lon,
        zoom : 14,
        bearing: 0,
        pitch: 0,
        width: '100%',
        height: '100%',
    });

    //viewport re -renders whenever latitude
    //and longitude changes
    useEffect(() => {
        const a = {...viewport };
        a.latitude = lat;
        a.longitude = lon;
        setViewport(a);
    },[lat,lon]);

    return ( 
        <div className="map"> 
            <ReactMapGL 
                mapboxApiAccessToken={API_KEY} 
                {...viewport} 
                mapboxAccessToken={"pk.eyJ1IjoibWFubm51dXV1IiwiYSI6ImNseXlubGhnajFpbWoya3NseXdheW0zOWYifQ.hMT-zDF8quOCMWkpaxxRCQ"}
                onViewportChange={(viewport) => setViewport(viewport)} 
                mapStyle="mapbox://styles/mapbox/streets-v11"> 
                <Marker latitude={lat} longitude={lon}> 
                    <div className="mark"> 
                        <RiUserLocationFill size="25px" color="blue" /> 
                    </div> 
                </Marker> 
            </ReactMapGL> 
        </div> 
    ); 
}

export default Map;
