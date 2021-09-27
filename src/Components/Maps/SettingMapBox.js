import React, { useEffect, useState } from 'react';
import * as MdIcons from "react-icons/md";
import {  IconButton } from '@material-ui/core';
import location from '../Files/location.png'
import ReactMapGL, { Marker } from "react-map-gl";
import Model from './Model';
import { useHistory } from 'react-router';
import SettingModel from './SettingModel';

function SettingMapBox(){
    const history=useHistory();
  useEffect(() => {
    if (localStorage.getItem("jswtoken") == null) 
        history.push("/error");
  }, [])
  const [viewport, setViewport] = useState({
    latitude: 45.4211,
    longitude: -75.6903,
    width: "100vw",
    height: "90vh",
    zoom: 10
  });
  const getCoorindateButton=()=>{
    console.log(viewport.latitude);
    console.log(viewport.longitude);
    
  }
  const getLocation=()=>{
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Latitude is :", position.coords.latitude);
      console.log("Longitude is :", position.coords.longitude);
      setViewport({
        latitude: position.coords.latitude,
        longitude:position.coords.longitude,
        width: "100vw",
        height: "90vh",
        zoom: 16,
      });
  })
};
  
  return(
    <div>
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={'pk.eyJ1Ijoic2hhZG93aGFyc2hpdCIsImEiOiJja3Q4NWt3b2cweXlxMm5xbHdnZzJsbjNuIn0.0OYddzEEyimojsRAbwKAzQ'}
      mapStyle="mapbox://styles/shadowharshit/ckt7gasf03y6p18o7q3n4o3hl"
      onViewportChange={viewport => {
        setViewport(viewport);
      }}
    >
      <Marker latitude={viewport.latitude} longitude={viewport.longitude}>
        <img src={location} style={{width:'6%'}}/>
      </Marker>
      </ReactMapGL>
      
      <IconButton className="gpsButton" onClick={getLocation}>
        <MdIcons.MdGpsFixed/>
      </IconButton>
      <div className="submitButtonPosition"> <SettingModel longitude={viewport.longitude} latitude={viewport.latitude}/></div>
      
      </div>
  );
}

export default SettingMapBox;