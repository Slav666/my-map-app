import React, { useState } from "react";
import ReactMapGl from "react-map-gl";

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 51.246452,
    longitude: 22.568445,
    width: "100vw",
    height: "100vh",
    zoom: 10,
  });
  console.log(viewport);
  return (
    <div>
      <ReactMapGl
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      ></ReactMapGl>
    </div>
  );
}
