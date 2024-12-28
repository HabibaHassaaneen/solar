import React from 'react'
import {Input,Card,CardBody,Autocomplete,Divider,Button} from "@nextui-org/react";
import IconLocationDot from '../icons/IconLocationDot';
import PlacesSearch from './PlacesSearch';
export default function LocationForm({searchOriginLatitude, 
  searchOriginLongitude,
   setsearchOriginLatitude,
    setsearchOriginLongitude}) {
  return (
    <Card>
         <CardBody className=' className="grid grid-cols-2 gap-4'>
         <div class="col-span-2">
         <PlacesSearch searchOriginLatitude={searchOriginLatitude} 
  searchOriginLongitude={searchOriginLongitude}
   setsearchOriginLatitude={setsearchOriginLatitude}
    setsearchOriginLongitude={setsearchOriginLongitude}/>


         </div>
        
         <Divider className="col-span-2"/>
       <Input   label="Latitude:" placeholder="" value={searchOriginLatitude} />
        <Input  label="Longtude:" placeholder="" value={searchOriginLongitude} />
        <Button color="danger"  startContent={<IconLocationDot fill="#fff"/>}>
        Go To this Location
      </Button>
          </CardBody>

    </Card>

  )
}
