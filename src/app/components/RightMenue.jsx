import React from 'react';
import {Button,Checkbox,Card,User,RadioGroup, Radio , CardHeader, CardBody, CardFooter, Link} from "@nextui-org/react";
import IconClose from './../icons/IconClose';
import IconCakeCandles from './../icons/IconCakeCandles';
import LocationForm from './LocationForm';
import Birthdays from './Birthdays';
import UserMediaCard from './UserMediaCard';
import UserInformation from './UserInformation';
import LeftMenue from './LeftMenue';
import Ad from './Ad';
import ProfileCard from './ProfileCard';

export default function RightMenue ({UserId,searchOriginLatitude, 
    searchOriginLongitude,
     setsearchOriginLatitude,
      setsearchOriginLongitude}){

    return(

<div className='flex  p-0 flex-col gap-8 '>
<ProfileCard/>
{UserId?<>
<UserInformation UserId/>
<UserMediaCard UserId/>

 </>:null}
{/* card1 */}

<LocationForm searchOriginLatitude={searchOriginLatitude} 
  searchOriginLongitude={searchOriginLongitude}
   setsearchOriginLatitude={setsearchOriginLatitude}
    setsearchOriginLongitude={setsearchOriginLongitude}/>
  
{/* <FrindRequest/> */}

{/* card2 */}
{/* <Birthdays/> */}

{/* card3 */}
{/* <Ad size={"md"}/> */}

</div>
    )

}