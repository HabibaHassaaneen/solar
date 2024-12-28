
import React from "react";

import {
  GoogleMap,
  StreetViewPanorama,
  useJsApiLoader,
} from "@react-google-maps/api";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { interpolate } from "framer-motion";
const options = {
  mapId: "5255384500167adf",
  streetViewControl: false,
};
const containerStyle = {
  width: "100%",
  height: "70vh",
};
// lat: searchOriginLatitude,
// lng: searchOriginLongitude,
const center = {
  lat: 29.932272,
  lng: 31.4288878,
};

// const test = () => {
//   return {
//     lat: 29.932272,
//     lng: 31.4288878,
//   };
// };

 function map(
{  searchOriginLatitude,
  searchOriginLongitude,
  setsearchOriginLatitude,
  setsearchOriginLongitude}
) 
{
  // https://solar.googleapis.com/v1/dataLayers:get?location.latitude=37.2746464&location.longitude=-121.7530949&radius_meters=10&key=YOUR_API_KEY


  const test = () => {
 
    return {
      lat: searchOriginLatitude,
      lng: searchOriginLongitude,
    };
  };
  
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyCM_xalY27mmH_iHAQ97qcLOZT2qIY8eGE",
  });

  const [map, setMap] = React.useState(null);

  return isLoaded ? (
    <Card className="py-4">
      <CardBody className=" items-center overflow-visible py-2">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={test()}
          zoom={10}
          options={options}
        >
          {/* Child components, such as markers, info windows, etc. */}
          <></>
        </GoogleMap>
      </CardBody>
    </Card>
  ) : (
    <></>
  );
}

export default React.memo(map);
