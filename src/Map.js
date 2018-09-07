import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

const MapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 41.863, lng: 1.761 }}
  >
    {props.isMarkerShown && props.locations.map(location =>
      <Marker position={{ lat: location.lat, lng: location.lng }} />
    )}
  </GoogleMap>
))

export default MapComponent;
