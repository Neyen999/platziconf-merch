/* eslint-disable arrow-body-style */
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {
  return (
    // <LoadScript googleMapsApiKey="AIzaSyBDHlI_uw6UaspoCFsOD0_tEBI35S2mGXY">
    //   <GoogleMap mapContainerStyle={mapStyles} zoom={9} center={defaultCenter}>
    //     <Marker position={defaultCenter} />
    //   </GoogleMap>
    // </LoadScript>
    <MapContainer
      center={[-34.82116810687362, -58.25956387093632]}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[-34.82116810687362, -58.25956387093632]}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
