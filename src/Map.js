import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker, InfoWindow } from "react-google-maps"

const MapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={8}
    defaultCenter={{ lat: 41.863, lng: 1.761 }}
  >
    {props.isMarkerShown && props.locations.map(location =>
      <Marker
        key={location.name}
        position={{ lat: location.lat, lng: location.lng }}
        onClick={(event) => {
          props.onMarkerClick(location);
        }}
        animation={location.selected ? 1 : 2}
      >
        {location.selected && (
          <InfoWindow onCloseClick={props.onInfoWindowClosed}>
            <div>{location.info ? location.info : 'Getting information. Please wait.'}</div>
          </InfoWindow>
        )}
      </Marker>
    )}
  </GoogleMap>
))

export default MapComponent;
