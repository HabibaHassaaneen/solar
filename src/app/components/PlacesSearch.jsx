'use client'
import {Card,CardBody, Input} from "@nextui-org/react";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
  } from "use-places-autocomplete";
  import useOnclickOutside from "react-cool-onclickoutside";
import {useState} from "react";
  export default function PlacesSearch({searchOriginLatitude, 
    searchOriginLongitude,
     setsearchOriginLatitude,
      setsearchOriginLongitude}) {



    const {
      ready,
      value,
      suggestions: { status, data },
      setValue,
      clearSuggestions,
    } = usePlacesAutocomplete({
     
      requestOptions: {

      },
      debounce: 300,
    });
    const ref = useOnclickOutside(() => {
      // When the user clicks outside of the component, we can dismiss
      // the searched suggestions by calling this method
      clearSuggestions();
    });
  
    const handleInput = (e) => {
      // Update the keyword of the input element
      setValue(e.target.value);
    };
  
    const handleSelect =
      ({ description }) =>
      () => {
        // When the user selects a place, we can replace the keyword without request data from API
        // by setting the second parameter to "false"
        setValue(description, false);
        clearSuggestions();
  
        // Get latitude and longitude via utility functions
        getGeocode({ address: description }).then((results) => {
          const { lat, lng } = getLatLng(results[0]);
          console.log("📍 Coordinates: ", { lat, lng });
          setsearchOriginLatitude(lat);
          setsearchOriginLongitude(lng);
        });
      };
  
    const renderSuggestions = () =>
      data.map((suggestion) => {
        const {
          place_id,
          structured_formatting: { main_text, secondary_text },
        } = suggestion;
  
        return (
            
          <li className="cursor-pointer py-2  hover:text-green-400" key={place_id} onClick={handleSelect(suggestion)}>
            <strong>{main_text}</strong> <small>{secondary_text}</small>
          </li>
         
        );
      });
  
    return (
      <div ref={ref}>
        {/* <input
          value={value}
          onChange={handleInput}
          disabled={!ready}
          placeholder="Where are you going?"
        /> */}
                 <Input

value={value}
onChange={handleInput}
disabled={!ready}
placeholder="Where are you going?"
>

</Input>
        {/* We can use the "status" to decide whether we should display the dropdown or not */}
        {status === "OK" && <Card> <CardBody className="text-sm font-normal"><ul>{renderSuggestions()}</ul></CardBody></Card>}
      </div>
    );
  };

